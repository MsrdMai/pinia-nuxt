import { defineStore } from 'pinia';
import { User, Customer } from 'types';

export const useUserStore = defineStore('user', () => {
  const user = ref();
  const token = useCookie('MY_COOKIE', {
    maxAge: 60 * 60,
  });

  const setToken = (data?: string) => (token.value = data);
  const setUser = (data?: any) => (user.value = data);

  const signIn = async (data: any) => {
    try {
      const res = await $fetch<User>('https://dummyjson.com/auth/login', {
        method: 'POST',
        body: data,
      });

      setToken(res.token);
      await fetchCustomer();
    } catch (error) {
      setToken();
      setUser();
      console.log(error);
    }
  };

  const fetchCustomer = async () => {
    const { session, refresh, update, reset } = await useSession();
    if (token.value) {
      try {
        const res = await $fetch<Customer>('https://dummyjson.com/users/1');
        setUser(res);
        await update({ user: res });
      } catch (error) {
        setUser();
        console.log(error);
      }
    }
  };

  const logout = async () => {
    setToken();
    setUser();
    await reset();
  };

  return { user, token, logout, signIn, fetchCustomer, setToken, setUser };
});
