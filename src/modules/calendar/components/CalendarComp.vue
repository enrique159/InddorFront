<template>
  <el-calendar v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(new Date())
</script>

<style lang="scss" scoped>
.el-calendar {
  background-color: transparent;
}

:deep(.el-calendar-table__row .is-selected) {
  background-color: var(--color-green-lighter);
  color: var(--color-green);
}
</style>