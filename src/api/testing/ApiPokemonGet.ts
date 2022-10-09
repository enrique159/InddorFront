import { useFetch } from '@/composables/useFetch'
import type { User } from '@/types/User.type';

export class ApiPokemonGet {
  static async getPokemon(pokemon: string): Promise<Response> {
    const response = await useFetch({
      url: 'https://pokeapi.co/api/v2/pokemon/' + pokemon,
      method: 'GET',
    })
    
    if(response.status === 200) {
      return {
        success: true,
        data: response.data
      }
    } else {
      return { 
        success: false, 
        data: response.data
      }
    }
  }
}

type Pokemon = {
  name: string;
}

type Response = {
  success: boolean,
  data: Object
}