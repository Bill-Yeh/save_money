<template>
    <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <template #activator="{ on }">
        <slot name="button" :openDialog="openDialog"></slot>
      </template>

      <v-card v-if="mode === 'terms'">
        <v-card-title>Terms of service</v-card-title>
        <v-card-text style="padding: 0 5%;">
          Think about the other forms you have to sign in your life. Your employment contract. Your mobile phone contract. Consent forms, such as for medical treatments. Service agreements at places you get help.

          If you have a high level of literacy, you can probably navigate these situations with some confidence. You may not be able to understand the Microsoft terms and conditions (unless you are a lawyer!), but when your doctor’s office hands you their cancellation policy, you can read it and sign your acceptance, feeling satisfied that you have understood what you are agreeing to.

          However, if you are one of the 44% of Australians who have low literacy, you are likely not provided with information you can read when it comes to signing a contract. Just like me when faced with those nasty terms and conditions, you probably sign the form without reading it.
        </v-card-text>
        <v-btn
          style="text-transform: none; font-weight: 600;"
          color=primary
          @click="closeDialog">
          Confirm
        </v-btn>
      </v-card>
      <v-card v-else color="warning" variant="outlined">
        <v-card-item>
          <v-card-title>Waring</v-card-title>
          <v-card-text>Are you sure to delete record ? </v-card-text>
          <div class="yes-no-btn">
            <v-btn
              color="warning"
              variant="text"
              @click="removeRecord">
              Yes
            </v-btn>
            <v-btn
              color="black"
              variant="text"
              @click="closeDialog">
              No
            </v-btn>
          </div>
        </v-card-item>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: {
      mode: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
      openDialog() {
        this.dialog = !this.dialog
      },
      closeDialog() {
        this.dialog = false
      },
      removeRecord() {
        this.$emit('update')
        this.dialog = false
      }
    }
  }
</script>

<style scoped>
.yes-no-btn{
  display: flex;
  justify-content: flex-end;
}
:deep(.v-card){
  background-color: #fff;
}
:deep(.v-card-text){
  padding: 0;
}
</style>
