<template>
  <div class="dashboard-view">
    <DashboardView />
    <SideSectionComp />
  </div>
</template>

<script setup lang="ts">
import SideSectionComp from "./views/SideSectionComp.vue";
import DashboardView from "./views/DashboardView.vue";
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