// src/pages/home/HomePageDesign.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Homepagedesign.css";

import {
  getHomePage,
  createTestimonial,
} from "../../../redux/features/homeContentSlice";
import { icons, FALLBACK_FEATURES, FALLBACK_STATS } from "./HomeSectionConfig";
import { IoIosMap, IoIosRibbon } from "react-icons/io";
import { IoShieldOutline } from "react-icons/io5";

import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const sliderSettings2 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const {
  Sparkles, // <-- was Sparkle — corrected to match HTML "lucide-sparkles"
  Star,
  Clock,
  ArrowRight,
  ShoppingCart,
  Menu,
  X,
  Phone,
  MapPin,
  CheckCircle2,
} = icons;

const NAV_ITEMS = [
  { label: "Courses", href: "/courses" },
  { label: "Theory", href: "/theory" },
  { label: "Instructors", href: "/instructors" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

/* ========================================================================
   REVEAL — IntersectionObserver wrapper (replaces Next.js Reveal)
   ======================================================================== */
function Reveal({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useState(null);
  const [el, setEl] = ref;

  useEffect(() => {
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [el]);

  const delayClass = `reveal-delay-${String(delay).replace(".", "")}`;

  return (
    <div
      ref={setEl}
      className={`reveal-hidden ${visible ? "is-visible" : ""} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}

/* ========================================================================
   MAIN PAGE
   ======================================================================== */
export default function HomePageDesign() {
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);

  const {
    banner,
    howItWorks,
    packagesSection,
    whySmartLearner,
    locations,
    recentPasses,
    testimonials,
    cta,
    homeLoading,
  } = useSelector((s) => s.home);

  useEffect(() => {
    dispatch(getHomePage());
  }, [dispatch]);

  if (homeLoading && !banner) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
        <div className="text-[var(--color-muted)]">Loading homepage…</div>
      </div>
    );
  }

  return (
    <div className="homepage-design-scope min-h-full flex flex-col">
      <main className="flex-1 homepage-design-scope">
        <Banner data={banner} />
        <HowItWorks data={howItWorks} />
        <PackagesSection data={packagesSection} />
        <WhySmartLearner data={whySmartLearner} />
        <Locations data={locations} />
        <RecentPasses data={recentPasses} />
        <Testimonials data={testimonials} />
        <CtaSection data={cta} />
      </main>
    </div>
  );
}

/* ========================================================================
   BANNER
   ======================================================================== */
function Banner({ data }) {
  if (!data) return null;

  const stats = data.stats?.length ? data.stats : FALLBACK_STATS;

  return (
    <section className="relative overflow-hidden sectionBorder">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 20%, color-mix(in oklab, var(--color-brand) 35%, transparent), transparent 60%), radial-gradient(50% 40% at 15% 80%, color-mix(in oklab, var(--color-accent) 18%, transparent), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="rise rise-1">
              <span className="badgePill">
                <Sparkles
                  className="h-3 w-3"
                  style={{ color: "var(--color-accent)" }}
                />
                {data.badge}
              </span>
            </div>

            <h1
              className="rise rise-2 mt-7 font-display text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.95] tracking-tight"
              style={{
                color: "var(--color-fg)",
                fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
              }}
            >
              {data.heading}
            </h1>

            <p
              className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              {data.description}
            </p>

            <div className="rise rise-4 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to={data.primaryButton?.link || "/courses"}>
                <button className="btnPrimary">
                  {data.primaryButton?.text || "Reserve a package"}{" "}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link to={data.secondaryButton?.link || "/contact"}>
                <button className="btnSecondary">
                  {data.secondaryButton?.text || "Talk to us first"}
                </button>
              </Link>
            </div>
          </div>

          <div className="rise rise-5">
            <div className="statCard">
              <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span
                      className="statValue"
                      style={{
                        fontVariationSettings:
                          '"opsz" 144, "SOFT" 100, "WONK" 1',
                      }}
                    >
                      {s.value}
                    </span>
                    <span className="statLabel">{s.label}</span>
                  </div>
                ))}
              </div>

              {data.contactInfo && (
                <div className="contactInfoRow">
                  <Phone
                    className="mt-0.5 h-4 w-4 flex-none"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "var(--color-fg)" }}
                    >
                      {data.contactInfo.heading}
                    </div>
                    <p
                      className="mt-1 text-xs leading-relaxed"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {data.contactInfo.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {data.trustItems?.length > 0 && (
          <div className="rise rise-5 trustRow">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="starIcon" />
              ))}
              <span className="ml-2">1,200+ reviews</span>
            </div>
            {data.trustItems.map((t, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="hidden sm:inline opacity-40">·</span>
                <span>{t.value}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ========================================================================
   HOW IT WORKS
   ======================================================================== */
function HowItWorks({ data }) {
  if (!data) return null;

  const steps = data.steps || [];

  return (
    <section className="py-20 sm:py-28 sectionBorder">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <Reveal>
          <span className="sectionEyebrow">{data.label || "How it works"}</span>
          <h2
            className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl"
            style={{ color: "var(--color-fg)" }}
          >
            {data.heading}
          </h2>
        </Reveal>

        <div className="stepsGrid">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx === 1 ? 0.06 : idx === 2 ? 0.12 : 0}>
              <div className="stepCard">
                <div className="stepNumber">{step.number || `0${idx + 1}`}</div>
                <h3 className="stepHeading">{step.heading}</h3>
                <p className="stepDesc">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   PACKAGES SECTION
   ======================================================================== */
function PackagesSection({ data }) {
  const packages = data?.packages || [];

  return (
    <section className="py-20 sm:py-28 sectionBorder">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="sectionEyebrow">
                {data?.subHeading || "Our packages"}
              </span>
              <h2
                className="mt-3 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl"
                style={{ color: "var(--color-fg)" }}
              >
                {data?.heading || "Pick the way that suits you."}
              </h2>
              <p
                className="mt-3 max-w-xl"
                style={{ color: "var(--color-muted)" }}
              >
                {data?.description}
              </p>
            </div>

            <Link
              to={data?.buttonLink || "/courses"}
              className="pkgSeeAllLink hoverUnderline"
            >
              {data?.buttonText || "See all packages →"}
            </Link>
          </div>
        </Reveal>

        {packages.length > 0 && (
          <div className="pkgGrid">
            {packages.map((pkg, i) => (
              <Reveal
                key={i}
                delay={i % 3 === 1 ? 0.05 : i % 3 === 2 ? 0.1 : 0}
              >
                <div
                  className={`pkgCard ${pkg.featured ? "pkgCard--featured" : ""}`}
                >
                  <div className="pkgTopRow">
                    {pkg.category && (
                      <span className="pkgCategory">{pkg.category}</span>
                    )}
                    {pkg.tag && <span className="pkgTag">{pkg.tag}</span>}
                  </div>

                  <h3 className="pkgTitle">{pkg.title}</h3>
                  <p className="pkgDescription">{pkg.description}</p>

                  <div className="pkgBottomRow">
                    <div>
                      <div className="pkgPriceRow">
                        <span className="pkgPrice">{pkg.price}</span>
                        {pkg.originalPrice && (
                          <span className="pkgOriginalPrice">
                            {pkg.originalPrice}
                          </span>
                        )}
                      </div>
                      {pkg.duration && (
                        <div className="pkgDuration">
                          <Clock className="h-3 w-3" />
                          {pkg.duration}
                        </div>
                      )}
                    </div>

                    <Link
                      to={pkg.link || "/courses"}
                      className={`pkgArrowBtn ${pkg.featured ? "pkgArrowBtn--featured" : ""}`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ========================================================================
   WHY SMARTLEARNER
   ======================================================================== */
function WhySmartLearner({ data }) {
  if (!data) return null;

  const features = data.features?.length ? data.features : FALLBACK_FEATURES;

  const resolveIcon = (name) => {
    const map = {
      Award: icons.Award,
      Shield: icons.Shield,
      MapPin: icons.MapPin,
      Sparkles: icons.Sparkles,
    };
    return map[name] || Sparkles;
  };

  return (
    <section className="py-20 sm:py-28 sectionBorder">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <span className="sectionEyebrow">
              {data.subHeading || "Why SmartLearner"}
            </span>
            <h2
              className="mt-3 font-display text-4xl tracking-tight sm:text-5xl"
              style={{ color: "var(--color-fg)" }}
            >
              {data.heading}
            </h2>
            <p
              className="mt-4 max-w-md"
              style={{ color: "var(--color-muted)" }}
            >
              {data.description}
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = resolveIcon(f.icon);
              return (
                <Reveal
                  key={i}
                  delay={i === 1 ? 0.05 : i === 2 ? 0.1 : i * 0.05}
                >
                  <div className="featureCard">
                    <div className="p-6 pt-6">
                      <div className="featureIconWrap">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="featureTitle">{f.title}</h3>
                      <p className="featureDesc">{f.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   LOCATIONS
   ======================================================================== */
function Locations({ data }) {
  if (!data) return null;

  return (
    <section className="py-20 sm:py-28 sectionBorder">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <Reveal>
          <span className="sectionEyebrow">
            {data.subHeading || "Our locations"}
          </span>
          <h2
            className="mt-3 font-display text-4xl tracking-tight sm:text-5xl"
            style={{ color: "var(--color-fg)" }}
          >
            {data.heading || "Seven local areas, one phone number."}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {data.locations?.map((loc, i) => (
            <Reveal
              key={i}
              delay={
                i === 1
                  ? 0.04
                  : i === 2
                    ? 0.08
                    : i === 3
                      ? 0.12
                      : i === 4
                        ? 0.16
                        : i === 5
                          ? 0.2
                          : i === 6
                            ? 0.24
                            : 0
              }
            >
              <Link to={loc.link || "#"} className="locationLink">
                <div className="flex items-center gap-3">
                  <MapPin className="locationPin" />
                  <div>
                    <div className="locationName">{loc.name}</div>
                    <div className="locationSub">{loc.subLocation}</div>
                  </div>
                </div>
                <ArrowRight className="locationArrow" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   RECENT PASSES
   ======================================================================== */
function RecentPasses({ data }) {
  if (!data) return null;

  return (
    <section className="py-20 sm:py-28 sectionBorder">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <Reveal>
          <span className="sectionEyebrow">
            {data.subHeading || "Recent passes"}
          </span>
          <h2
            className="mt-3 font-display text-4xl tracking-tight sm:text-5xl"
            style={{ color: "var(--color-fg)" }}
          >
            {data.heading || "Real pupils. Real passes."}
          </h2>
          <p className="mt-3 max-w-xl" style={{ color: "var(--color-muted)" }}>
            {data.description}
          </p>
        </Reveal>

        <div className="mt-12">
          <Slider {...sliderSettings}>
            {data.students?.map((s, i) => (
              <div key={i} className="px-2">
                <Reveal
                  delay={i === 1 ? 0.04 : i === 2 ? 0.08 : i === 3 ? 0.12 : 0}
                >
                  <figure className="passCard">
                    <div className="passImageWrap">
                      {s.image ? (
                        <img
                          src={`https://api.smartlearner.com/uploads/${s.image}`}
                          alt={s.message || s.name}
                          loading="lazy"
                          className="passImage"
                        />
                      ) : (
                        <div className="passFallback">{s.name?.[0]}</div>
                      )}
                    </div>

                    <figcaption className="passCaption">
                      <div className="passName">{s.name}</div>

                      <div className="passLocation">{s.location}</div>

                      {s.message && (
                        <p className="passMessage">"{s.message}"</p>
                      )}
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   TESTIMONIALS
   ======================================================================== */
function Testimonials({ data }) {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    message: "",
    rating: 0,
  });

  if (!data) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRating = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      location: "",
      message: "",
      rating: 0,
    });

    setShowForm(false);
    setSubmitting(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return;
    }

    if (!formData.location.trim()) {
      return;
    }

    if (!formData.message.trim()) {
      return;
    }

    setSubmitting(true);

    dispatch(
      createTestimonial(
        {
          name: formData.name.trim(),
          location: formData.location.trim(),
          message: formData.message.trim(),
          rating: Number(formData.rating),
          avatar: "",
        },
        resetForm,
        () => setSubmitting(false),
      ),
    );
  };

  return (
    <section className="py-20 sm:py-28 sectionBorder">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">

        {/* Heading */}
        <Reveal>
          <span className="sectionEyebrow">
            {data.subHeading || "What pupils say"}
          </span>

          <h2
            className="mt-3 font-display text-4xl tracking-tight sm:text-5xl"
            style={{ color: "var(--color-fg)" }}
          >
            {data.heading || "Passed first time, with a smile."}
          </h2>

          {data.description && (
            <p
              className="mt-3 max-w-xl"
              style={{ color: "var(--color-muted)" }}
            >
              {data.description}
            </p>
          )}
        </Reveal>

        {/* Add Testimonial */}
        <Reveal delay={0.12}>
          <div className="testimonialSubmitWrap">

            {!showForm ? (
              <div className="testimonialSubmitIntro">
                <div>
                  <span className="sectionEyebrow">
                    Your experience matters
                  </span>

                  <h3 className="testimonialSubmitTitle">
                    Learned with SmartLearner?
                  </h3>

                  <p className="testimonialSubmitDescription">
                    Share your experience and help other learners choose
                    SmartLearner with confidence.
                  </p>
                </div>

                <button
                  type="button"
                  className="testimonialSubmitButton"
                  onClick={() => setShowForm(true)}
                >
                  <Star className="h-4 w-4" />
                  Share Your Review
                </button>
              </div>
            ) : (
              <form
                className="testimonialForm"
                onSubmit={handleSubmit}
              >
                <div className="testimonialFormHeader">
                  <div>
                    <span className="sectionEyebrow">
                      Share your experience
                    </span>

                    <h3 className="testimonialSubmitTitle">
                      Tell us about your SmartLearner experience
                    </h3>
                  </div>

                  <button
                    type="button"
                    className="testimonialCloseButton"
                    onClick={resetForm}
                    aria-label="Close testimonial form"
                  >
                    ×
                  </button>
                </div>

                {/* Rating */}
                <div className="testimonialRatingField">
                  <label className="testimonialFormLabel">
                    Your rating
                  </label>

                  <div className="testimonialRatingSelector">
  {[1, 2, 3, 4, 5].map((rating) => {
    const isActive =
      formData.rating > 0 && rating <= formData.rating;

    return (
      <button
        key={rating}
        type="button"
        className={`testimonialRatingStar ${
          isActive ? "testimonialRatingStar--active" : ""
        }`}
        onClick={() => handleRating(rating)}
        aria-label={`${rating} star${rating > 1 ? "s" : ""}`}
      >
        <Star />
      </button>
    );
  })}
</div>
                </div>

                {/* Name + Location */}
                <div className="testimonialFormGrid">

                  <div className="testimonialFormField">
                    <label
                      htmlFor="testimonial-name"
                      className="testimonialFormLabel"
                    >
                      Your name
                    </label>

                    <input
                      id="testimonial-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. James Wilson"
                      maxLength={80}
                      required
                      className="testimonialFormInput"
                    />
                  </div>

                  <div className="testimonialFormField">
                    <label
                      htmlFor="testimonial-location"
                      className="testimonialFormLabel"
                    >
                      Location
                    </label>

                    <input
                      id="testimonial-location"
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Birmingham"
                      maxLength={80}
                      required
                      className="testimonialFormInput"
                    />
                  </div>

                </div>

                {/* Message */}
                <div className="testimonialFormField">
                  <label
                    htmlFor="testimonial-message"
                    className="testimonialFormLabel"
                  >
                    Your review
                  </label>

                  <textarea
                    id="testimonial-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your experience with SmartLearner..."
                    maxLength={500}
                    rows={5}
                    required
                    className="testimonialFormTextarea"
                  />

                  <div className="testimonialCharacterCount">
                    {formData.message.length}/500
                  </div>
                </div>

                {/* Buttons */}
                <div className="testimonialFormActions">
                  <button
                    type="button"
                    className="testimonialCancelButton"
                    onClick={resetForm}
                    disabled={submitting}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="testimonialSubmitButton"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="testimonialSpinner" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Review
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="testimonialFormNote">
                  By submitting your review, you agree that SmartLearner
                  may display your review on its website.
                </p>
              </form>
            )}

          </div>
        </Reveal>

        {/* Existing Testimonials */}
        <div className="mt-12 ">
          <Slider {...sliderSettings2}>
          {data.testimonials?.map((t, i) => (
            <div key={i} className="py-2">
            <Reveal
              key={i}
              delay={i === 1 ? 0.05 : i === 2 ? 0.1 : 0}
            >
              <div className="testimonialCard">
                <div className="p-6 pt-6">

                  <div
                    className="flex"
                    aria-label={`${t.rating || 5} out of 5 stars`}
                  >
                    {[...Array(t.rating || 5)].map((_, j) => (
                      <Star key={j} className="starIcon" />
                    ))}
                  </div>

                  <p className="testimonialMessage">
                    "{t.message}"
                  </p>

                  <div className="testimonialFooter">
                    {t.avatar ? (
                      <img
                      src={`https://api.smartlearner.com/uploads/${t.avatar}`}
                        
                        alt={t.name}
                        className="testimonialAvatar"
                      />
                    ) : (
                      <div className="testimonialAvatarFallback">
                        {t.name?.[0]}
                      </div>
                    )}

                    <div>
                      <div className="testimonialName">
                        {t.name}
                      </div>

                      <div className="testimonialLocation">
                        {t.location}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>
            </div>
          ))}
          </Slider>
        </div>

        

      </div>
    </section>
  );
}

