<template>
    <div>
      <v-app>
          <div class="auth-row">
            <v-row class="auth-page">
                <NuxtPage />
            </v-row>
          </div>
      </v-app>
    </div>
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
    position: absolute; top: 0; right: 0; bottom: 0; left: 0;
    background-image: url('/public/finance.png');
    background-color: rgb(56, 174, 253);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.8;
  }
  .auth-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>