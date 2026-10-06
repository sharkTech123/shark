import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import backgroundImage from "../../../../../assets/images/showme.jpg";

import {
  HelpCircle,
  Eye,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModule11() {
  const questions = [
    {
      category: "Tell me",
      items: [
        {
          question:
            "Tell me how you'd check that the brakes are working before starting a journey.",
          answer:
            "Brakes should not feel spongy or slack. Test brakes as you set off; the vehicle should not pull to one side.",
        },
        {
          question:
            "Tell me where you'd find the information for the recommended tyre pressures for this car and how tyre pressures should be checked.",
          answer:
            "Refer to the manufacturer's guide. Use a reliable pressure gauge to check and adjust pressures when tyres are cold. Don't forget the spare tyre, and remember to refit valve caps.",
        },
        {
          question:
            "Tell me how you make sure your head restraint is correctly adjusted so it provides the best protection in the event of a crash.",
          answer:
            "The head restraint should be adjusted so the rigid part is at least as high as the eye or top of the ears and as close to the back of the head as is comfortable. Note: Some restraints might not be adjustable.",
        },
        {
          question:
            "Tell me how you'd check the tyres to ensure that they have sufficient tread depth and that their general condition is safe to use on the road.",
          answer:
            "Ensure there are no cuts and bulges; the tread depth should be at least 1.6mm across the central three-quarters of the breadth of the tyre and around the entire outer circumference.",
        },
        {
          question:
            "Tell me how you'd check that the headlights and tail lights are working. You don't need to exit the vehicle.",
          answer:
            "Explain that you'd operate the switch (turn on ignition if necessary), then walk around the vehicle to check the lights.",
        },
        {
          question:
            "Tell me how you'd know if there was a problem with your anti-lock braking system.",
          answer:
            "A warning light should illuminate if there's a fault with the anti-lock braking system.",
        },
        {
          question:
            "Tell me how you'd check the direction indicators are working. You don't need to exit the vehicle.",
          answer:
            "Explain that you'd operate the switch (turn on ignition if necessary), and then walk around the vehicle to check the indicators.",
        },
        {
          question:
            "Tell me how you'd check the brake lights are working on this car.",
          answer:
            "Explain that you'd operate the brake pedal and use reflections in windows or doors, or ask someone to help, to check the lights.",
        },
        {
          question:
            "Tell me how you'd check the power-assisted steering is working before starting a journey.",
          answer:
            "If the steering becomes heavy, the system may not be working properly. Before starting a journey, two simple checks can be made:\n\n- Gentle pressure on the steering wheel, maintained while the engine is started, should result in a slight but noticeable movement as the system begins to operate. Alternatively, turning the steering wheel just after moving off will give an immediate indication that the power assistance is functioning.",
        },
        {
          question:
            "Tell me how you'd switch on the rear fog light(s) and explain when you'd use them. You don't need to exit the vehicle.",
          answer:
            "Operate the switch (turn on dipped headlights and ignition if necessary), check that the warning light is on, and explain their use.",
        },
        {
          question:
            "Tell me how you'd switch your headlight from dipped to main beam and explain how you'd know the main beam is on.",
          answer:
            "Operate the switch (with ignition or engine on if necessary) and check for the main beam warning light.",
        },
        {
          question:
            "Open the bonnet and tell me how you'd check that the engine has sufficient oil.",
          answer:
            "Identify the dipstick or oil level indicator and describe checking the oil level against the minimum and maximum markers.",
        },
        {
          question:
            "Open the bonnet and tell me how you'd check that the engine has sufficient engine coolant.",
          answer:
            "Identify high and low level markings on the header tank where fitted or the radiator filler cap, and describe how to top up to the correct level.",
        },
        {
          question:
            "Open the bonnet and tell me how you'd check that you have a safe level of hydraulic brake fluid.",
          answer:
            "Identify the reservoir and check the level against high and low markings.",
        },
      ],
    },
    {
      category: "Show me",
      items: [
        {
          question:
            "When it's safe to do so, can you show me how you'd wash and clean the rear windscreen?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd wash and clean the front windscreen?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd switch on your dipped headlights?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd set the rear demister?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd operate the horn?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd demist the front windscreen?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd open and close the side window?",
        },
        {
          question:
            "When it's safe to do so, can you show me how you'd operate the cruise control?",
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null); // Track active question index

  const toggleAnswer = (index) => {
    // Toggle answer visibility by index
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
    <main className="w-full font-sans overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Show Me Tell Me Questions
            </h1>

            <p className="mt-6 max-w-xl text-slate-200 text-lg">
              Master the ADI Part 2 “Show Me, Tell Me” questions with clarity
              and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-14 fade-up">
            ADI Part 2 –{" "}
            <span className="text-cyan-600">Practical Questions</span>
          </h2>

          {questions.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16 fade-up">
              <div className="flex items-center gap-4 mb-8">
                {section.category === "Tell me" ? (
                  <ClipboardCheck className="w-9 h-9 text-cyan-600" />
                ) : (
                  <Eye className="w-9 h-9 text-cyan-600" />
                )}
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {section.category} Questions
                </h3>
              </div>

              <div className="grid gap-6">
                {section.items.map((item, idx) => {
                  const indexKey = `${sectionIndex}-${idx}`;
                  const isOpen = activeIndex === indexKey;

                  return (
                    <motion.div
                      key={indexKey}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => toggleAnswer(indexKey)}
                      className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer border border-slate-200"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex gap-3">
                          <HelpCircle className="text-cyan-600 mt-1" />
                          <h4 className="font-semibold text-lg">
                            {item.question}
                          </h4>
                        </div>

                        {isOpen ? (
                          <ChevronUp className="text-cyan-600" />
                        ) : (
                          <ChevronDown className="text-cyan-600" />
                        )}
                      </div>

                      {item.answer && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-slate-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NEXT ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 flex justify-center">
          <Link to="/quizModuleTwelve">
            <button className="px-10 py-4 bg-cyan-600 hover:bg-cyan-700 transition rounded-full text-white text-lg font-semibold shadow-xl">
              Next Page →
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
