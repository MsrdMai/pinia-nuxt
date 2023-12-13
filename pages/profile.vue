<template>
  <div>
    <Nav />
    <h1>Profile</h1>

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
