<template>
  <div class="navbar-comp">
    <!-- LOGO -->
    <div class="logotype">
      <img src="@/assets/logo.svg" alt="logotype" />
    </div>

    <!-- SEARCH INPUT -->
    <el-input
      class="search-input"
      v-model="search"
      placeholder="Busca entre propiedades, contratos, proveedores y más..."
      :prefix-icon="SearchIcon"
    />

    <div class="navbar-options">
      <!-- CREATE NEW -->
      <el-button color="var(--color-green)" type="success" round @click="showMessage">
        <el-icon><PlusIcon color="white"/></el-icon>
        <span class="tc-white">Crear nuevo</span>
      </el-button>

      <!-- SETTINGS -->
      <el-tooltip
        class="box-item"
        effect="light"
        content="Configuración"
        placement="bottom-end"
      >
        <el-button :icon="AdjustmentsHorizontalIcon" circle />
      </el-tooltip>
      
      <!-- NOTIFICATIONS -->
      <el-tooltip
        class="box-item"
        effect="light"
        content="Notificaciones"
        placement="bottom-end"
      >
        <el-button :icon="BellIcon" circle class="notification-dot" />
      </el-tooltip>
      
      <!-- USER PROFILE -->
      <el-avatar
        class="ml-4"
        src="https://www.sadm.gob.mx/AyD_Aclaraciones/Content/user.png"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchIcon, AdjustmentsHorizontalIcon, BellIcon } from "vue-tabler-icons";
// composables
import { ref } from "vue";
import { useMessage } from "@/composables/useMessage";
import { useNotifications } from "@/composables/useNotifications";

const search = ref("");
const { message } = useMessage();
const { notify } = useNotifications();

function showMessage() {
  message('Hello world!');
  notify('Hello world!', 'Message');
}
</script>

<style lang="scss" scoped>
.navbar-comp {
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid var(--el-menu-border-color);
  padding: 1rem;
  display: flex;
  align-items: center;

  .logotype {
    width: 160px;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    img {
      width: 98px;
      min-width: 98px;
      cursor: pointer;
      transition: var(--transition-rapida);
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .search-input {
    width: 100%;
    max-width: 480px;
  }

  .navbar-options {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .notification-dot {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 2px;
      right: 2px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--color-orange);
    }
  }
}
</style>