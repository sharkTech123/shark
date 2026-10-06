import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Download, Award, ShieldCheck, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../../assets/images/national-standard2.jpg";
import {
  MapPin,
  AlertTriangle,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Adi3Module() {
  useEffect(() => {
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        },
      );
    });
  }, []);

  const keyAreas = [
    {
      title: "Instructor Competence 🚗",
      content:
        "A great instructor needs more than just excellent driving skills. To teach effectively, you must understand road laws, driving theory, and risk management while also developing strong communication and coaching techniques.",
    },
    {
      title: "Client-Centred Learning 👨🏫",
      content:
        "Every learner is different, and your teaching approach should reflect that. Training should be tailored to individual needs and abilities, encouraging active learning and self-assessment. A supportive and respectful learning environment is essential for fostering confidence and skill development.",
    },
    {
      title: "Safe & Responsible Driving ⚠️",
      content:
        "Teaching safe driving goes beyond technique—it’s about instilling the right mindset. Instructors should focus on hazard perception, risk awareness, and decision-making. Encouraging eco-friendly driving techniques is also a key part of responsible road use.",
    },
    {
      title: "Lesson Planning & Delivery 📝",
      content:
        "Effective lessons require structure and flexibility. Instructors should follow a structured lesson plan that adapts to the learner’s progress, moving from basic skills to more complex driving scenarios while incorporating both practical and theoretical teaching methods.",
    },
    {
      title: "Legal & Professional Responsibilities ⚖️",
      content:
        "To be a successful instructor, you must comply with DVSA regulations and industry standards. Providing honest, constructive feedback is crucial, as is prioritizing health and safety at all times.",
    },
  ];

  return (
    <main className="w-full overflow-hidden font-sans">
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              The <span className="text-red-500">National Standard</span> for
              Driver & Rider Training
            </h1>

            <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
              <strong>Well done!</strong>
              <br />A professional framework for becoming a confident,
              responsible and fully qualified driving instructor.
            </p>

            <p className="mt-4 text-slate-200 text-sm sm:text-lg">
              Your hard work has paid off — now you're ready for{" "}
              <strong>Part 3</strong>.
            </p>

            <Link to="/Contact-Us">
              <button className="mt-8 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 transition rounded-full text-white font-semibold shadow-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* ================= BANNER ================= */}

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl fade-up">
          <div className="bg-white p-10 rounded-3xl shadow-2xl border-l-8 border-red-500">
            <h2 className="text-3xl font-extrabold mb-4">
              Understanding the National Standard
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              The National Standard for Driver and Rider Training is the
              official framework that every UK driving and riding instructor
              must follow. Mastering this standard isn’t just about passing your
              test—it’s about becoming a professional, effective instructor who
              delivers high-quality training and shapes safer drivers for the
              future.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              This standard outlines the essential skills, knowledge, and
              understanding required to provide top-tier instruction. By
              following its guidelines, instructors ensure that learners not
              only pass their tests but also develop safe and responsible
              driving habits. Ultimately, this contributes to improved road
              safety and consistency in training nationwide.
            </p>

            <a
              href="https://www.gov.uk/government/publications/national-standard-for-driver-and-rider-training"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition"
            >
              <Download size={18} /> Download National Standard
            </a>
          </div>
        </div>
      </section>

      {/* ============================================= */}

      {/* ================= KEY AREAS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 fade-up">
            <Award className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Key Areas of the National Standard
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {keyAreas.map((area, i) => (
              <div
                key={i}
                className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-red-500"
              >
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  {area.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ADI PART 3 ================= */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6 max-w-5xl fade-up">
          <div className="bg-white p-10 rounded-3xl shadow-2xl border-l-8 border-red-500">
            <h2 className="text-3xl font-extrabold mb-4">
              ADI Part 3: The Final Assessment
            </h2>

            <p className="text-slate-700 mb-6">
              The ADI Part 3 test is the final step in becoming a fully
              qualified Approved Driving Instructor (ADI). This in-car
              assessment, conducted by a DVSA examiner, lasts about 45 minutes.
              You’ll bring a learner and demonstrate your instructional skills
              in real time.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <ClipboardList className="text-red-600" /> Assessment Areas
                </h4>
                <ul
                  className="list-disc list-inside text-slate-700"
                  style={{ paddingLeft: "0px" }}
                >
                  <li>Lesson Planning</li>
                  <li>Risk Management</li>
                  <li>Teaching & Learning Strategies</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck className="text-red-600" /> Scoring
                </h4>
                <ul
                  className="text-slate-700 space-y-2"
                  style={{ paddingLeft: "0px" }}
                >
                  <li>
                    <strong>0–30:</strong> Fail – Performance is unsatisfactory;
                    you won’t be added to the ADI register.
                  </li>
                  <li>
                    <strong>31–42:</strong> Grade B – You’ll qualify and be
                    added to the ADI register.
                  </li>
                  <li>
                    <strong>43–51:</strong> Grade A – You’ve demonstrated a high
                    standard of instruction.
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="https://assets.publishing.service.gov.uk/media/6537d4895e47a50014989903/adi-standards-check-form-example.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition"
            >
              <Download size={18} /> Download ADI Standards Form
            </a>
          </div>
        </div>
      </section>
      <div className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* SECTION HEADING */}
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-16"
          >
            Understanding the{" "}
            <span className="text-red-600">ADI Part 3 Marking Sheet</span>
          </motion.h1>

          {/* TIMELINE GRID */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* LESSON PLANNING */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 border-t-8 border-red-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-9 h-9 text-red-600" />
                <h2 className="text-2xl font-bold">Lesson Planning</h2>
              </div>

              <ul
                className="space-y-4 text-slate-700 list-disc list-inside"
                style={{ paddingLeft: "0px" }}
              >
                <li>
                  <strong>Identifying the learner’s goals and needs:</strong>{" "}
                  The instructor should encourage the pupil to take an active
                  role in setting learning objectives based on their experience
                  and skill leve
                </li>
                <li>
                  <strong>Appropriateness of the lesson structure:</strong> The
                  lesson should be tailored to the learner’s ability, ensuring
                  achievable progress within the session.
                </li>
                <li>
                  <strong>Suitability of practice areas: </strong> The chosen
                  location should align with the lesson’s goals, considering
                  factors such as traffic, road type, and weather conditions.
                </li>
                <li>
                  <strong>Adaptability of the lesson plan:</strong> A good
                  instructor recognizes when adjustments are needed and involves
                  the learner in making changes where necessary.
                </li>
              </ul>
            </motion.div>

            {/* RISK MANAGEMENT */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 border-t-8 border-orange-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-9 h-9 text-orange-500" />
                <h2 className="text-2xl font-bold">Risk Management</h2>
              </div>

              <p className="text-slate-700 mb-4">
                Risk management is about sharing responsibility for safety
                between the instructor and learner. There are five key
                competencies in this section, with a maximum of{" "}
                <strong>15 points</strong> available. Scoring at least 8 points
                is essential to passing.
              </p>

              <p className="text-slate-700 mb-4">
                During your lesson, the examiner will assess whether you can
                effectively control situations, maintain awareness of
                surroundings, and ensure overall safety.
              </p>

              <p className="text-slate-700">
                This doesn’t necessarily mean dramatic interventions—good risk
                management involves anticipating issues before they arise
                through proactive questioning and guidance.
              </p>
            </motion.div>

            {/* TEACHING & LEARNING */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 border-t-8 border-emerald-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="w-9 h-9 text-emerald-600" />
                <h2 className="text-2xl font-bold">
                  Teaching & Learning Strategies
                </h2>
              </div>

              <p className="text-slate-700 mb-4">
                This section evaluates how well you adapt your teaching style to
                support the learner’s development. Effective instruction
                involves clear explanations, encouraging self-reflection, and
                fostering independent thinking rather than simply giving direct
                commands.
              </p>

              <p className="text-slate-700 mb-4">
                Balancing direct instruction with guided learning is essential.
                Constructive feedback should help the learner progress without
                overwhelming them. Lessons should be well-structured, making
                efficient use of practice time, and encouraging learners to
                apply their skills and reflect on their performance.
              </p>

              <p className="text-slate-700">
                Promoting safe and responsible driving should remain a top
                priority. Instructors must reinforce hazard perception,
                decision-making skills, and overall risk awareness, ensuring
                that learners take responsibility for their actions on the road.
              </p>
            </motion.div>
          </div>

          {/* CONCLUSION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-red-50 to-white rounded-3xl p-10 shadow-xl border-l-8 border-red-500"
          >
            <div className="flex items-center gap-4 mb-4">
              <ClipboardList className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold">Why This Matters</h3>
            </div>

            <p className="text-slate-700 mb-4">
              Mastering the{" "}
              <strong>National Standard for Driver and Rider Training</strong>{" "}
              is the foundation of being a great instructor. By following these
              principles, you won’t just help learners pass their tests—you’ll
              play a vital role in shaping safer drivers and reducing road risks
              for everyone.
            </p>

            <p className="text-slate-700 flex items-start gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
              Stay committed to professional development, embrace client-centred
              learning, and continuously refine your teaching strategies. Not
              only will this ensure your success as an instructor, but it will
              also make UK roads safer for all. 🚗💨
            </p>
          </motion.div>
        </div>
      </div>
      {/* ================= NAV + QUIZ ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center space-y-10">
          <Link to="/good-instructor-module">
            <button className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
              Next Page →
            </button>
          </Link>

          <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-2">Start Quiz</h2>
            <h4 className="text-slate-500 mb-4">15 Questions</h4>
            <p className="text-slate-700 mb-6">
              Test your understanding of the National Standard before moving
              forward.
            </p>
            <Link to="/takequizCatName/national-standard">
              <button className="px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
