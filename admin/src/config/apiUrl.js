let ipUrl = "http://localhost:7001/admin/";

let servicePath = {
  checkLogin: ipUrl + "checkLogin",
  addArticle: ipUrl + "addArticle",
  getArticleList: ipUrl + "getArticleList",
  delArticle: ipUrl + "delArticle/",
  getArticleById: ipUrl + "getArticleById/",
};
export default servicePath;
