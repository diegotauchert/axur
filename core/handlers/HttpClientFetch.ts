import { HttpClientInterface } from '../interfaces/HttpClientInterface';

export default class HttpClientFetch implements HttpClientInterface {
  public baseUrl = process.env.NEXT_PUBLIC_URL_API;

  public get(url: string): Promise<Response> {
    return fetch(this.baseUrl+url, {
      method: 'GET',
    })
  }

  public post(url: string, data: Object): Promise<Response> {
    return fetch(this.baseUrl+url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  public put(url: string, data: Object): Promise<Response> {
    return fetch(this.baseUrl+url, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  public delete(url: string): Promise<Response> {
    return fetch(this.baseUrl+url, {
      method: 'DELETE',
    })
  }
}