import React from "react";
import styles from "../css/home.module.css";

import { Helmet } from "react-helmet-async";
import img from "../../assets/images/banner4.png";
import { motion } from "framer-motion";
import ChristmasBanner from "../../components/ui/newHomeBanner/ChristmasBanner";

export default function Bedworth() {
  return (
    <div className={styles.homepage}>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Driving Lessons in Bedworth | Manual & Automatic Driving Courses</title>
        <meta
          name="description"
          content="Looking for driving lessons in Bedworth? Learn with local instructors offering manual, automatic, intensive courses and theory support. Book today."
        />
        <meta
          property="og:title"
          content="Driving Lessons in Bedworth | Manual & Automatic Driving Courses"
        />
        <meta
          property="og:description"
          content="Looking for driving lessons in Bedworth? Learn with local instructors offering manual, automatic, intensive courses and theory support. Book today."
        />
        <link rel="canonical" href="https://smartlearner.com/bedworth" />
      </Helmet>
      <section>
        <ChristmasBanner />
      </section>
      <main className="no-underline min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800 antialiased">
        {/* Hero */}
        <section className="no-underline relative overflow-hidden">
          <div className="no-underline container mx-auto px-6 py-16 lg:py-28">
            <div className="no-underline grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="no-underline text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                  Driving Lessons in{" "}
                  <span className="no-underline text-red-600">Bedworth</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="no-underline text-lg sm:text-xl text-slate-600 mb-6">
                  Learning to <strong>driving in Bedworth </strong> is easier
                  when the information is clear to help you make confident
                  decisions. This page provides a detailed overview of local
                  driving lessons, automatic and manual options, intensive
                  courses, theory test preparation, and instructor training
                  pathways. The aim is to offer a complete, easy-to-navigate
                  resource that helps learners find reliable support while
                  preparing for safe and independent driving.
                </motion.p>

                <div className="no-underline flex gap-4 flex-wrap">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="no-underline inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition"
                    href="/Contact-Us">
                    Book Lessons
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="no-underline h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V5a1 1 0 10-2 0v4a1 1 0 00.553.894l3 1.5a1 1 0 10.894-1.788L11 7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    className="no-underline inline-flex items-center gap-3 border border-red-600 text-red-600 px-5 py-3 rounded-lg hover:bg-red-50 transition"
                    href="/home/our-courses">
                    View Courses
                  </motion.a>
                </div>

                <motion.div className="no-underline mt-8 text-sm text-slate-500">
                  <p>
                    <strong className="no-underline text-slate-700">
                      Flexible times
                    </strong>{" "}
                    — evenings & weekends. Choose manual or automatic, or try an
                    intensive course to pass faster.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="no-underline relative">
                <div className="no-underline rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-100">
                  {/* Decorative car illustration placeholder - replace with your SVG or image */}
                  <div className="no-underline flex items-center justify-center h-64 sm:h-72 lg:h-80">
                    <img
                      src={img}
                      style={{ maxWidth: "600px", width: "100%" }}
                      alt="Car illustration"
                      className="no-underline"
                    />
                  </div>

                  <div className="no-underline mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="no-underline text-xl font-bold ">
                        Patient Instructors
                      </div>
                      <p className="no-underline text-xs text-slate-500">
                        DVSA-approved, calm teaching style
                      </p>
                    </div>
                    <div>
                      <div className="no-underline text-xl font-bold ">
                        Local Expertise
                      </div>
                      <p className="no-underline text-xs text-slate-500">
                        Real Bedworth routes & test prep
                      </p>
                    </div>
                    <div>
                      <div className="no-underline text-xl font-bold ">
                        Manual & Auto
                      </div>
                      <p className="no-underline text-xs text-slate-500">
                        Choose your preferred vehicle
                      </p>
                    </div>
                  </div>
                </div>

                {/* Soft glowing shape */}
                <div className="no-underline absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-red-100 opacity-60 blur-3xl pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12 lg:py-10 space-y-16">
          <ContentBlock title="What Learners Need to Know First">
            <ul className="space-y-2" style={{ paddingLeft: "0px" }}>
              <li>
                • Bedworth learners benefit from well-connected roads,
                accessible test routes, and supportive instructors.
              </li>
              <li>
                • Local driving lessons help build real-world confidence on
                roundabouts, junctions, residential areas, and town-centre
                driving.
              </li>
              <li>
                • Shorter commute times mean more driving and less waiting,
                making each lesson more valuable.
              </li>
            </ul>
            <p>
              Driving schools in the area focus on developing safe habits,
              situational awareness, and steady progress toward the practical
              test. The approach is structured but flexible, allowing you to
              build confidence at a pace that suits you.
            </p>
          </ContentBlock>{" "}
        </section>
        <section
          id="features"
          className="no-underline container mx-auto px-6 py-12 lg:py-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="no-underline text-2xl font-bold mb-4">
            Types of Driving Lessons in Bedworth
          </motion.h2>

          <div className="no-underline grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Manual driving"
              desc=" Manual driving lessons for full vehicle control"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="no-underline h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
              }
            />

            <FeatureCard
              title="Automatic driving"
              desc="Automatic driving lessons for simplified learning"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="no-underline h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM6 20c0-3.31 2.69-6 6-6s6 2.69 6 6"
                  />
                </svg>
              }
            />

            <FeatureCard
              title="Intensive driving courses"
              desc="Intensive and fast-track driving courses"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="no-underline h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 13l2-5h14l2 5M5 19h14"
                  />
                </svg>
              }
            />

            <FeatureCard
              title="Refresher driving lessons"
              desc="Refresher lessons for returning drivers"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="no-underline h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
              }
            />
          </div>
          <p style={{ marginTop: "1rem" }}>
            Manual lessons remain a popular option for learners who want
            long-term licence flexibility, while automatic lessons allow quicker
            adaptation for beginners who want to focus on road awareness.
            Intensive courses help learners who prefer condensed learning
            without long waiting gaps between sessions.
          </p>
        </section>

        {/* Instructors / Local Benefits */}
        <section className="no-underline bg-red-50 py-12 lg:py-10">
          <div className="no-underline container mx-auto px-6">
            <div className="no-underline flex flex-col lg:flex-row items-center gap-10">
              <div className="no-underline w-full lg:w-1/2">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="no-underline text-2xl font-bold mb-4">
                  What to Expect From Local Driving Instructors
                </motion.h2>

                <ul
                  style={{ paddingLeft: "0rem" }}
                  className="no-underline space-y-3 text-slate-600">
                  <li>Calm and clear communication</li>
                  <li>
                    {" "}
                    Structured training adapted to each learner’s progress
                  </li>
                  <li>
                    Support for test readiness, hazard perception, and
                    situational awareness
                  </li>
                  <li>Guidance on challenging or unfamiliar roads</li>
                </ul>
                <p>
                  Experienced instructors understand local test patterns and
                  know which skills matter most for practical test success.
                  SmartLearner Driving School, for example, has instructors
                  familiar with nearby routes, giving learners realistic
                  preparation without added pressure.
                </p>
              </div>

              <div className="no-underline w-full lg:w-1/2">
                <div className="no-underline grid grid-cols-2 gap-4">
                  <InstructorCard name="Meg" exp="5 years" />
                  <InstructorCard name="Tom" exp="5 years" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section
          id="courses"
          className="no-underline container mx-auto px-6 py-12 lg:py-20">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="no-underline text-2xl font-bold mb-8">
            Lessons Options in Bedworth
          </motion.h3>

          <div className="no-underline grid grid-cols-1 md:grid-cols-3 gap-6">
            <CourseCard
              title="Automatic Driving Lessons in Bedworth"
              desc="Automatic lessons continue to grow in demand due to:"
              bullets={[
                "Less stress in heavy traffic",
                "Faster adaptation to road situations",
                "No clutch or gear-related challenges",
                "Better focus on mirrors, positioning, and hazard response",
              ]}
              link="/automatic-transmisson"
            />

            <CourseCard
              title="Intensive Driving Courses"
              desc="Intensive courses help learners progress quickly while keeping skills fresh"
              price="Per hour"
              bullets={[
                "Ideal for fast test booking strategies",
                "Daily or frequent sessions minimise forgetting",
                " Helps develop consistency",
                " Suits learners with time-focused goals",
              ]}
              link="/intensive"
            />

            <CourseCard
              title="Driving Theory Support in Bedworth"
              price="Package prices"
              bullets={[
                "Online practice materials",
                "Mock theory tests",
                "Hazard perception clips",
                "Structured study advice",
                "Step-by-step theory revision plans",
              ]}
              link="/Theory-Portal"
            />
          </div>
        </section>

        {/* Why it works / testimonials style */}
        <section className="no-underline py-12 lg:py-20 bg-white">
          <div className="no-underline container mx-auto px-6">
            <div className="no-underline grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="no-underline text-xl font-semibold mb-3">
                  How Lessons Build Safe Driving Skills
                </h4>

                <ul className="no-underline list-disc list-inside text-slate-600 space-y-2">
                  <li>Observation and mirror discipline</li>
                  <li> Positioning in narrow spaces</li>
                  <li>Roundabout judgment and timing</li>
                  <li>Confidence at traffic lights and multi-lane roads</li>
                  <li>Understanding other drivers’ intentions</li>
                </ul>
                <p>
                  These skills are developed gradually, ensuring learners gain
                  both competence and calmness behind the wheel.
                </p>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="no-underline rounded-2xl bg-gradient-to-br from-red-600 to-red-400 text-white p-6 shadow-xl">
                  <h5 className="no-underline text-lg font-bold">
                    Local Benefits for New Learners
                  </h5>
                  <p className="no-underline text-sm mt-2">
                    Bedworth’s road layout supports learners from the first
                    lesson onward. Narrow streets help with steering precision
                    and speed control. Larger connecting roads help you
                    understand spacing, merging, and overtaking. Because the
                    area is not overwhelmingly busy, learners can build
                    confidence before tackling more complex locations. Over
                    time, this progression creates a natural pathway toward
                    independent driving.
                  </p>

                  <div className="no-underline mt-4 grid grid-cols-3 gap-2 text-center">
                    <StatBox label="Pass Rate" value="High" />
                    <StatBox label="Vehicle" value="Manual & Auto" />
                    <StatBox label="Schedule" value="Flexible" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-6 py-12 lg:py-20 space-y-16">
          <ContentBlock title="Support for Nervous Learners">
            <ul className="space-y-2" style={{ paddingLeft: "0rem" }}>
              <li>• Slow-paced introduction to controls</li>
              <li>• Encouraging guidance</li>
              <li>• Positive reinforcement</li>
              <li>• Routes chosen to reduce anxiety</li>
            </ul>
            <p>
              Many learners start feeling unsure about driving, and local
              instructors are trained to help build confidence without pressure.
            </p>
          </ContentBlock>

          <ContentBlock title="Pricing and Booking Notes">
            <ul className="space-y-2" style={{ paddingLeft: "0rem" }}>
              <li>• Various lesson packages available</li>
              <li>• Discounts for block bookings</li>
              <li>• Single lessons for beginners</li>
              <li>• Options for manual and automatic</li>
              <li>• Clear pricing with no hidden extras</li>
            </ul>
            <p>Booking early ensures availability during peak times.</p>

            {/* Booking Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/Contact-Us"
                className="no-underline inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition">
                Book Driving Lessons
              </a>

              <a
                href="/home/our-courses"
                className="no-underline inline-flex items-center justify-center border border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition">
                View Lesson Packages
              </a>
            </div>
          </ContentBlock>

          <ContentBlock title="Professional Instructor Training in Bedworth">
            <ul className="space-y-2" style={{ paddingLeft: "0rem" }}>
              <li>• ADI part 1 preparation</li>
              <li>• Part 2 driving ability</li>
              <li>• Part 3 instructional competence</li>
              <li>• Practical teaching strategies</li>
              <li>• Clear pricing with no hidden extras</li>
            </ul>
            <p>Real lesson experience with learners</p>

            {/* Booking Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/driving-instructor-packages/instructor-packages"
                className="no-underline inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition">
                Book instructor Lessons
              </a>
            </div>
          </ContentBlock>
          <ContentBlock title="How Bedworth Learners Can Improve Faster">
            <ul className="space-y-2">
              <li>• Take consistent weekly lessons</li>
              <li>• Use theory practice tools alongside lessons</li>
              <li>• Review instructor feedback</li>
              <li>• Ask questions when unsure</li>
              <li>• Practise calm driving habits early</li>
            </ul>
            <p>Steady progress is more effective than rushed practice.</p>
          </ContentBlock>
        </section>

        {/* FAQ */}
        <section className="no-underline container mx-auto px-6 py-12 lg:py-10">
          <h3 className="no-underline text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h3>

          <div className="no-underline grid grid-cols-1 md:grid-cols-2 gap-6">
            <FaqItem
              q="How many lessons do most learners need?"
              a="The number varies, but consistent weekly lessons lead to steady progress. Many learners complete training sooner when lessons are regular."
            />

            <FaqItem
              q="Is automatic easier than manual?"
              a=" For many beginners, yes. Automatic cars remove gear-related challenges and allow more focus on road awareness."
            />

            <FaqItem
              q="Are intensive courses worth it?"
              a="They help learners progress quickly, especially when preparing for upcoming test dates."
            />

            <FaqItem
              q="Can nervous learners improve?"
              a="Yes. Local instructors use calm routes, steady pacing, and supportive teaching styles."
            />
            <FaqItem
              q="Do I need theory before practical lessons?"
              a="You can start practical lessons before passing theory, but combining both helps build stronger understanding."
            />

            <FaqItem
              q="Can I learn at different times of day?"
              a="Most instructors offer flexible schedules to match work, school, or personal commitments."
            />
          </div>
        </section>

        <section className="container mx-auto px-6 py-12 lg:py-5 space-y-16">
          <ContentBlock title="Final Notes for Learners">
            <p>
              Learning to drive in Bedworth provides a structured yet flexible
              path to becoming a safe and capable driver. Local instructors
              focus on real-world skill development, while the area itself
              offers a comfortable progression from beginners’ roads to more
              advanced routes. With consistent lessons, strong theory
              understanding, and supportive guidance, learners can build
              lifelong skills and prepare confidently for both the test and
              independent driving.
            </p>
          </ContentBlock>
        </section>

        {/* CTA / Book */}
        <section
          id="book"
          className="no-underline bg-red-600 text-white py-12 lg:py-20">
          <div className="no-underline container mx-auto px-6 text-center">
            <h3 className="no-underline text-3xl font-bold mb-3">
              Start Your Driving Journey Today
            </h3>
            <p className="no-underline mb-6">
              Choose from manual, automatic or intensive courses and get
              personalised training to build confidence.
            </p>

            <a
              href="/Contact-Us"
              className="no-underline inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-semibold shadow hover:shadow-2xl transition">
              Book Driving Lessons in Bedworth
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
function FeatureCard({ title, desc, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="no-underline bg-white p-6 rounded-2xl shadow-sm">
      <div className="no-underline flex items-center gap-4 mb-3">
        <div className="no-underline p-3 rounded-lg bg-red-50">{icon}</div>
        <h4 className="no-underline font-semibold">{title}</h4>
      </div>
      <p className="no-underline text-slate-600 text-sm">{desc}</p>
    </motion.div>
  );
}

