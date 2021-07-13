require("env2")(".env");
const axios = require('axios');

module.exports = async function (app) {

    app.get('/maintenance', async function(req, res) {
        res.render('pages/maintenance.ejs', {
            title: 'Maintenance',
        });
    });

    // Home
    app.get('/', async function(req, res) {
        const limits = req.body.limits || req.query.limits || 3;
        const pages = req.body.page || req.query.page || 0;
        
        axios
        .post(process.env.URL + 'articleList' + '/?page=' + pages + '&limits=' + limits)
        .then(dataArticle => {
            res.render('pages/index.ejs', {
                title: 'Home',
                article: dataArticle.data.resData
            });
        })
        .catch(err => {
            res.status(201).json({
                'resCode': 201,
                'resMessage': err
            });
        });
    });

    // Add Article
    app.post('/articleAdd', async function(req, res){

        axios
        .post(process.env.URL + 'article/add', {
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            status: req.body.status
        })
        .then(response => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(201).json({
                'resCode': 201,
                'resMessage': err
            });
        });
    });

    // Update Article
    app.post('/articleUpdate', async function(req, res){
        const articleId = req.body.id;

        axios
        .put(process.env.URL + 'article/' + articleId, {
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            status: req.body.status
        })
        .then(response => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(201).json({
                'resCode': 201,
                'resMessage': err
            });
        });
    });

    // Delete Artcile
    app.post('/articleDelete', async function(req, res){
        const articleId = req.body.id;
        
        axios
        .delete(process.env.URL + 'article/' + articleId)
        .then(response => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(201).json({
                'resCode': 201,
                'resMessage': err
            });
        });
    });

    // catch 404 and forward to error handler
    app.get('*', async function(req, res){
        res.render('pages/404.ejs', {
            title: '404',
        });
    });
}