const express = require('express')
const routes = express.Router()

const ProductController = require('./controller/ProductController')

routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.post('/products', ProductController.store)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)
// pra criar alguma coisa, usa o post
// pra mostrar só, usa o get

module.exports = routes