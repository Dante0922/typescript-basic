import {NewsDetail, NewsFeed} from "../types";
import {CONTENT_URL, NEWS_URL} from "../config";

export class Api {
    xhr = new XMLHttpRequest();
    url: string;

    constructor(url: string) {
        this.xhr = new XMLHttpRequest();
        this.url = url;
    }


    async request<AjaxResponse>(): Promise<AjaxResponse> {
        const response = await fetch(this.url);
        return await response.json() as AjaxResponse;
    }
}

export class NewsFeedApi extends Api{
    constructor(url: string) {
        super(url);
    }
    async getData(): Promise<NewsFeed[]> {
        return this.request<NewsFeed[]>();
    }
}

export class NewsDetailApi extends Api {
    constructor(url: string) {
        super(url);
    }
    async getData(): Promise<NewsDetail> {
        return this.request<NewsDetail>();
    }
}