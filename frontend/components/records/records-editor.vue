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
                <v-card-title v-if="mode === 'update'">{{ records.date }}</v-card-title>
                <v-card-title v-else>Create New Record</v-card-title>
                <div class="item-group">
                    <div class="item-title"><span>Date</span></div>
                    <div class="item-input">
                        <v-text-field
                            v-model="recordData.date"
                            label="Date"
                            type="date"
                            variant="outlined"
                            >
                        </v-text-field>
                    </div>
                </div>
                <div class="item-group">
                    <div class="item-title"><span>Type</span></div>
                    <div class="item-input">
                        <v-radio-group
                            v-model="recordData.type"
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
                            v-model="recordData.category"
                            label="Category"
                            :items="recordData.type === 'income' ?  incomeCategoryies : expenseCategories"
                            variant="outlined"
                            >
                        </v-select>
                    </div>
                </div>
                <div class="item-group">
                    <div class="item-title"><span>Amount</span></div>
                    <div class="item-input">
                        <v-text-field
                            v-model="recordData.amount"
                            label="Amount"
                            variant="outlined"
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
                            v-model="recordData.detail"
                            label="Detail"
                            variant="outlined"
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
        },
        mode: {
            type: String,
            default: ''
        }
    },
    data () {
      return {
        dialog: false,
        expenseCategories: ['breakfast', 'lunch', 'dinner', 'shopping', 'social'],
        incomeCategoryies: ['salary', 'stock', 'fund', 'bonus'],
        recordData: {}
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
    watch: {
        dialog (v) {
            if (v) this.init()
        }
    },
    methods: {
      init() {
        if (this.mode === 'update') {
            this.recordData = this.records
        } else {
            this.recordData = {}
        }
      },
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
:deep(.v-input__details){
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
