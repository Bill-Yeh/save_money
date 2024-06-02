import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import axios from 'axios';

// const { $axios } = useAxios();

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    error: null,
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        const config = useRuntimeConfig();
        const { data } = await axios.post(
          `${config.public.apiBaseURL}/api/login`,
          {
            username,
            password,
          }
        );
        console.log('data: ' + JSON.stringify(data));
        this.token = data.token;
        this.error = null;
      } catch (error) {
        console.log(error);
        this.error = error.response?.data?.error || 'Login failed';
      }
    },
  },
});
