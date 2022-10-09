import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { MainState } from '@/types/stores/MainState.type'

export const useMainStore = defineStore({
  id: 'main',
  state: (): MainState => ({
    rememberSession: useLocalStorage('rememberSession', 'false'),
  }),
  getters: {
    getRememberSession: (state) => state.rememberSession == 'true',
  },
  actions: {
    setRememberSession(value: boolean) {
      this.rememberSession = value.toString()
    }
  }
})
