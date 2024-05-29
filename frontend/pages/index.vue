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
      <records-detail-table
      :records="records"
      @updateRecord="updateRecord"
      @remove="removeRecord" />
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
          this.$set(this.records, index, updatedRecord)
        }
      },
      removeRecord(item) {
        const index = this.records.findIndex(record => record.id === item.id);
        if (index !== -1) {
          this.records.splice(index, 1)
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
@media screen and (max-width:767px) { 
  :deep(.el-calendar-table .el-calendar-day){
    height: auto;
  }
}
</style>
