import React from "react";
import styles from "../css/home.module.css";

import { Helmet } from "react-helmet-async";
import img from "../../assets/images/banner4.png";
import { motion } from "framer-motion";
import ChristmasBanner from "../../components/ui/newHomeBanner/ChristmasBanner";

export default function Rugby() {
  return (
    <div className={styles.homepage}>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Driving Lessons in Rugby | Local Instructors & Courses</title>
        <meta
          name="description"
          content="Learn to drive in Rugby with expert instructors offering manual, automatic, and intensive lessons plus complete theory support for new drivers. "
        />
        <meta
          property="og:title"
          content="Driving Lessons in Rugby | Local Instructors & Courses"
        />
        <meta
          property="og:description"
          content="Learn to drive in Rugby with expert instructors offering manual, automatic, and intensive lessons plus complete theory support for new drivers. "
        />
        <link rel="canonical" href="https://smartlearner.com/rugby" />
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
                  <span className="no-underline text-red-600">Rugby </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="no-underline text-lg sm:text-xl text-slate-600 mb-6">
                  Learning to <strong>driving in Rugby </strong> requires
                  lessons that reflect the town’s road design, traffic flow, and
                  learner expectations. This guide provides a full overview of
                  driving lessons, instructor support, automatic training
                  options, intensive courses, theory preparation, and
                  instructor-training pathways. The structure mixes bullet
                  points with short paragraphs to ensure clarity for learners
                  while remaining fully compatible with AI Overview and
                  voice-search formats.
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
                        Real Rugby routes & test prep
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
          <ContentBlock
            title="Beginning Your Driving Journey in Rugby
">
            <ul className="space-y-2" style={{ paddingLeft: "0px" }}>
              <p>
                Rugby offers a balanced driving environment with quieter
                estates, structured roundabouts, and steady-flow main roads.
                This makes it a suitable location for learners starting from
                scratch as well as those looking to build more advanced skills.
              </p>
              <li>• Training matched to your experience level</li>
              <li>• Clear explanations from the first lesson</li>
              <li>• Supportive pacing to reduce anxiety</li>
              <li>• Practical driving in realistic, local situations </li>

              <p>
                Early sessions focus on building confidence with simple controls
                before gradually introducing more complex driving tasks.
              </p>
            </ul>
          </ContentBlock>{" "}
        </section>
        <section
          id="features"
          className="no-underline container mx-auto px-6 py-12 lg:py-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="no-underline text-2xl font-bold mb-4">
            Driving Lessons Available in Rugby
          </motion.h2>

          <div className="no-underline grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Manual driving"
              desc="Manual lessons for full vehicle control
"
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
              desc=" Automatic lessons for smoother progress"
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
              title="Beginner driving courses"
              desc=" Beginner-friendly foundations
"
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
              title="Manoeuvre practice"
              desc="Manoeuvre practice including parking and reversing
"
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
            Rugby’s road network supports steady, natural progression through
            each skill level.
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
                  Driving Instructors in Rugby
                </motion.h2>
                <p>
                  Driving instructors in Rugby provide calm, structured training
                  focused on safety, awareness, and consistent improvement.
                  Their familiarity with local roads helps them choose routes
                  that match the learner’s stage of development.
                </p>
                <ul
                  style={{ paddingLeft: "0rem" }}
                  className="no-underline space-y-3 text-slate-600">
                  <li>DVSA-qualified instructors</li>
                  <li> Calm, structured teaching methods</li>
                  <li>Step-by-step demonstrations</li>
                  <li>Feedback after each session</li>
                  <li>Understanding of Rugby test-centre standards</li>
                </ul>
                <p>
                  The goal is to help learners feel comfortable, confident, and
                  ready for realistic driving situations.
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
            Lessons Options in Rugby
          </motion.h3>

          <div className="no-underline grid grid-cols-1 md:grid-cols-3 gap-6">
            <CourseCard
              title="Automatic Driving Lessons Rugby"
              desc="Many Rugby learners choose automatic lessons because they allow faster progress with reduced mechanical complexity."
              bullets={[
                "No clutch or gear changes",
                "Simplified driving experience",
                "Better focus on observation and road reading",
                "Smoother adaptation for nervous beginners",
              ]}
              link="/automatic-transmisson"
            />

            <CourseCard
              title="Intensive Driving Courses in Rugby  "
              desc="For learners who prefer fast-track development, intensive courses offer a structured and compressed route toward test readiness."
              price="Per hour"
              bullets={[
                " Multiple lessons over shorter time periods",
                "Helps maintain consistent progress",
                "Reduced skill fade between sessions",
                "Ideal for learners with deadlines",
                "Supports quicker preparation for the driving test",
              ]}
              link="/intensive"
            />

            <CourseCard
              title="Driving Theory Support in Rugby "
              price="Package prices"
              bullets={[
                "Digital access to study material",
                "Practice questions covering all theory sections",
                "Hazard perception examples mirroring real-life situations",
                "Tools that help target weaker areas",
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
                <h2 className="no-underline text-xl font-semibold mb-3">
                  Online Driving Theory Practice
                </h2>

                <ul
                  className="no-underline list-disc list-inside text-slate-600 space-y-2"
                  style={{ paddingLeft: "0px" }}>
                  <li>Access theory tools at any time</li>
                  <li> Mock questions covering all DVSA categories</li>
                  <li>
                    Hazard perception examples mirroring real-life situations
                  </li>
                  <li>Tools that help target weaker areas</li>
                </ul>
                <p>
                  Combining theory study with practical lessons helps learners
                  understand road rules more naturally.
                </p>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="no-underline rounded-2xl bg-gradient-to-br from-red-600 to-red-400 text-white p-6 shadow-xl">
                  <h5 className="no-underline text-lg font-bold">
                    Driving School Experience in Rugby
                  </h5>
                  <p className="no-underline text-sm mt-2">
                    A driving school in Rugby provides structured, reliable
                    pathways for learners from beginner level to independent
                    driving. With an experienced provider such as SmartLearner
                    supporting the training process, learners receive clear
                    guidance, convenient scheduling options, and progress
                    tracking throughout their lessons. Rugby’s combination of
                    easy and intermediate-level roads creates a supportive
                    environment for building long-term safe driving habits.
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
          <ContentBlock title="Support for Nervous or First-Time Learners">
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

          <ContentBlock
            title="PDI Instructor Training UK
">
            <ul className="space-y-2" style={{ paddingLeft: "0rem" }}>
              <li>• ADI part 1 preparation</li>
              <li>• Part 2 driving ability</li>
              <li>• Part 3 instructional competence</li>
              <li>• Practical teaching strategies</li>
              <li>• Clear pricing with no hidden extras</li>
            </ul>
            <p>
              This pathway helps develop confident and effective future
              instructors.
            </p>

            {/* Booking Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/driving-instructor-packages/instructor-packages"
                className="no-underline inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition">
                Book instructor Lessons
              </a>
            </div>
          </ContentBlock>
          <ContentBlock
            title="Become a Driving Instructor Rugby
">
            <ul className="space-y-2" style={{ paddingLeft: "0px" }}>
              <li>• Localised training suitable for Rugby routes</li>
              <li>• Real sessions with learner drivers</li>

              <li>• Professional development suppor</li>
              <li>• Structured lesson-planning guidance</li>
            </ul>
            <p>
              Rugby is a strong location to begin an instructor career due to
              consistent learner demand.
            </p>
          </ContentBlock>
        </section>

        <section className="no-underline py-12 lg:py-20 bg-white">
          <div className="no-underline container mx-auto px-6">
            <div className="no-underline grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="no-underline text-xl font-semibold mb-3">
                  How Rugby Learners Progress Faster
                </h2>

                <ul
                  className="no-underline list-disc list-inside text-slate-600 space-y-2"
                  style={{ paddingLeft: "0px" }}>
                  <li>Consistent weekly lessons</li>
                  <li> Regular theory practice alongside driving</li>
                  <li>Early focus on observation and anticipation</li>
                  <li>Review of instructor feedback after each session</li>
                  <li>Familiarity with common local driving patterns</li>
                </ul>
                <p>
                  Steady practice helps reduce nerves, build skill, and create
                  safer long-term habits.
                </p>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="no-underline rounded-2xl bg-gradient-to-br from-red-600 to-red-400 text-white p-6 shadow-xl">
                  <h5 className="no-underline text-lg font-bold">
                    Preparing for the Driving Test in Rugby
                  </h5>
                  <p className="no-underline text-sm mt-2">
                    Rugby learners preparing for the practical test benefit from
                    mock assessments, route practice, and structured guidance.
                    Instructors help learners understand what examiners look
                    for, including proper mirror use, smooth decision-making,
                    lane discipline, and hazard anticipation. This preparation
                    builds confidence and reduces test-day anxiety.
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

        {/* FAQ */}
        <section className="no-underline container mx-auto px-6 py-12 lg:py-10">
          <h3 className="no-underline text-2xl font-bold mb-6">
            Rugby Driving FAQs
          </h3>

          <div className="no-underline grid grid-cols-1 md:grid-cols-2 gap-6">
            <FaqItem
              q="Is Rugby  a good place to learn to drive?
"
              a="  Yes. The town offers a balanced mix of quiet roads and more complex routes, ideal for both beginners and advanced learners.
"
            />

            <FaqItem
              q="Are automatic lessons easier for new drivers?
"
              a="Many learners find automatic easier because there’s no clutch or gear coordination required.

"
            />

            <FaqItem
              q="Do intensive courses help learners pass sooner?
"
              a="Yes. The condensed schedule allows skills to build without long gaps between lessons"
            />

            <FaqItem
              q="Do I need to pass the theory before starting lessons?
"
              a=" You can begin practical lessons without a theory pass, but studying both together improves understanding.
"
            />
            <FaqItem
              q="Can nervous learners still progress successfully?
"
              a="Yes. With patient teaching and a gradual pace, confidence grows steadily."
            />
          </div>
        </section>

        <section className="container mx-auto px-6 py-12 lg:py-5 space-y-16">
          <ContentBlock
            title="Final Notes for Rugby  Learners
">
            <p>
              Learning to drive in Rugby offers a clear, structured pathway from
              beginner to independent driver. With supportive instructors,
              flexible lesson formats, theory tools, and progressive road
              environments, learners can develop strong, safe driving habits and
              become confident on the road.
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
              Book Driving Lessons in Rugby
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
