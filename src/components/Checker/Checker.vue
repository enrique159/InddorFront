<template>
  <div class="checker" :class="{ active: check }" @click="toggleCheck">
    <el-icon :size="11" v-if="check" ><CheckIcon color="white"/></el-icon>
  </div>
</template>

<script setup lang="ts">
const { check } = defineProps<{
  check: boolean
}>()

const emit = defineEmits<{
  (event: 'update:check'): void
}>()

const toggleCheck = () => {
  emit('update:check')
}
</script>

<style lang="scss" scoped>
.checker {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-white);
  border: 1px solid var(--color-checker);
  display: grid;
  place-items: center;
  cursor: pointer;
}

.checker.active {
  background: var(--color-green);
  border: 1px solid var(--color-green-lighter);
}
</style>