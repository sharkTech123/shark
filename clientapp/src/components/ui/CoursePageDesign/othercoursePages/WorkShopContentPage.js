// src/pages/courses/CoursePageDesign.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "../ManualCoursePageDesign.css";

import { getCourseBySlug } from "../../../../redux/features/manualCoursePageSlice";
import { getAllProductsCategory } from "../../../../redux/features/productSlice";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../../../redux/features/cartSlice";

import { icons } from "../ManualCourseSectionConfig";
import { useRef } from "react";

const {
  ArrowLeft,
  ArrowRight,
  Clock,
  ShieldCheck,
  CircleCheck,
  Award,
  Star,
  MapPin,
} = icons;

const ICON_MAP = {
  Clock,
  ShieldCheck,
  CircleCheck,
  Award,
  Star,
  MapPin,
};

/* ========================================================================
   MAIN PAGE
   ======================================================================== */
export default function WorkShopContentPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // //////////////////////////////////courasle//////////////////

  const { course, courseLoading } = useSelector((s) => s.manualCoursePage);

  useEffect(() => {
    dispatch(getCourseBySlug("workshop"));
  }, [dispatch]);

  //   ===========product details for add to cart ================
  const {
    productsCategory: data = [],
    loadingCategory,
    loading,
  } = useSelector((state) => state.product);

  const myCart = useSelector((state) => state.cart.cart || []);

  // Get Manual category products
  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  const manualCategory = data.find((category) => category._id === "workshop");

  
  // Find Beginners Packages
  // Get only hour-based Manual products
  const hourPackages =
    manualCategory?.data?.filter((product) => {
      const name = product.name?.trim().toLowerCase();

      return (
        name.includes("lessons") ||
        name.includes("reading") ||
        name.includes("beyond")
      );
    }) || [];



  const getProductCartId = (product, index) =>
    `${product._id}_${index}_${product.price}`;

  const handleIncrease = (id) => {
    dispatch(getIncreaseCart(id, 1));
  };

  const handleDecrease = (id) => {
    dispatch(getDecreaseCart(id, 1));
  };

  const handleAddToCart = (product, productId) => {
    if (!product) return;

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

  ///////////////////////////////crousel///////////
  const [activeIndex, setActiveIndex] = useState(0);

  const moveCarousel = (direction) => {
    setActiveIndex((prev) => {
      const nextIndex = prev + direction;

      if (nextIndex < 0) return 0;
      if (nextIndex >= hourPackages.length) return hourPackages.length - 1;

      return nextIndex;
    });
  };

  useEffect(() => {
    const handleWheel = (e) => {
      // Only handle vertical scrolling when cursor is over the carousel
      const carousel = e.target.closest(".coursePackagesCarousel");

      if (!carousel) return;

      e.preventDefault();

      if (Math.abs(e.deltaY) < 10) return;

      if (e.deltaY > 0) {
        moveCarousel(1);
      } else {
        moveCarousel(-1);
      }
    };

    const carousel = document.querySelector(".coursePackagesCarousel");

    if (carousel) {
      carousel.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("wheel", handleWheel);
      }
    };
  }, [hourPackages.length]);

  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  useEffect(() => {
    if (
      !hourPackages?.length ||
      hourPackages.length <= 1 ||
      isCarouselHovered
    ) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        return prev >= hourPackages.length - 1 ? 0 : prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [hourPackages, isCarouselHovered]);

  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartY.current === null) return;

    const touchEndY = e.changedTouches[0].clientY;
    const difference = touchStartY.current - touchEndY;

    if (Math.abs(difference) > 40) {
      if (difference > 0) {
        // Swipe up → next product
        moveCarousel(1);
      } else {
        // Swipe down → previous product
        moveCarousel(-1);
      }
    }

    touchStartY.current = null;
  };

  //   //////////////////////////

  if (courseLoading && !course) {
    return (
      <div className="coursePageScope min-h-screen flex items-center justify-center">
        <div style={{ color: "var(--color-muted)",height:'100vh', display:'flex', alignItems:'center',justifyContent:'center' }}>Loading course…</div>
      </div>
    );
  }

  if (!course) return null;

  return (
    <div className="coursePageScope">
      <main className="flex-1">
        <BackLink data={course.backLink} />
        <CourseHero
          course={course}
          hourPackages={hourPackages}
          loadingCategory={loadingCategory}
          loading={loading}
          handleAddToCart={handleAddToCart}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          getProductCartId={getProductCartId}
          myCart={myCart}
          moveCarousel={moveCarousel}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setIsCarouselHovered={setIsCarouselHovered}
          handleTouchStart={handleTouchStart}
          handleTouchEnd={handleTouchEnd}
        />

        <RelatedCourses data={course} />
      </main>
    </div>
  );
}

/* ========================================================================
   BACK LINK
   ======================================================================== */
function BackLink({ data }) {
  return (
    <section className="coursePad coursePadTop">
      <div className="courseContainer">
        <Link to={data?.link || "/courses"} className="courseBackLink">
          <ArrowLeft className="h-4 w-4" />
          {data?.text || "Back to courses"}
        </Link>
      </div>
    </section>
  );
}

/* ========================================================================
   HERO (title, description, includes, info cards, pricing sidebar)
   ======================================================================== */
