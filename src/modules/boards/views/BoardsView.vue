<template>
  <div class="boards-view">
    <BoardsHeaderAll class="mb-4" />
    <BoardsListOptions />
  </div>
</template>

<script setup lang="ts">
import BoardsHeaderAll from '@/modules/boards/components/BoardsHeaderAll.vue'
import BoardsListOptions from '@/modules/boards/components/BoardsListOptions.vue'
</script>

<style lang="scss" scoped>
.boards-view {
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin: 0 auto;
}
</style>