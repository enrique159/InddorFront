<template>
  <div class="separator-bar">
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Types
type Colors = 'purple' | 'blue' | 'green' | 'yellow' | 'orange' | 'red' | 'gray'

const { color, width = '4' } = defineProps<{
  color: Colors
  width?: string
}>()

const colorBackground = computed(() => {
  switch (color) {
    case 'purple':
      return 'var(--color-purple)'
    case 'blue':
      return 'var(--color-blue)'
    case 'green':
      return 'var(--color-green)'
    case 'yellow':
      return 'var(--color-yellow)'
    case 'orange':
      return 'var(--color-orange)'
    case 'red':
      return 'var(--color-red)'
    case 'gray':
      return 'var(--color-gray)'
    default:
      return 'var(--color-purple)'
  }
})

const widthStyle = computed(() => {
  return `${width}px`
})
</script>

<style lang="scss" scoped>
.separator-bar {
  height: 100%;
  min-width: v-bind(widthStyle);
  background: v-bind(colorBackground);
  border-radius: 24px;
}
</style>