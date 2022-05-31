export interface Source {
  id: string;
  name: string;
}

export interface News {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface RootObject {
  articles: News[];
}
