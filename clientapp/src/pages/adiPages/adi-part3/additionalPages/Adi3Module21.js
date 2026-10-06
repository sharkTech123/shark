import React, { useEffect, useRef, useState } from "react";
import styles from "./Adi3Module.module.css";
import gsap from "gsap";
import backgroundImage from "../../../../assets/images/questionsTech.jpg";
import { useSelector } from "react-redux";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  Route,
  Eye,
  ParkingSquare,
  Navigation,
  FilePenLine,
  Trash2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CollapsibleSection = ({ title, icon: Icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-slate-50 transition"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-6 h-6 text-teal-600" />}
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        </div>
        {open ? (
          <ChevronUp className="text-slate-500" />
        ) : (
          <ChevronDown className="text-slate-500" />
        )}
      </button>

      {open && (
        <div className="p-6 pt-0 text-slate-700 space-y-3">{children}</div>
      )}
    </div>
  );
};

const Adi3Module21 = () => {
  //   ////////////////////////////////////////////
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
        `notepadTexts1Part3page37_${userId}`,
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
      `notepadTexts1Part3page37_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page37_${userId}`,
    );
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  //   ////////////////////////////////////////////////
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
        `notepadTexts2Part3page27_${userId}`,
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
      `notepadTexts2Part3page27_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page27_${userId}`,
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

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
      <section className="relative h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-teal-900/50" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div ref={heroRef} className="max-w-3xl space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Conducting <span className="text-teal-400">Mock Tests</span>
              </h1>

              <p className="text-slate-200 text-lg">
                Prepare learners for success with realistic, structured mock
                driving test experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl space-y-6 fade-up">
          <p>
            As your learner progresses and begins to consider booking their
            practical driving test, it’s important to start incorporating mock
            test scenarios into their lessons. These practice tests should
            simulate the real test environment and help both you and the learner
            gain a realistic understanding of their independent driving ability.
          </p>

          <p>
            Mock tests should begin at least 2–3 months before the actual test
            date. This allows enough time to manage expectations and address any
            areas that need improvement. Conducting a mock test just a week
            before the real test is not helpful—if the learner performs poorly,
            it may be too late to postpone the test with the DVSA, and they may
            have already invested a significant amount of money in preparation.
          </p>

          <p>
            This is why managing expectations and encouraging learner
            responsibility is so crucial. By preparing early, you give your
            learner the best chance of success and reduce the risk of
            last-minute surprises.
          </p>

          <p>
            Each mock test should be carried out exactly as an official driving
            examiner would conduct it, to provide an accurate and constructive
            experience.
          </p>
        </div>
      </section>
      <section className="py-20 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Write down below how you would conduct a mock test and what
              elements you think you need to cover
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
      {/* ================= ACCORDIONS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          <CollapsibleSection
            title="So what should a test look like?"
            icon={ClipboardCheck}
          >
            <p>
              The mock test should take about 40 minutes and include everything
              covered during a normal driving test. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>checking your pupil’s driving licence</li>
              <li>an eyesight check</li>
              <li>‘show me, tell me’ questions</li>
              <li>general driving ability</li>
              <li>reversing the car</li>
              <li>independent driving</li>
              <li>emergency stop</li>
              <li>giving the test result and feedback</li>
              <p>
                Conducting a mock test just a week before the real one may be
                too late if the learner performs poorly.
              </p>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection
            title="What mock test routes should include"
            icon={Route}
          >
            <p>
              Your route should start in a suitable place to check your pupils
              eyesight and carry out a ‘tell me’ safety question.
            </p>
            <strong>Types of roads to include</strong>
            <p>Mock test routes should include as many of these as possible:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>rural roads with higher speed limits</li>
              <li>urban roads</li>
              <li>
                dual carriageways, including those with the national speed limit
              </li>
              <li>multi-lane roundabouts</li>
              <li>one-way systems</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection
            title="Driving abilities your pupil will need to demonstrate"
            icon={Eye}
          >
            <p>
              When you plan the route, make sure it includes opportunities for
              your pupil to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>changing lanes</li>
              <li>pass parked or stationary vehicles and obstacles</li>
              <li> approach and cross junctions</li>
              <li>
                {" "}
                observe road markings, signs and react appropriately to
                potential or actual risks
              </li>
            </ul>
            <p>
              Each route you create should be as consistent as possible, with
              similar hazards on each route.
            </p>
          </CollapsibleSection>

          <CollapsibleSection
            title="Plan where you’ll do the manoeuvres"
            icon={ParkingSquare}
          >
            <p>
              Depending on which manoeuvre you ask the pupil to do on the route,
              it will need to include:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                a straight section of a main road, with clear visibility ahead
                and behind where you can pull up on the right and reverse
              </li>
              <li>
                a straight section of a main road with cars parked on left, with
                clear visibility ahead and behind where you can parallel park
              </li>
              <li>
                a car park suitable for parking in a bay (either driving into a
                bay and reversing out, or reversing in and driving out)
              </li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection
            title="Choose suitable car parks"
            icon={Navigation}
          >
            <p>When you choose car parks to use, make sure that:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                there are no restrictions stopping you from practising in it
              </li>
              <li>
                it can be driven around and exited if no bays are available
              </li>
              <li>there are several bays to choose from</li>
              <li>
                bays require the pupil to steer into them on the left or right
              </li>
              <li> bays are clearly defined</li>
              <li>you use a quieter area of the car park</li>
            </ul>
          </CollapsibleSection>
          <CollapsibleSection
            title="Plan the independent driving section of the route"
            icon={Navigation}
          >
            <p>
              You need to ask your pupil to drive independently for 20 minutes
              of the mock test. This can be either:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>following directions from a sat nav</li>
              <li>following traffic signs</li>
            </ul>
            <p>
              1 out of 5 real driving tests ask candidates to follow traffic
              signs, so you should make sure you have mock test routes which
              also use traffic signs.
            </p>
          </CollapsibleSection>
          <CollapsibleSection
            title="Set up a sat nav to give directions"
            icon={Navigation}
          >
            <p>You can set up your sat nav to give directions by either:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                creating, saving and using set routes, if your device has that
                feature
              </li>
              <li>
                {" "}
                setting a destination to drive to - however, be aware the device
                might not always suggest the exact route you want to use
              </li>
            </ul>
            <p>
              DVSA examiners use a TomTom Start 52 sat nav for the driving test,
              as it can save custom routes. However, you do not need to use the
              same make and model for mock tests.
            </p>
          </CollapsibleSection>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Why do you think its important to mimic the same words the
              examiner uses? Write your thoughts below
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
      {/* ================= FOOTER NOTE ================= */}
      <section className="py-10 bg-slate-900 text-center text-slate-300">
        <p className="max-w-3xl mx-auto px-6">
          We use the examiner’s wording so there shouldn’t be anything the
          learner misunderstands or misinterprets during the test.
        </p>
      </section>
    </main>
  );
};

export default Adi3Module21;