function InstructorCard({ name, exp }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="no-underline bg-white rounded-xl p-4 shadow">
      <div className="no-underline flex items-center gap-4">
        <div className="no-underline w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-700">
          {name.charAt(0)}
        </div>
        <div>
          <div className="no-underline font-semibold">{name}</div>
          <div className="no-underline text-xs text-slate-500">
            {exp} experience
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CourseCard({ title, desc, price, bullets = [], link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="no-underline bg-white p-6 rounded-2xl shadow-lg border">
      <div className="no-underline flex items-center justify-between mb-4">
        <h2 className="no-underline font-semibold text-lg">{title}</h2>
        {/* <div className="no-underline text-sm text-slate-500">{price}</div> */}
      </div>
      <p>{desc}</p>
      <ul
        style={{ paddingLeft: "0rem" }}
        className="no-underline text-slate-600 text-sm space-y-2 mb-4">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
      <a
        className="no-underline inline-block mt-2 text-red-600 font-medium"
        href={link}>
        Learn more →
      </a>
    </motion.div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="no-underline text-center">
      <div className="no-underline text-xl font-bold ">{value}</div>
      <div className="no-underline text-xs text-white/80">{label}</div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="no-underline bg-white p-4 rounded-xl shadow-sm">
      <button
        style={{ backgroundColor: "white", border: "none" }}
        onClick={() => setOpen((s) => !s)}
        className="no-underline w-full text-left flex items-center justify-between">
        <div>
          <div className="no-underline font-semibold">{q}</div>
          <div className="no-underline text-xs text-slate-500">
            {open ? "Click to hide" : "Click to reveal"}
          </div>
        </div>
        <div
          className={`transform transition ${open ? "rotate-45" : "rotate-0"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="no-underline h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </button>

      {open && <p className="no-underline mt-3 text-slate-600 text-sm">{a}</p>}
    </div>
  );
}

function ContentBlock({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow p-6 lg:p-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="text-slate-600 space-y-3 leading-relaxed">{children}</div>
    </motion.div>
  );
}
