const mongoose = require("mongoose");
const ManualCoursePage = require("../models/manualCoursePageModel");
require("dotenv").config();

const MONGO_URI = "mongodb+srv://aman262020:aman262020@atlascluster.vtp8b.mongodb.net/SmartLearnerDB?retryWrites=true&w=majority&appName=AtlasCluster";

const p = (n) => `£${n}`;

const ic = (dur, trans = "N/A", exp = "Beginner") => [
  { icon: "Clock", label: "Duration", value: dur },
  { icon: "ShieldCheck", label: "Transmission", value: trans },
  { icon: "CircleCheck", label: "Experience", value: exp },
  { icon: "Award", label: "Instructor", value: "DVSA Qualified" },
];

const r = (cat, title, desc, pr, dur, slug, orig = "", tag = "") => ({
  category: cat, tag, title, description: desc,
  price: pr, originalPrice: orig, duration: dur,
  link: `/courses/${slug}`,
});

const seeds = [
  /* ==================== MANUAL TASTER ==================== */
  {
    slug: "manual-taster",
    category: "Manual",
    title: "Manual Taster Session",
    description:
      "The manual taster session is a 1.5-hour, discounted driving lesson for new learners to try manual driving at an affordable price before committing to a full course.",
    includes: [
      "1.5 hours with a qualified instructor",
      "Door-to-door pickup",
      "Suitable for total beginners",
      "Try manual driving at a discounted rate",
    ],
    infoCards: ic("1.5 hours", "Manual"),
    relatedCourses: [
      r("Manual", "Manual Beginners Package",
        "A 5-hour beginner package: two 1.5-hour lessons to learn the fundamentals, plus 2 hours reserved for your practical test day.",
        p(90), "5 hours", "manual-beginner", p(180), "Popular"),
      r("Manual", "Manual Hourly Lessons",
        "Flexible pay-as-you-go manual lessons — choose 1 hour, 1.5 hours or 2 hours to suit your schedule.",
        p(36), "From 1 hour", "manual-hourly-lesson"),
    ],
  },

  /* ==================== MANUAL BEGINNER ==================== */
  {
    slug: "manual-beginner",
    category: "Manual",
    title: "Manual Beginners Package",
    description:
      "FOR NEW DRIVERS ONLY - The perfect way to kickstart your driving journey! With 5 hours of expert instruction, it consists of two 1.5-hour lessons PLUS 2 hours reserved for your test date. Get ready to drive with certainty and take the wheel on test day!",
    includes: [
      "5 hours of expert instruction",
      "Two 1.5-hour lessons",
      "2 hours reserved for your test day",
      "DVSA-approved instructor",
      "Door-to-door pickup",
    ],
    infoCards: ic("5 hours", "Manual"),
    relatedCourses: [
      r("Manual", "Manual Taster Session",
        "A 1.5-hour, discounted driving lesson for new learners to try manual driving before committing to a full course.",
        p(42), "1.5 hours", "manual-taster"),
      r("Manual", "Manual Hourly Lessons",
        "Flexible pay-as-you-go manual lessons — choose 1 hour, 1.5 hours or 2 hours.",
        p(36), "From 1 hour", "manual-hourly-lesson"),
    ],
  },

  /* ==================== MANUAL HOURLY ==================== */
  {
    slug: "manual-hourly-lesson",
    category: "Manual",
    title: "Manual Hourly Lessons",
    description:
      "Flexible pay-as-you-go manual driving lessons with a fully qualified DVSA-approved instructor. Choose a 1-hour, 1.5-hour or 2-hour session to fit your schedule and learning pace — ideal for topping up between structured packages or refreshing specific skills.",
    includes: [
      "Choose 1, 1.5 or 2 hours",
      "Door-to-door pickup",
      "DVSA-approved manual instructor",
      "Pay-as-you-go, no commitment",
      "Bespoke feedback after every lesson",
    ],
    infoCards: ic("1–2 hours", "Manual"),
    relatedCourses: [
      r("Manual", "Manual Taster Session",
        "A 1.5-hour, discounted driving lesson for new learners to try manual driving before committing to a full course.",
        p(42), "1.5 hours", "manual-taster"),
      r("Manual", "Manual Beginners Package",
        "A 5-hour beginner package: two 1.5-hour lessons to learn the fundamentals, plus 2 hours reserved for your practical test day.",
        p(90), "5 hours", "manual-beginner", p(180), "Popular"),
    ],
  },

  /* ==================== AUTOMATIC TASTER ==================== */
  {
    slug: "automatic-taster",
    category: "Automatic",
    title: "Automatic Taster Session",
    description:
      "The Automatic taster session is a 1.5-hour, discounted driving lesson for new learners to try automatic driving at an affordable price before committing to a full course.",
    includes: [
      "1.5 hours with a qualified instructor",
      "Door-to-door pickup",
      "Suitable for total beginners",
      "Try automatic driving at a discounted rate",
    ],
    infoCards: ic("1.5 hours", "Automatic"),
    relatedCourses: [
      r("Automatic", "Automatic Beginner Package",
        "A 5-hour beginner package: two 1.5-hour lessons to learn the fundamentals, plus 2 hours reserved for your practical test day.",
        p(100), "5 hours", "automatic-beginner", p(185), "Popular"),
      r("Automatic", "Automatic Hourly Lessons",
        "Flexible pay-as-you-go automatic lessons — choose 1 hour, 1.5 hours or 2 hours to suit your schedule.",
        p(37), "From 1 hour", "automatic-hourly-lesson"),
    ],
  },

  /* ==================== AUTOMATIC BEGINNER ==================== */
  {
    slug: "automatic-beginner",
    category: "Automatic",
    title: "Automatic Beginner Package",
    description:
      "FOR NEW DRIVERS ONLY - The perfect way to kick start your automatic driving journey! With 5 hours of expert instruction, it consists of two 1.5-hour lessons PLUS 2 hours reserved for your test date. Get ready to drive with certainty and take the wheel on test day!",
    includes: [
      "5 hours of expert instruction",
      "Two 1.5-hour lessons",
      "2 hours reserved for your test day",
      "DVSA-approved instructor",
      "Door-to-door pickup",
    ],
    infoCards: ic("5 hours", "Automatic"),
    relatedCourses: [
      r("Automatic", "Automatic Taster Session",
        "A 1.5-hour, discounted driving lesson for new learners to try automatic driving before committing to a full course.",
        p(47), "1.5 hours", "automatic-taster"),
      r("Automatic", "Automatic Hourly Lessons",
        "Flexible pay-as-you-go automatic lessons — choose 1, 1.5 or 2 hours.",
        p(37), "From 1 hour", "automatic-hourly-lesson"),
    ],
  },

  /* ==================== AUTOMATIC HOURLY ==================== */
  {
    slug: "automatic-hourly-lesson",
    category: "Automatic",
    title: "Automatic Hourly Lessons",
    description:
      "Flexible pay-as-you-go automatic driving lessons with a fully qualified DVSA-approved instructor. Choose a 1-hour, 1.5-hour or 2-hour session to fit your schedule and learning pace — perfect for topping up between structured packages or refreshing specific skills.",
    includes: [
      "Choose 1, 1.5 or 2 hours",
      "Door-to-door pickup",
      "DVSA-approved automatic instructor",
      "Pay-as-you-go, no commitment",
      "Bespoke feedback after every lesson",
    ],
    infoCards: ic("1–2 hours", "Automatic"),
    relatedCourses: [
      r("Automatic", "Automatic Taster Session",
        "A 1.5-hour, discounted driving lesson for new learners to try automatic driving before committing to a full course.",
        p(47), "1.5 hours", "automatic-taster"),
      r("Automatic", "Automatic Beginner Package",
        "A 5-hour beginner package: two 1.5-hour lessons to learn the fundamentals, plus 2 hours reserved for your practical test day.",
        p(100), "5 hours", "automatic-beginner", p(185), "Popular"),
    ],
  },

  /* ==================== INTENSIVE (ONE SLUG) ==================== */
  {
    slug: "intensive",
    category: "Intensive",
    title: "Intensive Driving Courses",
    description:
      "Our intensive driving courses are designed to fast-track your journey to test readiness. Whether you need a focused 5-hour top-up before a retake, or a comprehensive 40-hour fast-track from scratch, we have a structured program to match your experience level. Each course delivers targeted, one-to-one instruction in a condensed format — perfect for learners who want to maximise progress in minimal time.",
    includes: [
      "One-to-one intensive training",
      "Targeted weakness identification",
      "Driving technique polishing",
      "Test preparation focused",
      "Flexible scheduling",
      "Progress tracking across all hours",
    ],
    infoCards: ic("5 to 40 hours", "Automatic"),
    relatedCourses: [
      r("Manual", "Manual Taster Session",
        "Try manual driving with a discounted 1.5-hour session before committing to a full course.",
        p(42), "1.5 hours", "manual-taster"),
      r("Automatic", "Automatic Taster Session",
        "Try automatic driving with a discounted 1.5-hour session before committing to a full course.",
        p(47), "1.5 hours", "automatic-taster"),
    ],
  },

  /* ==================== THEORY SUPPORT (ONE SLUG) ==================== */
  {
    slug: "theory-support",
    category: "Theory Support",
    title: "Theory Support & Practice",
    description:
      "Master your theory test preparation with our comprehensive suite of theory support options. From one-to-one tutor sessions at our Coventry office to independent practice in a quiet professional environment, online Zoom sessions, and our cutting-edge driving simulator — we have every learning style covered. Build confidence across multiple-choice questions, hazard perception, and real-world driving scenarios, all with guidance from experienced tutors.",
    includes: [
      "Multiple-choice and hazard perception coverage",
      "1-2-1 tutor sessions available",
      "Independent practice facilities",
      "Online Zoom sessions",
      "Driving simulator access",
      "Self-paced and tutor-led options",
    ],
    infoCards: ic("45 min – 1 hour", "N/A"),
    relatedCourses: [
    
      r("Theory Support", "Lifetime Theory Portal",
        "Lifetime access to our online theory portal with practice questions, mock tests, and progress tracking.",
        p(49), "Lifetime", "lifetime-theory-portal", "", "Popular"),
     
    ],
  },

  /* ==================== SIMULATOR SESSION (NEW SLUG) ==================== */
  {
    slug: "simulator-session",
    category: "Theory Support",
    title: "Driving Simulator Session",
    description:
      "The SmartLearners driving simulator with a tutor is an ideal tool for beginners, those feeling nervous about going onto the roads, or anyone looking to practice specific driving skills in a safe, off-road environment. The simulator allows you to experience various driving scenarios without the pressure of real-world driving. With the guidance of an experienced tutor, you can build confidence, refine techniques, and address specific areas of improvement — all while practicing in a controlled, virtual setting. Perfect as a standalone session or as a complement to your in-car lessons.",
    includes: [
      "1-hour simulator session with tutor",
      "Safe off-road practice environment",
      "Various driving scenarios covered",
      "Confidence building for nervous learners",
      "Specific skill targeting",
      "Ideal add-on to in-car lessons",
    ],
    infoCards: ic("1 hour", "N/A"),
    relatedCourses: [],
  },

  /* ==================== LIFETIME THEORY PORTAL (NEW SLUG) ==================== */
  {
    slug: "lifetime-theory-portal",
    category: "Theory Support",
    title: "Lifetime Theory Portal",
    description:
      "Get unlimited, lifetime access to our comprehensive online theory portal designed for both learner drivers and ADI Part 1 candidates. Practice thousands of multiple-choice questions, take unlimited mock tests, track your progress over time, and benefit from our exclusive bonus quizzes featuring the most commonly failed questions. Whether you're starting your theory preparation months in advance or returning for a retake, this portal gives you the flexibility to study at your own pace — anytime, anywhere, forever. One purchase, lifetime value.",
    includes: [
      "Lifetime access — one-time purchase",
      "Thousands of practice questions",
      "Unlimited mock tests",
      "Progress tracking dashboard",
      "Exclusive bonus quizzes",
      "Commonly-failed question coverage",
      "Mobile and desktop friendly",
      "Suitable for learner & ADI Part 1",
    ],
    infoCards: ic("Lifetime access", "N/A"),
    relatedCourses: [],
  },

  /* ==================== PASS PLUS (ONE SLUG, with intensive + workshop) ==================== */
  {
    slug: "pass-plus",
    category: "Pass Plus",
    title: "Pass Plus Course",
    description:
      "The Pass Plus driving course is a structured program designed to help newly qualified drivers gain further experience and improve their driving skills beyond the standard test. It covers a range of essential topics, including driving in different weather conditions, on motorways, rural roads, and busy urban areas. The course also focuses on enhancing hazard perception and overall road awareness. Completing the Pass Plus course can help increase confidence behind the wheel and may lead to insurance discounts, making it a valuable option for new drivers looking to expand their driving experience. Available as a full 6-hour course or flexible 1-hour top-up sessions.",
    includes: [
      "Motorway, rural and urban driving",
      "All-weather driving experience",
      "Insurance discount eligibility",
      "Enhanced hazard perception",
      "Flexible 1-hour or full 6-hour formats",
    ],
    infoCards: ic("1 to 6 hours", "Automatic"),
    relatedCourses: [
      r("Intensive", "Intensive Driving Courses",
        "Fast-track your journey to test readiness with structured intensive programs from 5 to 40 hours.",
        p(300), "5 to 40 hours", "intensive", "", "Popular"),
      r("Workshop", "Instructor Workshops",
        "Sharpen your instructional edge with our four focused 1.5-hour live workshops.",
        p(17.5), "1.5 hours each", "workshop"),
    ],
  },

  /* ==================== INSTRUCTOR TRAINING PART 1 (with part 2 + part 3) ==================== */
  {
    slug: "instructor-training-part-one",
    category: "Instructor Training",
    title: "Instructor Training - Part One",
    description:
      "Our Part One instructor training programs provide comprehensive support to help you succeed in becoming a fully qualified driving instructor. Choose from three tiered packages — Platinum, Gold, and Silver — each including administrative assistance for DBS checks, badge applications, and test bookings. Every tier covers your first attempt at each of the three ADI tests, with a blend of online portal access, in-office training, in-car one-to-one training, and online module training. The additional 20 hours of trainee badge training is available as a compulsory bolt-on to ensure you are fully prepared for the Part 3 instructional exam and your career as a driving instructor.",
    includes: [
      "DBS check administrative assistance",
      "Badge application support",
      "Test booking assistance",
      "Online portal access",
      "One-to-one in-car training",
      "Online module training",
      "First test attempt covered",
      "Trainee badge preparation",
    ],
    infoCards: ic("43 hours", "Automatic"),
    relatedCourses: [
      r("Instructor Training", "Instructor Training - Part Two (Bolt-On)",
        "Pay only for the modules you need — Part 2, Part 3, or single top-up lessons.",
        p(35), "1 to 40 hours", "instructor-training-part-two", "", "Popular"),
      r("Instructor Training", "Instructor Training - Part Three (Online Theory)",
        "Self-paced online theory modules covering all three ADI parts with mock tests and bonus quizzes.",
        p(29.99), "Self-paced", "instructor-training-part-three"),
    ],
  },

  /* ==================== INSTRUCTOR TRAINING PART 2 (with part 1 + part 3) ==================== */
  {
    slug: "instructor-training-part-two",
    category: "Instructor Training",
    title: "Instructor Training - Part Two (Bolt-On)",
    description:
      "The Bolt-On training options are designed for learners who have already completed some instructor training with another school and wish to transfer to SmartLearners. Pay only for the modules you need — whether that is Part 2 training, Part 3 in-car sign-off, single in-car lessons, or single online sessions. Our flexible pay-as-you-go approach ensures you receive focused support and continue your instructor journey at your own pace, with full access to our experienced trainers both in-car and online.",
    includes: [
      "Flexible pay-as-you-go modules",
      "Personalised one-to-one instruction",
      "Trainee badge sign-off support",
      "In-car and online training options",
      "Top-up lessons available",
      "Contributes to your training hours",
    ],
    infoCards: ic("1 to 40 hours", "Automatic"),
    relatedCourses: [
      r("Instructor Training", "Instructor Training - Part One",
        "Comprehensive tiered packages (Platinum, Gold, Silver) with full administrative support and test coverage.",
        p(999), "43 hours", "instructor-training-part-one", "", "Popular"),
      r("Instructor Training", "Instructor Training - Part Three (Online Theory)",
        "Self-paced online theory modules covering all three ADI parts with mock tests and bonus quizzes.",
        p(29.99), "Self-paced", "instructor-training-part-three"),
    ],
  },

  /* ==================== INSTRUCTOR TRAINING PART 3 (with part 1 + part 2) ==================== */
  {
    slug: "instructor-training-part-three",
    category: "Instructor Training",
    title: "Instructor Training - Part Three (Online Theory)",
    description:
      "Our SmartLearners online instructor training portal provides comprehensive theoretical modules for all three parts of the driving instructor qualification. Whether you choose the complete course covering all three parts, or individual modules for Part 1, Part 2, or Part 3, our self-paced platform covers the key concepts and knowledge required for the ADI exams. The portal includes in-depth learning materials, practice questions, mock tests, and our exclusive bonus quiz featuring the most commonly failed questions. Please note this is theory-only and does not include any practical training or test fees — it is a great way to build your foundation and study at your convenience before progressing to practical training.",
    includes: [
      "All three parts available individually or as complete course",
      "Self-paced learning modules",
      "Practice questions and mock tests",
      "Exclusive bonus quizzes",
      "Commonly-failed question coverage",
      "Written tasks and interactive quizzes",
      "Online delivery — study anywhere",
    ],
    infoCards: ic("Self-paced", "N/A"),
    relatedCourses: [
      r("Instructor Training", "Instructor Training - Part One",
        "Comprehensive tiered packages (Platinum, Gold, Silver) with full administrative support and test coverage.",
        p(999), "43 hours", "instructor-training-part-one", "", "Popular"),
      r("Instructor Training", "Instructor Training - Part Two (Bolt-On)",
        "Pay only for the modules you need — Part 2, Part 3, or single top-up lessons.",
        p(35), "1 to 40 hours", "instructor-training-part-two"),
    ],
  },

  /* ==================== BUSINESS MENTORING ==================== */
  {
    slug: "business-mentoring",
    category: "Business Mentoring",
    title: "Business Mentoring - Monthly Subscription",
    description:
      "Ongoing monthly business mentoring designed for driving school owners looking to grow and streamline their business. Includes strategic coaching, growth planning, and one-to-one mentoring sessions to help you scale sustainably.",
    includes: [
      "Monthly business coaching",
      "Growth strategy planning",
      "One-to-one mentoring sessions",
      "Ongoing support",
      "Sustainability-focused guidance",
    ],
    infoCards: ic("Monthly subscription", "N/A"),
    relatedCourses: [],
  },

  /* ==================== WORKSHOP (with all 3 instructor parts) ==================== */
  {
    slug: "workshop",
    category: "Workshop",
    title: "Instructor Workshops",
    description:
      "Our instructor workshop series is designed for driving instructors looking to elevate their teaching practice. Across four focused 1.5-hour sessions, we cover lesson planning with purpose, making lessons more engaging and effective, reading and adapting to every pupil, and excelling in Part 3 and the Standards Check. Each workshop delivers practical techniques, real-world examples, and actionable strategies you can implement immediately. Whether you're preparing for Part 3 or aiming for consistently Grade A lessons, these workshops will sharpen your instructional edge.",
    includes: [
      "Four focused 1.5-hour live workshops",
      "Lesson planning frameworks",
      "Engagement and retention techniques",
      "Pupil adaptation strategies",
      "17 competencies deep-dive",
      "Grade A instruction focus",
      "Online delivery",
    ],
    infoCards: ic("1.5 hours each", "N/A"),
    relatedCourses: [
      r("Instructor Training", "Instructor Training - Part One",
        "Comprehensive tiered packages (Platinum, Gold, Silver) with full administrative support and test coverage.",
        p(999), "43 hours", "instructor-training-part-one", "", "Popular"),
      r("Instructor Training", "Instructor Training - Part Two (Bolt-On)",
        "Pay only for the modules you need — Part 2, Part 3, or single top-up lessons.",
        p(35), "1 to 40 hours", "instructor-training-part-two"),
      r("Instructor Training", "Instructor Training - Part Three (Online Theory)",
        "Self-paced online theory modules covering all three ADI parts with mock tests and bonus quizzes.",
        p(29.99), "Self-paced", "instructor-training-part-three"),
    ],
  },

  /* ==================== OFFERS AUTOMATIC ==================== */
  {
    slug: "offer-automatic",
    category: "Offers",
    title: "Special Offer - 10 Hours Automatic",
    description:
      "SAVE £30 with a 10-hour block of automatic lessons at our special offer rate. Perfect for learners who want to build strong, lasting skills, this package offers comprehensive instruction that helps you gain confidence, improve technique, and get test-ready — all while progressing at a comfortable pace and saving money.",
    includes: [
      "10 hours of expert automatic instruction",
      "Special offer pricing",
      "Door-to-door pickup",
      "DVSA-approved instructor",
      "Long-term progress plan",
    ],
    infoCards: ic("10 hours", "Automatic"),
    relatedCourses: [
      r("Offers", "Special Offer - 10 Hours Manual",
        "SAVE £30 with a 10-hour block of manual lessons at a special offer rate.",
        p(300), "10 hours", "offer-manual"),
    ],
  },

  /* ==================== OFFERS MANUAL ==================== */
  {
    slug: "offer-manual",
    category: "Offers",
    title: "Special Offer - 10 Hours Manual",
    description:
      "SAVE £30 with a 10-hour block of manual lessons at our special offer rate. This extensive package gives you the time and experience needed to master driving, refine your skills, and feel more prepared for your driving test. Ideal for those seeking thorough, long-term progress at a discounted price.",
    includes: [
      "10 hours of expert manual instruction",
      "Special offer pricing",
      "Door-to-door pickup",
      "DVSA-approved instructor",
      "Long-term progress plan",
    ],
    infoCards: ic("10 hours", "Manual"),
    relatedCourses: [
      r("Offers", "Special Offer - 10 Hours Automatic",
        "SAVE £30 with a 10-hour block of automatic lessons at a special offer rate.",
        p(310), "10 hours", "offer-automatic"),
    ],
  },
];

/* =====================================================
   SEED RUNNER
===================================================== */
async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await ManualCoursePage.deleteMany({});
    console.log("🗑️  Cleared existing ManualCoursePage documents");

    const inserted = await ManualCoursePage.insertMany(seeds);
    console.log(`🌱 Inserted ${inserted.length} course pages`);

    await mongoose.disconnect();
    console.log("✅ Disconnected — done");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeder error:", err);
    process.exit(1);
  }
}

seed();
