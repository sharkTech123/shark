import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllProductsCategory } from "../../../redux/features/productSlice";
import redCartImg from "../../../assets/images/redCartImg.png";
import redStarImg from "../../../assets/images/redStar.png";
import styled from "styled-components";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";
import styles from "./ProductShowCase.module.css";

const gradients = [
  "from-pink-200 via-pink-300 to-pink-400",
  "from-yellow-200 via-yellow-300 to-yellow-400",
  "from-green-200 via-green-300 to-green-400",
  "from-blue-200 via-blue-300 to-blue-400",
  "from-purple-200 via-purple-300 to-purple-400",
  "from-red-200 via-red-300 to-red-400",
  "from-indigo-200 via-indigo-300 to-indigo-400",
  "from-teal-200 via-teal-300 to-teal-400",
];

const StarWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 0.5rem;
`;

const ProductShowcase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [expandedProductId, setExpandedProductId] = useState(null);

  const {
    productsCategory: data = [],
    loadingCategory,
    loading,
  } = useSelector((state) => state.product);
  const myCart = useSelector((state) => state.cart.cart || []);

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  useEffect(() => {
    if (data?.length > 0 && !selectedCategory) {
      setSelectedCategory("manual_combined");
    }
  }, [data, selectedCategory]);

  const handleSelectCategory = (id) => {
    setSelectedCategory((prev) => (prev === id ? "" : id));
    setExpandedProductId(null); // reset expansion on category change
  };

  const handleIncrease = (id, qty = 1) => {
    dispatch(getIncreaseCart(id, qty));
  };

  const handleDecrease = (id, qty = 1) => {
    dispatch(getDecreaseCart(id, qty));
  };

  const handleAddToCart = (info, index) => {
    const productId = `${info._id}_${index}_${info.price}`;
    dispatch(
      getAddToCart(
        {
          id: productId,
          count: 1,
          service: info.name,
          price: info.price,
        },
        navigate
      )
    );
  };

  const getProductId = (product, idx) =>
    `${product._id}_${idx}_${product.price}`;

  const getCartItem = (product, idx) => {
    const id = getProductId(product, idx);
    return myCart.find((item) => item.id === id);
  };

  const filteredProducts = useMemo(() => {
    if (!data || data.length === 0) return [];

    if (selectedCategory === "manual_combined") {
      const offersManual =
        data.find((item) => item._id === "offers manuals")?.data || [];
      const manual = data.find((item) => item._id === "manual")?.data || [];

      // Add category info to each product
      const offersManualTagged = offersManual.map((p) => ({
        ...p,
        originCategory: "offers manual",
      }));
      const manualTagged = manual.map((p) => ({
        ...p,
        originCategory: "manual",
      }));

      return [...offersManualTagged, ...manualTagged];
    }

    if (selectedCategory === "automatic_combined") {
      const offersAutomatic =
        data.find((item) => item._id === "offers automatics")?.data || [];
      const automatic =
        data.find((item) => item._id === "automatic")?.data || [];

      const offersAutomaticTagged = offersAutomatic.map((p) => ({
        ...p,
        originCategory: "offers automatic",
      }));

      const automaticTagged = automatic.map((p) => ({
        ...p,
        originCategory: "automatic",
      }));

      return [...offersAutomaticTagged, ...automaticTagged];
    }

    // For normal categories, just tag with selectedCategory for consistency
    const selected = data.find((item) => item._id === selectedCategory);
    const tagged = (selected?.data || []).map((p) => ({
      ...p,
      originCategory: selectedCategory,
    }));
    return tagged;
  }, [data, selectedCategory]);

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 3);

  // Helper to detect special “offer” categories
  const isOfferCategory = (category) =>
    category === "offers manual" || category === "offers automatic";

  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-10 text-white-700"
          style={{ color: "white" }}
        >
          Explore Our Products
        </h2>

        {/* Category Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-8"
          id={styles.cateButtonsOnProductshowcase}
        >
          {[
            { id: "manual_combined", label: "📘 Manual" },

            { id: "automatic_combined", label: "🚘 Automatic" },
            { id: "intensive", label: "🏃 Intensive" },

            { id: "pass plus", label: "✅ Pass Plus" },
          ].map(({ id, label, special }) => {
            const isSelected = selectedCategory === id;

            const getBtnClasses = () => {
              if (special === "red") {
                return isSelected
                  ? "bg-gradient-to-r from-red-500 to-orange-400 text-white"
                  : "bg-white text-red-600 border border-red-300 hover:bg-red-50";
              }
              if (special === "purple") {
                return isSelected
                  ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
                  : "bg-white text-purple-700 border border-purple-300 hover:bg-purple-50";
              }
              return isSelected
                ? "bg-red-700 text-white"
                : "bg-white text-blue-700 border border-blue-700 hover:bg-blue-50";
            };

            return (
              <>
                <motion.button
                  id={styles.cateButtonsOnProductshowcaseBtn}
                  key={id}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelectCategory(id)}
                  className={`rounded-full font-semibold shadow-sm text-sm transition-all ${getBtnClasses()}`}
                >
                  {label}
                </motion.button>
              </>
            );
          })}
        </div>
        <>
          {" "}
          <p
            className="bg-white  px-3 py-1  shadow-md z-20"
            style={{
              maxWidth: "800px",
              margin: "1rem auto",
              textAlign: "center",
              borderRadius: "4px",
              color: "black",
            }}
          >
            A mandatory booking fee of{" "}
            <span style={{ color: "red" }}>£1.00 - £30 </span>
            applies to all orders per purchase. This fee will be shown clearly
            before you complete your purchase
          </p>
        </>
        {/* Product Grid */}
        <AnimatePresence>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {loadingCategory || loading ? (
              Array(6)
                .fill(0)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden p-4"
                  >
                    <Skeleton height={180} className="mb-4 rounded-lg" />
                    <Skeleton width={`80%`} height={20} className="mb-2" />
                    <Skeleton width={`60%`} height={18} className="mb-3" />
                    <Skeleton width={`50%`} height={30} />
                  </div>
                ))
            ) : visibleProducts?.length > 0 ? (
              visibleProducts.map((product, idx) => {
                const productId = getProductId(product, idx);
                const inCart = getCartItem(product, idx);
                const isExpanded = expandedProductId === productId;
                const toggleExpand = () => {
                  setExpandedProductId(isExpanded ? null : productId);
                };

                const isOffer = isOfferCategory(product.originCategory);

                return (
                  <motion.div
                    key={product._id || idx}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{
                      scale: 1.03,
                      rotate: isOffer ? [0, 1, -1, 0] : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`relative rounded-3xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl ${
                      isOffer
                        ? product.originCategory === "offers manual"
                          ? "bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 border-4 border-red-200"
                          : product.originCategory === "offers automatic"
                          ? "bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 border-4 border-red-200"
                          : ""
                        : `bg-gradient-to-br ${
                            gradients[idx % gradients.length]
                          }`
                    }`}
                  >
                    {/* Offer Badge */}
                    {isOffer && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 100,
                        }}
                        className="absolute top-3 left-3 bg-red-500 text-white font-bold px-3 py-1 rounded-full shadow-lg text-xs z-20 animate-bounce"
                      >
                        {product.originCategory === "offers manual"
                          ? "🔥 special offer"
                          : product.originCategory === "offers automatic"
                          ? "✨ special offer"
                          : ""}
                      </motion.div>
                    )}

                    {/* SALE Badge */}
                    {product.maxPrice && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 120,
                        }}
                        className="absolute top-3 right-1 bg-white text-blue-900 font-bold px-3 py-1 rounded-full shadow-md z-20"
                        style={{ fontSize: "1.1rem" }}
                      >
                        SALE{" "}
                        {Math.round(
                          ((product.maxPrice - product.price) /
                            product.maxPrice) *
                            100
                        )}
                        % OFF
                      </motion.div>
                    )}

                    <div className="relative">
                      <img
                        src={
                          `https://api.smartlearner.com/uploads/${product.image}` ||
                          redCartImg
                        }
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                        <motion.button
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#2563eb",
                            color: "#fff",
                          }}
                          className="mb-4 px-4 py-2 text-sm font-medium text-white bg-blue-600/80 rounded-full backdrop-blur-sm border border-white/30 transition-all"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <h4
                          className={`text-lg font-semibold text-gray-800 mb-1 ${
                            !isExpanded ? "truncate" : ""
                          }`}
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={toggleExpand}
                          className="ml-2 text-gray-600 hover:text-blue-700 transition"
                          title={isExpanded ? "Collapse" : "Expand"}
                        >
                          {isExpanded ? "▲" : "▼"}
                        </button>
                      </div>

                      <p
                        className={`text-sm text-gray-600 mb-2 ${
                          !isExpanded ? "line-clamp-2" : ""
                        }`}
                      >
                        {product.description || "No description available."}
                      </p>

                      <StarWrapper>
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            src={redStarImg}
                            alt="star"
                            style={{ width: 20, height: 20 }}
                          />
                        ))}
                      </StarWrapper>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col">
                          {product.maxPrice && (
                            <span
                              className="text-lg line-through font-bold text-gray-600"
                              style={{ fontSize: "1.4rem" }}
                            >
                              £{product.maxPrice}
                            </span>
                          )}
                          <motion.span
                            style={{ fontSize: "1.4rem" }}
                            className={`text-xl font-bold ${
                              isOffer ? "text-red-600" : "text-blue-700"
                            }`}
                            animate={
                              isOffer
                                ? {
                                    scale: [1, 1.1, 1],
                                  }
                                : {}
                            }
                            transition={
                              isOffer ? { repeat: Infinity, duration: 1.5 } : {}
                            }
                          >
                            £{product.price}
                          </motion.span>
                        </div>

                        {inCart ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleDecrease(productId)}
                              className="px-2 py-1 bg-red-500 text-white rounded"
                            >
                              -
                            </button>
                            <span>{inCart.count}</span>
                            <button
                              onClick={() => handleIncrease(productId)}
                              className="px-2 py-1 bg-green-500 text-white rounded"
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <motion.button
                            onClick={() => handleAddToCart(product, idx)}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#16a34a",
                              color: "#fff",
                            }}
                            className="px-4 py-2 text-sm font-medium border border-green-500 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all"
                          >
                            Add to Cart
                          </motion.button>
                        )}
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-blue-400/50 transition-all duration-300 pointer-events-none" />
                  </motion.div>
                );
              })
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No products available.
              </p>
            )}
          </div>
        </AnimatePresence>

        {/* Show More Button */}
        {filteredProducts.length > 3 && (
          <div className="flex justify-center mt-10">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(159, 59, 246, 0.6)",
              }}
              style={{ border: "none" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll((prev) => !prev)}
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-gray-700 transition-all"
            >
              {showAll ? "Show Less" : "Show More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
