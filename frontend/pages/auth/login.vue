<template>
    <v-card variant="outlined" color="primary" class="auth-card">
        <v-card-title>Login</v-card-title>
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
                Sign In
            </v-btn>
            <v-btn
            style="line-height: 1.2;"
            class="mt-5"
            color="primary"
            size="large"
            type="submit"
            variant="elevated"
            block>
                <span style="font-size: 20px;" class="mdi mdi-facebook"></span>
                Sign In With Facebook
            </v-btn>
        </v-form>
        <div class="goto-register">
            <span class="create-describe-text">Don't have an account yet?</span>
            <span @click="createOne" class="create-account-link">Create one</span>
        </div>
    </v-card>
</template>

<script>
definePageMeta({
    layout: 'auth'
})
export default{
  methods: {
    createOne(){
        this.$router.push({ path: "/auth/register" })
    }
  }
}
</script>

<style scoped>
    .auth-card{
        width: 45%;
        padding: 3%;
        background-color: #fff;
    }
    .goto-register{
        display: flex;
        justify-content: center;
        margin-top: 3%;
    }
    .create-describe-text{
        color: black;
    }
    .create-account-link{
        padding-left: 2%;
        font-weight: 600;
        cursor: pointer;
    }
    @media screen and (max-width:768px) { 
        .auth-card{
            width: 75%;
        }
        .goto-register{
            flex-direction: column;
            align-items: center;
        }
    }
</style>