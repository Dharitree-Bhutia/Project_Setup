const express = require('express')
const { createProduct, getProduct, updateProduct, deleteProduct } = require("../controller/product")
const Product = require ('../model/product')

const router = express.Router()

router.post('/product', createProduct)
router.get("/product",getProduct)
router.put("/product/:id",updateProduct)
router.delete("/product/:id", deleteProduct)



module.exports = router
