<template>
  <div class="dashboard-comp">
    <FeaturedComp />
    <el-divider />
    <el-row>
      <el-col :span="12">
        <RemindersComp />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import FeaturedComp from "../components/FeaturedComp.vue";
import RemindersComp from "../components/RemindersComp.vue";
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