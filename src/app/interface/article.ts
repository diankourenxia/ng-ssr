export interface LinkItem {
  url: string;
  title?: string;
  desc?: string;
}
export interface DidItem {
  title: string;
  author: string;
  desc: string;
  tags?: string[];
  createTime?: Date;
  updateTime?: Date;
  content: string;
  linkList?: LinkItem[];
  categories: string[];
}
