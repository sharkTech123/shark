const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' }
});

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
module.exports = ProductCategory;