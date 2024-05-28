import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import axios from 'axios';

// const { $axios } = useAxios();

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null,
    error: null,
  }),
  actions: {
    async getUsers() {
      try {
        const config = useRuntimeConfig();
        const { data } = await axios.post(
          `${config.public.apiBaseURL}/api/users`,
          {}
        );
        console.log('data: ' + JSON.stringify(data));
        this.error = null;
      } catch (error) {
        console.log(error);
        this.error = error.response?.data?.error || 'get User failed';
      }
    },
  },
});
