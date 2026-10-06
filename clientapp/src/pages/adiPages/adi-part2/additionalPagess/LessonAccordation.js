import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FileText,
  CheckCircle,
  ClipboardList,
  Layers,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const LessonAccordation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      ".lesson-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".lesson-wrapper",
          start: "top 85%",
        },
      }
    );
  }, []);

  const itemStyle = (active) =>
    `lesson-card group rounded-2xl border transition-all duration-300 p-4 cursor-pointer
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Lesson <span className="text-red-600">Structure</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore structured lessons and quizzes designed to help you
            confidently prepare for your ADI Part 2 exam.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* ================= TOPICS ================= */}
          <section className="bg-white rounded-3xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Layers className="text-red-600" />
                <h2 className="text-xl font-bold">Topics</h2>
              </div>
              <span className="text-sm text-slate-500">
                12 Steps | 10 Quizzes
              </span>
            </div>

            <ul style={{paddingLeft:"0px"}} className="space-y-3">
              {[
                ["/quizModuleOne", "Human checks before setting off to drive", FileText, 1, "Test your knowledge about Human checks."],
                ["/quizModuletwo", "Vehicle checks to perform before the test", ClipboardList, 3, "Check your understanding of vehicle checks"],
                ["/quizModulethree", "What is Advanced Driving in Relation to the ADI Part 2 Exam?", ClipboardList, 6, "Learn about Advanced Driving training Part 2"],
                ["/quizModulefour", "The COAST Method in Advanced Driving", ClipboardList, 8, "Understand The COAST Method in Advanced Driving"],
                ["/quizModulefive", "Concentration in the Coast Method", ClipboardList, 10, "Understand Concentration in the Coast Method"],
                ["/quizModulesix", "Observation in the COAST Method for Advanced Driving", ClipboardList, 12, "Understand Observation in the COAST Method"],
                ["/quizModuleseven", "Anticipation in the COAST Method for Advanced Driving", ClipboardList, 14, "Understand Anticipation in the COAST Method"],
                ["/quizModule-eight", "Space in the COAST Method for Advanced Driving", ClipboardList, 16, "Understand Space in the COAST Method"],
                ["/quizModulenine", "Time in the COAST Method for Advanced Driving", ClipboardList, 18, "Understand Time in the COAST Method"],
                ["/quizModule-Ten", "Mastering the TUG Method for Safer and Smoother Driving", ClipboardList, 20, "Mastering the TUG Method"],
                ["/quizModuleEleven", "Show me tell me questions", ClipboardList, 22, "Show me tell me questions"],
                ["/quizModuleTwelve", "Booking the Part 2 test", ClipboardList, 23, "Booking the Part 2 test"],
              ].map(([link, title, Icon, index, desc]) => (
                <Link to={link} key={index} style={{textDecoration:"none"}}>
                  <li
                    onMouseEnter={() => setOpenIndex(index)}
                    onMouseLeave={() => setOpenIndex(null)}
                    className={itemStyle(openIndex === index)} style={{marginBottom:"0.5rem"}}
                  >
                    <div className="flex items-center gap-3 font-medium">
                      <Icon className="text-red-600 group-hover:scale-110 transition" />
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
                12 Steps | 10 Quizzes
              </span>
            </div>

            <ul style={{paddingLeft:"0px"}} className="space-y-3">
              {[
                ["/takequizCatName/Human-Checks", "Quiz Human checks", 2],
                ["/takequizCatName/Vehicle-Checks", "Quiz vehicle checks", 5],
                ["/takequizCatName/Advanced-Driving-in-Relation-to-the-ADI", "Quiz Advanced Driving Part 2", 7],
                ["/takequizCatName/The-COAST-Method-in-Advanced-Driving", "Quiz The COAST Method", 9],
                ["/takequizCatName/Concentration-in-the-Coast-Method", "Quiz Concentration in the Coast Method", 11],
                ["/takequizCatName/Observation-in-the-COAST-Method-for-Advanced-Driving", "Quiz Observation in the COAST Method", 13],
                ["/takequizCatName/Anticipation-in-the-COAST-Method-for-Advanced-Driving", "Quiz Anticipation in the COAST Method", 15],
                ["/takequizCatName/Space-in-the-COAST-Method", "Quiz Space in the COAST Method", 17],
                ["/takequizCatName/Time-in-the-COAST-Method-for-Advanced-Driving", "Quiz Time in the COAST Method", 19],
                ["/takequizCatName/Mastering-the-TUG-Method", "Quiz Mastering the TUG Method", 21],
              ].map(([link, title, index]) => (
                <Link to={link} key={index} style={{textDecoration:"none"}}>
                  <li
                    onMouseEnter={() => setOpenIndex(index)}
                    onMouseLeave={() => setOpenIndex(null)}
                    className={itemStyle(openIndex === index)}
                    style={{marginBottom:"0.5rem"}}
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
};

export default LessonAccordation;
