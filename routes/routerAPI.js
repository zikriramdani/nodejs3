const articleController = require("../api/controllers/articleController");

module.exports = async function (app) {

	// Article
	// Create
	app.post("/api/v1/article/add", articleController.createArticle);

	// Reacd
	app.post("/api/v1/articleList", articleController.readArticle);
	app.post("/api/v1/articleList?limits=2&page=1", articleController.readArticle);

	// Update
	app.put("/api/v1/article/:id", articleController.updateArticle);

	// Delete
	app.delete("/api/v1/article/:id", articleController.deleteArticle);

}