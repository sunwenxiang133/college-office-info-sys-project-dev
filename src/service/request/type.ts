import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface SRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface SRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: SRequestInterceptors<T>
  showLoading?: boolean
}
