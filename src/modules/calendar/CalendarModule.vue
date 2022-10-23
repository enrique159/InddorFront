<template>
  <div class="calendar-module">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Calendario', { titleTemplate: '%s | Inddor' })
</script>

<style lang="scss" scoped>
.calendar-module {
  width: 100%;
  height: 100%;
}
</style>