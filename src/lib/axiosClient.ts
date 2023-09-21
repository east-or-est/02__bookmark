import Axios from 'axios'
import { AxiosError, AxiosResponse } from 'axios'


const axios = Axios.create({
  baseURL: `./assets/file`,
  method: 'get',
  timeout: 10000,
  headers: {
    'Content-type' : 'application/json; charset=utf-8'
  },
  responseType: 'json'
})


axios.interceptors.response.use(
  ((Response: AxiosResponse) => {
    return Response;
  }),
  ((error: AxiosError) => {
    switch (error.response?.status) {
      case 404:
        console.error('404エラー');
        break
      default :
        break
    }
    return Promise.reject(error);
  })
)

export default axios
