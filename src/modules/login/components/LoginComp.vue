<template>
  <div class="login-comp">
    <img class="logo-min" src="@/assets/logo.svg" alt="logo">
    <div>
      <h2 class="title mb-4">Iniciar sesión</h2>
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="mb-4" status-icon @submit.prevent>

        <!-- EMAIL INPUT -->
        <el-form-item prop="email">
          <el-input v-model="loginForm.email" placeholder="Correo electrónico" />
        </el-form-item>

        <!-- PASSWORD INPUT -->
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="Contraseña" show-password />
        </el-form-item>

        <!-- REMEMBER SESSION -->
        <el-form-item label="Recordar datos de inicio de sesión" prop="delivery">
          <el-switch style="--el-switch-on-color: var(--color-green)" v-model="rememberSession" />
        </el-form-item>

        <!-- SUBMIT BUTTON -->
        <button class="form-submit bg-green br-small ts-normal tw-bold py-2 br-medium" @click="submitForm(loginFormRef)">
          <span style="color: white;" v-if="!loading">Acceder</span>
          <LoadingAnimateComp v-else />
        </button>
      </el-form>

      <!-- REGISTER BUTTON -->
      <div class="mb-3">
        <span>No tienes una cuenta?</span>
        <span class="tc-purple">
          <router-link to="/"> Regístrate aquí </router-link>
        </span>
      </div>

      <!-- FORGET PASSWORD -->
      <router-link class="forget-pass" to="/">
        ¿Olvidaste tu contraseña?
      </router-link>
    </div>

    <TermsAndPolicyComp />
  </div>
</template>

<script setup lang="ts">
// Components
import LoadingAnimateComp from '@/components/LoadingAnimate/LoadingAnimateComp.vue'
import TermsAndPolicyComp from './TermsAndPolicyComp.vue'
// Types
import type { FormInstance, FormRules } from 'element-plus'
// Composables
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMain } from '@/composables/stores/useMain';
import { useUser } from '@/composables/stores/useUser';
import { ApiAuthSignIn } from '@/api/auth/apiAuthSignIn';

const { rememberSession } = useMain();
const { setToken, setUser } = useUser();
const router = useRouter();

const loading = ref(false);
const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
  email: '',
  password: '',
})

const rules = reactive<FormRules>({
  email: [
    { required: true, message: 'Favor de escribir su correo electrónico', trigger: 'blur' },
    { type: 'email', message: 'Favor de escribir un correo electrónico válido', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Favor de escribir su contraseña', trigger: 'blur' },
    { min: 8, message: 'La contraseña debe tener al menos 8 caracteres', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      signIn()
    }
  })
}

const signIn = async () => {
  loading.value = true
  // wait 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await ApiAuthSignIn.signIn({ 
    email: loginForm.email, 
    password: loginForm.password
  })
  if (response.success) {
    setToken(response.data.token)
    setUser(response.data.user)
    router.push('/dashboard')
  }
  loading.value = false
}
</script>




<style lang="scss" scoped>
.login-comp {
  width: 100%;
  max-width: 360px;
  height: 100%;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .logo-min {
    width: 128px;
    cursor: pointer;
    display: none;
  }

  .title {
    font-size: var(--h1-font-size);
    font-weight: var(--font-heavy);
    color: var(--color-title);
  }

  .form-submit {
    width: 100%;
    min-height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-submit:hover {
    background-color: var(--color-green-light);
  }

  .forget-pass {
    width: fit-content;
    font-size: var(--small-font-size);
    color: var(--color-text-light);
    font-weight: var(--font-medium);
    cursor: pointer;
    margin-bottom: 2rem;

    &:hover {
      color: var(--color-purple);
      filter: none;
    }
  }
}

@media only screen and (max-width: 768px) {
  .login-comp {
    margin: 0 auto;

    .logo-min {
      display: block;
    }
  }
}
</style>