<template>
  <div class="dashboard-view">
    <DashboardComp />
    <SideSectionComp />
  </div>
</template>

<script setup lang="ts">
import SideSectionComp from "./components/SideSectionComp.vue";
import DashboardComp from "./components/DashboardComp.vue";
import { useTitle } from '@vueuse/core'

useTitle('Inicio', { titleTemplate: '%s | Inddor' })
</script>

<style lang="scss" scoped>
.dashboard-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
</style>