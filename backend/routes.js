const express = require('express')

const multer = require('multer')
const uploadConfig = require('./config/upload.js')

const ProductController = require('./controllers/ProductController')
const CategoryController = require('./controllers/CategoryController')
const UserController = require('./controllers/UserController')

const routes = express.Router()
const uploadMiddleware = multer(uploadConfig)

// Funcionalidades de Produtos
routes.get('/products', ProductController.index)
routes.get('/products/:product_id', ProductController.show)

routes.post('/products', uploadMiddleware.single('thumbnail'), ProductController.store)
routes.put('/products/:product_id', uploadMiddleware.single('thumbnail'), ProductController.update)
routes.delete('/products/:product_id', ProductController.destroy)

// Funcionalidades de Categorias
routes.get('/categories', CategoryController.index)
routes.get('/categories/:category_id', CategoryController.show)

routes.post('/categories', CategoryController.store)
routes.put('/categories/:category_id', CategoryController.update)
routes.delete('/categories/:category_id', CategoryController.destroy)

// Funcionalidades de Usuários
routes.get('/users', UserController.index)
routes.get('/users/:user_id', UserController.show)

routes.post('/users', UserController.store)

module.exports = routes