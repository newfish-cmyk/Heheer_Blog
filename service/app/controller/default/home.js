'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async getArticleList() {
    const sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.brief as brief, ' +
              'FROM_UNIXTIME(article.addtime,"%Y/%m/%d") as time ' +
              'FROM article ' +
              'ORDER BY addTime DESC';

    const result = await this.app.mysql.query(sql);

    this.ctx.body = { data: result };
  }

  async getArticlebyId() {
    const id = this.ctx.params.id;

    const sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.brief as brief,' +
              'article.content as content ' +
              'FROM article ' +
              'WHERE article.id=' + id;

    const result = await this.app.mysql.query(sql);

    this.ctx.body = { data: result };
  }
}

module.exports = HomeController;
