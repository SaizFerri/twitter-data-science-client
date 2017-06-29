import axios from 'axios'

export default {
  fetchLanguages (context) {
    return axios.get('http://localhost:3000/api/tweets/languages')
      .then((response) => context.commit('addLanguagesToState', response.data.languages))
      .catch((err) => console.log(err))
  }
}
