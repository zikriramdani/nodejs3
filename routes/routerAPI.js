const articleController = require("../api/controllers/articleController");

module.exports = async function (app) {

	// Article
	app.post("/api/v1/articleadd", articleController.createArticle);
	app.post("/api/v1/articleList", articleController.readArticle);
	app.put("/api/v1/article:id", articleController.updateArticle);
	app.delete("/api/v1/article:id", articleController.deleteArticle);

}