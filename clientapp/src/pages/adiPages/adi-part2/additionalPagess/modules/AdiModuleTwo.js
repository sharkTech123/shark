import styles from "./AdiModuleOne.module.css";

import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FilePenLine,
  Trash2,
  ArrowRight,
  ClipboardList,
  CheckCircle,
  Settings,
} from "lucide-react";

import backgroundImage from "../../../../../assets/images/vehicalchecksbg.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModuleTwo() {
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  const [hoveredLetter, setHoveredLetter] = useState(null);

  const [text, setText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]); // Store multiple saved texts
  const [isEditing, setIsEditing] = useState(false); // Track if the user is editing
  const [editIndex, setEditIndex] = useState(null);
  const textareaRef = useRef(null);

  const [text2, setText2] = useState("");
  const [savedTexts2, setSavedTexts2] = useState([]); // Store multiple saved texts
  const [isEditing2, setIsEditing2] = useState(false); // Track if the user is editing
  const [editIndex2, setEditIndex2] = useState(null);
  const textareaRef2 = useRef(null);

  const [text3, setText3] = useState("");
  const [savedTexts3, setSavedTexts3] = useState([]); // Store multiple saved texts
  const [isEditing3, setIsEditing3] = useState(false); // Track if the user is editing
  const [editIndex3, setEditIndex3] = useState(null);
  const textareaRef3 = useRef(null);

  const [text4, setText4] = useState("");
  const [savedTexts4, setSavedTexts4] = useState([]); // Store multiple saved texts
  const [isEditing4, setIsEditing4] = useState(false); // Track if the user is editing
  const [editIndex4, setEditIndex4] = useState(null);
  const textareaRef4 = useRef(null);

  const [text5, setText5] = useState("");
  const [savedTexts5, setSavedTexts5] = useState([]); // Store multiple saved texts
  const [isEditing5, setIsEditing5] = useState(false); // Track if the user is editing
  const [editIndex5, setEditIndex5] = useState(null);
  const textareaRef5 = useRef(null);

  // ////////////////////////////////////////////////////////////////////
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
        `notepadTextspage2_${userId}`,
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
      `notepadTextspage2_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage2_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  // //////////////////////////////////////////////////////////////////
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
        `notepadText2spage2_${userId}`,
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
      `notepadText2spage2_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage2_${userId}`);
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  // //////////////////////////////////////////////////////////////
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
        `notepadText3spage2_${userId}`,
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
      `notepadText3spage2_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3spage2_${userId}`);
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  // //////////////////////////////////////////////////////////////
  const handleChange4 = (e) => {
    setText4(e.target.value);
  };

  const saveText4 = () => {
    if (text4.trim()) {
      // If editing an existing item, replace it
      if (isEditing4) {
        const updatedTexts4 = [...savedTexts4];
        updatedTexts4[editIndex4] = text4;
        setSavedTexts4(updatedTexts4);
        setIsEditing4(false); // Reset editing flag
        setEditIndex4(null);
      } else {
        setSavedTexts4([...savedTexts4, text4]);
      }
      localStorage.setItem(
        `notepadText4spage2_${userId}`,
        JSON.stringify([...savedTexts4, text4]),
      );

      setText4("");
    }
  };

  const editText4 = (index) => {
    setIsEditing4(true);
    setEditIndex4(index);
    setText4(savedTexts4[index]); // Set the text to be edited
    if (textareaRef4.current) {
      textareaRef4.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText4 = (index) => {
    const updatedTexts4 = savedTexts4.filter((_, i) => i !== index);
    setSavedTexts4(updatedTexts4);
    localStorage.setItem(
      `notepadText4spage2_${userId}`,
      JSON.stringify(updatedTexts4),
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(`notepadText4spage2_${userId}`);
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);

  // ///////////////////////////////////////////////////////////
  const handleChange5 = (e) => {
    setText5(e.target.value);
  };

  const saveText5 = () => {
    if (text5.trim()) {
      // If editing an existing item, replace it
      if (isEditing5) {
        const updatedTexts5 = [...savedTexts5];
        updatedTexts5[editIndex5] = text5;
        setSavedTexts5(updatedTexts5);
        setIsEditing5(false); // Reset editing flag
        setEditIndex5(null);
      } else {
        setSavedTexts5([...savedTexts5, text5]);
      }
      localStorage.setItem(
        `notepadText5spage2_${userId}`,
        JSON.stringify([...savedTexts5, text5]),
      );

      setText5("");
    }
  };

  const editText5 = (index) => {
    setIsEditing5(true);
    setEditIndex5(index);
    setText5(savedTexts5[index]); // Set the text to be edited
    if (textareaRef5.current) {
      textareaRef5.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText5 = (index) => {
    const updatedTexts5 = savedTexts5.filter((_, i) => i !== index);
    setSavedTexts5(updatedTexts5);
    localStorage.setItem(
      `notepadText5spage2_${userId}`,
      JSON.stringify(updatedTexts5),
    );
  };

  useEffect(() => {
    const savedData5 = localStorage.getItem(`notepadText5spage2_${userId}`);
    if (savedData5) {
      setSavedTexts5(JSON.parse(savedData5));
    }
  }, []);

  // ////////////////////////////////////////////////////

  const words = {
    P: "Petrol",
    O: "Oil",
    W: "Water",
    D: "Damage",
    E: "Electrics",
    R: "Rubber",
    Y: "You",
  };

  // /////////////////////////////////////////////////////
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
    <main className="w-full overflow-hidden font-sans bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] lg:h-[85vh] fade-up">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white max-w-4xl leading-tight">
              Vehicle Checks to Perform{" "}
              <span className="text-emerald-400">Before the Test</span>
            </h1>
            <p className="mt-6 text-slate-200 max-w-2xl text-base sm:text-lg">
              Learn how to ensure your vehicle is safe, compliant, and ready for
              your Part 2 driving test.
            </p>
          </div>
        </div>
      </section>

      {/* ================= QUESTION ================= */}
      <section className="py-20 bg-slate-50 fade-up">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            What types of vehicle checks do you think you need to perform?
          </h2>

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Write your answer below
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
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4"   style={{ paddingLeft: "0px" }}>
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

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 bg-white fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-10">
            Vehicle <span className="text-emerald-600">Checks Overview</span>
          </h2>

          <div className="bg-slate-50 p-10 rounded-3xl shadow-xl">
            <p className="text-slate-700 leading-relaxed">
              Before starting any journey, it is essential to carry out a few
              basic vehicle checks to ensure your car is safe, roadworthy, and
              performing efficiently.
              <br />
              These checks help prevent breakdowns, improve safety, and reduce
              the risk of accidents.
              <br />A great way to remember your vehicle checks is the POWERY
              model. <strong>POWERY</strong> model. <br />
              Have a think about what each letter could mean in relation to
              vehicle checks and click each letter to reveal the answer.
              represents.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.AdiModuleContentBox}>
        <div className={styles.powerword}>
          <span
            className={styles.powerwordletter}
            onMouseEnter={() => setHoveredLetter("P")}
            onMouseLeave={() => setHoveredLetter(null)}
          >
            {" "}
            P
            <p>
              {" "}
              {hoveredLetter === "P" && (
                <span className="word">{words["P"]}</span>
              )}{" "}
            </p>
          </span>
          <p id={styles.powerwordPara}>
            {" "}
            Ensure that you have sufficient fuel for your journey{" "}
          </p>
          <span
            className={styles.powerwordletter}
            onMouseEnter={() => setHoveredLetter("O")}
            onMouseLeave={() => setHoveredLetter(null)}
          >
            {" "}
            O{" "}
            <p>
              {" "}
              {hoveredLetter === "O" && (
                <span className="word">{words["O"]}</span>
              )}{" "}
            </p>
          </span>
          <p id={styles.powerwordPara}>
            {" "}
            Check your oil level when the engine is cold using the Dipstick and
            min and max marker{" "}
          </p>
          <span
            className={styles.powerwordletter}
            onMouseEnter={() => setHoveredLetter("W")}
            onMouseLeave={() => setHoveredLetter(null)}
          >
            {" "}
            W{" "}
            <p>
              {hoveredLetter === "W" && (
                <span className="word">{words["W"]}</span>
              )}{" "}
            </p>
          </span>
          <p id={styles.powerwordPara}>
            {" "}
            Check you Radiator (and screen wash) water levels, including
            coolant/antifreeze mixture are all in between the min and max
            makers{" "}
          </p>{" "}
          <span
            className={styles.powerwordletter}
            onMouseEnter={() => setHoveredLetter("D")}
            onMouseLeave={() => setHoveredLetter(null)}
          >
            {" "}
            D{" "}
            <p>
              {" "}
              {hoveredLetter === "D" && (
                <span className="word">{words["D"]}</span>
              )}{" "}
            </p>{" "}
          </span>{" "}
          <p id={styles.powerwordPara}>
            {" "}
            Check for damage on the car, windscreen cracks.{" "}
          </p>{" "}
          <span
            className={styles.powerwordletter}
            onMouseEnter={() => setHoveredLetter("E")}
            onMouseLeave={() => setHoveredLetter(null)}
          >
            {" "}
            E{" "}
            <p>
              {" "}
              {hoveredLetter === "E" && (
                <span className="word">{words["E"]}</span>
              )}{" "}
            </p>{" "}
          </span>{" "}
          <p id={styles.powerwordPara}>
            {" "}
            Ensure all electrics are working such as headlights, brake lights,
            indicators, hazard lights, number plate lights, interior warning
            lights{" "}
          </p>{" "}
          <span
            className={styles.powerwordletter}
            onMouseEnter={() => setHoveredLetter("R")}
            onMouseLeave={() => setHoveredLetter(null)}
          >
            {" "}
            R{" "}
            <p>
              {" "}
              {hoveredLetter === "R" && (
                <span className="word">{words["R"]}</span>
              )}{" "}
            </p>{" "}
          </span>{" "}
          <p id={styles.powerwordPara}>
            {" "}
            Check your tyres! Your tread depth should be 1.6mm and have no cuts
            bulges or tears. Check your tyre pressure using a pressure gauge
            when cold{" "}
          </p>{" "}
          <span
            className={styles.powerwordletter}
            onMouseEnter={() => setHoveredLetter("Y")}
            onMouseLeave={() => setHoveredLetter(null)}
          >
            {" "}
            Y{" "}
            <p>
              {" "}
              {hoveredLetter === "Y" && (
                <span className="word">{words["Y"]}</span>
              )}{" "}
            </p>{" "}
          </span>{" "}
          <p id={styles.powerwordPara}>
            {" "}
            How do you feel? Ensure you Not tired/under influence of drink or
            drugs, wearing any spectacles prescribed{" "}
          </p>{" "}
        </div>
      </div>
      {/* ================= VEHICLE TECHNOLOGY ================= */}
      <section className="py-24 bg-slate-50 fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12">
            Vehicle <span className="text-emerald-600">Technology</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              [
                "Dashboard Controls",
                "Know the location and function of key controls such as lights, wipers, hazard lights",
              ],
              [
                "Electronic Parking Brake",
                "  If applicable, ensure you can operation the electronic parking brake confidently, including hill starts",
              ],
              [
                "Sat Nav",
                " Be comfortable following directions from a sat nav – this may be required during the test",
              ],
              [
                "Eco Driving Features",
                "Understand how to use stop -start features if applicable Understand and confidently use cruise control or speed limiters if applicable",
              ],
              [
                "Air Conditioning / Demisters",
                "Know how to adjust temperature setting and clear windscreen fog quickly and efficiently",
              ],
              [
                "Reversing Aids",
                " Familiarise yourself with reversing cameras or sessions and understand their use and limitations",
              ],
            ].map(([title, text], i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-emerald-500"
              >
                <Settings className="w-10 h-10 text-emerald-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TASK ================= */}
      <section className="py-20 bg-white fade-up">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-slate-50 p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ClipboardList className="text-emerald-600" /> Task
            </h3>
            <p className="font-semibold">
              Spend 15 minutes inside your vehicle exploring the following:
            </p>
            <ul
              className="list-disc list-inside text-slate-700 space-y-3"
              style={{ paddingLeft: "0px" }}
            >
              <li>
                <strong>Locate and operate:</strong>
                <br />
              </li>
              <li>Wipers, lights, and hazard indicators.</li>
              <li> Air conditioning and demister settings.</li>
              <li>Speed Limiter/Cruise Control and other technologies</li>
              <li>Adjust air conditioning and demisters</li>
              <li>Practice sat-nav and reversing aids</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 fade-up">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              If you are using your trainers car, take some time to study this.
              Write down below what is different about their car to yours and
              how this could affect your driving and test.
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

      <section className="py-20 bg-slate-50 fade-up">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            After completing the activity, answer the following questions:
          </h2>

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Which vehicle checks did you find easiest?
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

      <section className="py-20 bg-slate-50 fade-up">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Are there any vehicle features you need more practice with (e.g.,
              sat-nav, electronic parking brake)?
            </label>
            <textarea
              ref={textareaRef4}
              value={text4}
              onChange={handleChange4}
              rows={5}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-500"
              placeholder="Write your thoughts here..."
            />
            <button
              onClick={saveText4}
              className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
            >
              {isEditing4 ? "Update" : "Save"}
            </button>

            <div className="mt-6">
              {savedTexts4.length === 0 ? (
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
                  {savedTexts4.map((savedText, index) => (
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
                          onClick={() => editText4(index)}
                          className="cursor-pointer text-blue-500"
                        />
                        <Trash2
                          onClick={() => deleteText4(index)}
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
      <section className="py-20 bg-slate-50 fade-up">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              What steps will you take to improve your familiarity with these
              features before the test?
            </label>
            <textarea
              ref={textareaRef5}
              value={text5}
              onChange={handleChange5}
              rows={5}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-500"
              placeholder="Write your thoughts here..."
            />
            <button
              onClick={saveText5}
              className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
            >
              {isEditing5 ? "Update" : "Save"}
            </button>

            <div className="mt-6">
              {savedTexts5.length === 0 ? (
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
                  {savedTexts5.map((savedText, index) => (
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
                          onClick={() => editText5(index)}
                          className="cursor-pointer text-blue-500"
                        />
                        <Trash2
                          onClick={() => deleteText5(index)}
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
      {/* ================= NAV ================= */}
      <section className="py-16 bg-white fade-up">
        <div className="container mx-auto px-6 flex justify-between">
          <Link to="/quizModulethree">
            <button className="px-8 py-3 bg-emerald-600 text-white rounded-full flex items-center gap-2 hover:bg-emerald-700">
              Next Page <ArrowRight />
            </button>
          </Link>
        </div>
      </section>

      {/* ================= QUIZ ================= */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-white fade-up">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white p-12 rounded-3xl shadow-2xl text-center">
            <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold mb-2">Start Quiz</h2>
            <p className="text-slate-600 mb-6">
              15 questions to test your understanding of vehicle checks.
            </p>
            <Link to="/takequizCatName/Vehicle-Checks">
              <button className="px-10 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700">
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
