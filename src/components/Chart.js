import { mapState } from 'vuex'
import { Bar } from 'vue-chartjs'

export default Bar.extend({
  name: 'app-chart',
  mounted () {
    this.renderChart(
      {
        labels: this.data.formatedNameOutput,
        datasets: this.datasets
      },
      {
        title: {
          display: true,
          text: '10 top tweeted languages',
          position: 'left'
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barThickness: 25
            }
          ],
          yAxes: [{
            ticks: {
              max: 80000,
              min: 0,
              stepSize: 5000
            }
          }]
        }
      }
    )
  },
  computed: {
    ...mapState(['data']),
    datasets () {
      return [
        {
          label: 'Number of tweets',
          backgroundColor: '#4099FF',
          data: this.data.formatedCountOutput
        }
      ]
    }
  }
})
