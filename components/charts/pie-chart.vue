<template>
    <Pie :data="chartData" :options="options" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ['Income', 'Expense'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651'],
            data: [60, 40]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>