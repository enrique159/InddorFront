<template>
  <div class="login-view">
    <section class="left-bloc">
      <div class="bloc-info">
        <img class="logo" src="@/assets/logo.svg" alt="logo">
        <img class="illustration" src="@/assets/img/login_illustration.svg" alt="">
        <div>
          <h1 class="title">Administrar rentas no tiene que ser complicado</h1>
          <p class="subtitle">No importa si eres administrador, propietario o inquilino… Inddor lo hace por ti.</p>
        </div>
      </div>
    </section>

    <section class="right-bloc">
      <LoginComp />
    </section>
  </div>
</template>

<script setup lang="ts">
// Components
import LoginComp from './components/LoginComp.vue'
// Composables
import { useTitle } from '@vueuse/core'

useTitle('Inicio sesión', { titleTemplate: '%s | Inddor' })
</script>

<style lang="scss" scoped>
.login-view {
  display: flex;
  background-color: var(--color-white);
  height: 100%;
  width: 100%;
  .left-bloc, .right-bloc {
    width: 50%;
    height: 100%;
  }
  // LEFT BLOC
  .left-bloc {
    background-color: var(--color-purple-light);
    padding: 3rem 5rem;
    .bloc-info {
      width: 100%;
      max-width: 580px;
      height: 100%;
      margin-left: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .logo { 
        width: 128px;
        cursor: pointer;
      }
      .title {
        font-family: var(--larken-font);
        font-size: var(--biggest-font-size);
        color: var(--color-title);
      }
      .subtitle {
        font-family: var(--general-font);
        font-size: var(--normal-font-size);
        color: var(--color-text);
        font-weight: var(--font-medium);
      }
    }
  }
  // RIGHT BLOC
  .right-bloc {
    padding: 12rem 9rem 3.5rem;
  }
  @media only screen and (max-width: 1200px) {
    .left-bloc {
      padding: 5rem;
      .bloc-info {
        .title {
          font-size: var(--h1-font-size);
        }
      }
    }
    .right-bloc {
      padding: 12rem 4rem 5rem;
    }
  }
  @media only screen and (max-width: 992px) {
    .left-bloc {
      padding: 5rem 3rem;
      .bloc-info {
        .title {
          font-size: var(--h1-font-size);
        }
      }
    }
    .right-bloc {
      padding: 12rem 3rem 5rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .left-bloc {
      display: none;
    }
    .right-bloc {
      width: 100%;
      padding: 3rem 2rem 2rem;
    }
  }
}
</style>