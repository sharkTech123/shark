import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bannerImg from "../../../assets/alertbg.png";

import {
  BookOpen,
  FileQuestion,
  Brain,
  ShieldAlert,
  GraduationCap,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function InstructorPartOne() {
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
      <section className="relative h-[70vh] sm:h-[85vh] w-full">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                Instructor Part One
                <span className="block text-red-500">
                  Theory & Hazard Perception
                </span>
              </h1>

              <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
                Prepare confidently for your ADI Part One exam with structured
                theory learning, band-wise questions, mock tests and hazard
                perception resources.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/Contact-Us"
                  className="px-7 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold shadow-lg"
                  style={{ textDecoration: "none" }}
                >
                  Contact Us
                </Link>
                {/* <Link
                  to="/adi-part-one-test"
                  className="px-7 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white font-semibold"
                  style={{ textDecoration: "none" }}
                >
                  Book Part 1 Test
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 fade-up">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              What is <span className="text-red-600">Instructor Part One?</span>
            </h2>

            <p className="mt-6 text-slate-700 text-sm sm:text-lg leading-relaxed">
              The ADI Part One exam tests your knowledge of road procedure,
              traffic signs, driving law, publications and hazard perception.
              This section breaks everything into structured bands and practice
              formats to help you pass confidently.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRACTICE BANDS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 fade-up">
            <BookOpen className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Practice <span className="text-red-600">Question Bands</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Band 1",
                desc: "Road Procedure",
                link: "/band-one-Road-Procedure",
              },
              {
                title: "Band 2",
                desc: "Traffic Signs & Signals",
                link: "/band-two-traffic-signs-and-signals",
              },
              {
                title: "Band 3",
                desc: "Driving Law & Disabilities",
                link: "/band-three-driving-tests-disabilities-and-the-law",
              },
              {
                title: "Band 4",
                desc: "Publications & Techniques",
                link: "/band-four-publications-techniques",
              },
            ].map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="fade-up group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl border-t-8 border-red-500 transition"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>

                <span className="mt-4 inline-flex items-center gap-2 text-red-600 font-semibold">
                  Start Practice <ArrowRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 fade-up">
            <BookOpen className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Practice
              <span className="text-red-600"> 25 Question</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Band 1",
                desc: "25 Road Procedure",
                link: "/band-1-Road-Procedure",
              },
              {
                title: "Band 2",
                desc: "25 Traffic Signs & Signals",
                link: "/band-2-traffic-signs-and-signals",
              },
              {
                title: "Band 3",
                desc: "25 Driving Law & Disabilities",
                link: "/band-3-driving-tests-disabilities-and-the-law",
              },
              {
                title: "Band 4",
                desc: "25 Publications & Techniques",
                link: "/band-4-publications-techniques",
              },
            ].map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="fade-up group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl border-t-8 border-red-500 transition"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>

                <span className="mt-4 inline-flex items-center gap-2 text-red-600 font-semibold">
                  Start Practice <ArrowRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTS ================= */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 fade-up">
            <ClipboardCheck className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Tests & <span className="text-red-600">Mock Exams</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mock Test",
                desc: "100 Exam-Style Questions",
                link: "/Adi-part-1-MockTest",
                icon: Brain,
              },

              {
                title: "Bonus Quiz",
                desc: "Extra Confidence Builder",
                link: "/Adi-part-1-Bonus-Quiz",
                icon: GraduationCap,
              },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="fade-up bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-l-8 border-red-500"
                style={{ textDecoration: "none", color: "black" }}
              >
                <item.icon className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-slate-600 mt-2">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESOURCES ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 fade-up">
            <ShieldAlert className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Learning <span className="text-red-600">Resources</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Training Material", link: "/trainning-material" },
              { name: "Glossary of Terms", link: "/glossary-terms" },
              { name: "Hazard Perception", link: "/hazard-preception-part-2" },
              { name: "Book your part 1 test", link: "/adi-part-one-test" },
              { name: "Test Day Tips", link: "/test-day-tips" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="fade-up group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl border-t-8 border-red-500 transition"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3 className="text-xl font-semibold">{item.name}</h3>

                <span className="mt-4 inline-flex items-center gap-2 text-red-600 font-semibold">
                  Start Visit <ArrowRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
