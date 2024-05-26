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
        <date-picker @change="remoteCalendar" />
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
    <div class="record-detail-table">
      <records-detail-table />
    </div>
  </div>
</template>

<script>
import datePicker from '~/components/date-picker'
import pieChart from '~/components/charts/pie-chart'
import recordsDetailTable from '~/components/records/records-detail-table'
  export default {
    components: {
      pieChart,
      datePicker,
      recordsDetailTable
    },
    inject: ['chart', 'calendarDate'],
    data() {
      return {
        allTime: true,
        displayChart: 'pie-chart',
        calendarValue: new Date()
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
::v-deep .el-calendar__button-group{
  display: none;
}
@media screen and (max-width:767px) { 
  ::v-deep .el-calendar-table .el-calendar-day{
    height: auto;
  }
}
</style>
