import { CrawlInterface, CrawlApiResponse, CrawlGetInterface, CrawlGetApiResponse } from "../interfaces/CrawlInterface";

export default class CollectionFactory {
  
  static builder(payload:CrawlApiResponse, term: string): CrawlInterface {
    return {
      id: payload.id,
      term: term,
      date: new Date()
    };
  }

  static builderGetPayload(payload:CrawlGetApiResponse): CrawlGetInterface {
    return {
      id: payload.id,
      status: payload.status === 'done',
      urls: payload.urls
    };
  }
}