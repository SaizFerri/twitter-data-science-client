<template>
  <div id="app-chart-footer">
    <div class="wrapper">
      <ul class="list-group" v-for="item in dataChartFooter" :key="item">
        <li class="list-group-item">{{ item.name }}: {{ item.count }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-chart-footer',
  computed: {
    ...mapState(['dataChartFooter'])
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
}

.wrapper ul {
  list-style: none;
  padding-left: 40px;
}
</style>
