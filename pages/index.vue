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
        <el-date-picker
          v-model="value"
          type="month"
          placeholder="Pick a month"
          format="YYYY/MM"
          :clearable="false"
          @change="changeFormat"
        />
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
    <div v-if="displayChart === 'pie-chart'" class="pie-chart">
      <pie-chart />
    </div>
    <div v-if="displayChart === 'calendar'" class="calendar">
      <v-calendar color="primary"></v-calendar>
    </div>
  </div>
</template>

<script>
import pieChart from '~/components/charts/pie-chart'
  export default {
      components: {
        pieChart
    },
    data() {
      return {
        allTime: true,
        value: this.getCurrentMonth(),
        displayChart: 'pie-chart'
      }
    },
    computed: {
      isMobile() {
          if (this.$vuetify.display.mobile) {
            return false
          } else {
            return true
          }
      }
    },
    methods: {
      getCurrentMonth() {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        return `${year}-${month}`
      },
      changeFormat(date) {
        const year = new Date(date).getFullYear()
        const month = (new Date(date).getMonth() + 1).toString().padStart(2, '0')
        this.value = `${year}-${month}`
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
</style>
