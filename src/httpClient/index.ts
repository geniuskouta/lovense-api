import client from './base';

class HttpClient {
  static async get<T>(url: string): Promise<T> {
    return client.get(url);
  }

  static async post<T, U>(url: string, payload: T): Promise<U> {
    return client.post(url, payload);
  }
}

export default HttpClient;
