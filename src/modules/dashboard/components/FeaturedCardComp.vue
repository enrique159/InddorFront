<template>
  <div class="feature-card-comp">
    <div class="d-flex justify-between">
      <div class="icon-card">
        <SmartHomeIcon style="color: white;" size="18"/>
      </div>

      <ButtonDot light/>
    </div>

    <div>
      <h4 class="tc-white mb-2">Smart Home</h4>
      <p class="ts-smallest tc-traslucid">ID: {{ id }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonDot from '@/components/ButtonDot/ButtonDotComp.vue';
import type { FeatureCard } from '@/types/FeatureCard.type';
import { ref, computed } from 'vue';

// Data
const id = ref('PRP-M923');

// Props
const { card } = defineProps<{
  card: FeatureCard;
}>()

// Computed
const colorCard = computed(() => {
  return getColorVar(card.color);
});

// Methods
const getColorVar = (color: string) => {
  return `var(--color-${color})`;
}
</script>

<style lang="scss" scoped>
.feature-card-comp {
  width: 100%;
  min-width: 160px;
  height: 112px;
  border-radius: 12px;
  background-color: v-bind(colorCard);
  padding: 0.6rem 0.6rem 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .icon-card {
    width: 28px;
    height: 28px;
    background-color: rgba($color: #000000, $alpha: 0.2);
    border-radius: 8px;
    display: grid;
    place-items: center;
  }
}
</style>