/* ========================================================================
   CTA
   ======================================================================== */
function CtaSection({ data }) {
  if (!data) return null;

  return (
    <section className="py-20 sm:py-28 pb-24">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <div className="ctaCard">
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              {data.subHeading && (
                <span className="sectionEyebrow">{data.subHeading}</span>
              )}
              <h2
                className="mt-3 font-display text-4xl tracking-tight sm:text-5xl"
                style={{ color: "var(--color-fg)" }}
              >
                {data.heading}
              </h2>
              <p
                className="mt-3 max-w-md"
                style={{ color: "var(--color-muted)" }}
              >
                {data.description}
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Link to={data.primaryButton?.link || "/courses"}>
                  <button className="btnPrimary">
                    {data.primaryButton?.text || "Reserve a taster"}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <Link to={data.secondaryButton?.link || "/contact"}>
                  <button className="btnSecondary">
                    {data.secondaryButton?.text || "Or get in touch"}
                  </button>
                </Link>
              </div>
            </div>

            <ul className="ctaList">
              {[
                "No commitment beyond the first hour",
                "Door-to-door pickup",
                "Manual or automatic",
                "Suitable for total beginners",
                "Full refund within 14 days",
              ].map((item, i) => (
                <li key={i} className="ctaListItem">
                  <CheckCircle2 className="ctaCheckIcon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   FOOTER
   ======================================================================== */
