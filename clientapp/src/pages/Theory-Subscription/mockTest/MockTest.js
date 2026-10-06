import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import alertnessBanner from "../../../assets/alertbg.png";

gsap.registerPlugin(ScrollTrigger);

export default function MockTest() {
  useEffect(() => {
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] sm:h-[85vh] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url(${alertnessBanner})`,
          }}
        />

        {/* Dark Overlay (controls opacity) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Forget the rest,
                <span className="text-red-500">learn with</span> the best!
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
                Multiple Choice
              </p>

              <Link to="/Contact-Us">
                <button
                  className="mt-6 sm:mt-8 px-6 py-2.5 sm:px-7 sm:py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-sm sm:text-base font-semibold text-white shadow-lg"
                  style={{ border: "none" }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        {/* ================= HOW TEST WORKS ================= */}
        <section className="py-16 sm:py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <h2
                className="font-extrabold mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
              >
                How does the <span className="text-red-600">Test work?</span>
              </h2>

              <ul className="space-y-4 text-slate-700">
                {[
                  "You have 57 minutes to answer 50 multiple-choice questions.",
                  "Before the test starts you’ll get instructions on how the test works.",
                  "The chance to do a practice question to get used to the screens.",
                  "A question and several possible answers appear on the screen.",
                  "You must select the correct answer.",
                  "Three questions are based on a short silent video.",
                  "Driving through a town centre.",
                  "Driving on a country road.",
                  "You can replay the video during the test.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-sm sm:text-base leading-relaxed"
                  >
                    <IoMdArrowDropright className="text-red-600 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div>
              <h3
                className="font-bold mb-4"
                style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}
              >
                Review & Break Information
              </h3>

              <ul className="space-y-4 text-slate-700">
                {[
                  "You can flag questions to come back to later.",
                  "You can review and change answers at any point.",
                  "You do not need to use the full 57 minutes.",
                  "You can take a break of up to 3 minutes before the hazard perception test.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-sm sm:text-base leading-relaxed"
                  >
                    <IoMdArrowDropright className="text-red-600 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* ================= START QUIZ ================= */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-red-50 to-white fade-up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-extrabold text-center mb-10"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Test <span className="text-red-600">Yourself</span>
            </h2>

            <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-10 text-center">
              <h3
                className="font-bold mb-2"
                style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}
              >
                Start Quiz
              </h3>

              <p className="text-slate-600 mb-6 text-sm sm:text-base">
                Click the start quiz button to begin the mock test and see your
                results.
              </p>

              <Link to="/takequizCatName/Mock-Test">
                <button className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 transition text-white font-semibold shadow-lg">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </section>{" "}
      </section>
    </main>
  );
}
