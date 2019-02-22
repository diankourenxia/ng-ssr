export interface LinkItem {
  url: String;
  title?: String;
  desc?: String;
}
export interface DidItem {
  title: String;
  author: String;
  desc: String;
  tags?: String[];
  createTime?: Date;
  updateTime?: Date;
  content: String;
  linkList?: LinkItem[];
  categories: String[];
}
