<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users.data" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <v-btn
      color="success"
      size="large"
      type="submit"
      variant="elevated"
      block
      @click="signIn"
    >
      Sign In
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUserStore } from '~/stores/user';
import { useAuthStore } from '~/stores/auth';

const users = ref([]);

onMounted(async () => {
  try {
    users.value = await fetchUsers();
    console.log('users.value = ' + users.value);
  } catch (error) {
    console.error('無法獲取使用者資料：', error);
  }
});

const username = ref('');
const password = ref('');
const signIn = async () => {
  await useAuthStore().login(username.value, password.value);
  if (useAuthStore().$state.error) {
    console.log(useAuthStore().$state.error);
  } else {
    console.log(useAuthStore().$state);
  }
};

async function fetchUsers() {
  try {
    const userStore = useUserStore();
    const userData = await userStore.fetchUsers();
    console.log('獲取到的使用者資料：', userData);
    return userData;
  } catch (error) {
    console.error('獲取使用者資料失敗：', error);
    throw error;
  }
}
</script>
