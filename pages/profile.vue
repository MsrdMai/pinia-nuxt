<template>
  <div>
    <h1>Profile</h1>
    <button
      class="bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
      @click="signOut"
    >
      Sign Out
    </button>

    <pre>{{ userStore.user }}</pre>
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
