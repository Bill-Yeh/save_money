<template>
    <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          style="width: auto; margin-top: 2%;"
          color="success"
          variant="elevated"
          v-bind="activatorProps">
            Complete Registration
            <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
      </template>
      <!-- <template #activator="{ on }">
        <slot name="button" :on="on"></slot>
      </template> -->

      <v-card
        prepend-icon="mdi-map-marker"
        text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        title="Use Google's location service?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn>
            Disagree
          </v-btn>

          <v-btn>
            Agree
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
      openDialog() {
        this.dialog = true
      }
    }
  }
</script>