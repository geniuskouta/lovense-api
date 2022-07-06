import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  timeout: 5000,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const url = config.url || '';
  console.log(url);
  // register request handlers here

  return config;
});

instance.interceptors.response.use((res: AxiosResponse) => {
  const url = res.config.url || '';
  console.log(url);
  // register response handlers here

  return res.data;
}, (error: AxiosError) => {

  // register error handlers here
  return Promise.reject(error);
});

export default instance;
