export interface CrawlInterface {
  id: string,
  term: string,
  date: Date
}

export interface CrawlApiResponse {
  id: string
}

export interface CrawlGetInterface {
  id: string;
  status: boolean;
  urls: string[];
}

export interface CrawlGetApiResponse {
  id: string;
  status: 'active' | 'done';
  urls: string[];
}

export interface CrawlInterfaceFull extends CrawlInterface {
  status: boolean;
  urls: string[];
}
