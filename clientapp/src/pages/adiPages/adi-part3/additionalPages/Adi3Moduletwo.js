import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  CheckCircle,
  Lightbulb,
  Car,
  FilePenLine,
  Trash2,
} from "lucide-react";
import bannerImg from "../../../../assets/images/national-standard2.jpg";
import styles from "./Adi3Module.module.css";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModule() {
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  //   //////////////////////////////////////////////////////////////
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
        `notepadTexts1Part3_${userId}`,
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
      `notepadTexts1Part3_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  //   //////////////////////////////////////////////////////////////////////

  const [text2, setText2] = useState("");
  const [savedTexts2, setSavedTexts2] = useState([]); // Store multiple saved texts
  const [isEditing2, setIsEditing2] = useState(false); // Track if the user is editing
  const [editIndex2, setEditIndex2] = useState(null);
  const textareaRef2 = useRef(null);

  const handleChange2 = (e) => {
    setText2(e.target.value);
  };

  const saveText2 = () => {
    if (text2.trim()) {
      // If editing an existing item, replace it
      if (isEditing2) {
        const updatedTexts2 = [...savedTexts2];
        updatedTexts2[editIndex2] = text2;
        setSavedTexts2(updatedTexts2);
        setIsEditing2(false); // Reset editing flag
        setEditIndex2(null);
      } else {
        setSavedTexts2([...savedTexts2, text2]);
      }
      localStorage.setItem(
        `notepadText2sPart3_${userId}`,
        JSON.stringify([...savedTexts2, text2]),
      );

      setText2("");
    }
  };

  const editText2 = (index) => {
    setIsEditing2(true);
    setEditIndex2(index);
    setText2(savedTexts2[index]); // Set the text to be edited
    if (textareaRef2.current) {
      textareaRef2.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText2 = (index) => {
    const updatedTexts2 = savedTexts2.filter((_, i) => i !== index);
    setSavedTexts2(updatedTexts2);
    localStorage.setItem(
      `notepadText2sPart3_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2sPart3_${userId}`);
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  //   /////////////////////////////////////////////////////////////////
  const [text3, setText3] = useState("");
  const [savedTexts3, setSavedTexts3] = useState([]); // Store multiple saved texts
  const [isEditing3, setIsEditing3] = useState(false); // Track if the user is editing
  const [editIndex3, setEditIndex3] = useState(null);
  const textareaRef3 = useRef(null);

  const handleChange3 = (e) => {
    setText3(e.target.value);
  };

  const saveText3 = () => {
    if (text3.trim()) {
      // If editing an existing item, replace it
      if (isEditing3) {
        const updatedTexts3 = [...savedTexts3];
        updatedTexts3[editIndex3] = text3;
        setSavedTexts3(updatedTexts3);
        setIsEditing3(false); // Reset editing flag
        setEditIndex3(null);
      } else {
        setSavedTexts3([...savedTexts3, text3]);
      }
      localStorage.setItem(
        `notepadText3sPart3_${userId}`,
        JSON.stringify([...savedTexts3, text3]),
      );

      setText3("");
    }
  };

  const editText3 = (index) => {
    setIsEditing3(true);
    setEditIndex3(index);
    setText3(savedTexts3[index]); // Set the text to be edited
    if (textareaRef3.current) {
      textareaRef3.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText3 = (index) => {
    const updatedTexts3 = savedTexts3.filter((_, i) => i !== index);
    setSavedTexts3(updatedTexts3);
    localStorage.setItem(
      `notepadText3sPart3_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3sPart3_${userId}`);
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

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

  const Section = ({ title, items, example }) => (
    <div className="fade-up bg-white rounded-3xl shadow-xl p-8 border-l-8 border-indigo-500">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3 text-slate-700" style={{ paddingLeft: "0px" }}>
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <CheckCircle className="text-indigo-600 w-5 h-5 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {example && (
        <p className="mt-4 flex gap-2 text-indigo-700 bg-indigo-50 p-4 rounded-xl">
          <Lightbulb className="w-5 h-5 mt-0.5" /> {example}
        </p>
      )}
    </div>
  );

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= BANNER ================= */}
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              What makes a{" "}
              <span className="text-indigo-400">Good Instructor?</span>
            </h1>

            <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
              <strong>Well done!</strong>
              <br />
              You've successfully completed Part 2 of the Approved Driving
              Instructor (ADI) exam, and you've demonstrated the skills and
              professionalism required to advance to the next step.
            </p>

            <p className="mt-4 text-slate-200 text-sm sm:text-lg">
              Your hard work has paid off — now you're ready for{" "}
              <strong>Part 3</strong>.
            </p>

            <Link to="/Contact-Us">
              <button className="mt-8 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 transition rounded-full text-white font-semibold shadow-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <section className="py-12 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Think back to your own driving lessons - Do you remember your
              instructor?
            </h2>
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                What stood out to you? Were they patient and encouraging, or did
                they make you feel nervous? What qualities did you appreciate,
                and what could have been better?
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
        <section className="py-12 bg-indigo-50">
          <div className="container mx-auto px-6 max-w-4xl fade-up">
            <div className="bg-white p-10 rounded-3xl shadow-2xl">
              <motion.p whileHover={{ scale: 1.02 }}>
                Being a driving instructor is more than just teaching someone to
                operate a car. You become a teacher, coach, mentor, and
                sometimes even a confidant. Your students will look to you not
                just for driving skills but for confidence, reassurance, and
                guidance.
              </motion.p>

              <motion.p whileHover={{ scale: 1.02 }}>
                Now, consider this: What do you want your students to remember
                about you? When they reflect on their lessons years from now,
                what qualities do you hope stand out? Think about the impact you
                want to have and note down your thoughts.
              </motion.p>
            </div>
          </div>
        </section>{" "}
        <section className="py-12 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                Which do you think is better for the best view of the road,
                Write your thoughts below
              </label>
              <textarea
                ref={textareaRef2}
                value={text2}
                onChange={handleChange2}
                rows={5}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-500"
                placeholder="Write your thoughts here..."
              />
              <button
                onClick={saveText2}
                className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
              >
                {isEditing2 ? "Update" : "Save"}
              </button>

              <div className="mt-6">
                {savedTexts2.length === 0 ? (
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
                    {savedTexts2.map((savedText, index) => (
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
                            onClick={() => editText2(index)}
                            className="cursor-pointer text-blue-500"
                          />
                          <Trash2
                            onClick={() => deleteText2(index)}
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
        {/* ================= INTRO ================= */}
        <section className="py-12 bg-indigo-50">
          <div className="container mx-auto px-6 max-w-4xl fade-up">
            <div className="bg-white p-10 rounded-3xl shadow-2xl">
              <motion.p whileHover={{ scale: 1.02 }}>
                As an instructor, you play a crucial role in shaping a learner’s
                driving habits. The way you teach, support, and guide them will
                influence how they drive long after you’re no longer in the car
                with them.
              </motion.p>

              <motion.p whileHover={{ scale: 1.02 }}>
                Imagine this: A student you trained for a year is involved in a
                fatal road collision. How would that make you feel? Now, flip
                the perspective—what if it was your friend or family member
                learning from another instructor? How would you want them to be
                taught and treated? This is why your job isn’t just about
                helping learners pass a test—it’s about creating safer drivers
                for life.
              </motion.p>
            </div>
          </div>
        </section>
        <section className="py-12 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                1. What do you personally define as truly exceptional customer
                service? <br />
                Can you share an experience that challenged or reshaped your
                expectations of what great service really looks like?
              </label>
              <textarea
                ref={textareaRef3}
                value={text3}
                onChange={handleChange3}
                rows={5}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-500"
                placeholder="Write your thoughts here..."
              />
              <button
                onClick={saveText3}
                className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
              >
                {isEditing3 ? "Update" : "Save"}
              </button>

              <div className="mt-6">
                {savedTexts3.length === 0 ? (
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
                    {savedTexts3.map((savedText, index) => (
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
                            onClick={() => editText3(index)}
                            className="cursor-pointer text-blue-500"
                          />
                          <Trash2
                            onClick={() => deleteText3(index)}
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
        {/* ================= CUSTOMER SERVICE ================= */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex items-center gap-3 mb-10 fade-up">
              <Sparkles className="w-10 h-10 text-indigo-600" />
              <h2 className="text-4xl font-extrabold">
                What Makes Good Customer Service in Driving Instruction
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <Section
                title="1. Clear and Effective Communication"
                items={[
                  "Listening to the Learner: Understanding their concerns, anxieties, and goals",
                  "Explaining Clearly: Giving easy-to-follow instructions in a calm, patient manner",
                  "Providing Constructive Feedback: Explaining how to improve supportively",
                ]}
              />

              <Section
                title="2. Responsiveness & Efficiency"
                items={[
                  "Punctuality: Arriving on time and keeping lessons well-structured.",
                  "Quick Support: Responding promptly to booking inquiries.",
                  "Following Up: Checking in on progress and readiness for tests.",
                ]}
                example=" Sending a quick text before lessons to confirm times or following up after a test with encouragement."
              />

              <Section
                title="3. Empathy & Understanding"
                items={[
                  "Calming Nerves: Being patient and reassuring.",
                  "Adjusting to Different Learning Styles.",
                  "Staying Patient: Supporting students who take longer to grasp concepts.",
                ]}
                example="A nervous learner struggles with roundabouts. Instead of rushing, break it down calmly and practice at quieter times."
              />

              <Section
                title="4. Knowledge & Expertise"
                items={[
                  "Mastering the National Standard.",
                  "Understanding Road Laws & Test Requirements.",
                  "Providing Valuable Tips beyond just passing the test",
                ]}
                example=" Teaching eco-friendly driving techniques and hazard perception."
              />

              <Section
                title="5. Professionalism & Positive Attitude"
                items={[
                  "Maintaining a Calm Demeanour.",
                  "Respecting the Learner",
                  "Dressing & Behaving Professionally",
                ]}
                example="If a learner stalls, reassure them with calm encouragement."
              />

              <Section
                title="6. Personalisation & Going the Extra Mile"
                items={[
                  "Tailoring Lessons to the Learner.",
                  "Providing Extra Resources.",
                  "Offering Flexible Lesson Times",
                ]}
                example="If a student struggles with parking, create a personalised strategy."
              />

              <Section
                title="7. Accountability & Problem-Solving"
                items={[
                  "Taking Responsibility for scheduling mistakes",
                  "Adapting When Challenges Arise.",
                  "Ensuring a Positive Experience.",
                ]}
                example="If roadworks interrupt, use it as a learning opportunity."
              />

              <Section
                title="8. Consistency Across All Channels"
                items={[
                  "Professionalism in Messages & Calls.",
                  "Clear Pricing & Booking Policies.",
                  "Using Social Media & Reviews Wisely",
                ]}
                example="A smooth booking system avoids confusion and builds trust."
              />
            </div>
          </div>
        </section>
        {/* ================= WHY IT MATTERS ================= */}
        <section className="py-20 bg-indigo-50">
          <div className="container mx-auto px-6 max-w-4xl fade-up">
            <div className="bg-white p-10 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                Why Good Customer Service Matters{" "}
                <Car className="text-indigo-600" />
              </h3>
              <ul
                className="space-y-3 text-slate-700"
                style={{ paddingLeft: "0px" }}
              >
                <li>🚗Happy learners = more referrals and better reviews.</li>
                <li>
                  🚗 A positive, patient approach creates safer, more confident
                  drivers.
                </li>
                <li>
                  🚗 It's about lifelong driving skills, not just passing a
                  test.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ================= NEXT ================= */}
        <section className="py-16 text-center">
          <Link to="/legal-stuff">
            <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 transition rounded-full text-white font-semibold shadow-xl">
              Next Page
            </button>
          </Link>
        </section>
        {/* ================= QUIZ ================= */}
        <section className="py-20 bg-slate-900 text-white text-center">
          <h2 className="text-4xl font-extrabold mb-2">Start Quiz</h2>
          <p className="opacity-80 mb-6">15 Questions • Good Instructor</p>
          <Link to="/takequizCatName/good-instructor">
            <button className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 transition rounded-full font-semibold">
              Start Quiz
            </button>
          </Link>
        </section>{" "}
      </section>
    </main>
  );
}
