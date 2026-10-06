const ProductSpecial = require('../models/productSpecialModel');
const ProductCategory = require('../models/productCategoryModel');

class ProductSpecialService {
  async createProductAsync(productData) {
    try {
      const product = await ProductSpecial.create(productData);
      const totalCount = await ProductSpecial.countDocuments();
      const resultObject = {
        message: "Product Added Successfully",
        statusCode: 201,
        success: true,
        data: { product, totalCount }
      };
      return resultObject;
    } catch (err) {

      const resultObject = {
        message: "Product add failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
  }

  async getProductsAsync(pageNumber, pageSize, query) {
    try {
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ name: regex }, { price: regex }];
      }


      let aggr = [
        {
          '$skip': skip
        }, {
          '$limit': pageSize || 20
        }, {
          '$lookup': {
            'from': 'areas', 
            'localField': 'areaIncluded', 
            'foreignField': '_id', 
            'as': 'areaIncludedresult'
          }
        }, {
          '$unwind': {
            'path': '$areaIncludedresult', 
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$lookup': {
            'from': 'postcodes', 
            'localField': 'postcode', 
            'foreignField': '_id', 
            'as': 'postcoderesult'
          }
        }, {
          '$unwind': {
            'path': '$postcoderesult', 
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$lookup': {
            'from': 'categories', 
            'localField': 'category', 
            'foreignField': '_id', 
            'as': 'categoryresult'
          }
        }, {
          '$unwind': {
            'path': '$categoryresult', 
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$addFields': {
            'category': '$categoryresult.name', 
            'postcode': '$postcoderesult.postcode', 
            'areaIncluded': '$areaIncludedresult.name'
          }
        }
      ]
      const totalCount = await ProductSpecial.countDocuments(filter);
      const products = await ProductSpecial.aggregate(aggr);
      const resultObject = {
        message: "Products fetched successfully",
        statusCode: 200,
        success: true,
        data: { products, totalCount },
      };
      return resultObject;
    } catch (err) {

      const resultObject = {
        message: "Could not fetch products",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }
  async getProductsCategoryAsync(pageNumber, pageSize, query) {
    try {
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ name: regex }, { price: regex }];
      }


      let aggr = [
        // {
        //   '$skip': skip
        // }, {
        //   '$limit': pageSize || 20
        // }, 
        {
          '$group': {
            '_id': '$Category', 
            'shortInfo':{
              '$first':"$Category"
            },
            'title':{
              '$first':"$Category"
            },
            'id':{
              '$first':"$_id"
            },
            'fullInfo': {
              '$push': {
                'itemName': '$name', 
                'itemPrice': '$price', 
                'itemId': {
                  '$toString':'$_id'
                }
              }
            }
          }
        }
      ]
      const totalCount = await ProductSpecial.countDocuments(filter);
      const products = await ProductSpecial.aggregate(aggr);


      const resultObject = {
        message: "Products fetched successfully",
        statusCode: 200,
        success: true,
        data: { products, totalCount },
      };
      return resultObject;
    } catch (err) {

      const resultObject = {
        message: "Could not fetch products",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async getProductByIdAsync(productId) {
    try {
      const product = await ProductSpecial.findById(productId);
      return product;
    } catch (err) {
      throw new Error("Could not fetch product");
    }
  }

  async updateProductAsync(productId, productData) {


    try {
      const product = await ProductSpecial.findByIdAndUpdate(productId, productData, { new: true });
      const totalCount = await ProductSpecial.countDocuments();
      const resultObject = {
        message: "Product Updated Successfully",
        statusCode: 201,
        success: true,
        data: { product, totalCount }
      };
      return resultObject;
    } catch (err) {

      const resultObject = {
        message: "Product Updation failed",
        statusCode: 400,
        success: false,
        data: null
      };
      return resultObject;
    }
    try {
      return product;
    } catch (err) {
      throw new Error("Could not update product");
    }
  }

  async deleteProductAsync(productId) {
    try {
      await ProductSpecial.findByIdAndDelete(productId);
    } catch (err) {
      throw new Error("Could not delete product");
    }
  }
}

module.exports = new ProductSpecialService();
