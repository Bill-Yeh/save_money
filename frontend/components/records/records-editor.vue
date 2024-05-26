<template>
    <v-dialog
    v-model="dialog"
    max-width="800">
        <template #activator="{ on }">
            <slot name="button" :openEditor="openEditor"></slot>
        </template>
        <v-card>
            <v-card-title>{{ records.date }}</v-card-title>
            <v-container fluid>
                <v-row>
                    <v-col cols="4">
                        <span>Date</span>
                    </v-col>

                    <v-col cols="8">
                        <v-text-field
                        label="Date"
                        type="date"
                        variant="outlined"
                        :model-value="records.date"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="4">
                        <span>Type</span>
                    </v-col>
                    <v-col cols="8">
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
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="4">
                        <span>Category</span>
                    </v-col>

                    <v-col cols="8">
                        <v-select
                            v-model="records.category"
                            label="Category"
                            :items="records.type === 'income' ?  incomeCategoryies : expenseCategories"
                            variant="outlined"
                            >
                        </v-select>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="4">
                        <span>Amount</span>
                    </v-col>

                    <v-col cols="8">
                        <v-text-field
                        label="Amount"
                        variant="outlined"
                        :model-value="records.amount"
                        prefix="$"
                        suffix="TWD"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="4">
                        <span>Detail</span>
                    </v-col>

                    <v-col cols="8">
                        <v-text-field
                        label="Detail"
                        variant="outlined"
                        :model-value="records.detail"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
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