import HttpClientFetch from '../handlers/HttpClientFetch';
import { HttpClientInterface } from '@/interfaces/HttpClientInterface';
import CrawlFactory from '@/factories/CrawlFactory';
import { CrawlInterface, CrawlGetInterface } from '@/interfaces/CrawlInterface';
import { CrawlerDto } from '@/dto/CrawlerDTO';

export default class CrawlerService {

  http: HttpClientInterface;

  constructor() {
    this.http = new HttpClientFetch();
  }

  private baseUrl = process.env.NEXT_PUBLIC_URL_API;

  public async post(data: string): Promise<CrawlInterface> {
    try {
      const response = await this.http.post(`${this.baseUrl}/crawl`, new CrawlerDto(data).makeDTO());
      const payload = await response.json();

      return CrawlFactory.builder(payload, data);
    }catch(error){
      throw new Error(`Something went wrong: ${error}`);
    }
  }

  public async get(id: string): Promise<CrawlGetInterface> {
    try {
      const response = await this.http.get(`${this.baseUrl}/crawl/${id}`);
      const payload = await response.json();

      return CrawlFactory.builderGetPayload(payload || '');
    }catch(error){
      throw new Error(`Something went wrong: ${error}`);
    }
  }
}