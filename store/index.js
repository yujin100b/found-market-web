import axios from 'axios'

export const state = () => ({
    counter: 0
  })
  
export const mutations = {
    increment (state) {
      state.counter++
    }
  }

const AxiosInstance = axios.create({
    baseURL: 'http://localhost:8001/api',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  })

export const actions = {
  async get_slide({ commit }) {
    return await new Promise((resolve, reject) => {
      AxiosInstance
        .get('/main_slide/')
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
