import { storeToRefs } from 'pinia';
import { useMainStore } from '@/stores/mainStore';

export const useMain = () => {
  const mainStore = useMainStore();
  const { rememberSession } = storeToRefs(mainStore);

  const setRememberSession = (value: boolean) => {
    mainStore.setRememberSession(value);
  }

  return {
    // Properties
    rememberSession,
    // Methods
    setRememberSession
  }
}