// src/pages/courses/CoursePageDesign.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../ManualCoursePageDesign.css";

import { getCourseBySlug } from "../../../../redux/features/manualCoursePageSlice";

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
export default function LearnerTheoryLifetime() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();

  const { course, courseLoading } = useSelector((s) => s.manualCoursePage);

  useEffect(() => {
    dispatch(getCourseBySlug("lifetime-theory-portal"));
  }, [dispatch]);

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
        <CourseHero course={course} navigate={navigate} />

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
function CourseHero({ course, navigate }) {
  const price = parseFloat(String(course.price ?? "").replace(/[£,]/g, ""));

  const originalPrice = parseFloat(
    String(course.originalPrice ?? "").replace(/[£,]/g, ""),
  );

  const discount =
    Number.isFinite(price) &&
    Number.isFinite(originalPrice) &&
    originalPrice > 0
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

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
              <div className="coursePriceRow">
                <span className="coursePrice">{course.price}</span>

                <span className="coursePriceOriginal">
                  {course.originalPrice}
                </span>
              </div>

              <span className="courseSavingsBadge">SAVE {discount}% OFF</span>

              <button
                type="button"
                className="btnPrimary courseCartBtn"
                onClick={() => navigate("/Theory-subscription")}
              >
                Add to cart
              </button>

              <Link to="/contact-us" className="block">
                <button type="button" className="btnSecondary courseAskBtn">
                  Ask a question
                </button>
              </Link>
              <div>
                <p className="courseFootnote">{course.footnote}</p>
              </div>
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
