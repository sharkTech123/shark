// src/pages/courses/CoursesPage.jsx
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./CoursesPage.css";

import { getAllProductsCategory } from "../../../redux/features/productSlice";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../../redux/features/cartSlice";
import { icons } from "./ManualCourseSectionConfig";

const { Clock } = icons;

/* ========================================================================
   CONFIG
   ======================================================================== */

// Categories that must never be rendered on this page.
const EXCLUDED_CATEGORIES = [
  "businessmentoring",
  "instructor training part three",
  "customized products",
];

/* ========================================================================
   HELPERS
   ======================================================================== */

// "instructor training part one" -> "Instructor Training Part One"
function titleCase(str = "") {
  return str
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// "Instructor Training Part One" -> "instructor-training-part-one"
function slugify(str = "") {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatDuration(duration) {
  if (!duration || duration <= 0) return null;
  return `${duration} ${duration === 1 ? "hour" : "hours"}`;
}

// A course counts as "Popular" if it's discounted (has a maxPrice) or is
// top-rated (rating 5) — this data doesn't carry an explicit flag.
function isPopular(product) {
  return Boolean(product.maxPrice) || product.rating >= 5;
}

/* ========================================================================
   MAIN PAGE
   ======================================================================== */
export default function CoursesPage() {
  const dispatch = useDispatch();

  const {
    productsCategory: data = [],
    loadingCategory,
    loading,
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  const visibleCategories = useMemo(() => {
    return (data || []).filter((category) => {
      const key = (category._id || "").trim().toLowerCase();
      return !EXCLUDED_CATEGORIES.includes(key);
    });
  }, [data]);

  return (
    <div className="coursePageScope">
      <main className="flex-1">
        <CoursesHero />

        {(loadingCategory || loading) && visibleCategories.length === 0 ? (
          <div className="coursesStateMsg">Loading courses…</div>
        ) : visibleCategories.length === 0 ? (
          <div className="coursesStateMsg">No courses available right now.</div>
        ) : (
          visibleCategories.map((category) => (
            <CategorySection key={category._id} category={category} />
          ))
        )}
      </main>
    </div>
  );
}

/* ========================================================================
   HERO
   ======================================================================== */
function CoursesHero() {
  return (
    <section className="coursesHeroSection">
      <div className="courseContainer">
        <span className="sectionEyebrow">Our courses</span>
        <h1 className="coursesHeroTitle">Find the right course for you.</h1>
        <p className="coursesHeroDesc">
          Pick a category, see what&apos;s included, and book what fits. Every
          course is delivered by a fully-qualified DVSA Approved Driving
          Instructor.
        </p>
      </div>
    </section>
  );
}

/* ========================================================================
   CATEGORY SECTION
   ======================================================================== */
function CategorySection({ category }) {
  const products = category.data || [];
  if (products.length === 0) return null;

  const heading = titleCase(category._id);
  const subheading = products[0]?.categoryresult?.description
    ? titleCase(products[0].categoryresult.description)
    : null;

  return (
    <section className="courseSection" id={slugify(category._id)}>
      <div className="courseContainer">
        <h2 className="courseSectionHeading">{heading}</h2>
        {subheading && <p className="courseSectionSub">{subheading}</p>}

        <div className="courseGrid">
          {products.map((product, i) => (
            <CourseCard key={product._id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   COURSE CARD (with add-to-cart / quantity control)
   ======================================================================== */
function CourseCard({ product, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myCart = useSelector((state) => state.cart.cart || []);

  const durationLabel = formatDuration(product.duration);
  const popular = isPopular(product);

  // Same id pattern used across the app: `${_id}_${index}_${price}`
  const productId = `${product._id}_${index}_${product.price}`;
  const inCart = myCart.find((item) => item.id === productId);

  const handleAddToCart = () => {
    dispatch(
      getAddToCart(
        {
          id: productId,
          count: 1,
          service: product.name,
          price: product.price,
        },
        navigate,
      ),
    );
  };

  const handleIncrease = () => dispatch(getIncreaseCart(productId, 1));
  const handleDecrease = () => dispatch(getDecreaseCart(productId, 1));

  return (
    <div className="courseCard">
      <div className="courseCardTopRow" style={{ marginBottom: "1rem" }}>
        <span className="coursePill">
          {product.category === "instructor training part one" ||
          product.category === "instructor training part two"
            ? "Instructor"
            : product.category}
        </span>

        {popular && <span className="pkgTag">Popular</span>}
      </div>

      <h3 className="courseCardTitle">{product.name?.trim()}</h3>

      {product.description && (
        <p className="courseCardDesc">{product.description}</p>
      )}

      <div className="courseCardBottomRow">
        <div>
          <div className="coursePriceRow">
            <span className="courseCardPrice">£{product.price}</span>
            {product.maxPrice && (
              <span className="coursePriceOriginal">£{product.maxPrice}</span>
            )}
          </div>

          {durationLabel && (
            <div className="courseCardDuration">
              <Clock className="h-3 w-3" />
              {durationLabel}
            </div>
          )}
        </div>
      </div>

      {inCart ? (
        <div className="courseCardQty">
          <button
            type="button"
            onClick={handleDecrease}
            className="courseCardQtyBtn courseCardQtyBtnMinus"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span className="courseCardQtyValue">{inCart.count}</span>

          <button
            type="button"
            onClick={handleIncrease}
            className="courseCardQtyBtn courseCardQtyBtnPlus"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="courseCardAddBtn"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
