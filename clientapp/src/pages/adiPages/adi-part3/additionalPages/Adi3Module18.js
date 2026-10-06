import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CalendarCheck,
  CreditCard,
  Lightbulb,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import backgroundImage from "../../../../assets/images/bookpart3.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Adi3Module18() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      }
    );

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
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div ref={heroRef} className="max-w-3xl space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                Book Your <span className="text-emerald-400">ADI</span>
                <br />
                <span className="text-cyan-300">Part 3 Test</span>
              </h1>
              <p className="text-slate-200 text-lg">
                Your final step toward becoming a fully qualified Approved
                Driving Instructor.
              </p>
              <div className="flex gap-4 pt-4">
                <Link to="/Contact-Us">
                  <button className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-xl transition">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 fade-up">
            💻 How to <span className="text-emerald-500">Book Your Test</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* STEP 1 */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500">
              <CalendarCheck className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Step 1: Booking Website</h3>
              <p className="text-slate-700">
                Visit the official GOV.UK ADI Part 3 booking page to begin your
                application.
              </p>
              <a
                href="https://www.gov.uk/adi-part-3-test"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-emerald-600 font-semibold"
              >
                Open GOV.UK ↗
              </a>
            </div>

            {/* STEP 2 */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-t-8 border-cyan-500">
              <CheckCircle2 className="w-10 h-10 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Step 2: Log In</h3>
              <ul style={{padding:"0px"}} className="list-disc list-inside text-slate-700">
                <li>ADI personal reference number</li>
                <li>Driving licence number</li>
              </ul>
            </div>

            {/* STEP 3 */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500">
              <CalendarCheck className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Step 3: Test Centre</h3>
              <p className="text-slate-700">
                Choose an authorised test centre for your ADI Part 3 exam.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-t-8 border-orange-500">
              <CalendarCheck className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Step 4: Date & Time</h3>
              <p className="text-slate-700">
                Book early and stay flexible. Use the HOLD service if needed.
              </p>
            </div>

            {/* STEP 5 */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-t-8 border-pink-500">
              <CheckCircle2 className="w-10 h-10 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Step 5: Candidate</h3>
              <p className="text-slate-700">
                Bring a real pupil with valid insurance. No charging unless on a
                trainee licence.
              </p>
            </div>

            {/* COST */}
            <div className="fade-up bg-gradient-to-br from-emerald-500 to-cyan-500 text-white p-8 rounded-3xl shadow-2xl">
              <CreditCard className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Test Cost</h3>
              <p className="text-lg font-semibold">£111 (as of 2024)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIPS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="text-emerald-500" />
              <h3 className="text-2xl font-bold">Quick Tips for Success</h3>
            </div>
            <ul style={{padding:"0px"}} className="space-y-2 text-slate-700">
              <li>Practice with real learners</li>
              <li>Keep a lesson diary (pink badge)</li>
              <li>Request backseat feedback</li>
              <li>Attempt a mock Part 3 test</li>
            </ul>
          </div>

          <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <CalendarCheck className="text-cyan-500" />
              <h3 className="text-2xl font-bold">Reschedule or Cancel</h3>
            </div>
            <p className="text-slate-700">
              You can reschedule or cancel up to 3 working days before your test
              through the GOV.UK portal.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          You’re Almost There 🚀
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          The Part 3 exam is your final step to becoming a qualified instructor.
          With preparation and confidence, success is within reach.
        </p>
        <a href="tel:+4402475092784" className="inline-flex items-center gap-2 text-emerald-400 font-semibold mb-6">
          <PhoneCall /> Reach out to us anytime
        </a>
        <div>
          <Link to="/adi-videos">
            <button className="px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 font-semibold shadow-xl transition inline-flex items-center gap-2">
              Next Page <ArrowRight />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
