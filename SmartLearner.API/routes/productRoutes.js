const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const productController = require("../controllers/productController");
const postcodeController = require("../controllers/postcodeController");
const areaController = require("../controllers/areaController");
const { requireAuth } = require("../middlewares/authMiddleware");
const multer = require("multer");
const { imageSaverMiddleware } = require("../middlewares/imageSaverMiddleware");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination directory where files will be saved
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename for the uploaded file
  },
});

// Initialize multer with storage configuration
const upload = multer({ storage: storage });

//Category Routes
router.post("/add-category", categoryController.createCategory);
router.get("/all-categories", categoryController.getCategories);
router.get("/categorylist", categoryController.getCategoryList);
router.get("/category/:id", categoryController.getCategoryById);
router.post(
  "/update-category/:id",
  upload.none(),
  categoryController.updateCategory
);
router.post(
  "/delete-category/:id",
  upload.none(),
  categoryController.deleteCategory
);

//Postcode Routes

router.post("/add-postcode", upload.none(), postcodeController.createPostcode);
router.get("/all-postcodes", postcodeController.getPostcodes);
router.get("/postcodelist", postcodeController.getPostcodeList);
router.get("/postcode/:id", postcodeController.getPostcodeById);
router.post(
  "/update-postcode/:id",
  upload.none(),
  postcodeController.updatePostcode
);
router.post(
  "/delete-postcode/:id",
  upload.none(),
  postcodeController.deletePostcode
);
// Area Routes

router.post("/add-area", upload.none(), areaController.createArea);
router.get("/all-areas", areaController.getAreas);
router.get("/arealist", areaController.getAreaList);
router.get("/area/:id", areaController.getAreaById);
router.post("/update-area/:id", upload.none(), areaController.updateArea);
router.post("/delete-area/:id", upload.none(), areaController.deleteArea);

//Product Routes
router.post(
  "/add-product",
  imageSaverMiddleware,
  requireAuth,
  productController.createProduct
);
router.post(
  "/edit-product/:id",
  imageSaverMiddleware,
  requireAuth,
  productController.updateProduct
);
router.get("/get-products", upload.none(), productController.getProducts);
router.get(
  "/get-productsCategory",
  upload.none(),
  productController.getProductsCategory
);
router.get(
  "/get-products/:id",
  upload.none(),
  requireAuth,
  productController.getProductById
);
router.get(
  "/delete-product/:id",
  upload.none(),
  requireAuth,
  productController.deleteProduct
);

module.exports = router;
