<template>
  <header class="boards-header">
    <div class="boards-header__title">
      <el-breadcrumb separator="/" class="mb-2">
        <el-breadcrumb-item :to="{ name: 'Dashboard' }">Inicio</el-breadcrumb-item>
        <el-breadcrumb-item>Tableros</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>Mis Tableros: 6</h2>
    </div>

    <!-- ADD NEW BOARD BUTTON -->
    <el-button size="large" color="var(--color-green)" class="br-normal">
      <el-icon :size="18"><AppsIcon color="white"/></el-icon>
      <span class="tw-bold ts-normal tc-white">Nuevo Tablero</span>
    </el-button>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.boards-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--el-menu-border-color);
  padding-bottom: 1rem;
}
</style>