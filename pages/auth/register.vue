<template>
    <v-card
    class="mx-auto"
    max-width="344"
    title="User Registration"
  >
    <v-container>
      <v-text-field
        v-model="first"
        color="primary"
        label="First name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="last"
        color="primary"
        label="Last name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success">
        Complete Registration

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
    <!-- <v-card variant="outlined" color="primary" class="auth-card">
        <v-card-title>Register</v-card-title>
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
            ></v-text-field>

            <v-btn
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            block>
                Register
            </v-btn>
        </v-form>
    </v-card> -->
</template>

<script>
definePageMeta({
    layout: 'auth',
    title: 'Register'
})
export default{
    data () {
        return {
            first: null
        }
    }
}
</script>

<!-- <style scoped>
    .auth-card{
        width: 30%;
        padding: 3%;
        background-color: #fff;
    }
</style> -->