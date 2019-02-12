const response = {
  to: String,
  operator: String,
  content: String,
  createTime: Date,
};
const commit = {
  operator: String,
  content: String,
  createTime: Date,
  responseList: [response]
};
const content = {
  content: '',
  commitList: [commit]
};
export const Articel = {
  title: String,
  describe: String,
  author: String,
  createTime: Date,
  updataTime: Date,
  categorys: [String],
  contentList: [
    content
  ]
};
