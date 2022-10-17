<template>
  <div class="boards-list-options">
    <el-button 
      class="button-list" 
      :icon="option.icon" 
      :class="{ active: option.selected }"
      v-for="option in options"
      :key="option.id"
      @click="selectOption(option.id)"
    >
      <span class="ts-small button-list__text">{{ option.text }}</span>
    </el-button>

    <el-button size="small" class="button-list-dots">
      <el-icon :size="21"><DotsIcon/></el-icon>
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  LayoutListIcon,
  CalendarEventIcon,
  UserCircleIcon,
  ArrowsSortIcon,
  SquarePlusIcon,
  SquareMinusIcon,
} from 'vue-tabler-icons'

const options = ref([
  {
    id: 0,
    icon: LayoutListIcon,
    text: 'Todos',
    selected: true
  },
  {
    id: 1,
    icon: CalendarEventIcon,
    text: 'Últimos añadidos',
    selected: false
  },
  {
    id: 2,
    icon: UserCircleIcon,
    text: 'Asignadas',
    selected: false
  },
  {
    id: 3,
    icon: ArrowsSortIcon,
    text: 'Alfabético: a-z',
    selected: false
  },
  {
    id: 4,
    icon: ArrowsSortIcon,
    text: 'Alfabético: z-a',
    selected: false
  },
  {
    id: 5,
    icon: SquarePlusIcon,
    text: 'Más propiedades',
    selected: false
  },
])

const selectOption = (id: number) => {
  options.value = options.value.map(option => {
    option.selected = option.id === id
    return option
  })
}
</script>

<style lang="scss" scoped>
.boards-list-options {
  display: flex;
  align-items: center;
}

.button-list-dots {
  margin-left: auto;
  padding: 0.6rem 0.3rem;
  border-radius: 0.4rem; 
}

.button-list {
  border: none;
  border-radius: 0.7rem;
  background-color: var(--color-background-dark);
  &__text {
    color: var(--color-text-light);
  }

  &:hover {
    background-color: var(--color-checker);
    color: var(--color-text);
    .button-list__text {
      color: var(--color-text);
    }
  }

  &:active {
    opacity: 0.7;
  }

  &.active {
    background-color: var(--color-purple-light);
    color: var(--color-purple);
    .button-list__text {
      color: var(--color-purple);
    }
  }
}
</style>