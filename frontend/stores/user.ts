import { defineStore } from 'pinia';
// import { useRuntimeConfig } from '#/utils/runtimeConfig'; // 假設您有一個 runtimeConfig 的工具函數來獲取配置信息
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: null,
    error: null,
  }),
  actions: {
    async fetchUsers() {
      try {
        const config = useRuntimeConfig();
        const { data } = await axios.get(
          `${config.public.apiBaseURL}/api/users`
        );
        this.setUsers(data.data); // 設定 users 狀態
        return data;
      } catch (error) {
        console.error('獲取使用者資料失敗：', error);
        throw error;
      }
    },
    setUsers(users) {
      this.users = users; // 設定 users 狀態
    },
  },
});
