import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BadgeCheck,
  AlertTriangle,
  Scale,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../../assets/images/traineebadges.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Adi3Module16() {
  const heroRef = useRef(null);

  const data = [
    {
      aspect: "Experience",
      trainee: "Real-world teaching with actual learners",
      part3: "No teaching experience outside of training",
    },
    {
      aspect: "Earnings",
      trainee: "Can earn while training (within franchise rules)",
      part3: "No earnings until fully qualified",
    },
    {
      aspect: "Preparation",
      trainee: "Hands-on, practical experience with feedback",
      part3: "Limited to simulations or private practice",
    },
    {
      aspect: "Cost",
      trainee: "£140 + 20 hours additional training",
      part3: "No badge cost",
    },
    {
      aspect: "Part 3 Readiness",
      trainee: "Easier to book test with your own pupils",
      part3: "Must provide your own pupil for the test",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      },
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
        },
      );
    });
  }, []);

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div ref={heroRef} className="max-w-3xl space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                Trainee <span className="text-emerald-400">Badge</span>
              </h1>
              <p className="text-slate-200 text-lg">
                Understand your options before stepping into Part 3 — with
                clarity, confidence, and strategy.
              </p>
              <div className="flex gap-4 pt-4">
                <Link to="/Contact-Us">
                  <button className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-xl transition">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Trainee Badge <span className="text-emerald-500">vs</span> Going
            Straight to Part 3
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
            Once you've completed at least 40 hours of Part 3 training, your
            sponsoring driving school can sign off your progress if they're
            confident that you've understood the required curriculum. At this
            point, you’ll face an important decision: whether to apply for a
            trainee licence (commonly known as the pink badge) or to go straight
            to the Part 3 test.
          </p>
        </div>
      </section>

      {/* ================= DECISION CARDS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10">
          {/* Trainee Badge */}
          <div className="fade-up bg-slate-50 p-10 rounded-3xl shadow-2xl border-t-8 border-emerald-500">
            <BadgeCheck className="w-10 h-10 text-emerald-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Trainee Licence (PDI Badge)
            </h3>
            <p className="text-slate-700 mb-4">
              The trainee badge is designed to give you real-world experience as
              you continue to learn. It costs £140 and is valid for six months.
              This route allows you to teach actual learners and earn money
              while still under supervision.
            </p>

            <ul
              style={{ padding: "0px" }}
              className="space-y-2 text-slate-700 mb-4"
            >
              <li>• Supply of learners</li>
              <li>• Ongoing support</li>
              <li>• Structured guidance</li>
            </ul>

            <p className="text-amber-700 font-semibold mb-3">
              ⚠️ However, it’s crucial to remember that this badge is a training
              tool, not a qualification. Too often, trainees become overly
              focused on pupil pass rates and treat the badge as a full-time
              job, losing sight of their own development.
            </p>
            <p className="font-bold text-slate-900">
              Passing Part 3 requires more than helping learners pass—**you need
              to demonstrate your ability to deliver structured, safe, and
              reflective instruction.
            </p>
          </div>

          {/* Legal Notes */}
          <div className="fade-up bg-slate-50 p-10 rounded-3xl shadow-2xl border-t-8 border-cyan-500">
            <ShieldCheck className="w-10 h-10 text-cyan-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Legal & Practical Notes</h3>

            <ul
              style={{ padding: "0px" }}
              className="space-y-2 text-slate-700 mb-6"
            >
              <li>
                • You can only apply for the badge through a registered driving
                school.
              </li>
              <li>
                • Only the school can advertise you as a driving instructor—you
                cannot promote yourself independently.
              </li>
              <li>
                • You cannot legally accept payment for lessons unless you hold
                the trainee badge.
              </li>
            </ul>

            <h4 className="font-bold mb-2">Extra Training Requirement</h4>
            <p className="text-slate-700 mb-3">
              Once you’ve received your trainee licence, you are legally
              required by the DVSA to complete an additional 20 hours of
              supervised training within the first three months.
            </p>

            <ul style={{ padding: "0px" }} className="space-y-1 text-slate-700">
              <li>• Observed lessons</li>
              <li>• Feedback sessions</li>
              <li>• Mock tests preparation</li>
            </ul>

            <p className="text-red-600 font-semibold mt-4">
              🚫 Failure to complete this training can result in the DVSA
              refusing to book your Part 3 test or denying future trainee
              licence support.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ALTERNATIVE ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 fade-up max-w-4xl">
          <Scale className="w-10 h-10 text-emerald-500 mb-4" />
          <h2 className="text-3xl font-extrabold mb-4">
            Going Straight to the Part 3 Test
          </h2>
          <p className="text-slate-700 mb-4">
            If you choose not to apply for the pink badge, your alternative is
            to go straight to the Part 3 test after your initial training. The
            exam itself is the same, but you won’t have had the benefit of real
            teaching experience.
          </p>

          <ul
            style={{ padding: "0px" }}
            className="space-y-2 text-slate-700 mb-4"
          >
            <li>• Provide your own pupil (a learner or full licence holder)</li>
            <li>• Ensure they have valid insurance and a suitable vehicle</li>
            <li>
              • Not accept any form of payment, as this is illegal without a
              licence
            </li>
          </ul>

          <p className="font-semibold text-emerald-600">
            🌟 This option may suit you if you have a supportive friend or
            family member to practice with. It also avoids the costs and
            obligations of the trainee badge route.
          </p>
        </div>
      </section>

      {/* ================= COMPARISON TABLE ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-10 fade-up">
            Summary: <span className="text-emerald-500">Pros & Cons</span>
          </h2>

          <div className="overflow-x-auto fade-up">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-xl">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Trainee Licence</th>
                  <th className="p-4 text-left">Go Straight to Part 3</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i} className="odd:bg-slate-50">
                    <td className="p-4 font-semibold">{item.aspect}</td>
                    <td className="p-4">{item.trainee}</td>
                    <td className="p-4">{item.part3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= NEXT ================= */}
      <section className="py-20 bg-slate-900 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Ready for the Next Step?
        </h2>
        <Link to="/book-adi-part-3">
          <button className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-xl transition">
            NEXT PAGE <ArrowRight />
          </button>
        </Link>
      </section>
    </main>
  );
}
