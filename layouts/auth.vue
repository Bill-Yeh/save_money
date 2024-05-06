<template>
    <v-app>
        <v-row class="auth-row">
            <NuxtPage />
        </v-row>
    </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.auth-row {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(118, 193, 255);
    background-image: url('/public/finance.png');
    background-size: contain;
    background-position: center;
    opacity: 0.8;
}
</style>