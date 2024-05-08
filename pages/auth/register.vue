<template>
    <v-card
    class="mx-auto register-card"
    variant="outlined"
    color="primary"
    title="User Registration">
    <v-container>
      <v-text-field
        v-model="first"
        color="primary"
        label="First name"
        variant="underlined"
        :rules="[rules.required]"
        clearable
      ></v-text-field>

      <v-text-field
        v-model="last"
        color="primary"
        label="Last name"
        variant="underlined"
        :rules="[rules.required]"
        clearable
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
        clearable
        :rules="[rules.required, rules.email]"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
        :rules="[rules.required]"
        clearable
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions style="justify-content: flex-end;">
      <auth-warning>
        <template #button />
      </auth-warning>
    </v-card-actions>
  </v-card>
</template>

<script>
import AuthWarning from '~/components/auth/auth-warning'
definePageMeta({
    layout: 'auth',
    title: 'Register'
})
export default{
  components: {
    AuthWarning
  },
    data () {
        return {
            first: null,
            last: null,
            email: null,
            password: null,
            terms: false,
            rules: {
              required: value => !!value || 'Required.',
              email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
              }
            }
        }
    }
}
</script>

<style scoped>
    .register-card{
        width: 45%;
        padding: 1%;
        background-color: #fff;
    }
    @media screen and (max-width:768px) { 
        .register-card{
            width: 75%;
        }
    }
</style>