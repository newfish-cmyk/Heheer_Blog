module.exports = app => {
  const { router, controller } = app;
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  router.get('/default/getArticlebyId/:id', controller.default.home.getArticlebyId);
};
