import axios from "axios"

const API_KEY = '57dca2bf0baa452f92a0eb2f163481e9'

export const authApi = {
  checkEmail(email){
    return true
    // return axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${email}`)
    // .then(response => response.data.deliverability === 'DELIVERABLE' ? true : false)
  }
}