import { CrawlInterface, CrawlApiResponse } from "../interfaces/CrawlInterface";

export default class CollectionFactory {
  
  static builder(payload:CrawlApiResponse): CrawlInterface {
    const id: CrawlInterface = payload.id;

    return id;
  }
}