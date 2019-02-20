export interface LinkItem {
  url: String;
  title?: String;
  des?: String;
}
export interface DidItem {
  title: String;
  author: String;
  des: String;
  tags?: String[];
  createTime?: Date;
  updateTime?: Date;
  content: String;
  linkList?: LinkItem[];
}
