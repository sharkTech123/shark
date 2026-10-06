import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backgroundImage from "../../../../assets/images/lessonPlanning.jpg";

import {
  BookOpen,
  Target,
  Layers,
  Users,
  Brain,
  CheckCircle,
  Download,
  ClipboardList,
  HelpingHand,
  TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Adi3ModuleSeven() {
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

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= BANNER ================= */}

      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Lesson <span className="text-red-500">Planning</span>
            </h1>

            <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
              <strong>Well done!</strong>
              <br /> Learn how to structure, adapt, and deliver effective
              driving lessons tailored to every learner.
            </p>

            <p className="mt-4 text-slate-200 text-sm sm:text-lg">
              Your hard work has paid off — now you're ready for{" "}
              <strong>Part 3</strong>.
            </p>

            <Link to="/Contact-Us">
              <button className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-full text-white font-semibold shadow-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-6 fade-up max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold  gap-3 items-center flex  mb-6 ">
            <BookOpen className="w-10 h-10 text-indigo-600" /> Lesson{" "}
            <span className="text-indigo-600"> Planning </span>
          </h1>
          <p className="mt-6 text-slate-600  leading-relaxed">
            Now that you’re familiar with the concept of the lesson structure
            "cake," it’s time to explore how to effectively plan a lesson. There
            is no single, fixed way to teach any lesson—your approach should
            always be tailored to the individual learner.
          </p>

          <p className="mt-4 text-slate-600  leading-relaxed">
            Each learner may begin at a different “layer” of the cake depending
            on their prior knowledge and experience. You’ll uncover this by
            asking questions and encouraging learners to explore what they
            already know.
          </p>
        </div>
      </section>

      {/* ================= TASK ================= */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-12">
            {/* TASK */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-l-8 border-indigo-500">
              <div className="flex items-center gap-4 mb-4">
                <ClipboardList className="w-8 h-8 text-indigo-600" />
                <h2 className="text-2xl font-bold">Task</h2>
              </div>

              <h3 className="font-semibold text-lg mb-3">
                Skill Brainstorming A–Z
              </h3>

              <p className="text-slate-700 mb-4">
                For each lesson subject, take a blank piece of paper and
                brainstorm the full range of skills (from A to Z) needed to
                master that subject. For example:
              </p>

              <ul
                style={{ paddingLeft: "0px" }}
                className="list-disc list-inside space-y-2 text-slate-700"
              >
                <li>Moving and stopping</li>
                <li>
                  Understanding and using the car's controls (e.g. pedals, gear
                  stick, steering wheel)
                </li>
                <li>How to move the car in a straight line</li>
                <li>How to stop the car safely</li>
                <li>Making proper observations</li>
                <li>Using signals correctly</li>
              </ul>

              <p className="mt-4 text-slate-600">
                Repeat this process for each subject. Once completed, you'll
                have a strong foundation to begin creating your lesson plans.
                Remember, lesson plans are flexible and should evolve based on
                the learner’s progress.
              </p>
            </div>

            {/* STARTING THE PLAN */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-l-8 border-indigo-500">
              <div className="flex items-center gap-4 mb-4">
                <Target className="w-8 h-8 text-indigo-600" />
                <h2 className="text-2xl font-bold">Starting the Lesson Plan</h2>
              </div>

              <p className="text-slate-700">
                When planning a lesson, start by identifying the{" "}
                <strong>main objective</strong>.
              </p>

              <p className="italic text-slate-600 my-3">
                Example: Park on the right
              </p>

              <ul
                style={{ paddingLeft: "0px" }}
                className="list-disc list-inside space-y-3 text-slate-700"
              >
                <li>
                  <strong>What can the learner already do?</strong> (Assess
                  their current skill set.)
                </li>
                <li>
                  <strong>What is the first goal they need to work on?</strong>{" "}
                  (Refer back to the lesson structure cake.)
                </li>
                <li>
                  <strong>What prior knowledge do they have?</strong>
                  <ul
                    style={{ paddingLeft: "0px" }}
                    className="list-disc list-inside ml-6 mt-2 space-y-1"
                  >
                    <li>Do they understand why it matters?</li>
                    <li>Are they aware of risks involved?</li>
                  </ul>
                </li>
                <li>
                  <strong>What are the gaps in their understanding?</strong>
                  <ul
                    style={{ paddingLeft: "0px" }}
                    className="list-disc list-inside ml-6 mt-2 space-y-1"
                  >
                    <li>What are they unsure about?</li>
                    <li>
                      Are there any unconscious biases affecting how they
                      approach the task?
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* PROVIDING SUPPORT */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-l-8 border-indigo-500">
              <div className="flex items-center gap-4 mb-4">
                <HelpingHand className="w-8 h-8 text-indigo-600" />
                <h2 className="text-2xl font-bold">Providing Support</h2>
              </div>

              <p className="text-slate-700 mb-4">
                Consider how best to support the learner in achieving the goal.
                Refer to their VARK questionnaire—understanding how they learn
                best (Visual, Auditory, Reading/Writing, Kinesthetic) will help
                you choose the most effective teaching strategies. This might
                include:
              </p>

              <ul
                style={{ paddingLeft: "0px" }}
                className="list-disc list-inside space-y-2 text-slate-700"
              >
                <li>Demonstrations</li>
                <li>Videos</li>
                <li>Diagrams</li>
                <li>Hands-on practice</li>
              </ul>
            </div>

            {/* SHARING RESPONSIBILITY */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-l-8 border-indigo-500">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
                <h2 className="text-2xl font-bold">Sharing Responsibility</h2>
              </div>
              <p className="text-slate-700 mb-4">
                Now, begin to shift some responsibility to the learner:
              </p>
              <ul
                style={{ paddingLeft: "0px" }}
                className="list-disc list-inside space-y-2 text-slate-700"
              >
                <li>Will you identify a safe space for practice?</li>
                <li>
                  Will you handle observations while they focus on the task?
                </li>
                <li>
                  How will you gradually step back as their confidence and skill
                  grow?
                </li>
              </ul>
            </div>

            {/* PRACTICE */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-l-8 border-indigo-500">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
                <h2 className="text-2xl font-bold">Practice & Progression</h2>
              </div>

              <p className="text-slate-700">
                Practice should be tailored to the learner’s pace. As their
                confidence builds, you’ll slowly reduce your support, allowing
                them to take more control. This promotes independence and
                lasting learning.
              </p>
            </div>

            {/* CONFIRMING LEARNING */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-l-8 border-indigo-500">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle className="w-8 h-8 text-indigo-600" />
                <h2 className="text-2xl font-bold">Confirming Learning</h2>
              </div>

              <p className="text-slate-700 mb-3">
                Always finish by confirming what’s been learned. You can do this
                through reflective questioning, discussion, or demonstration.
                The goal is to ensure the learner can explain and apply the
                skill confidently.
              </p>

              <p className="text-slate-600">
                Below is a blank lesson plan template along with a few completed
                examples. Download, print, and begin filling out your own
                plans—these will become your personalised guide as you develop
                your teaching approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOWNLOAD ================= */}
      <section className="py-24 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="text-center text-white fade-up">
          <h2 className="text-3xl font-extrabold mb-3">
            Get Your Lesson Planning Documents
          </h2>
          <p className="mb-6 text-slate-200">
            Download printable templates and completed examples.
          </p>

          <a
            style={{ textDecoration: "none", color: "white" }}
            href="/lessonPlanning-Docs.zip"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition shadow-lg"
          >
            <Download />
            Download ZIP
          </a>
        </div>
      </section>

      {/* ================= NAV ================= */}
      <div className="py-16 text-center bg-white">
        <Link to="/route-planning">
          <button className="px-10 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition">
            Next Page
          </button>
        </Link>
      </div>

      {/* ================= QUIZ ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-xl mx-auto text-center bg-white p-10 rounded-3xl shadow-2xl fade-up">
          <h2 className="text-3xl font-extrabold mb-2">Start Quiz</h2>
          <h4 className="text-lg text-red-600 mb-4">15 Questions</h4>
          <p className="text-slate-700 mb-6">
            Test your understanding of Lesson Planning before moving on.
          </p>

          <Link to="/takequizCatName/lesson-planning">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition">
              Start Quiz
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
