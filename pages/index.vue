<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="signIn"
    >
      Sign In
    </button>
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
