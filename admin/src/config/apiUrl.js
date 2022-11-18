let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
    checkLogin: ipUrl + 'checkLogin',
    addArticle: ipUrl + 'addArticle',
    getArticleList: ipUrl + 'getArticleList',
    delArticle: ipUrl + 'delArticle/',
    getArticleById: ipUrl + 'getArticleById/'
}
export default servicePath;