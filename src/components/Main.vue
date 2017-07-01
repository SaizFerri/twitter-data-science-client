<template>
  <div id="app-main">
    <div class="center" v-if="this.data.formatedNameOutput.length === 0">
      <app-spinner class="center-spinner"></app-spinner>
    </div>
    <div v-if="this.data.formatedNameOutput.length > 0" style="padding: 20px;">
      <app-chart-footer></app-chart-footer>
      <app-chart></app-chart>
      <app-days-no-data></app-days-no-data>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
import AppChart from './Chart.js'
import AppSpinner from './Spinner.vue'
import AppDaysNoData from './DaysNoDataList'
import AppChartFooter from './ChartFooter'

export default {
  name: 'app-main',
  components: {
    AppChart,
    AppSpinner,
    AppDaysNoData,
    AppChartFooter
  },
  computed: {
    ...mapState(['data'])
  },
  mounted () {
    this.fetchLanguages()
      .then(() => this.$store.commit({
        type: 'setDataChartFooter',
        data: this.formatOutput()
      }))
    this.getNoData()
      .then(() => this.$store.commit({
        type: 'getDaysWithNoData',
        data: this.getDaysNoData()
      }))
  },
  methods: {
    ...mapActions(['fetchLanguages', 'getNoData']),
    ...mapGetters(['getDaysNoData', 'formatOutput']),
    ...mapMutations(['getDaysWithNoData', 'setDataChartFooter'])
  }
}
</script>

<style scoped>

#app-main {
  height: 100%;
}

.center {
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  background-color: #4099FF;
}
.center-spinner {
  align-self: center;
}
</style>
