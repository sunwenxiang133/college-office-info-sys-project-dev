import SRequest from '@/service/request'
import { BASE_URL, TIME_OUT } from '@/service/request/config'

import localCache from '@/utils/cache'

const sRequest = new SRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: config => {
      const token = localCache.getCache('token')
      if (token) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestInterceptorCatch: err => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: res => {
      return res
    },
    responseInterceptorCatch: err => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

export default sRequest
