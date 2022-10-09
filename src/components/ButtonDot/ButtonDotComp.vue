<template>
  <el-dropdown trigger="click">
    <button class="btn-dots">
      <div class="dots">
        <div class="dot" />
        <div class="dot" />
        <div class="dot" />
      </div>
    </button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="PinnedOffIcon">Desanclar</el-dropdown-item>
        <el-dropdown-item :icon="PencilMinusIcon" divided>Editar</el-dropdown-item>
        <el-dropdown-item :icon="FileInfoIcon">Ver información</el-dropdown-item>
        <el-dropdown-item :icon="PlusIcon">Agregar acción</el-dropdown-item>
        <el-dropdown-item :icon="FoldersIcon">Archivar</el-dropdown-item>
        <el-dropdown-item :icon="TrashXIcon" divided class="delete">Eliminar</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  
</template>

<script setup lang="ts">
import { computed } from "vue";
import { PencilMinusIcon, PinnedOffIcon, TrashXIcon, FileInfoIcon, PlusIcon, FoldersIcon } from "vue-tabler-icons";

const LIGHT_COLOR = 'var(--color-button-dots-light)'
const DARK_COLOR = 'var(--color-button-dots-dark)'

const { light = false } = defineProps<{
  light?: boolean;
}>();

const dotColorVar = computed(() => light ? LIGHT_COLOR : DARK_COLOR )
</script>

<style lang="scss">

.btn-dots {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border-radius: 18px;
  transition: all 0.2s ease-in-out;
  padding: 4px 6px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background: rgba(0, 0, 0, 0.3);
  }

  .dots {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 3px;

    .dot {
      width: 4px;
      height: 4px;
      border-radius: 0.3rem;
      background: v-bind(dotColorVar);
      margin: 0.2rem 0;
    }
  }
}

.el-dropdown-menu__item.delete {
  color: var(--color-red);
}
</style>