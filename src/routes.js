const { Router } = require('express');

const routes = Router();

const PubController = require('./controllers/PubController');

routes.get('/pubs', PubController.index);
routes.post('/pubs', PubController.store);

module.exports = routes;