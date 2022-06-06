import * as axios from 'axios'

const API_KEY = '4687b36d'

export const searchApi = {
  findMovie(movieTitle){
    return axios.get(`http://www.omdbapi.com/?s=${movieTitle}&apikey=${API_KEY}&page=2`)
    .then(response => { return response.data.Search; })
  },
  fetchInfo(movieTitle){
    return axios.get(`http://www.omdbapi.com/?t=${movieTitle}&plot=full&apikey=${API_KEY}`)
    .then(response => { return response.data })
  }
}