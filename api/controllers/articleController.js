const models = require("../../models");

// Pagination
const getPagination = (page, size) => {
    const limit = size ? +size : 8;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
};
const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: getData } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, getData, totalPages, currentPage };
};

module.exports = {
    // Read Article
    readArticle(req, res, next) {
        const { page, limits } = req.query;
        const { limit, offset } = getPagination(page, limits);

        models.tb_article
        .findAndCountAll({
            order: [
              ['createdAt', 'DESC']
            ],
            offset,
            limit
            // attributes: ["title"],
        })
        .then(tb_articles => {
            if (tb_articles) {
                res.status(200).json({
                    'resCode': 200,
                    'resData': getPagingData(tb_articles,page, limit),
                    'resMessage': 'Successfull'
                })
            }
        })
        .catch(err => {
            res.status(201).json({
                'resCode': 201,
                'resMessage': err
            })
        })
    },

    // Create Article
    createArticle(req, res, next) {
        const { title, content, category, status } = req.body;

        models.tb_article
        .create({
            title: title,
            content: content,
            category: category,
            status: status
        })
        .then(tb_articles => {
            if (tb_articles) {
                res.status(200).json({
                    'resCode': 200,
                    'resData': tb_articles,
                    'resMessage': 'Successfully'
                })
            }
        })
        .catch(err => {
            res.status(201).json({
                'resCode': 201,
                'resMessage': err
            })
        })
    },

    // Update Article
    updateArticle(req, res, next) {
        const articleId = req.params.id;
        const { title, content, category, status } = req.body;

        models.tb_article
        .update({
            title: title,
            content: content,
            category: category,
            status: status
        }, {
            where: {
                id: articleId
            }
        })
        .then(tb_articles => {
            if (tb_articles) {
                res.status(200).json({
                    'resCode': 200,
                    'resData': tb_articles,
                    'resMessage': 'Successfull'
                });
            };
        })
        .catch(err => {
            res.status(201).json({
                'resCode': 201,
                'resMessage': err
            });
        });
    },

    // Delete Article
    deleteArticle(req, res, next) {
        const articleId = req.params.id;

        models.tb_article
        .destroy({
            where: {
                id: articleId
            }
        })
        .then(tb_articles => {
            if (tb_articles) {
                res.status(200).json({
                    'resCode': 200,
                    'resData': tb_articles,
                    'resMessage': 'Successfull'
                });
            };
        })
        .catch(err => {
            res.status(201).json({
                'resCode': 201,
                'resMessage': err
            });
        });
    }

}