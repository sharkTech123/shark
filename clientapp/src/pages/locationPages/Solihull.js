import React from "react";
import styles from "../css/home.module.css";
import { Helmet } from "react-helmet-async";

import ChristmasBanner from "../../components/ui/newHomeBanner/ChristmasBanner";
import img from "../../assets/images/banner4.png";
import { motion } from "framer-motion";

export default function Solihull() {
  return (
    <div className={styles.homepage}>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Driving Lessons in Solihull | Professional Local Instructors
        </title>
        <meta
          name="description"
          content="Learn to drive with expert instructors in Solihull. Manual, automatic, and intensive driving courses designed to help you pass faster. Book your lessons today.
"
        />
        <meta
          property="og:title"
          content="Driving Lessons in Solihull | Professional Local Instructors"
        />
        <meta
          property="og:description"
          content="Learn to drive with expert instructors in Solihull. Manual, automatic, and intensive driving courses designed to help you pass faster. Book your lessons today.
"
        />
        <link rel="canonical" href="https://smartlearner.com/solihull" />
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
                  <span className="no-underline text-red-600">Solihull</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="no-underline text-lg sm:text-xl text-slate-600 mb-6">
                  Finding the right <strong>driving lessons in Solihull</strong>{" "}
                  can make a huge difference in how comfortable and confident
                  you feel on the road. Whether you're a brand-new learner or
                  returning after time away from driving, you deserve an
                  instructor who supports your progress and teaches in a calm,
                  structured way. At YourBrand, we provide personalised driving
                  tuition designed to help you become a safe, capable, and
                  confident driver for life.
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
                        Real Solihull routes & test prep
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

        {/* Features / Why Choose Us */}
        <section
          id="features"
          className="no-underline container mx-auto px-6 py-12 lg:py-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="no-underline text-2xl font-bold mb-4">
            Why Choose Our Driving Lessons in Solihull
          </motion.h2>

          <p className="no-underline text-slate-600 mb-6">
            Our lessons focus on clear guidance, real-world skills, and building
            confidence step by step. Every learner progresses differently, so we
            tailor each session to your individual goals and current level of
            experience.
          </p>
          <em>What you can expect:</em>
          <div className="no-underline grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Structured Lessons"
              desc="Lessons tailored to your ability with step-by-step skill building."
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
              title="Supportive Instructors"
              desc="Patient, friendly teachers who adapt their approach to you."
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
              title="Modern Vehicles"
              desc="Easy-to-drive cars kept clean and comfortable."
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
          </div>
        </section>

        {/* Instructors / Local Benefits */}
        <section className="no-underline bg-red-50 py-12 lg:py-20">
          <div className="no-underline container mx-auto px-6">
            <div className="no-underline flex flex-col lg:flex-row items-center gap-10">
              <div className="no-underline w-full lg:w-1/2">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="no-underline text-2xl font-bold mb-4">
                  Professional Driving Instructors in Solihull
                </motion.h2>

                <p className="no-underline text-slate-600 mb-6">
                  Our <strong>driving instructors in Solihull </strong> bring
                  extensive experience and a patient, friendly teaching style.
                  They understand how different learners think and adapt their
                  approach to suit your needs. With a strong knowledge of
                  Solihull’s roads and local test requirements, they prepare you
                  with realistic routes and practical scenarios. <br></br>
                  <em>During your lessons, you will experience:</em>
                </p>

                <ul
                  style={{ paddingLeft: "0rem" }}
                  className="no-underline space-y-3 text-slate-600">
                  <li>Residential areas ideal for early practice</li>
                  <li>Complex roundabouts and junctions covered</li>
                  <li>Dual carriageway experience</li>
                  <li>Common test-route locations</li>
                  <li>Realistic test-route locations</li>
                </ul>
              </div>

              <div className="no-underline w-full lg:w-1/2">
                <div className="no-underline grid grid-cols-2 gap-4">
                  <InstructorCard name="Emma" exp="8 years" />
                  <InstructorCard name="Liam" exp="5 years" />
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
            Courses & Options
          </motion.h3>

          <div className="no-underline grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <CourseCard
              title="Standard Weekly Lessons"
              price="Per hour"
              bullets={[
                "Structured weekly sessions",
                "Progress reports after each lesson",
                "Flexible times: evenings & weekends",
              ]}
            /> */}

            <CourseCard
              title="Automatic Driving Lessons in Solihull"
              desc="If you prefer a simpler and more comfortable learning experience, our automatic driving lessons in Solihull are a great choice. Automatic cars remove the need for gear changes and clutch control, making driving smoother and more focused."
              price="Per hour"
              bullets={[
                "Easier clutch-free learning",
                "Great for anxious learners",
                "Faster confidence gains",
              ]}
              link="/automatic-transmisson"
            />

            <CourseCard
              title="Intensive Driving Courses in Solihull"
              desc="Our intensive driving courses in Solihull offer a fast-track route to passing your practical test. These courses cover everything you need in a shorter timeframe, helping you stay focused and progress quickly."
              price="Package prices"
              bullets={[
                "Learners working toward a deadline",
                "Those who prefer concentrated learning",
                "Students with some previous experience",
              ]}
              link="/intensive"
            />
          </div>
        </section>

        {/* Why it works / testimonials style */}
        <section className="no-underline py-12 lg:py-20 bg-white">
          <div className="no-underline container mx-auto px-6">
            <div className="no-underline grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="no-underline text-xl font-semibold mb-3">
                  Why Our Lessons Help Learners Succeed
                </h4>
                <p className="no-underline text-slate-600 mb-4">
                  Learners appreciate our structured approach, practical
                  knowledge, and supportive teaching style. We focus on helping
                  you understand road rules, develop good judgement, and stay
                  calm behind the wheel. Our instructors guide each lesson in a
                  way that feels manageable, clear, and achievable.
                </p>

                <ul className="no-underline list-disc list-inside text-slate-600 space-y-2">
                  <li>Clear explanations and calm guidance</li>
                  <li>Local expertise & realistic test preparation</li>
                  <li>Personalised lesson plans to suit your learning pace</li>
                </ul>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="no-underline rounded-2xl bg-gradient-to-br from-red-600 to-red-400 text-white p-6 shadow-xl">
                  <h5 className="no-underline text-lg font-bold">
                    A Trusted Driving School in Solihull
                  </h5>
                  <p className="no-underline text-sm mt-2">
                    As a leading driving school in Solihull, YourBrand is
                    committed to providing high-quality training, reliable
                    instructors, and a supportive learning environment. We offer
                    both manual and automatic lessons, flexible scheduling, and
                    competitive pricing for all types of learners.
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
        <section className="no-underline container mx-auto px-6 py-12 lg:py-20">
          <h3 className="no-underline text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h3>

          <div className="no-underline grid grid-cols-1 md:grid-cols-2 gap-6">
            <FaqItem
              q="How many lessons will I need?"
              a="The number varies by learner — after your first session your instructor will give an estimate based on your skill and confidence."
            />

            <FaqItem
              q="Are automatic lessons easier?"
              a="Many learners find automatics easier because there’s no clutch or gear control — more focus on traffic and decision-making."
            />

            <FaqItem
              q="Do you cover Solihull test routes?"
              a="Yes — lessons include common Solihull test areas so you’ll feel prepared."
            />

            <FaqItem
              q="Do you offer evening or weekend lessons?"
              a="Yes — flexible scheduling is available depending on instructor availability."
            />
          </div>
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
              Book Driving Lessons in Solihull
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