function CourseHero({
  course,
  hourPackages,
  loadingCategory,
  loading,
  handleAddToCart,
  handleIncrease,
  handleDecrease,
  getProductCartId,
  myCart,
  moveCarousel,
  activeIndex,
  setActiveIndex,
  setIsCarouselHovered,
  handleTouchStart,
  handleTouchEnd,
}) {
  return (
    <section className="coursePad">
      <div className="courseContainer">
        <div className="courseHeroGrid">
          <div>
            {course.category && (
              <span className="coursePill" style={{ marginBottom: "1rem" }}>
                {course.category}
              </span>
            )}

            <h1 className="courseTitle">{course.title}</h1>

            {course.description && (
              <p className="courseDescription">{course.description}</p>
            )}

            {course.includes?.length > 0 && (
              <div className="courseIncludesBlock">
                <span className="sectionEyebrow">
                  {course.includesLabel || "What's included"}
                </span>
                <ul className="courseIncludesList">
                  {course.includes.map((item, i) => (
                    <li key={i} className="courseIncludesItem">
                      <CircleCheck className="courseCheckIcon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.infoCards?.length > 0 && (
              <div className="courseInfoCardsGrid">
                {course.infoCards.map((card, i) => {
                  const Icon = ICON_MAP[card.icon] || Clock;
                  return (
                    <div key={i} className="courseInfoCard">
                      <Icon className="courseInfoIcon" />
                      <div className="courseInfoLabel">{card.label}</div>
                      <div className="courseInfoValue">{card.value}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <aside>
            {loadingCategory || loading ? (
              <div className="coursePriceCard">
                <p>Loading...</p>
              </div>
            ) : hourPackages?.length > 0 ? (
              <div className="courseCarouselWrapper">
                {/* UP BUTTON */}
                <button
                  type="button"
                  className="courseCarouselArrow courseCarouselArrowUp"
                  onClick={() => moveCarousel(-1)}
                  disabled={activeIndex === 0}
                >
                  ↑
                </button>

                <div
                  className="coursePackagesCarousel"
                  onMouseEnter={() => setIsCarouselHovered(true)}
                  onMouseLeave={() => setIsCarouselHovered(false)}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="coursePackagesTrack">
                    {hourPackages.map((product, index) => {
                      const productId = getProductCartId(product, index);
                      const inCart = myCart.find(
                        (item) => item.id === productId,
                      );

                      const position = index - activeIndex;

                      let positionClass = "";

                      if (position === 0) {
                        positionClass = "isActive";
                      } else if (position === -1) {
                        positionClass = "isAbove";
                      } else if (position === 1) {
                        positionClass = "isBelow";
                      } else {
                        positionClass = "isHidden";
                      }

                      return (
                        <div
                          key={product._id}
                          className={`courseCarouselItem ${positionClass}`}
                          onClick={() => setActiveIndex(index)}
                        >
                          <div className="coursePriceCard">
                            <div className="coursePriceRow">
                              <span className="coursePrice">
                                £{product.price}
                              </span>

                              {product.maxPrice && (
                                <span className="coursePriceOriginal">
                                  £{product.maxPrice}
                                </span>
                              )}
                            </div>

                            {product.maxPrice && (
                              <span className="courseSavingsBadge">
                                SAVE £
                                {(product.maxPrice - product.price).toFixed(2)}
                              </span>
                            )}

                            <div className="coursePackageName">
                              {product.name}
                            </div>

                            {product.description && (
                              <p className="courseFootnote">
                                {product.description}
                              </p>
                            )}

                            {inCart ? (
                              <div className="courseQuantityControl">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDecrease(productId);
                                  }}
                                  className="courseQuantityBtn courseQuantityBtnMinus"
                                >
                                  −
                                </button>

                                <span className="courseQuantityValue">
                                  {inCart.count}
                                </span>

                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleIncrease(productId);
                                  }}
                                  className="courseQuantityBtn courseQuantityBtnPlus"
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                className="btnPrimary courseCartBtn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAddToCart(product, productId);
                                }}
                              >
                                Add to cart
                              </button>
                            )}

                            <Link
                              to="/contact-us"
                              className="block"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <button
                                type="button"
                                className="btnSecondary courseAskBtn"
                              >
                                Ask a question
                              </button>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* DOWN BUTTON */}
                <button
                  type="button"
                  className="courseCarouselArrow courseCarouselArrowDown"
                  onClick={() => moveCarousel(1)}
                  disabled={activeIndex === hourPackages.length - 1}
                >
                  ↓
                </button>

                {/* INDICATOR */}
                <div className="courseCarouselIndicator">
                  {activeIndex + 1} / {hourPackages.length}
                </div>
              </div>
            ) : (
              <div className="coursePriceCard">
                <p>No hour packages available.</p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   RELATED COURSES ("You might also like")
   ======================================================================== */
function RelatedCourses({ data }) {
  const related = data.relatedCourses || [];
  if (related.length === 0) return null;

  return (
    <section className="coursePad">
      <div className="courseContainer">
        <span className="sectionEyebrow">
          {data.relatedLabel || "You might also like"}
        </span>
        <h2 className="courseRelatedHeading">
          {data.relatedHeading || "More options"}
        </h2>

        <div className="courseRelatedGrid">
          {related.map((r, i) => (
            <Link
              key={i}
              to={r.link || "/courses"}
              className="courseRelatedCard"
            >
              <div className="courseRelatedTopRow">
                {r.category && (
                  <span className="coursePill coursePillSmall">
                    {r.category}
                  </span>
                )}
                {r.tag && <span className="pkgTag">{r.tag}</span>}
              </div>

              <h3 className="courseRelatedTitle">{r.title}</h3>
              {r.description && (
                <p className="courseRelatedDescription">{r.description}</p>
              )}

              <div className="courseRelatedBottomRow">
                <div>
                  <div className="coursePriceRow">
                    <span className="courseRelatedPrice">{r.price}</span>
                    {r.originalPrice && (
                      <span className="coursePriceOriginal">
                        {r.originalPrice}
                      </span>
                    )}
                  </div>
                  {r.duration && (
                    <div className="courseRelatedDuration">
                      <Clock className="h-3 w-3" />
                      {r.duration}
                    </div>
                  )}
                </div>

                <span className="courseRelatedArrow">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
