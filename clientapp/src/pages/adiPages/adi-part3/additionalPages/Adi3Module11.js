import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { useSelector } from "react-redux";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Eye,
  Smile,
  Hand,
  AlertTriangle,
  Laugh,
  PlayCircle,
  ArrowRight,
  FilePenLine,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../../assets/images/bodylanguage.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModuleBodyLanguage() {
  const heroRef = useRef(null);

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
  //   ///////////////////////////////////////////////////////////////////
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  const [text, setText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]); // Store multiple saved texts
  const [isEditing, setIsEditing] = useState(false); // Track if the user is editing
  const [editIndex, setEditIndex] = useState(null);
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const saveText = () => {
    if (text.trim()) {
      // If editing an existing item, replace it
      if (isEditing) {
        const updatedTexts = [...savedTexts];
        updatedTexts[editIndex] = text;
        setSavedTexts(updatedTexts);
        setIsEditing(false); // Reset editing flag
        setEditIndex(null);
      } else {
        setSavedTexts([...savedTexts, text]);
      }
      localStorage.setItem(
        `notepadTexts1Part3page11_${userId}`,
        JSON.stringify([...savedTexts, text]),
      );

      setText("");
    }
  };

  const editText = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setText(savedTexts[index]); // Set the text to be edited
    if (textareaRef.current) {
      textareaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText = (index) => {
    const updatedTexts = savedTexts.filter((_, i) => i !== index);
    setSavedTexts(updatedTexts);
    localStorage.setItem(
      `notepadTexts1Part3page11_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page11_${userId}`,
    );
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  //   ///////////////////////////////////////////////////

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div ref={heroRef} className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Body Language
              <br />
              <span className="text-teal-400">Your Silent Superpower</span>
            </h1>

            <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
              <strong>Well done!</strong>
              <br />
              What you don’t say often speaks the loudest.
            </p>

            <p className="mt-4 text-slate-200 text-sm sm:text-lg">
              Your hard work has paid off — now you're ready for{" "}
              <strong>Part 3</strong>.
            </p>

            <Link to="/Contact-Us">
              <button className="mt-8 px-8 py-3 bg-teal-500 hover:bg-orange-600 transition rounded-full text-white font-semibold shadow-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <p className="text-lg text-slate-700 leading-relaxed">
            Could you ever tell from someone's body language they weren’t happy
            with something you said, or just weren’t listening to you?
          </p>

          <p className="mt-6 text-slate-700">
            Imagine this: your learner stalls at a busy junction. Their heart’s
            racing, they’re gripping the wheel, and they glance at you, hoping
            for some kind of sign that the world isn’t ending.
          </p>
          <p className="mt-6 text-slate-700">
            Now, you don’t even need to say a word—because your face, your
            posture, your energy? That is the message.
          </p>

          <div className="mt-8 bg-teal-50 border-l-4 border-teal-500 p-6 rounded-xl">
            <p className="text-lg font-semibold text-teal-700">
              Your face, posture, and energy{" "}
              <span className="font-bold">are</span> the message.
            </p>
          </div>
          <p className="mt-6 text-slate-700">
            When you’re{" "}
            <strong className="text-teal-600">
              calm, confident, and open,
            </strong>{" "}
            your learner feels safe. When you tense up, flinch, or raise your
            eyebrows at the wrong time... oof. You’ve just spoken volumes, even
            if your mouth said nothing.
          </p>
        </div>
      </section>

      {/* ================= KEY PRINCIPLES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 fade-up">
            So How do you{" "}
            <span className="text-indigo-600">
              {" "}
              harness that silent superpower?
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card */}
            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-teal-500">
              <Smile className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Posture = Presence</h3>
              <p className="text-slate-700">
                Start by becoming aware of what your body’s saying. Sit tall but
                relaxed, like you’re in control but not on edge. When they nail
                a manoeuvre, give a genuine smile or even a celebratory “nice
                one!” with a little fist bump. That little moment will stick in
                their memory way more than a tick in a box.
              </p>
            </div>

            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500">
              <Eye className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Active Listening Through Body Language
              </h3>
              <p className="text-slate-700">
                When you’re asking reflective questions—especially the deeper
                ones like “What were you thinking as you approached that?” Make
                eye contact if you’re stationary, and let your body show that
                you’re listening, not judging. A nod here, a smile there, a
                simple "hmm" of encouragement—these micro-movements tell your
                learner: I'm with you.
              </p>
            </div>

            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-amber-400">
              <Hand className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                {" "}
                Visual Learning = Gestures Matter
              </h3>
              <p className="text-slate-700">
                Got a visual learner? Break out the hand gestures. Use your
                hands to show a lane change or the movement of a car at a
                roundabout. These little “air diagrams” help them see the
                situation, not just hear about it.
              </p>
            </div>

            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-teal-500">
              <AlertTriangle className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold mb-3"> Mistakes? Stay Chill</h3>
              <p className="text-slate-700">
                Now let’s talk nerves. You know that moment when your learner
                misses a gear and panic creeps in? They’ll be watching you to
                see how bad it was. If your shoulders rise and you tense up like
                a startled meerkat, they’ll feel like they just failed. But if
                you keep your cool, smile, and calmly help them recover, they’ll
                learn that mistakes aren’t disasters—they’re part of the
                process.
              </p>
            </div>

            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500">
              <Laugh className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Lighten the Mood</h3>
              <p className="text-slate-700">
                And hey, sometimes your body language can lighten the mood. A
                playful raise of the eyebrow when they forget to cancel the
                indicator for the fifth time or a mock gasp when they finally
                nail that parallel park can create shared laughs—and that builds
                trust.
              </p>
            </div>

            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-red-400">
              <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">What Not To Do</h3>
              <p className="text-slate-700">
                But a little warning: learners pick up on everything. Crossed
                arms, tapping your pen, checking your watch—it can come off as
                disapproval or impatience, even if that’s not your intent. So
                check in with yourself from time to time. Are you showing up
                with the same presence you’d want from a mentor?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 fade-up">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/-bsLPF0Q35Y"
                title="Body Language Training"
                allowFullScreen
              />
            </div>
            <div className="p-6 flex items-center gap-3">
              <PlayCircle className="text-teal-500" />
              <p className="font-semibold">Watch & Learn</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Have a think about types of positive and negative body language
              and write them below:
            </label>
            <textarea
              ref={textareaRef}
              value={text}
              onChange={handleChange}
              rows={5}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-500"
              placeholder="Write your thoughts here..."
            />
            <button
              onClick={saveText}
              className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
            >
              {isEditing ? "Update" : "Save"}
            </button>

            <div className="mt-6">
              {savedTexts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 border border-dashed rounded-xl bg-gray-50">
                  <p
                    className="text-gray-500 text-sm"
                    style={{ marginBottom: "0px" }}
                  >
                    No saved thoughts yet ✍️
                  </p>
                </div>
              ) : (
                <ul
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  style={{ paddingLeft: "0px" }}
                >
                  {savedTexts.map((savedText, index) => (
                    <li
                      key={index}
                      className="group relative p-4 bg-white rounded-xl border shadow-sm hover:shadow-md transition"
                    >
                      <p
                        className="text-gray-700 text-sm pr-10"
                        style={{ marginBottom: "0px" }}
                      >
                        {savedText}
                      </p>
                      <div className="absolute top-4 right-4 flex gap-3 opacity-70 group-hover:opacity-100">
                        <FilePenLine
                          onClick={() => editText(index)}
                          className="cursor-pointer text-blue-500"
                        />
                        <Trash2
                          onClick={() => deleteText(index)}
                          className="cursor-pointer text-red-500"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* ================= NEXT + QUIZ ================= */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-teal-600 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to Continue?
        </h2>
        <p className="text-slate-200 mb-8">
          Move on or test your understanding before setting off.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/giving-instruction-and-feedback"
            style={{ textDecoration: "0px" }}
          >
            <button className="px-10 py-4 rounded-full bg-white text-indigo-700 font-semibold shadow-xl hover:scale-105 transition">
              Next Page
            </button>
          </Link>

          <Link
            to="/takequizCatName/body-language"
            style={{ textDecoration: "0px" }}
          >
            <button className="px-10 py-4 rounded-full bg-amber-400 text-black font-semibold shadow-xl hover:scale-105 transition flex items-center gap-2">
              Start Quiz <ArrowRight />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
