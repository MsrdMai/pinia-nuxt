<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src="@/assets/icons/logo.svg"
          width="54"
          height="54"
          class="fill-current h-10 w-10 mr-1"
        />

        <p class="font-weight-black">Pinia And Nuxt</p>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <NuxtLink
            to="/profile"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            <p class="font-weight-bold">Profile</p></NuxtLink
          >

          <NuxtLink
            to="/doce"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            <p class="font-weight-bold">Doce</p></NuxtLink
          >

          <NuxtLink
            to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            ><p class="font-weight-bold">Home</p></NuxtLink
          >
        </div>
        <div>
          <v-btn variant="outlined" @click="signOut" color="white"> Sign out </v-btn>
        </div>
      </div>
    </nav>
  </div>
</template>
<script lanf="ts" setup>
const userStore = useUserStore();

definePageMeta({
  middleware: "auth",
});

const signOut = () => {
  userStore.logout();
  useRouter().go(0);
};
</script>

<style></style>
