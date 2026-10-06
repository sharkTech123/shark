const { required } = require("joi");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
    image: { type: String },
    price: { type: Number, required: true },
    // stock: { type: Number, required: true },
    duration: { type: Number },
    experience: { type: String },
    transmission: { type: String},
    postcode: { type: mongoose.Schema.Types.ObjectId, ref: 'postcodes' },
    areaIncluded: { type: mongoose.Schema.Types.ObjectId, ref: 'areas' },
    rating: { type: Number},
    description: { type: String},
    createdOn: { type: Date, required: true, default: Date.now },
    isUpdated: { type: Boolean, required: true, default: false },
    modifiedOn: { type: Date },
    isDeleted: { type: Boolean, required: true, default: false },
    deletedOn: { type: Date },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;