<template>
  <header class="header mb-4">
    <div class="boards-header__title">
      <el-breadcrumb separator="/" class="mb-2">
        <el-breadcrumb-item
          :to="{ name: item.pathName ? item.pathName : null }"
          v-for="item in breadCrumbs"
          :key="item.name"
        >
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <h2>{{ title }}</h2>
    </div>

    <!-- ACTION BUTTON -->
    <el-button
      v-if="actionButton"
      size="large"
      :icon="actionButton.icon"
      :color="actionButton.color"
      class="br-normal btn-action"
    >
      <span class="tw-bold ts-normal tc-white">{{ actionButton.text }}</span>
    </el-button>
  </header>
</template>

<script setup lang="ts">
import type { TablerIconComponent } from "vue-tabler-icons";

type BreadCrumbs = {
  name: string;
  pathName?: string | null | undefined;
};

type ActionButton = {
  icon: TablerIconComponent;
  text: string;
  color: string;
};

const props = defineProps<{
  title: string;
  breadCrumbs: Array<BreadCrumbs>;
  actionButton?: ActionButton;
}>();
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--el-menu-border-color);
  padding-bottom: 1rem;
}

:deep(.btn-action i) {
  font-size: 18px !important;
}
</style>
