const { required } = require("joi");
const mongoose = require("mongoose");

const productSpecialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    Category: { type: String, required: true },
    createdOn: { type: Date, required: true, default: Date.now },
    isUpdated: { type: Boolean, required: true, default: false },
    modifiedOn: { type: Date },
    isDeleted: { type: Boolean, required: true, default: false },
    deletedOn: { type: Date },
});

const ProductSpecial = mongoose.model("productSpecial", productSpecialSchema);

module.exports = ProductSpecial;