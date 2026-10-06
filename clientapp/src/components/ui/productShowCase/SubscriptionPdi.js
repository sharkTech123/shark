import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../../redux/features/cartSlice";
import { getAllProductsCategory } from "../../../redux/features/productSlice";
import redStarImg from "../../../assets/images/redStar.png";
import redCartImg from "../../../assets/images/pdi.png";
import styles from "./ProductShowCase.module.css";

const StarWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 0.5rem;
`;

const gradients = [
  "from-blue-100 to-blue-200",
  "from-green-100 to-green-200",
  "from-pink-100 to-pink-200",
  "from-yellow-100 to-yellow-200",
  "from-purple-200 via-purple-300 to-purple-400",
  "from-red-200 via-red-300 to-red-400",
];

// Static PDI Products
const pdiProducts = [
  {
    title: "Complete Course online",
    description:
      "A complete instructor training course covering all parts of the ADI qualification.",
    price: "499.99",
    navigatePath: "/driving-instructor-training-full-course",
  },
  {
    title: "Online Part 1",
    description:
      "Theory Portal for ADI Part 1 with mock tests and bonus quizzes.",
    price: "29.99",
    navigatePath: "/driving-instructor-training-part-one",
  },
  {
    title: "Online Part 2",
    description:
      "Course for ADI Part 2 exam preparation with practical exercises and quizzes.",
    price: "149.99",
    navigatePath: "/driving-instructor-training-part-two",
  },
  {
    title: "Online Part 3",
    description:
      "Prepare confidently for ADI Part 3 with interactive quizzes and modules.",
    price: "399.99",
    navigatePath: "/driving-instructor-training-part-three",
  },
];

export default function SubscriptionPdi() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("pdi"); // "pdi"
  const [showAll, setShowAll] = useState(false);

  const {
    productsCategory = [],
    loadingCategory,
    loading,
  } = useSelector((state) => state.product);
  const myCart = useSelector((state) => state.cart.cart || []);

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  const workshopCategory = useMemo(
    () => productsCategory.find((item) => item._id === "workshop"),
    [productsCategory]
  );

  const workshopProducts = workshopCategory?.data || [];

  const visibleworkshopProducts = showAll
    ? workshopProducts
    : workshopProducts.slice(0, 3);

  const getProductId = (product, idx) =>
    `${product._id}_${idx}_${product.price}`;
  const getCartItem = (product, idx) => {
    const id = getProductId(product, idx);
    return myCart.find((item) => item.id === id);
  };

  const handleAddToCart = (info, idx) => {
    const id = `${info._id}_${idx}_${info.price}`;
    dispatch(
      getAddToCart(
        {
          id,
          count: 1,
          service: info.name,
          price: info.price,
        },
        navigate
      )
    );
  };

  const handleIncrease = (id) => dispatch(getIncreaseCart(id));
  const handleDecrease = (id) => dispatch(getDecreaseCart(id));

  const [expandedProductId, setExpandedProductId] = useState(null);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center gap-4 mb-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab("pdi")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === "pdi"
                ? "bg-blue-700 text-white"
                : "bg-white border border-blue-700 text-black-700"
            }`}>
            PDI Packages Online
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab("workshop")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === "workshop"
                ? "bg-blue-700 text-white"
                : "bg-white border border-blue-700 text-blue-700"
            }`}>
            ADI/PDI Workshops
          </motion.button>
        </div>

        {/* Content Rendering */}
        {activeTab === "pdi" ? (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pdiProducts.map((product, idx) => {
              const productId = getProductId(product, idx);

              const isExpanded = expandedProductId === productId;

              const toggleExpand = () => {
                setExpandedProductId(isExpanded ? null : productId);
              };

              return (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br ${
                    gradients[idx % gradients.length]
                  }`}>
                  <div className="relative">
                    <img
                      src={redCartImg}
                      alt="product"
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <h4
                        className={`text-lg font-semibold text-gray-800 mb-1 ${
                          !isExpanded ? "truncate" : ""
                        }`}>
                        {product.title}
                      </h4>
                      <button
                        onClick={toggleExpand}
                        className="ml-2 text-gray-600 hover:text-blue-700 transition"
                        title={isExpanded ? "Collapse" : "Expand"}>
                        {isExpanded ? "▲" : "▼"}
                      </button>
                    </div>
                    <p
                      className={`text-sm text-gray-500 mb-2 ${
                        !isExpanded ? "line-clamp-2" : ""
                      }`}>
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
                      <span
                        className="text-blue-600 font-bold text-md"
                        style={{ fontSize: "1.4rem" }}>
                        £ {product.price}
                      </span>
                      <motion.button
                        onClick={() => navigate(product.navigatePath)}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#16a34a",
                          color: "#fff",
                        }}
                        className="px-4 py-2 text-sm font-medium border border-green-500 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all">
                        View Course
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <>
            {" "}
            <div
              style={{
                maxWidth: "800px",
                margin: "0px auto",
                textAlign: "center",
              }}>
              {" "}
              <p
                className="bg-white  px-3 py-1  shadow-md z-20"
                style={{
                  borderRadius: "4px",
                  color: "black",
                }}>
                A mandatory booking fee of{" "}
                <span style={{ color: "red" }}>£1.00 - £30 </span>
                applies to all orders per purchase. This fee will be shown
                clearly before you complete your purchase
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {loadingCategory || loading
                ? Array(6)
                    .fill(0)
                    .map((_, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden p-4">
                        <Skeleton height={180} className="mb-4 rounded-lg" />
                        <Skeleton width={`80%`} height={20} className="mb-2" />
                        <Skeleton width={`60%`} height={18} className="mb-3" />
                        <Skeleton width={`50%`} height={30} />
                      </div>
                    ))
                : visibleworkshopProducts.map((product, idx) => {
                    const productId = getProductId(product, idx);
                    const inCart = getCartItem(product, idx);

                    const isExpanded = expandedProductId === productId;

                    const toggleExpand = () => {
                      setExpandedProductId(isExpanded ? null : productId);
                    };

                    return (
                      <motion.div
                        key={product._id || idx}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className={`relative rounded-3xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br ${
                          gradients[idx % gradients.length]
                        }`}>
                        <div className="relative">
                          <img
                            id={styles.redCartImg12}
                            src={`https://api.smartlearner.com/uploads/${product.image}`}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-t-2xl"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-start justify-between">
                            <h4
                              className={`text-lg font-semibold text-gray-800 mb-1 ${
                                !isExpanded ? "truncate" : ""
                              }`}>
                              {product.name}
                            </h4>
                            <button
                              onClick={toggleExpand}
                              className="ml-2 text-gray-600 hover:text-blue-700 transition"
                              title={isExpanded ? "Collapse" : "Expand"}>
                              {isExpanded ? "▲" : "▼"}
                            </button>
                          </div>
                          <p
                            className={`text-sm text-gray-500 mb-2 ${
                              !isExpanded ? "line-clamp-2" : ""
                            }`}>
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
                            <span
                              className="text-blue-600 font-bold text-md"
                              style={{ fontSize: "1.4rem" }}>
                              £ {product.price || "N/A"}
                            </span>
                            {inCart ? (
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleDecrease(productId)}
                                  className="px-2 py-1 bg-red-500 text-white rounded">
                                  -
                                </button>
                                <span>{inCart.count}</span>
                                <button
                                  onClick={() => handleIncrease(productId)}
                                  className="px-2 py-1 bg-green-500 text-white rounded">
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
                                className="px-4 py-2 text-sm font-medium border border-green-500 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all">
                                Add to Cart
                              </motion.button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
            </div>
          </>
        )}

        {/* Show More Button */}
        {activeTab === "workshop" && workshopProducts.length > 3 && (
          <div className="flex justify-center mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setShowAll((prev) => !prev)}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all">
              {showAll ? "Show Less" : "Show More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
