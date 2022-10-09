import { useFetch } from '@/composables/useFetch'
import { useNotifications } from '@/composables/useNotifications';
import type { User } from '@/types/User.type';

export class ApiAuthSignIn {
  static async signIn(body: Body): Promise<Response> {
    const { notify } = useNotifications()
    const response = await useFetch({
      url: '/auth',
      method: 'POST',
      body
    })

    if (response.status === 200) {
      return {
        status: response.status,
        success: true,
        data: response.data
      }
    } else {
      notify('Error al iniciar sesión', response.data.message, 'error')
      return {
        status: response.status,
        success: false,
        data: response.data
      }
    }
  }
}

type Body = {
  email: string;
  password: string;
}

type Response = {
  status: number,
  success: boolean,
  data: {
    token: string,
    user: User,
    message?: string
  }
}