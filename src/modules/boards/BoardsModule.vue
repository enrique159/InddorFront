<template>
  <div class="boards-module">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Tableros', { titleTemplate: '%s | Inddor' })
</script>

<style lang="scss" scoped>
.boards-module {
  width: 100%;
  height: 100%;
}
</style>