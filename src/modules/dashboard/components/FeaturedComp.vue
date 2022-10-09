<template>
  <div class="featured-comp">
    <el-row justify="space-between" class="mb-4">
      <div class="d-flex align-center gap-1">
        <h3>Destacados</h3>
        <StarIcon />
      </div>

      <el-button text @click="toggleShowMore">
        {{ showMoreText }}
        <el-icon>
          <ChevronUpIcon v-if="showMore" />
          <ChevronDownIcon v-else />
        </el-icon>
      </el-button>
    </el-row>

    <el-row :gutter="16">
      <el-col :span="6" class="mb-4" v-for="(card, index) in cardsComputed" :key="index">
        <FeatureCardComp :card="card"/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import StarIcon from "@/assets/custom/StarIcon.vue";
import FeatureCardComp from "./FeaturedCardComp.vue";
// MOCK DATA
import { DESTACADOS } from "@/common/mock/destacados.mock"

import { ref, reactive, computed } from "vue";

const cards = reactive(DESTACADOS);
const showMore = ref(false);

const cardsComputed = computed(() => {
  if (showMore.value) {
    return cards;
  } else {
    return cards.slice(0, 4);
  }
});

const showMoreText = computed(() => {
  return showMore.value ? "Ver menos" : "Ver más";
});

function toggleShowMore() {
  showMore.value = !showMore.value;
}
</script>

<style lang="scss" scoped>
.featured-comp {
  width: 100%;
  height: fit-content;
}
</style>