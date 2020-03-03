import axios from 'axios'

const BASE_API_URL = 'https://api.themoviedb.org/3'
const API_KEY = '13c6f01b5226beceb1eab144f04c2f75'
// export const BASE_API_IMAGE = 'https://image.tmdb.org'

const instance = axios.create({
  baseURL: BASE_API_URL
})

instance.interceptors.request.use(config => ({
  ...config,
  params: {
    api_key: API_KEY,
    ...config.params
  }
}))

export default instance 




