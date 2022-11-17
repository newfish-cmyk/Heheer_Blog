'use strict';

const { Controller } = require('egg');

class MainController extends Controller {
  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;

    const res = await this.app.mysql.select('user',
      { where: { userName: userName, password: password } },
      { columns: [ 'userName' ] }
    );

    if (res.length > 0) {
      // 登录成功,进行session缓存
      const openId = new Date().getTime();
      this.ctx.session.openId = openId;
      this.ctx.body = { data: '登录成功', openId: openId };

    } else {
      this.ctx.body = { data: '登录失败' };
    }
  }

  async addArticle() {
    const tmpArticle = this.ctx.request.body;

    const result = await this.app.mysql.insert('article', tmpArticle);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;

    this.ctx.body = {
      isSuccess: insertSuccess,
      insertId: insertId
    };
  }

  async getArticleList() {
    const sql = 'SELECT article.id as id,' +
                'article.title as title ' +
                'FROM article ' +
                'ORDER BY addTime ASC';

    const resList = await this.app.mysql.query(sql)
    this.ctx.body = { list: resList };
  }

  async delArticle() {
    let id = this.ctx.params.id;
    const res = await this.app.mysql.delete('article', {'id': id})
    this.ctx.body = { data: res };
  }

  async getArticleById() {
    const id = this.ctx.params.id;
    const result = await this.app.mysql.select('article',
      { where: { id: id } }
    );

    this.ctx.body = { data: result };
  }

}

module.exports = MainController;
