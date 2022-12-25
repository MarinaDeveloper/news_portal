import { INewsDetail } from "./INewsDetail";

export interface INews {
    status: string;
    page: number;
    page_size: number;
    total_hits: number;
    total_pages: number;
    articles: INewsDetail[];
}
