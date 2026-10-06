// src/pages/courses/CoursePageDesign.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../ManualCoursePageDesign.css";

import { getCourseBySlug } from "../../../../redux/features/manualCoursePageSlice";
import { getAllProductsCategory } from "../../../../redux/features/productSlice";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../../../redux/features/cartSlice";

import { icons } from "../ManualCourseSectionConfig";

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
export default function OfferAutomaticContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();

  const { course, courseLoading } = useSelector((s) => s.manualCoursePage);

  useEffect(() => {
    dispatch(getCourseBySlug("offer-automatic"));
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

  const manualCategory = data.find((category) => category._id === "offers automatic");

  

  // Find Beginners Packages
  const beginnersPackageIndex =
    manualCategory?.data?.findIndex(
      (product) => product.name?.trim() === "10 Hours Automatic",
    ) ?? -1;

  const beginnersPackage =
    beginnersPackageIndex !== -1
      ? manualCategory.data[beginnersPackageIndex]
      : null;

  

  const beginnersPackageId = beginnersPackage
    ? `${beginnersPackage._id}_${beginnersPackageIndex}_${beginnersPackage.price}`
    : "";

  const inCart = myCart.find((item) => item.id === beginnersPackageId);

  const handleIncrease = (id) => {
    dispatch(getIncreaseCart(id, 1));
  };

  const handleDecrease = (id) => {
    dispatch(getDecreaseCart(id, 1));
  };

  const handleBeginnersAddToCart = () => {
    if (!beginnersPackage) {
     
      return;
    }

    dispatch(
      getAddToCart(
        {
          id: beginnersPackageId,
          count: 1,
          service: beginnersPackage.name,
          price: beginnersPackage.price,
        },
        navigate,
      ),
    );
  };

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
          beginnersPackage={beginnersPackage}
          beginnersPackageId={beginnersPackageId}
          loadingCategory={loadingCategory}
          loading={loading}
          handleBeginnersAddToCart={handleBeginnersAddToCart}
          inCart={inCart}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
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
  beginnersPackage,
  beginnersPackageId,
  loadingCategory,
  loading,
  handleBeginnersAddToCart,
  inCart,
  handleIncrease,
  handleDecrease,
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
            <div className="coursePriceCard">
              {loadingCategory || loading ? (
                <p>Loading...</p>
              ) : beginnersPackage ? (
                <>
                  <div className="coursePriceRow">
                    <span className="coursePrice">
                      £{beginnersPackage.price}
                    </span>

                    {beginnersPackage.maxPrice && (
                      <span className="coursePriceOriginal">
                        £{beginnersPackage.maxPrice}
                      </span>
                    )}
                  </div>

                  {beginnersPackage.maxPrice && (
                    <span className="courseSavingsBadge">
                      SAVE £
                      {(
                        beginnersPackage.maxPrice - beginnersPackage.price
                      ).toFixed(2)}
                    </span>
                  )}

                  <div className="coursePackageName">
                    {beginnersPackage.name}
                  </div>

                  {beginnersPackage.description && (
                    <p className="courseFootnote">
                      {beginnersPackage.description}
                    </p>
                  )}

                  {inCart ? (
                    <div className="courseQuantityControl">
                      <button
                        type="button"
                        onClick={() => handleDecrease(beginnersPackageId)}
                        className="courseQuantityBtn courseQuantityBtnMinus"
                      >
                        −
                      </button>

                      <span className="courseQuantityValue">
                        {inCart.count}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleIncrease(beginnersPackageId)}
                        className="courseQuantityBtn courseQuantityBtnPlus"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="btnPrimary courseCartBtn"
                      onClick={handleBeginnersAddToCart}
                    >
                      Add to cart
                    </button>
                  )}

                  <Link to="/contact-us" className="block">
                    <button type="button" className="btnSecondary courseAskBtn">
                      Ask a question
                    </button>
                  </Link>
                  <div>
                    <p className="courseFootnote">{course.footnote}</p>
                  </div>
                </>
              ) : (
                <p>Beginners Package not available.</p>
              )}
            </div>
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
