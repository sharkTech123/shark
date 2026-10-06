import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Layers, CheckCircle, BookOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function LessonModules() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      ".lesson-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".lesson-wrapper",
          start: "top 85%",
        },
      },
    );
  }, []);

  const cardStyle = (active) =>
    `lesson-card group rounded-2xl border p-4 transition-all duration-300 cursor-pointer
     ${
       active
         ? "bg-red-50 border-red-400 shadow-xl scale-[1.02]"
         : "bg-white border-slate-200 hover:shadow-lg"
     }`;

  return (
    <main className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-6 lesson-wrapper">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold">
            Lesson <span className="text-emerald-600">Modules</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Structured ADI Part 3 lessons and quizzes designed for confident,
            exam-ready instructors.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* ================= TOPICS ================= */}
          <section className="bg-white rounded-3xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Layers className="text-emerald-600" />
                <h2 className="text-xl font-bold">Topics</h2>
              </div>
              <span className="text-sm text-slate-500">
                18 Steps | 15 Quizzes
              </span>
            </div>

            <ul className="space-y-3 pl-0">
              {[
                [
                  "/national-standards",
                  "The national standard and SC1 Form",
                  FileText,
                  1,
                  "Test your knowledge about The national standard and SC1 Form",
                ],
                [
                  "/good-instructor-module",
                  "What Makes a good instructor?",
                  BookOpen,
                  3,
                  "Check your understanding of What Makes a good instructor?",
                ],
                [
                  "/legal-stuff",
                  "The legal stuff",
                  BookOpen,
                  6,
                  "Learn about The legal stuff",
                ],
                [
                  "/learning-style",
                  "Learning needs and styles",
                  BookOpen,
                  8,
                  "Understand Learning needs and styles",
                ],
                [
                  "/lesson-structure",
                  "Lesson structure",
                  BookOpen,
                  10,
                  "Understand Lesson structure",
                ],
                [
                  "/adi-videos",
                  "Videos of Part 3",
                  FileText,
                  297,
                  "Videos of Part 3",
                ],
                [
                  "/gde-matrix-grow",
                  "GDE Matrix and Grow Model",
                  BookOpen,
                  12,
                  "Understand GDE Matrix and Grow Model",
                ],
                [
                  "/lesson-planning",
                  "Lesson Planning",
                  BookOpen,
                  14,
                  "Understand Lesson Planning",
                ],
                [
                  "/route-planning",
                  "Route Planning",
                  BookOpen,
                  16,
                  "Understand Route Planning",
                ],
                [
                  "/route-direction",
                  "Giving Route Directions",
                  BookOpen,
                  18,
                  "Understand Giving Route Directions",
                ],
                [
                  "/client-centred-learning",
                  "Client Centred Learning",
                  BookOpen,
                  20,
                  "Client Centred Learning",
                ],
                [
                  "/questioning-techniques",
                  "Questioning techniques",
                  BookOpen,
                  2009,
                  "Questioning techniques",
                ],
                [
                  "/body-language",
                  "Body Language",
                  BookOpen,
                  22,
                  "Understand Body Language",
                ],
                [
                  "/giving-instruction-and-feedback",
                  "Giving Instruction and Feedback",
                  BookOpen,
                  223,
                  "Understand Giving Instruction and Feedback",
                ],
                [
                  "/adapting-lessons",
                  "Adapting Lessons",
                  BookOpen,
                  1224,
                  "Understand Adapting Lessons",
                ],
                [
                  "/risk-management-and-responsibility",
                  "Risk Management and Responsibility",
                  BookOpen,
                  555,
                  "Risk Management and Responsibility",
                ],
                [
                  "/intervention",
                  "Intervention",
                  BookOpen,
                  435,
                  "Intervention",
                ],
                ["/control-module", "Control", BookOpen, 4355, "Control"],
                ["/awareness-module", "Awareness", BookOpen, 4375, "Awareness"],
                ["/mockTest-module", "MockTest", BookOpen, 4323, "MockTest"],
                [
                  "/trainee-badge",
                  "Trainee badge",
                  FileText,
                  2389,
                  "Trainee badge",
                ],
                [
                  "/book-adi-part-3",
                  "How to book ADI Part 3 Test",
                  FileText,
                  2304,
                  "How to book ADI Part 3 Test",
                ],
              ].map(([link, title, Icon, index, desc]) => (
                <Link key={index} to={link} className="no-underline">
                  <li
                    onMouseEnter={() => setOpenIndex(index)}
                    onMouseLeave={() => setOpenIndex(null)}
                    className={cardStyle(openIndex === index)}
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <div className="flex items-center gap-3 font-medium">
                      <Icon className="text-emerald-600 group-hover:scale-110 transition" />
                      {title}
                    </div>
                    {openIndex === index && (
                      <p className="mt-2 text-sm text-slate-600">{desc}</p>
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </section>

          {/* ================= QUIZZES ================= */}
          <section className="bg-white rounded-3xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" />
                <h2 className="text-xl font-bold">Quizzes</h2>
              </div>
              <span className="text-sm text-slate-500">
                18 Steps | 15 Quizzes
              </span>
            </div>

            <ul className="space-y-3 pl-0">
              {[
                [
                  "/takequizCatName/national-standard",
                  "Quiz The national standard and SC1 Form",
                  2,
                ],
                [
                  "/takequizCatName/good-instructor",
                  "Quiz What Makes a good instructor?",
                  5,
                ],
                ["/takequizCatName/legal-stuff", "Quiz The legal stuff", 7],
                [
                  "/takequizCatName/learning-styles",
                  "Quiz Learning needs and styles",
                  9,
                ],
                [
                  "/takequizCatName/lesson-structure",
                  "Quiz Lesson structure",
                  11,
                ],
                [
                  "/takequizCatName/gde-matrix",
                  "Quiz GDE Matrix and Grow Model",
                  13,
                ],
                [
                  "/takequizCatName/lesson-planning",
                  "Quiz Lesson Planning",
                  15,
                ],
                ["/takequizCatName/route-planning", "Quiz Route Planning", 17],
                [
                  "/takequizCatName/giving-routes",
                  "Quiz Giving Route Directions",
                  19,
                ],
                [
                  "/takequizCatName/client-centred-learning",
                  "Quiz Client Centred Learning",
                  21,
                ],
                [
                  "/takequizCatName/questioning-techniques",
                  "Quiz Questioning techniques",
                  2109,
                ],
                ["/takequizCatName/body-language", "Quiz Body Language", 212],
                [
                  "/takequizCatName/giving-feedback",
                  "Quiz Giving Instruction and Feedback",
                  233,
                ],
                ["/takequizCatName/adapting", "Quiz Adapting Lessons", 433],
                [
                  "/takequizCatName/risk-management-responsbilities",
                  "Quiz Risk Management and Responsibility",
                  477,
                ],
                ["/takequizCatName/intervention", "Quiz Intervention", 427],
              ].map(([link, title, index]) => (
                <Link key={index} to={link} className="no-underline">
                  <li
                    onMouseEnter={() => setOpenIndex(index)}
                    onMouseLeave={() => setOpenIndex(null)}
                    className={cardStyle(openIndex === index)}
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <div className="flex items-center gap-3 font-medium">
                      <CheckCircle className="text-green-600" />
                      {title}
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
