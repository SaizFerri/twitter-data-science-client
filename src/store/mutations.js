export default {
  addLanguagesToState (state, data) {
    state.data.formatedNameOutput = [
      ...data.formatedNameOutput
    ]
    state.data.formatedCountOutput = [
      ...data.formatedCountOutput
    ]
  }
}
