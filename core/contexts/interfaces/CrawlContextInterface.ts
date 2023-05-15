import { CrawlInterface } from "@/interfaces/CrawlInterface";

export interface CrawlContextInterface {
  ids: CrawlInterface[],
  crawlIdsSaved: Function,
}