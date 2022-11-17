import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type {
  SRequestInterceptors,
  SRequestConfig
} from '@/service/request/type'

import { ElLoading } from 'element-plus'

const DEAUFT_LOADING = true

class SRequest {
  instance: AxiosInstance
  interceptors?: SRequestInterceptors
  showLoading: boolean
  loading?: any

  constructor(config: SRequestConfig) {
    this.instance = axios.create(config)

    this.showLoading = config.showLoading ?? DEAUFT_LOADING
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      config => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载数据...',
            background: 'rgba(0,0,0,.5)'
          })
        }
        return config
      },
      err => {
        console.log('所有实例都有的拦截器请求失败')
        return err
      }
    )

    this.instance.interceptors.response.use(
      res => {
        this.loading?.close()

        const data = res.data

        if (data.returnCode === '-1001') {
          console.log('请求失败~')
        } else {
          return data
        }
      },

      err => {
        console.log('所有实例都有的拦截器请求失败')
        this.loading.close()

        if (err.response.status === 404) {
          console.log('404的错误')
        }
        return err
      }
    )
  }

  request<T>(config: SRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then(res => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = DEAUFT_LOADING

          resolve(res)
        })
        .catch(err => {
          this.showLoading = DEAUFT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: SRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: SRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: SRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: SRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default SRequest
