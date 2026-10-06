import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Car,
  Presentation,
  PlayCircle,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import bannerImg from "../assets/images/finished-road-map-1.png";
import roadmapImg from "../assets/images/finished-road-map-1.png";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

export default function ADITrainingPortal() {
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
        }
      );
    });
  }, []);

  return (
    <main className="w-full overflow-hidden font-sans">
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Driving instructor training in Coventry | Bedworth | Nuneaton
        </title>
        <meta
          name="description"
          content="Explore our Driving Instruction training (PDI) program designed to help new drivers build confidence and refine their skills after passing their test. "
        />
        <meta
          property="og:title"
          content="Driving instructor training in Coventry | Bedworth | Nuneaton"
        />
        <meta
          property="og:description"
          content="Explore our Driving Instruction training (PDI) program designed to help new drivers build confidence and refine their skills after passing their test."
        />
        <link
          rel="canonical"
          href="https://smartlearner.com/ADI-Training-Portal"
        />
      </Helmet>
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Welcome TO <span className="text-orange-400">PDI Portal</span>
              </h1>

              <p className="mt-6 text-lg text-slate-200 leading-relaxed">
                Unlock your driving potential with Smartlearner Learn from
                certified instructors in a safe, supportive environment. Start
                your journey to becoming a confident, skilled driver today!
              </p>

              <Link to="/Contact-Us">
                <button className="mt-8 px-7 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-full text-white font-semibold shadow-xl">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ================= ROADMAP SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center fade-up">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Your <span className="text-orange-500">PDI Journey</span>
            </h2>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              This structured training roadmap guides you step-by-step through
              Part 1, Part 2, and Part 3 — ensuring you build strong knowledge,
              driving ability, and teaching skills.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <ShieldCheck className="text-orange-500 w-7 h-7" />
              <p className="text-slate-600" style={{ marginBottom: "0px" }}>
                DVSA-aligned training material & expert guidance
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <img
              src={roadmapImg}
              alt="ADI Training Roadmap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* ================= WELCOME VIDEO ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 fade-up">
          <div className="flex items-center gap-4 mb-8">
            <PlayCircle className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Welcome <span className="text-orange-500">Message</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/iHRbw3qpLyM"
                title="ADI Welcome Video"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
      {/* ================= LEARNING MODULES ================= */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <GraduationCap className="mx-auto text-orange-500 w-12 h-12 mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              PDI <span className="text-orange-500">Learning Modules</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Choose your stage and start learning today
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* PART 1 */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-orange-500">
              <BookOpen className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-3">Part 1 – Theory</h3>
              <p className="text-slate-700 mb-6">
                Master ADI theory, traffic law, and instructional knowledge.
              </p>
              <Link to="/part-one-theory-questions">
                <button className="px-6 py-2 rounded-full border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition">
                  Start Learning
                </button>
              </Link>
            </div>

            {/* PART 2 */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-yellow-400">
              <Car className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-3">
                Part 2 – Driving Ability
              </h3>
              <p className="text-slate-700 mb-6">
                Develop advanced driving skills to DVSA standards.
              </p>
              <Link to="/part-two-theory-questions">
                <button className="px-6 py-2 rounded-full border-2 border-yellow-400 text-yellow-500 font-semibold hover:bg-yellow-400 hover:text-white transition">
                  Start Learning
                </button>
              </Link>
            </div>

            {/* PART 3 */}
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-rose-500">
              <Presentation className="w-10 h-10 text-rose-500 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-3">
                Part 3 – Teaching Skills
              </h3>
              <p className="text-slate-700 mb-6">
                Learn professional coaching and instructional techniques.
              </p>
              <Link to="/part-three-theory-questions">
                <button className="px-6 py-2 rounded-full border-2 border-rose-500 text-rose-500 font-semibold hover:bg-rose-500 hover:text-white transition">
                  Start Learning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-200 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-400" /> +44 02475 092784
            </p>
            <p className="flex items-center gap-3 mt-2">
              <Mail className="w-5 h-5 text-orange-400" />{" "}
              admin@smartlearner.com
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Location</h4>
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-400 mt-1" />4 Wheel Wright
              Building, Hen Lane, Coventry, CV6 4LB
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">ADI Training</h4>
            <p className="text-slate-400">
              Helping future instructors succeed with confidence and clarity.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
