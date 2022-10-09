<template>
  <div class="home-view">
    <NavBarComp />
    <el-container>
      <SideBarComp />
      <el-main class="main-view">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SideBarComp from '@/components/SideBar/SideBarComp.vue';
import NavBarComp from '@/components/NavBar/NavBarComp.vue';
</script>

<style lang="scss" scoped>
.home-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .main-view {
    width: 100%;
    padding: 0;
    overflow-x: hidden;
  }
}
</style>