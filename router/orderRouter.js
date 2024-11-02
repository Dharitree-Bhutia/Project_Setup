const express = require ("express")
const Order = require("../model/order")
const { createdOrder, getOrder, getOrderByStatus, updateOrder, deleteOrder } = require("../controller/order")

const router = express.Router()

router. post("/order",createdOrder);
router.get("/order",getOrder);
router.get("/order/:statusType",getOrderByStatus);
router.put("/order/:id",updateOrder)
router.delete('/order/:id',deleteOrder)


module.exports = router