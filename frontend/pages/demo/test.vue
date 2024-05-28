<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="user in userRef" :key="user.id">{{ user.title }}</li>
    </ul>
  </div>
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
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUserStore } from '~/stores/user';
import { useAuthStore } from '~/stores/auth';

const userRef = ref(null);

onMounted(() => {
  userRef.value = useUserStore().getUsers();
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

const posts = useAuthStore().posts;
</script>
