<template>
  <div style="width: 95%; margin: auto;">
    <div v-if="isMobile" class="home-page-fuction-bar">
      <div class="all-time-switch">
        <v-switch
          v-model="allTime"
          color="primary"
          label="All Time Record"
          hide-details
        ></v-switch>
      </div>
      <div class="month-picker">
        <date-picker @update="remoteCalendar" />
      </div>
      <div class="radio-group">
        <v-radio-group
          v-model="displayChart"
          inline
          style="display: flex;"
        >
          <v-radio value="pie-chart" color="#1E88E5">
            <template #label>
              <v-icon>mdi-chart-pie</v-icon>
            </template>
          </v-radio>
          <v-radio value="calendar" color="#1E88E5">
            <template #label>
              <v-icon>mdi-calendar-month</v-icon>
            </template>
          </v-radio>
        </v-radio-group>
      </div>
    </div>
    <div v-if="(displayChart === 'pie-chart' && isMobile === true) || (mobileDisplayChart === 'pie-chart' && isMobile === false)" class="pie-chart">
      <pie-chart />
    </div>
    <div v-if="(displayChart === 'calendar' && isMobile === true) || (mobileDisplayChart === 'calendar' && isMobile === false)" class="calendar">
      <el-calendar v-model="calendarValue" />
    </div>
    <div class="create-record">
      <records-editor mode="create" @update="createNewRecord">
        <template #button="{ openEditor }">
          <v-btn
              class="create-record-btn"
              color="#1E88E5"
              variant="elevated"
              @click="openEditor">
              Create
          </v-btn>
        </template>
      </records-editor>
    </div>
    <div class="record-detail-table">
      <div v-for="(group, date) in groupedRecords" :key="date">
        <records-detail-table
        :headers="generateHeader(date, group.totalAmount)"
        :records="group.records"
        @updateRecords="updateRecord"
        @remove="removeRecord" />
      </div>
    </div>
  </div>
</template>

<script>
import datePicker from '~/components/date-picker'
import pieChart from '~/components/charts/pie-chart'
import recordsDetailTable from '~/components/records/records-detail-table'
import recordsEditor from '~/components/records/records-editor'
  export default {
    components: {
      pieChart,
      datePicker,
      recordsDetailTable,
      recordsEditor
    },
    inject: ['chart', 'calendarDate'],
    data() {
      return {
        allTime: true,
        displayChart: 'pie-chart',
        calendarValue: new Date(),
        records: [
          {
            id: 1,
            type: 'income',
            date: '2024-05-26',
            category: 'bonus',
            amount: 5000,
            detail: 'excellent performance'
          },
          {
            id: 2,
            type: 'expense',
            date: '2024-05-25',
            category: 'entertainment',
            amount: 500,
            detail: 'badminton'
          },
          {
            id: 3,
            type: 'expense',
            date: '2024-05-25',
            category: 'social',
            amount: 300,
            detail: 'dinner'
          }
        ]
      }
    },
    computed: {
      isMobile() {
          if (this.$vuetify.display.mobile) {
            return false
          } else {
            return true
          }
      },
      mobileDisplayChart() {
        // from layout provide
        return this.chart()
      },
      groupedRecords() {
        const grouped = this.records.reduce((acc, record) => {
          if (!acc[record.date]) {
            acc[record.date] = { records: [], totalAmount: 0 }
          }
          acc[record.date].records.push(record)
          acc[record.date].totalAmount += (record.type === 'expense' ? -record.amount : record.amount)
          return acc
        }, {})
        return grouped
      }
    },
    watch: {
      calendarDate: {
        immediate: true,
        handler(newVal) {
          this.calendarValue = newVal
        },
        deep: true
      }
    },
    methods: {
      remoteCalendar(date) {
        this.calendarValue = date
      },
      createNewRecord(newRecord) {
        this.records.push(newRecord)
      },
      updateRecord(updatedRecord) {
        const index = this.records.findIndex(record => record.id === updatedRecord.id)
        if (index !== -1) {
          this.records[index] = updatedRecord
        }
      },
      removeRecord(item) {
        const index = this.records.findIndex(record => record.id === item.id);
        if (index !== -1) {
          this.records.splice(index, 1)
        }
      },
      generateHeader(date, totalAmount) {
        const amountClass = totalAmount > 0 ? 'text-green' : 'text-red'
        if (!this.isMobile) {
          return [
            { title: date, width: '40%', align: 'start', key: 'category' },
            { title: 'Detail', width: '30%', align: 'start', key: 'detail' },
            { title: totalAmount, width: '30%', align: 'start', key: 'amount', value: totalAmount, class: amountClass }
          ]
        } else {
          return [
            { title: 'Date', width: '14%', align: 'start', key: 'date' },
            { title: 'Category', width: '19%', align: 'start', key: 'category' },
            { title: 'Amount', width: '14%', align: 'start', key: 'amount' },
            { title: 'Detail', width: '23%', align: 'start', key: 'detail' },
            { title: `Total: ${totalAmount}`, width: '15%', align: 'start', key: 'amount', value: totalAmount, class: amountClass },
            { title: 'Operation', align: 'start', width: '16%', value: 'operation' }
          ]
        }
      }
    }
  }
</script>

<style scoped>
.home-page-fuction-bar{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2% 0 0 2%;

}
:deep(.el-calendar__button-group){
  display: none;
}
.create-record{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.create-record .create-record-btn{
  width: 8%;
}
.text-green {
  color: green;
}
.text-red {
  color: red;
}
@media screen and (max-width:767px) { 
  :deep(.el-calendar-table .el-calendar-day){
    height: auto;
  }
}
</style>
