import HttpClientFetch from '../handlers/HttpClientFetch';
import { HttpClientInterface } from '@/interfaces/HttpClientInterface';
import CrawlFactory from '@/factories/CrawlFactory';
import { CrawlInterface, CrawlGetInterface } from '@/interfaces/CrawlInterface';
import { CrawlerDto } from '@/dto/CrawlerDTO';
import { HttpError } from '@/helpers/exceptions';

export default class CrawlerService {
  public readonly uri: string = '/crawl';
  
  constructor(
    public http: HttpClientInterface = new HttpClientFetch()
  ) {}

  public async post(data: string): Promise<CrawlInterface> {
    const crawlerDto = new CrawlerDto(data);
    const response = await this.http.post(this.uri, crawlerDto.makeDTO());

    if(response.ok){
      const payload = await response.json();
      CrawlFactory.builder(payload, data)

      return CrawlFactory.builder(payload, data);
    }
    
    throw new HttpError(`Request not saved`);
  }

  public async get(id: string): Promise<CrawlGetInterface> {
    const response = await this.http.get(`${this.uri}/${id}`);

    if(response.ok){
      const payload = await response.json();
      return CrawlFactory.builderGetPayload(payload || '');
    }
    
    throw new HttpError(`Listing not available`);
  }
}