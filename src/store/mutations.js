export default {
  addLanguagesToState (state, data) {
    state.data.formatedNameOutput = [
      ...data.formatedNameOutput
    ]
    state.data.formatedCountOutput = [
      ...data.formatedCountOutput
    ]
  },

  setTweetsPerHourToState (state, data) {
    state.tweetsPerHour = [
      ...data
    ]
  },

  getDaysWithNoData (state, payload) {
    state.daysWithNoData = [
      ...payload.data
    ]
  },

  setDataChartFooter (state, payload) {
    state.dataChartFooter = [
      ...payload.data
    ]
  },

  setMostUsedHashtagsToState (state, data) {
    state.mostUsedHashtags = [
      ...data
    ]
  }
}
