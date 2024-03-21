import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class APIWrapper {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL });
    this.setupInterceptors();
  }

  private setupInterceptors() {
    if (process.env.NODE_ENV === 'development') {

      this.axiosInstance.interceptors.response.use(
        (response: AxiosResponse<any>) => this.logResponse(response),
        (error: any) => this.logError(error)
      );
    }
  }

  private logRequest(request: AxiosRequestConfig<any>): AxiosRequestConfig<any> {
    console.log('Request:', request);
    return request;
  }

  private logResponse(response: AxiosResponse<any>): AxiosResponse<any> {
    console.log('Response:', response);
    return response;
  }

  private logError(error: any): Promise<any> {
    console.error('Error:', error);
    return Promise.reject(error);
  }
  
  public async get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.get<T, R>(url, config);
  }

  public async post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.post<T, R>(url, data, config);
  }

  public async put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.put<T, R>(url, data, config);
  }

  public async delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.delete<T, R>(url, config);
  }
}

export default new APIWrapper('http://localhost:8080');