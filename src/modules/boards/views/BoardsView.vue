<template>
  <div class="boards-view">
    <Header :breadCrumbs="breadCrumbs" :actionButton="actionButton" title="Mis Tableros: 6" />
    <BoardsListOptions />
  </div>
</template>

<script setup lang="ts">
import BoardsListOptions from '@/modules/boards/components/BoardsListOptions.vue'
import Header from '@/components/Header/Header.vue'
import { AppsIcon } from 'vue-tabler-icons'
import { ref } from 'vue'

const breadCrumbs = ref([
  {
    name: 'Inicio',
    pathName: 'Dashboard',
  },
  {
    name: 'Tableros',
    pathName: null,
  },
])

const actionButton = ref({
  icon: AppsIcon,
  text: 'Nuevo Tablero',
  color: 'var(--color-green)',
})
</script>

<style lang="scss" scoped>
.boards-view {
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin: 0 auto;
}
</style>