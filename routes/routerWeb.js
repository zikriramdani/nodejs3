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
        const pages = req.body.page || req.query.page || 0;
        const limits = req.body.limits || req.query.limits || 8;

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

    // Answer
    app.get('/answer', async function(req, res){
        res.render('pages/answer.ejs', {
            title: 'Answer 8,9,10',
        });
    });

    // Add Product
    app.post('/productAdd', async function(req, res){
        axios
        .post(process.env.URL + 'product/add', {
            // image: req.body.image,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        })
        .then(response => {
            console.log('ber', response)
            res.redirect('/');
        })
        .catch(err => {
            res.status(201).json({
                'resCode': 201,
                'resMessage': err
            });
        });
    });

    // Update Product
    app.post('/productUpdate', async function(req, res){
        const productId = req.body.id;

        axios
        .put(process.env.URL + 'product/' + productId, {
            // image: image,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
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

    // Delete Product
    app.post('/productDelete', async function(req, res){
        const productId = req.body.id;
        
        axios
        .delete(process.env.URL + 'product/' + productId)
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