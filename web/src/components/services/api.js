import axios from 'axios'

const URL_API = 'http://localhost:3001'

export const createBooking = (booking) => {
  return axios.post(`${URL_API}/book`, booking).then(data => data.response)
}

export const checkAvailability = (officeId, date) => {
  return axios.get(`${URL_API}/offices/${officeId}?date=${date}`).then(data => data.response)
}

export const getOffices = () => {
  return axios.get(`${URL_API}/offices`).then(response => response.data)
}

