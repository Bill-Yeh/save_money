<template>
  <v-card variant="outlined" color="primary" class="auth-card">
    <div class="title-remind-info">
      <v-card-title>Login</v-card-title>
      <span v-show="errMsg" style="color: red; font-size: 12px"
        >Wrong account or password!</span
      >
    </div>
    <v-form>
      <v-text-field
        class="mb-2"
        label="Account"
        placeholder="Enter your email or phone number"
        clearable
      ></v-text-field>

      <v-text-field
        label="Password"
        placeholder="Enter your password"
        clearable
        type="password"
      ></v-text-field>

      <v-btn
        color="success"
        size="large"
        type="submit"
        variant="elevated"
        block
      >
        Sign In
      </v-btn>
      <v-btn
        style="line-height: 1.2"
        class="mt-5"
        color="primary"
        size="large"
        type="submit"
        variant="elevated"
        block
      >
        <span style="font-size: 20px" class="mdi mdi-facebook"></span>
        Sign In With Facebook
      </v-btn>
    </v-form>
    <div class="goto-register">
      <span class="create-describe-text">Don't have an account yet?</span>
      <span @click="createOne" class="create-account-link">Create one</span>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const store = useAuthStore();
const error = store.$state.error;
const router = useRouter();

const signIn = async () => {
  await store.login(username.value, password.value);
  if (store.$state.error) {
    errMsg.value = true;
  } else {
    // 登入成功後的導航操作，例如導向到其他頁面
    router.push('/dashboard');
  }
};

const createOne = () => {
  router.push('/auth/register');
};
</script>

<style scoped>
.auth-card {
  width: 45%;
  padding: 3%;
  background-color: #fff;
}
.title-remind-info {
  display: flex;
  align-items: center;
}
.goto-register {
  display: flex;
  justify-content: center;
  margin-top: 3%;
}
.create-describe-text {
  color: black;
}
.create-account-link {
  padding-left: 2%;
  font-weight: 600;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .auth-card {
    width: 75%;
  }
  .goto-register {
    flex-direction: column;
    align-items: center;
  }
}
</style>
