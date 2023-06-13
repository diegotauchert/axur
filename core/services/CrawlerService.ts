import HttpClientFetch from '../handlers/HttpClientFetch';
import { HttpClientInterface } from '@/interfaces/HttpClientInterface';
import CrawlFactory from '@/factories/CrawlFactory';
import { CrawlInterface, CrawlGetInterface } from '@/interfaces/CrawlInterface';
import { CrawlerDto } from '@/dto/CrawlerDTO';

export default class CrawlerService {
  public readonly uri: string = '/crawl';
  
  constructor(
    public http: HttpClientInterface = new HttpClientFetch()
  ) {}

  public async post(data: string): Promise<CrawlInterface> {
    try {
      const crawlerDto = new CrawlerDto(data);
      const response = await this.http.post(this.uri, crawlerDto.makeDTO());
      const payload = await response.json();

      return CrawlFactory.builder(payload, data);
    }catch(error){
      throw new Error(`Something went wrong: ${error}`);
    }
  }

  public async get(id: string): Promise<CrawlGetInterface> {
    try {
      const response = await this.http.get(`${this.uri}/${id}`);
      const payload = await response.json();

      return CrawlFactory.builderGetPayload(payload || '');
    }catch(error){
      throw new Error(`Something went wrong: ${error}`);
    }
  }
}