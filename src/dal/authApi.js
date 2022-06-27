import axios from "axios"

const API_KEY = '09549345b00b4e6085c4d86da56ae972'

export const authApi = {
  checkEmail(email){
    return axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${email}`)
    .then(response => response.data.deliverability)
  }
}