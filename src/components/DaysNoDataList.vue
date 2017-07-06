<template>
  <div id="app-list">
    <div class="container">
      <h3>Tagen mit fehlenden Daten</h3>
      <ul class="list-group" v-for="day in daysWithNoData" :key="day">
        <li class="list-group-item">{{ day | formatDate}}: Data missing</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app-days-no-data',
  computed: {
    ...mapState(['daysWithNoData'])
  }
}
</script>

<style scoped>
h3 {
  margin: 20px 0 20px 0;
  text-align: center;
}
ul {
  margin: 0;
}

</style>
