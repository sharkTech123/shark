import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

import { motion } from "framer-motion";
import movingOff from "../../../../assets/images/moving-off.png";
import forwordbaypark from "../../../../assets/images/forwordbaypark.png";
import reversebaypark from "../../../../assets/images/reversebaypark.png";
import parallelpark from "../../../../assets/images/parallelpark.png";
import parkonright from "../../../../assets/images/parkonright.png";
import emergencystop from "../../../../assets/images/emergencystop.png";
import vehicleClearance from "../../../../assets/images/vehicleclearence.png";
import majortominorright from "../../../../assets/images/majortoright.png";
import majortominorleft from "../../../../assets/images/majortoleft.png";
import majortomajorright from "../../../../assets/images/majortomajorright.png";
import majortomajorleft from "../../../../assets/images/majortomajorleft.png";
import Crossroads from "../../../../assets/images/crossroads-p3.png";
import pedestrianCrossing from "../../../../assets/images/pedestrian.png";
import meetingOncoming from "../../../../assets/images/Meeting-oncoming-traffic.png";
import planningAnticipation from "../../../../assets/images/Anticipation-and-planning.png";
import MockTests from "../../../../assets/images/Mock-testsp3.png";
import { Link } from "react-router-dom";
import backgroundImage from "../../../../assets/images/lessonStructure.jpg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Layers,
  BookOpen,
  Brain,
  HelpCircle,
  ArrowRight,
  FilePenLine,
  Trash2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Adi3Modulefive() {
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
  const skills = [
    { title: "Moving off Stopping", img: movingOff },
    { title: "Forward Bay Park", img: forwordbaypark },
    { title: "Reverse Bay park", img: reversebaypark },
    { title: "Parallel park", img: parallelpark },
    { title: "Park on the right", img: parkonright },
    { title: "Emergency stop", img: emergencystop },
    { title: "Vehicle clearance", img: vehicleClearance },
    { title: "Major to minor right turns", img: majortominorright },
    { title: "Major to minor left turns", img: majortominorleft },
    { title: "Major to major right turns", img: majortomajorright },
    { title: "Major to major left turns", img: majortomajorleft },
    { title: "Crossroads", img: Crossroads },
    { title: "Pedestrian Crossings", img: pedestrianCrossing },
    { title: "Meeting oncoming traffic", img: meetingOncoming },
    { title: "Anticipation and planning", img: planningAnticipation },
    { title: "Mock Tests", img: MockTests },
  ];

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
        `notepadTexts1Part3page5_${userId}`,
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
      `notepadTexts1Part3page5_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page5_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  // /////////////////////////////////////////
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
        `notepadTexts2Part3pagew7_${userId}`,
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
      `notepadTexts2Part3pagew7_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3pagew7_${userId}`,
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const cakeLayers = [
    {
      title: "We’ve now reached the top layer of our lesson plan cake.",
      description:
        "At this stage, the learner takes full responsibility for moving and stopping the car. With these core skills now in place, you’re ready to progress to the next focus area—such assteering",
    },
    {
      title: "Now we reach the upper layer of our lesson plan cake.",
      description:
        "At this point, the student can confidently move the car in a straight line. It may now be appropriate to begin handing over more responsibility— such as managing observations and overall safety. Up until now, you've taken the lead in these areas, but if the learner is ready, this is the time to gradually transfer that responsibility to them.",
    },
    {
      title: "This is the second layer of our lesson plan cake.",
      description:
        "Once the learner has a solid grasp of the foundational skills, you can begin to introduce more responsibility. At this stage, that might involve moving the car in a straight line from point A to point B—using only first gear and focusing on straight steering. During this phase, you share responsibility for safety and observations, allowing the learner to concentrate solely on controlling the car and stopping. You may need to repeat this stage several times until they demonstrate consistent competence.",
    },
    {
      title: "This is the base layer of our lesson plan cake—the foundation.",
      description:
        "Represents the very first step in teaching a subject. For example, if the subject is Moving Off and  stopping, the foundational skill might be understanding how the clutch works and how to find the ng point. At this stage, there’s no need for the car to move—focus solely on the relevant",
    },
  ];

  //   /////////////////////////////////////////////////////////////////

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= BANNER ================= */}
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Lesson <span className="text-orange-500">Structure</span>
            </h1>

            <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
              <strong>Well done!</strong>
              <br />
              Learn how to structure driving lessons effectively using a
              layered, learner-focused approach.
            </p>

            <p className="mt-4 text-slate-200 text-sm sm:text-lg">
              Your hard work has paid off — now you're ready for{" "}
              <strong>Part 3</strong>.
            </p>

            <Link to="/Contact-Us">
              <button className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-full text-white font-semibold shadow-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white">
        {/* ================= INTRO ================= */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center fade-up">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-red-600" />
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  How do you determine what to teach?
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Before starting a lesson, it's crucial to touch base with the
                learner to confirm their booking time, obtain their license
                number, and inquire about their prior driving experience. This
                helps you gauge where to begin in the curriculum. For example,
                if a learner recently failed their driving test due to a serious
                fault, you likely won't need to revisit the basics like moving
                off and stopping, as you would with someone who's never driven
                before.
              </p>

              <p className="mt-4 text-slate-700 leading-relaxed">
                It's also important to ask the learner what they aim to achieve
                in the lesson. Do they want an assessment to understand their
                current driving skills? Or are they looking to start from
                scratch?
              </p>

              <p className="mt-4 text-slate-700 leading-relaxed">
                If they claim to have experience in certain areas, assess their
                abilities firsthand. You can adjust their existing knowledge
                rather than going over the fundamentals again.
              </p>
            </div>

            {/* VIDEO */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border">
              <div className="relative aspect-video">
                <img
                  className="absolute inset-0 w-full h-full"
                  src={backgroundImage}
                  alt="Lesson Structure"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>{" "}
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              What are the key topics to cover?
            </h2>
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                Take some time to think about the essential skills every learner
                should master. Write down as many topics as you can think of,
                and use this as a reference point for your lessons.
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
        {/* ================= SKILLS GRID ================= */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12 fade-up">
              <Brain className="w-10 h-10 text-red-600" />
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Key Skills to Cover
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="fade-up bg-slate-50 rounded-2xl shadow-xl p-6 text-center hover:scale-[1.03] transition"
                >
                  <img
                    src={skill.img}
                    alt={skill.title}
                    className="h-32 mx-auto object-contain"
                  />
                  <p className="mt-4 font-semibold">{skill.title}</p>
                </div>
              ))}
            </div>

            <p className="fade-up mt-14 max-w-4xl mx-auto text-center text-slate-600">
              While these topics serve as a solid foundation, keep in mind that
              the order and focus may vary based on your learner's needs and
              preferences. This is simply a guide to help structure your
              lessons. It is imperative you have excellent knowledge and
              understanding in all subjects, how can you teach someone else
              something you don’t know?
            </p>
          </div>
        </section>
        {/* ================= SUBJECT VS SKILLSETS ================= */}
        <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-6 fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Subjects vs Skill Sets
            </h2>

            <p className="text-slate-700 max-w-4xl mb-2">
              When planning a lesson, it’s essential to have a clear idea of
              what your learner would benefit from. However, it’s equally
              important to remember that lesson plans should be flexible. Think
              of your lesson plan as a guide rather than a rigid
              structure—something that can evolve based on your student’s needs.
              There is no one-size-fits-all ABCD format that works for every
              learner or every session. Instead, you should develop your own
              approach that’s adaptable and student-centered.
            </p>

            <section className="py-10 bg-slate-50 fade-up">
              <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <label className="block mb-2 font-semibold">
                    What do you think the difference between subjects vs
                    skillsets is?
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
            <motion.h2
              className={styles.Adi3Module22subTitle}
              variants={fadeUp}
              custom={7}
              initial="hidden"
              animate="visible"
            >
              Let’s explore an important distinction:
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-red-500">
                <h3 className="text-xl font-bold mb-3">Subjects</h3>
                <p className="text-slate-700">
                  Subjects are the broader topics or goals of a lesson. For
                  example: Forward Bay Parking, Emergency Stop, Moving Off and
                  Stopping.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-red-500">
                <h3 className="text-xl font-bold mb-3">Skill Sets</h3>
                <p className="text-slate-700">
                  Skill sets are the specific skills needed to achieve the
                  overall subject. For example: How to find the biting point,
                  how to move the car in a straight line, how to steer
                  accurately into a bay.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-6 fade-up">
            {" "}
            <motion.h2
              className={styles.Adi3Module22subTitle}
              variants={fadeUp}
              custom={7}
              initial="hidden"
              animate="visible"
            >
              The Importance of Structure and Simplicity
            </motion.h2>
            <motion.div
              className={styles.Adi3Module22scenario}
              variants={fadeUp}
              custom={8}
              initial="hidden"
              animate="visible"
            >
              <p>
                Now imagine this scenario: It’s your first day training for your
                Part 3 exam to become a driving instructor. Your trainer
                bombards you with a list of instructions:
              </p>
              <blockquote>
                “First ask the student this, then say that, now tell them to do
                this, and then... go!”
              </blockquote>
              <p>
                How would you feel? Overwhelmed? Confused? Unprepared? Probably.
              </p>
              <p>
                This is exactly why we break things down. Teaching should be
                delivered in clear, manageable steps so learners can absorb and
                apply what they're being taught. It’s more important that a
                student understands the
                <strong> why</strong>, <strong>how</strong>, and{" "}
                <strong>when</strong> than simply ticking off tasks.
              </p>
              <p>
                You may not complete an entire subject in one lesson—and that’s
                absolutely okay. As long as the learner is developing the
                necessary skills, they’re making progress.
              </p>
            </motion.div>{" "}
            <motion.div
              className={styles.Adi3Module22scenario}
              variants={fadeUp}
              custom={8}
              initial="hidden"
              animate="visible"
            >
              <p>
                <strong>So, How Do You Plan a Lesson?</strong>
              </p>
              <p>Start with this key question:</p>
              <p>
                <strong>
                  “What skills do I need to teach in order to cover this
                  subject?”
                </strong>
              </p>
              <p>
                We like to refer to this as building your{" "}
                <strong>“Lesson Plan Cake”</strong> —a layered approach to
                structuring learning in a way that is digestible, logical, and
                effective.
              </p>
            </motion.div>
          </div>
        </section>
        {/* ================= LESSON PLAN CAKE ================= */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12 fade-up">
              <Layers className="w-10 h-10 text-red-600" />
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Lesson Plan Cake
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {cakeLayers.map((layer, i) => (
                <div
                  key={i}
                  className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl"
                >
                  <h3 className="font-bold mb-3">{layer.title}</h3>
                  <p className="text-slate-700">{layer.description}</p>
                </div>
              ))}
            </div>
            <motion.div
              className="mt-10 bg-white rounded-2xl p-8 shadow-lg space-y-4"
              variants={fadeUp}
              custom={8}
              initial="hidden"
              animate="visible"
            >
              <p>
                Remember, When teaching, always focus on the{" "}
                <blockquote className="my-3 pl-4 border-l-4 border-blue-500 italic text-gray-700">
                  <strong>whys, hows, and whens</strong>
                </blockquote>{" "}
                of each skill. Help your learners understand the reasoning
                behind what they’re doing—not just the actions themselves.
              </p>

              <p>
                Avoid simply giving them all the answers. Instead, use open
                questions and guided discovery to encourage them to think for
                themselves. This builds real understanding and confidence.
              </p>

              <p>
                <strong> Never say things like:</strong>
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>✅ “Because I said so.”</li>
                <li>✅ “That’s just what you have to do to pass the test.”</li>
              </ul>

              <p>
                These responses shut down learning and don’t support long-term
                development. Your goal is to help learners understand{" "}
                <strong>whys</strong> something matters, <strong> hows </strong>{" "}
                to do it effectively, and <strong>whens</strong> to apply it in
                real-world situations. That’s what creates a safe, skilled, and
                independent driver.
              </p>

              <p>
                This is why it's essential for you, as an instructor, to fully
                understand the individual skills required within each subject—so
                you can teach them effectively and at the right pace.
              </p>

              <p>
                Also, remember:{" "}
                <strong>
                  not every learner will start at the bottom layer of your cake.
                </strong>
                Some may already have prior knowledge or experience and could
                begin at the second, third, or even top layer. You’ll discover
                this through the effective use of open questions during your
                lesson.
              </p>

              <p>
                <strong>Task:</strong>
              </p>

              <p>
                For each driving topic, create your own Lesson Plan Cake. <br />
                Ask yourself:
              </p>

              <p>
                <strong>
                  What specific skills are required to complete this subject?
                </strong>
              </p>

              <p>
                Break the subject down into clear, progressive layers—starting
                from foundational skills up to full independence.
              </p>
            </motion.div>
          </div>
        </section>
        {/* ================= NEXT + QUIZ ================= */}
        <section className="py-24 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-6 text-center fade-up">
            <Link to="/gde-matrix-grow">
              <button className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold inline-flex items-center gap-3 shadow-xl">
                Next Page <ArrowRight />
              </button>
            </Link>

            <div className="mt-16 bg-white p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-2">Start Quiz</h3>
              <p className="text-slate-600 mb-6">
                Test your understanding of Lesson Structure
              </p>

              <Link to="/takequizCatName/lesson-structure">
                <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
