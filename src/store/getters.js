export default {
  getDaysNoData: (state) => {
    return state.tweetsPerHour.filter((record) => {
      return record.data.filter((hour) => {
        return hour === 0
      }).length > 0
    }).map((r) => r.date)
  },

  formatOutput: (state) => {
    return state.data.formatedNameOutput.map((r, i) => {
      return {
        'name': r,
        'count': state.data.formatedCountOutput[i]
      }
    })
  }
}
