<template>
  <div id="app-main">
    <div class="center" v-if="this.data.formatedNameOutput.length === 0">
      <app-spinner class="center-spinner"></app-spinner>
    </div>
    <div v-if="this.data.formatedNameOutput.length > 0">
      <app-chart></app-chart>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppChart from './Chart.js'
import AppSpinner from './Spinner.vue'

export default {
  name: 'app-main',
  components: {
    AppChart,
    AppSpinner
  },
  computed: {
    ...mapState(['data'])
  },
  mounted () {
    this.fetchLanguages()
  },
  methods: {
    ...mapActions(['fetchLanguages'])
  },
  created () {

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
