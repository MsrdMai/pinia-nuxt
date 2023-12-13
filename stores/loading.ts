import { defineStore, acceptHMRUpdate } from 'pinia';

export const useloadingStore = defineStore('loadingStore', () => {
  const loading = false;
  const setLoading = (load?: boolean) => (loading.value = load);
  return { loading, setLoading };
});
