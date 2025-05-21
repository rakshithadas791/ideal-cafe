const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('./controllers/productController');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', auth, createProduct);
router.put('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;