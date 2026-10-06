import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpenCheck,
  Brain,
  GraduationCap,
  Eye,
  HeartPulse,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";

import bannerImg from "../../../assets/alertbg.png";

gsap.registerPlugin(ScrollTrigger);

export default function BookPartOneTest() {
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
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[70vh] lg:h-[85vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Book Your <span className="text-red-500">ADI Part 1 Test</span>
              </h1>

              <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
                Feel confident, prepared, and ready to take the next step in
                your ADI journey. Know exactly when you’re ready to book.
              </p>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Link to="/Contact-Us">
                  <button className="px-7 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-white font-semibold shadow-lg">
                    Contact Us
                  </button>
                </Link>

                <Link to="/part-1-trainning-material">
                  <button className="px-7 py-3 bg-white/90 hover:bg-white transition rounded-full font-semibold text-slate-800 shadow-lg">
                    Back to Portal
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center fade-up">
          <BookOpenCheck className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Are You <span className="text-red-600">Ready?</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-slate-700 text-sm sm:text-lg">
            Booking your Part 1 test is a big milestone. These indicators will
            help you decide if now is the right time.
          </p>
        </div>
      </section>

      {/* ================= READINESS CARDS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* CARD 1 */}
          <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-red-500">
            <Brain className="w-10 h-10 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Confidence in Knowledge</h3>
            <p className="text-slate-700 leading-relaxed">
              Knowing you're ready to take the ADI Part 1 test begins with
              feeling confident in your knowledge of all the material covered in
              the exam. This includes a solid understanding of road safety,
              driving laws, and teaching techniques.
              <br></br>
              <br></br>If you've consistently scored well on practice tests and
              mock exams, especially in areas where you previously struggled,
              it's a strong indicator that you're ready for the real test.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-red-500">
            <GraduationCap className="w-10 h-10 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Teaching and Instructional Skills
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Your ability to explain complex driving concepts clearly and
              confidently is key. Since the role of an ADI involves teaching
              others, you should be able to break down driving laws and safety
              practices in a way that would make sense to learners.
              <br></br>
              <br></br>
              If you can teach these concepts or visualize yourself teaching a
              student, it shows you've absorbed the material deeply and are
              prepared to handle the instructional aspect of the exam.{" "}
            </p>
          </div>

          {/* CARD 3 */}
          <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-red-500">
            <Eye className="w-10 h-10 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Hazard Perception Readiness
            </h3>
            <p className="text-slate-700 leading-relaxed">
              The ADI Part 1 test includes a section on hazard perception. If
              you’ve practiced with online clips and have developed the ability
              to identify potential hazards swiftly, it shows you're ready.
              <br></br>
              <br></br>Consistently scoring well on mock hazard perception tests
              is a strong indicator you're prepared for the real test.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-red-500">
            <HeartPulse className="w-10 h-10 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Emotional Readiness</h3>
            <p className="text-slate-700 leading-relaxed">
              Feeling calm and confident, rather than anxious, is a good sign
              that you're mentally prepared for the test. Confidence, backed by
              thorough preparation, is a clear indicator that you're in the
              right mindset to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6 text-center fade-up">
          <CalendarCheck className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Book Your <span className="text-red-600">Test Today</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-700 text-sm sm:text-lg">
            Once you feel confident across all areas, take the next step and
            secure your ADI Part 1 test.
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <a
              href="https://www.gov.uk/adi-part-1-test"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-full shadow-lg"
            >
              Book Your Test
              <ArrowRight className="w-5 h-5" />
            </a>

            <Link to="/test-day-tips">
              <button className="px-8 py-3 bg-white border border-red-200 hover:bg-red-50 transition rounded-full font-semibold text-red-600 shadow">
                Next: Test Day Tips
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
