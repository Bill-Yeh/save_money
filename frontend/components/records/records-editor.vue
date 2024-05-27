<template>
    <v-dialog
    v-model="dialog"
    :fullscreen="isMobile"
    max-width="800">
        <template #activator="{ on }">
            <slot name="button" :openEditor="openEditor"></slot>
        </template>
        <v-card>
            <div class="card-container">
                <v-card-title>{{ records.date }}</v-card-title>
                <div class="item-group">
                    <div class="item-title"><span>Date</span></div>
                    <div class="item-input">
                        <v-text-field
                            label="Date"
                            type="date"
                            variant="outlined"
                            :model-value="records.date"
                            >
                        </v-text-field>
                    </div>
                </div>
                <div class="item-group">
                    <div class="item-title"><span>Type</span></div>
                    <div class="item-input">
                        <v-radio-group
                            v-model="records.type"
                            inline
                            >
                            <v-radio
                                label="Income"
                                value="income"
                            ></v-radio>
                            <v-radio
                                label="Expense"
                                value="expense"
                            ></v-radio>
                        </v-radio-group>
                    </div>
                </div>
                <div class="item-group">
                    <div class="item-title"><span>Category</span></div>
                    <div class="item-input">
                        <v-select
                            v-model="records.category"
                            label="Category"
                            :items="records.type === 'income' ?  incomeCategoryies : expenseCategories"
                            variant="outlined"
                            >
                        </v-select>
                    </div>
                </div>
                <div class="item-group">
                    <div class="item-title"><span>Amount</span></div>
                    <div class="item-input">
                        <v-text-field
                            label="Amount"
                            variant="outlined"
                            :model-value="records.amount"
                            prefix="$"
                            suffix="TWD"
                            >
                        </v-text-field>
                    </div>
                </div>
                <div class="item-group">
                    <div class="item-title"><span>Detail</span></div>
                    <div class="item-input">
                        <v-text-field
                            label="Detail"
                            variant="outlined"
                            :model-value="records.detail"
                            >
                        </v-text-field>
                    </div>
                </div>
                <div class="item-btn-group">
                    <div class="save-cancel-btn save-btn">
                        <v-btn
                            color="#1E88E5"
                            variant="elevated"
                            block>
                            Save
                        </v-btn>
                    </div>
                    <div class="save-cancel-btn">
                        <v-btn
                            color="warn"
                            variant="elevated"
                            block
                            @click="closeDialog">
                            Cancel
                        </v-btn>
                    </div>
                </div>
            </div>
            
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: {
        records: {
            type: Object,
            default: () => { return {} }
        }
    },
    data () {
      return {
        dialog: false,
        expenseCategories: ['breakfast', 'lunch', 'dinner', 'shopping', 'social'],
        incomeCategoryies: ['salary', 'stock', 'fund', 'bonus']
      }
    },
    computed: {
      isMobile() {
          if (!this.$vuetify.display.mobile) {
            return false
          } else {
            return true
          }
      }
    },
    methods: {
      openEditor() {
        this.dialog = !this.dialog
      },
      closeDialog() {
        this.dialog = false
      }
    }
  }
</script>

<style scoped>
.item-group{
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10%;
}
.item-title{
    width: 30%;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
}
.item-input{
    width: 65%;
}
::v-deep .v-input__details{
    display: none;
}
.item-btn-group{
    width: 95%;
    margin: 0 auto 2% auto;
    display: flex;
    justify-content: flex-end;
}
.save-cancel-btn{
    width: 15%;
}
.save-btn{
    margin-right: 2%;
}
@media screen and (max-width:767px) { 
    .item-group{
        margin-bottom: 20%;
    }
    .save-cancel-btn{
        width: 30%;
    }
}
</style>
