<template>
  <div class="calendar-view">
    <Header :breadCrumbs="breadCrumbs" title="Mi calendario" :actionButton="actionButton" />

    <CalendarComp />
  </div>
</template>

<script setup lang="ts">
import CalendarComp from '../components/CalendarComp.vue'
import Header from '@/components/Header/Header.vue'
import { CalendarPlusIcon } from 'vue-tabler-icons'
import { ref } from 'vue'


const breadCrumbs = ref([
  {
    name: 'Inicio',
    pathName: 'Dashboard',
  },
  {
    name: 'Calendario',
    pathName: null,
  },
])

const actionButton = ref({
  icon: CalendarPlusIcon,
  text: 'Crear evento',
  color: 'var(--color-purple)',
})
</script>

<style scoped>
.calendar-view {
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin: 0 auto;
}
</style>