<template>
  <el-drawer
    v-model="modelValue"
    title="Notificaciones"
    direction="rtl"
    :before-close="handleClose"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>

<script setup lang="ts">
const { modelValue } = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
}>();

const handleClose = (done: () => void) => {
  emit("update:modelValue", false);
  done();
}
</script>

<style scoped>
</style>