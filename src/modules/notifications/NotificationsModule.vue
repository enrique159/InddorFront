<template>
  <el-drawer
    v-model="modelValue"
    title="Notificaciones"
    direction="rtl"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>

<script setup lang="ts">
const { modelValue } = defineProps<{
  modelValue: boolean;
}>();
</script>

<style scoped>
</style>