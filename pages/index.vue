<template>
  <div>
    <h1>Welcome !</h1>
    <button @click="signIn">Sign In</button>
  </div>
</template>

<script lanf="ts" setup>
const userStore = useUserStore();

definePageMeta({
  middleware: ["already-auth"],
});

const signIn = async () => {
  await userStore.signIn({
    username: "kminchelle",
    password: "0lelplR",
  });

  await navigateTo("/profile", { replace: true });
};
</script>
