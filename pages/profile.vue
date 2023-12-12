<template>
  <div>
    <h1>Profile</h1>
    <button @click="signOut">Sign Out</button>

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
