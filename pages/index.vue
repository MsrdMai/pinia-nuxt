<template>
  <div
    className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen  overflow-hidden bg-gray-200  flex flex-col items-center justify-center"
  >
    <div className="">
      <h1 class="text-3xl font-bold underline">Welcome!</h1>
      <button
        class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bg-teal-400"
        @click="signIn"
      >
        Sign In
      </button>
    </div>
  </div>
</template>

<script lanf="ts" setup>
const useloading = useloadingStore();
const userStore = useUserStore();

definePageMeta({
  middleware: ["already-auth"],
});

const signIn = async () => {
  useloading.loading = true;
  await userStore.signIn({
    username: "kminchelle",
    password: "0lelplR",
  });

  await navigateTo("/profile", { replace: true });
  useloading.loading = false;
};
</script>
