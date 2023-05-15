import { createContext } from "react";
import { CrawlContextInterface } from "./interfaces/CrawlContextInterface";

export const CrawlContext = createContext<CrawlContextInterface>({} as CrawlContextInterface);