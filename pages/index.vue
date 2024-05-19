<template>
  <div class="month-chart-picker">
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
</template>

<script>
  export default {
    data() {
      return {
        value: this.getCurrentMonth(),
        displayChart: 'pie-chart'
      }
    },
    methods: {
      getCurrentMonth() {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        return `${year}-${month}`;
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
.month-chart-picker{
  width: 100%;
  display: flex;
  align-items: center;
  margin: 3% 0 0 3%;

}
@media screen and (max-width:768px) { 
  .month-chart-picker{
    max-width: 95%;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
