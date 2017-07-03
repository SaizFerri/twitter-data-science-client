import axios from 'axios'

export default {
  fetchLanguages (context) {
    return axios.get('http://localhost:3000/api/tweets/languages')
      .then((response) => context.commit('addLanguagesToState', response.data.languages))
      .catch((err) => console.log(err))
  },

  getNoData (context) {
    let url = 'http://broccoli.f4.htw-berlin.de:8080/twitter/tweets-per-hour'
    let promises = []

    for (let i = 0; i < 50; i++) {
      let date = new Date()
      date.setDate(new Date().getDate() - i)
      date.setHours(0)
      date.setMinutes(0)
      date.setSeconds(0)
      date.setMilliseconds(0)

      promises.push(
        axios.get(url, { params: { fromDate: date, toDate: date } })
          .then((response) => response.data)
      )
    }

    let all = Promise.all(promises)

    all.then((values) => {
      let formatedValues = []

      for (let i = 0; i < values.length; i++) {
        let date = new Date()
        date.setDate(new Date().getDate() - i)
        date.setHours(0)
        date.setMinutes(0)
        date.setSeconds(0)
        date.setMilliseconds(0)

        formatedValues.push({
          date,
          data: values[i]
        })
      }

      context.commit('setTweetsPerHourToState', formatedValues)
    })

    return all
  },

  getMostUsedHashtags (context) {
    let url = 'http://broccoli.f4.htw-berlin.de:8080/twitter/most-used-hash-tags-all'

    let promises = []

    for (let i = 0; i < 50; i++) {
      let date = new Date()
      date.setDate(new Date().getDate() - i)
      date.setHours(0)
      date.setMinutes(0)
      date.setSeconds(0)
      date.setMilliseconds(0)

      promises.push(
        axios.get(url, { params: { fromDate: date, toDate: date } })
          .then((response) => response.data)
      )
    }

    let all = Promise.all(promises)

    all.then((values) => {
      let formatedValues = []

      for (let i = 0; i < values.length; i++) {
        let date = new Date()
        date.setDate(new Date().getDate() - i)
        date.setHours(0)
        date.setMinutes(0)
        date.setSeconds(0)
        date.setMilliseconds(0)

        formatedValues.push({
          date,
          data: values[i]
        })
      }

      context.commit('setMostUsedHashtagsToState', formatedValues)
    })

    return all
  }
}
