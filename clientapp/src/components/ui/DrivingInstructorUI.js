import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Plus, Minus, Star, Layers } from "lucide-react";
import Img from "../../assets/images/pdi.png";
import { useNavigate } from "react-router-dom";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import { getAllProductsCategory } from "../../redux/features/productSlice";

/**
 * FIXED & VERIFIED STRUCTURE
 */

const CATEGORY_ORDER = [
  "instructor training part one",
  "instructor training part two",
  "workshop",
  "instructor training part three",
];

const PART_THREE_ROUTES = {
  "Complete Course": "/driving-instructor-training-full-course",
  "ONLINE Part 1": "/driving-instructor-training-part-one",
  "ONLINE Part 2": "/driving-instructor-training-part-two",
  "ONLINE Part 3": "/driving-instructor-training-part-three",
};

const CATEGORY_LABELS = {
  "instructor training part one": "Full Package Training",
  "instructor training part two": "Bolt On Training",
  workshop: "Workshops",
  "instructor training part three": "Online Training",
};

export default function CategoryProductsUI() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productsCategory = [] } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart.cart || []);

  const [activeCategory, setActiveCategory] = useState(
    "instructor training part one",
  );
  const [openDesc, setOpenDesc] = useState({});
  const [showMore, setShowMore] = useState({});

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  const filteredCategories = useMemo(() => {
    return CATEGORY_ORDER.map((key) =>
      productsCategory.find((c) => c._id === key),
    ).filter(Boolean);
  }, [productsCategory]);

  const allActiveProducts = useMemo(() => {
    return filteredCategories.find((c) => c._id === activeCategory)?.data || [];
  }, [filteredCategories, activeCategory]);

  const activeProducts = useMemo(() => {
    if (!showMore[activeCategory]) {
      return allActiveProducts.slice(0, 3);
    }
    return allActiveProducts;
  }, [allActiveProducts, showMore, activeCategory]);

  const cartItem = (product, index) => {
    const id = `${product._id}_${index}_${product.price}`;
    return cart.find((c) => c.id === id);
  };

  const addToCart = (product, index) => {
    const id = `${product._id}_${index}_${product.price}`;
    dispatch(
      getAddToCart(
        {
          id,
          count: 1,
          service: product.name,
          price: product.price,
        },
        navigate,
      ),
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Instructor Training</h2>
        <p className="text-gray-500 mt-3">
          Choose a category to explore available products
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filteredCategories.map((cat) => (
          <motion.button
            key={cat._id}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat._id)}
            className={`px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all ${
              activeCategory === cat._id
                ? "bg-black text-white shadow-lg"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <Layers size={16} />
            {CATEGORY_LABELS[cat._id] || cat._id}
          </motion.button>
        ))}
      </div>
      <div
        style={{
          maxWidth: "800px",
          margin: "0px auto",
          textAlign: "center",
        }}
      >
        {" "}
        <p
          className="bg-white  px-3 py-1  shadow-md z-20"
          style={{
            borderRadius: "4px",
            color: "black",
          }}
        >
          A mandatory booking fee of{" "}
          <span style={{ color: "red" }}>£1.00 - £30 </span>
          applies to all orders per purchase. This fee will be shown clearly
          before you complete your purchase
        </p>
      </div>
      {/* Products */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {activeProducts.map((product, index) => {
            const item = cartItem(product, index);
            const isPartThree =
              activeCategory === "instructor training part three";

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Header */}
                {/* Image */}
                <div className="w-full h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={Img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="py-3 px-3 border-b">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="py-3 px-3 text-sm text-gray-600 min-h-[90px]">
                  {openDesc[`${activeCategory}_${index}`]
                    ? product.description
                    : product.description.split(" ").slice(0, 20).join(" ") +
                      "..."}

                  <button
                    onClick={() =>
                      setOpenDesc((prev) => ({
                        ...prev,
                        [`${activeCategory}_${index}`]:
                          !prev[`${activeCategory}_${index}`],
                      }))
                    }
                    className="mt-2 block text-xs font-medium text-black px-1"
                  >
                    {openDesc[`${activeCategory}_${index}`] ? "Hide " : "Show"}
                  </button>
                </div>

                {/* Footer */}
                <div className="py-3 px-4 flex items-center justify-between">
                  <span className="text-xl font-bold">£{product.price}</span>

                  {isPartThree ? (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        navigate(PART_THREE_ROUTES[product.name] || "/")
                      }
                      className="px-4 py-2 rounded-full bg-black text-white text-sm"
                    >
                      View
                    </motion.button>
                  ) : !item ? (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(product, index)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm"
                    >
                      <ShoppingCart size={16} /> Add
                    </motion.button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => dispatch(getDecreaseCart(item.id, 1))}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-medium">{item.count}</span>
                      <button
                        onClick={() => dispatch(getIncreaseCart(item.id, 1))}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Show More */}
      {allActiveProducts.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() =>
              setShowMore((prev) => ({
                ...prev,
                [activeCategory]: !prev[activeCategory],
              }))
            }
            className="px-6 py-2 rounded-full bg-black text-white text-sm"
          >
            {showMore[activeCategory] ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
