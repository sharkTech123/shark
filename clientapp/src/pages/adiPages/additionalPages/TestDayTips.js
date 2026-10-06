import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bannerImg from "../../../assets/alertbg.png";

import {
  Clock,
  Bed,
  Smile,
  Eye,
  CheckCircle,
  AlertCircle,
  Trophy,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TestDayTips() {
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
      <section className="relative h-[70vh] sm:h-[85vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                Test Day <span className="text-red-500">Tips</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed">
                Walk into your test feeling calm, confident, and fully prepared.
                Follow these simple strategies to perform at your best.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/Contact-Us">
                  <button className="px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-white font-semibold shadow-lg">
                    Contact Us
                  </button>
                </Link>

                <Link to="/part-1-trainning-material">
                  <button className="px-6 py-3 bg-white/10 hover:bg-white/20 transition rounded-full text-white font-semibold border border-white/30">
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
        <div className="container mx-auto px-6 text-center max-w-3xl fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Stay <span className="text-red-600">Focused</span> & Confident
          </h2>
          <p className="mt-4 text-slate-700 text-lg">
            The day of the test can be nerve-wracking, but with the right
            strategies, you can walk in with confidence.
          </p>
        </div>
      </section>

      {/* ================= BEFORE TEST ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10 fade-up">
            <Clock className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Before the <span className="text-red-600">Test</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-red-500 fade-up">
              <div className="flex items-center gap-4 mb-4">
                <Bed className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">
                  Get a Good Night’s Sleep
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Rest is crucial. A well-rested mind is sharper and better at
                recalling information.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-red-500 fade-up">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">Arrive Early</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Aim to arrive at least 10 minutes before your test. This gives
                you time to relax and settle in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DURING TEST ================= */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10 fade-up">
            <Eye className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              During the <span className="text-red-600">Test</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-3xl shadow-xl fade-up">
              <Smile className="w-9 h-9 text-red-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Stay Calm</h4>
              <p className="text-slate-700">
                It’s natural to feel nervous, but don’t let anxiety take over.
                Take deep breaths and focus on the questions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl fade-up">
              <AlertCircle className="w-9 h-9 text-red-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Read Carefully</h4>
              <p className="text-slate-700">
                Take your time to read each question thoroughly. Misreading a
                question could lead to a wrong answer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl fade-up">
              <CheckCircle className="w-9 h-9 text-red-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Review Answers</h4>
              <p className="text-slate-700">
                If you finish the Multiple Choice section early, use the
                remaining time to review your answers. Double-checking can help
                catch any mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AFTER TEST ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-8 fade-up">
            <Trophy className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              After the <span className="text-red-600">Test</span>
            </h2>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl shadow-2xl border-l-8 border-red-500 fade-up">
            <p className="text-slate-700 mb-4">
              You’ll get your results immediately after completing the test. If
              you pass, congratulations! 🎉 You’re one step closer to becoming
              an ADI.
            </p>
            <p className="text-slate-700">
              If you don’t pass, don’t be discouraged. Use the feedback provided
              to identify areas that need improvement and focus on those when
              preparing for your retake.
            </p>
          </div>
        </div>
      </section>

      {/* ================= NEXT PAGE ================= */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 text-center fade-up">
          <Link to="/goodluck">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-full shadow-lg">
              Next Page
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
