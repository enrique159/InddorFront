<template>
  <div class="p-relative">
    <el-menu
      class="drawer-menu"
      :class="{ expanded: !isCollapse }"
      :default-active="currentRoute"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <div class="menu-section-title">
        <span
          class="tc-text-light tw-bold ts-smaller"
          :class="{ hidden: isCollapse }"
          >Administra</span
        >
      </div>
      <el-menu-item index="1" @click="openRoute('Dashboard')">
        <el-icon><HomeIcon /></el-icon>
        <template #title>Inicio</template>
      </el-menu-item>
      <el-menu-item index="2" @click="openRoute('Boards')">
        <el-icon><LayoutIcon /></el-icon>
        <template #title>Tableros</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><FileTextIcon /></el-icon>
        <template #title>Contratos</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><UsersIcon /></el-icon>
        <template #title>Proveedores</template>
      </el-menu-item>

      <div class="menu-section-title">
        <span
          class="tc-text-light tw-bold ts-smaller"
          :class="{ hidden: isCollapse }"
          >Rendimiento</span
        >
      </div>
      <el-menu-item index="5" @click="openRoute('Calendar')">
        <el-icon><CalendarIcon /></el-icon>
        <template #title>Calendario</template>
      </el-menu-item>
      <el-menu-item index="6">
        <el-icon><GraphIcon /></el-icon>
        <template #title>Estadísticas</template>
      </el-menu-item>

      <div class="menu-section-title">
        <span
          class="tc-text-light tw-bold ts-smaller"
          :class="{ hidden: isCollapse }"
          >Seguimiento</span
        >
      </div>
      <el-menu-item index="7" class="notification-dot">
        <el-icon><MailboxIcon /></el-icon>
        <template #title>Bandeja</template>
      </el-menu-item>
      <el-menu-item index="8">
        <el-icon><WalletIcon /></el-icon>
        <template #title>Finanzas</template>
      </el-menu-item>
      <el-menu-item index="9">
        <el-icon><AssemblyIcon /></el-icon>
        <template #title>Organización</template>
      </el-menu-item>
    </el-menu>

    <el-button class="btn-toggle-menu" @click="collapseToggle()" circle>
      <ChevronRightIcon v-if="isCollapse" color="white" size="18" />
      <ChevronLeftIcon v-else color="white" size="18" />
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { getRouteValueSideBar } from "@/components/SideBar/getRouteValueSideBar";

const isCollapse = ref(false);

const collapseToggle = () => {
  isCollapse.value = !isCollapse.value;
};

// Router
const currentRoute = ref<string>("1");
const router = useRouter();
const currentRouteName = router.currentRoute.value.name;

const openRoute = (route: string) => {
  router.push({ name: route });
  return 
};

currentRoute.value = getRouteValueSideBar(currentRouteName);

// Escucha los cambios de ruta para actualizar el valor del menú
watch(
  () => router.currentRoute.value.name,
  (newRoute) => {
    currentRoute.value = getRouteValueSideBar(newRoute);
  }
);
</script>

<style lang="scss">
.drawer-menu {
  height: 100%;
  padding-top: 1rem;
  position: relative;
  background-color: var(--color-background);

  .el-menu-item {
    height: 42px;
    &:hover {
      background-color: var(--color-green-lighter);
    }
    &.is-active {
      color: var(--color-green);
    }
  }

  .menu-section-title {
    width: 100%;
    height: fit-content;
    text-transform: uppercase;
    padding: 0.8rem 1.4rem;
  }

  .hidden {
    display: none;
  }
}

.expanded {
  width: 180px;
}

.btn-toggle-menu {
  position: absolute;
  top: 12px;
  right: 0;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-green-dark);
  border-radius: 50%;
  transform: translateX(50%);

  &:hover {
    background-color: var(--color-green);
  }

  &:focus, &:active {
    color: inherit;
    border-color: none;
    background-color: var(--color-green);
    outline: none;
  }
}

.notification-dot {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 12px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: translateY(-50%);
    background-color: var(--color-orange);
  }
}
</style>
