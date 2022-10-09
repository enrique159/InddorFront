import { useFetch } from "@/composables/useFetch";
import { useNotifications } from '@/composables/useNotifications'
import type { User } from "@/types/User.type";

export class ApiUserGetUser {
  static async getUser(): Promise<Response> {
    const { notify } = useNotifications();

    const response = await useFetch({
      url: '/user',
      method: 'GET'
    })
    
    if (!response) return { success: false, data: { message: 'No response' } }

    if(response.status === 200) {
      return {
        success: true,
        data: response.data
      }
    } else {
      notify('Error', 'Error al obtener el usuario', 'error')
      return { 
        success: false, 
        data: response.data
      }
    }
  }
}

type Response = {
  success: boolean,
  data: {
    user?: User,
    message?: string
  }
}