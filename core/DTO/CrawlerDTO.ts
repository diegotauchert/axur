export interface ICrawlerDTO {
  keyword: string;
}

export class CrawlerDto implements ICrawlerDTO {
  keyword: string;

  constructor(data: string) {
    this.keyword = data;
  }

  public makeDTO(){
    return {
      "keyword": this.keyword
    }
  }
}