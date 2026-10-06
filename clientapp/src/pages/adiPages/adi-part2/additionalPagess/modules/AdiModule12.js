import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  CheckCircle,
  Calendar,
  Car,
  FileText,
  AlertTriangle,
} from "lucide-react";

import backgroundImage from "../../../../../assets/images/whatjpg.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModule12() {
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
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-4xl leading-tight">
              How to Book the ADI Part 2 Test and What to Bring
            </h1>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 fade-up max-w-4xl">
          <p className="text-lg text-slate-700 leading-relaxed">
            Becoming an Approved Driving Instructor (ADI) is an exciting journey
            that allows you to help others achieve a vital life skill. One
            crucial step in this process is passing the ADI Part 2 test, which
            assesses your driving ability to ensure you can drive at a
            professional standard. In this blog post, we’ll cover everything you
            need to know about booking the ADI Part 2 test and what to bring on
            the day.
          </p>
        </div>
      </section>

      {/* ================= BOOKING STEPS ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10 fade-up">
            <BookOpen className="w-10 h-10 text-cyan-300" />
            <h2 className="text-3xl lg:text-4xl font-extrabold">
              How to Book the ADI Part 2 Test
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Check Your Eligibility",
                icon: CheckCircle,
                text: (
                  <>
                    Before booking, ensure you’ve passed the{" "}
                    <strong>ADI Part 1 test</strong> (theory test) and have
                    received your
                    <strong> Personal Reference Number (PRN) </strong> from the
                    DVSA. This number is crucial as it identifies you throughout
                    the ADI qualification process.
                  </>
                ),
              },
              {
                title: "Visit the GOV.UK Website",
                icon: FileText,
                text: "The easiest way to book your ADI Part 2 test is online via the official GOV.UK website. This platform ensures secure payment and access to all available test centre locations.",
              },
              {
                title: "Choose a Test Centre",
                icon: Car,
                text: "Not every driving test centre offers ADI Part 2 tests, so you’ll need to find one that does. Use the DVSA’s list of test centres to find the most convenient option.",
              },
              {
                title: "Provide Your Details",
                icon: FileText,
                text: (
                  <ul
                    style={{ paddingLeft: "0px" }}
                    className="list-disc list-inside"
                  >
                    <li>Your driving licence details.</li>
                    <li>Your PRN.</li>
                    <li>
                      Payment information for the £111 test fee (correct as of
                      2024).
                    </li>
                  </ul>
                ),
              },
              {
                title: "Select a Test Date and Time",
                icon: Calendar,
                text: "ADI Part 2 tests are usually in high demand, so book well in advance to secure a slot that works for you. Consider your readiness and schedule plenty of practice before the test day.",
              },
              {
                title: "Confirmation",
                icon: CheckCircle,
                text: "After booking, you’ll receive a confirmation email with your test details. Save this email—it may be requested on the day.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="fade-up bg-white/10 backdrop-blur p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="w-6 h-6 text-cyan-300" />
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <div className="text-slate-200">{step.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT TO BRING ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10 fade-up">
            <AlertTriangle className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl lg:text-4xl font-extrabold">
              What to Bring to Your ADI Part 2 Test
            </h2>
          </div>
          <p>
            Preparation is key to a smooth test day. Make sure you bring the
            following:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <InfoCard
              title="Your Driving Licence"
              content={
                <>
                  <p>Bring both parts of your licence:</p>
                  <ul
                    style={{ paddingLeft: "0px" }}
                    className="list-disc list-inside"
                  >
                    <li>
                      Photocard licence (or a valid passport if you still have
                      the older-style paper licence).
                    </li>
                    <li>Paper counterpart (if applicable).</li>
                  </ul>
                  <p>Ensure your licence is up to date and not expired.</p>
                </>
              }
            />
            <InfoCard
              title="Your Appointment Confirmation"
              content="Bring a printed or digital copy of your booking confirmation email. This serves as proof of your appointment."
            />
            <InfoCard
              title="A Suitable Car"
              content={
                <>
                  <p>Your car must meet the DVSA’s requirements:</p>
                  <ul
                    style={{ paddingLeft: "0px" }}
                    className="list-disc list-inside"
                  >
                    <li>Taxed, insured & MOT valid</li>
                    <li>Manual or automatic</li>
                    <li>Clear windows & mirrors</li>
                    <li>No warning lights</li>
                  </ul>
                  <p>
                    You can check on the government website which cars are
                    accepted and which aren’t.
                  </p>
                </>
              }
            />
            <InfoCard
              title="Glasses or Contact Lenses"
              content="If you need corrective lenses to drive, don’t forget them. You’ll need them for the eyesight test and the driving portion of the test."
            />{" "}
            <InfoCard
              title="A Final Checklist"
              content={
                <>
                  <p>
                    Before heading to your ADI Part 2 test, double-check the
                    following:
                  </p>
                  <ul
                    style={{ paddingLeft: "0px" }}
                    className="list-disc list-inside"
                  >
                    <li>Have you practiced all the required manoeuvres?</li>
                    <li>
                      Is your car clean, roadworthy, and stocked with necessary
                      documents (e.g., insurance and MOT)?
                    </li>
                    <li>
                      Do you have all required items (licence, confirmation,
                      glasses)?
                    </li>
                  </ul>
                </>
              }
            />
          </div>

          <div className="mt-12 bg-red-50 border-l-8 border-red-500 p-8 rounded-xl fade-up">
            <h3 className="text-xl font-bold mb-2">Why Preparation Matters</h3>
            <p className="text-slate-700">
              The ADI Part 2 test reflects your readiness to teach
              professionally. Booking is simple—but preparation makes the
              difference. You have <strong>three attempts</strong> at this test.
            </p>
          </div>

          <h2 className="text-center text-red-600 font-extrabold text-2xl mt-10 fade-up">
            Good luck! 🚗
          </h2>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, content }) {
  return (
    <div className="fade-up bg-slate-50 p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <div className="text-slate-700">{content}</div>
    </div>
  );
}
