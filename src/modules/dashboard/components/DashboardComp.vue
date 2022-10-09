<template>
  <div class="dashboard-comp">
    <FeaturedComp />
    <el-divider />
  </div>
</template>

<script setup lang="ts">
import FeaturedComp from "./FeaturedComp.vue";

</script>

<style scoped>
.dashboard-comp {
  width: 100%;
  max-width: 960px;
  height: 100%;
  padding: 2rem;
  margin: 0 auto;
}
</style>