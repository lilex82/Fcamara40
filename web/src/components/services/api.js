import axios from 'axios'

const URL_API = 'http://localhost:3001'

export const createBooking = (booking) => {
  return axios.post(`${URL_API}/book`, booking).then(response => response.data)
}

export const checkAvailability = (officeId, date) => {
  return axios.get(`${URL_API}/offices/${officeId}/availability?date=${date}`).then(response => response.data)
}

export const getOffices = () => {
  return axios.get(`${URL_API}/offices`).then(response => response.data)
}

