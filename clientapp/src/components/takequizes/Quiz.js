import React, { useState, useEffect, useRef } from "react";
import styles from "./Quiz.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAnswerRandomQuestion,
  getQuizRandomQuestionFailure,
  getQuizRandomQuestionOutputFailure,
  getRandomQuestionByName,
  restartQuiz,
  resetQuizRestarted,
  resetOneQuizOutput,
} from "../../redux/features/quizSlice";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { useNavigate, useParams } from "react-router-dom";
import LoadingWeb from "../loader/LoadingWeb";
import { imageBaseUrl } from "../../utils/constants";
import httpHandler from "../../utils/httpHandler";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { getQuizCategoryById } from "../../redux/features/quizCategorySlice";
import { fetchUserSubscriptions } from "../../redux/features/subscriptionSlice";
import toast from "react-hot-toast";
import {
  Volume2,
  Languages,
  Clock,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Loader from "../loader/Loader";

const languageCodes = {
  Auto: "auto",
  English: "en",
  Portuguese: "pt",
  Afrikaans: "af",
  Albanian: "sq",
  Amharic: "am",

  Armenian: "hy",
  Azerbaijani: "az",
  Basque: "eu",
  Belarusian: "be",
  Bengali: "bn",
  Bosnian: "bs",
  Bulgarian: "bg",
  Catalan: "ca",
  Cebuano: "ceb",
  Chichewa: "ny",
  "Chinese (Simplified)": "zh-CN",
  "Chinese (Traditional)": "zh-TW",
  Corsican: "co",
  Croatian: "hr",
  Czech: "cs",
  Danish: "da",
  Dutch: "nl",
  Esperanto: "eo",
  Estonian: "et",
  Filipino: "tl",
  Finnish: "fi",
  French: "fr",
  Frisian: "fy",
  Galician: "gl",
  Georgian: "ka",
  German: "de",
  Greek: "el",
  Gujarati: "gu",
  "Haitian Creole": "ht",
  Hausa: "ha",
  Hawaiian: "haw",
  Hebrew: "iw",
  Hindi: "hi",
  Hmong: "hmn",
  Hungarian: "hu",
  Icelandic: "is",
  Igbo: "ig",
  Indonesian: "id",
  Irish: "ga",
  Italian: "it",
  Japanese: "ja",
  Javanese: "jw",
  Kannada: "kn",
  Kazakh: "kk",
  Khmer: "km",
  Kinyarwanda: "rw",
  Korean: "ko",
  Kurdish: "ku",
  Kyrgyz: "ky",
  Lao: "lo",
  Latin: "la",
  Latvian: "lv",
  Lithuanian: "lt",
  Luxembourgish: "lb",
  Macedonian: "mk",
  Malagasy: "mg",
  Malay: "ms",
  Malayalam: "ml",
  Maltese: "mt",
  Maori: "mi",
  Marathi: "mr",
  Mongolian: "mn",
  "Myanmar (Burmese)": "my",
  Nepali: "ne",
  Norwegian: "no",
  "Odia (Oriya)": "or",
  Pashto: "ps",
  Persian: "fa",
  Polish: "pl",
  Punjabi: "pa",
  Romanian: "ro",
  Russian: "ru",
  Samoan: "sm",
  "Scots Gaelic": "gd",
  Serbian: "sr",
  Sesotho: "st",
  Shona: "sn",

  Sinhala: "si",
  Slovak: "sk",
  Slovenian: "sl",
  Somali: "so",
  Spanish: "es",
  Sundanese: "su",
  Swahili: "sw",
  Swedish: "sv",
  Tajik: "tg",
  Tamil: "ta",
  Tatar: "tt",
  Telugu: "te",
  Thai: "th",
  Turkish: "tr",
  Turkmen: "tk",
  Ukrainian: "uk",

  Uyghur: "ug",
  Uzbek: "uz",
  Vietnamese: "vi",
  Welsh: "cy",
  Xhosa: "xh",
  Yiddish: "yi",
  Yoruba: "yo",
  Zulu: "zu",
};
const fallbackVoice = "Hindi Male";
const languageCodeToVoice = {
  en: "UK English Male",
  ar: "Arabic Male",
  hy: "Armenian Male",
  bn: "Bangla India Male",
  pt: "Brazilian Portuguese Female",
  zh: "Chinese Female",
  "zh-HK": "Chinese (Hong Kong) Male",
  "zh-TW": "Chinese Taiwan Male",
  cs: "Czech Female",
  da: "Danish Female",
  de: "Deutsch Male",
  nl: "Dutch Male",
  et: "Estonian Male",
  tl: "Filipino Female",
  fi: "Finnish Female",
  fr: "French Female",
  "fr-CA": "French Canadian Female",
  el: "Greek Female",
  hi: "Hindi Male",
  hu: "Hungarian Female",
  id: "Indonesian Male",
  it: "Italian Male",
  ja: "Japanese Female",
  ko: "Korean Female",
  la: "Latin Male",
  ne: "Nepali",
  no: "Norwegian Male",
  pl: "Polish Male",
  ro: "Romanian Female",
  ru: "Russian Female",
  si: "Sinhala",
  sk: "Slovak Female",
  es: "Spanish Female",
  "es-419": "Spanish Latin American Male",
  sv: "Swedish Male",
  ta: "Tamil Male",
  th: "Thai Male",
  tr: "Turkish Male",
  uk: "Ukrainian Female",
  vi: "Vietnamese Male",
  af: "Afrikaans Male",
  sq: "Albanian Male",
  bs: "Bosnian Male",
  ca: "Catalan Male",
  hr: "Croatian Male",
  eo: "Esperanto Male",
  is: "Icelandic Female",
  lv: "Latvian Male",
  mk: "Macedonian Male",
  mo: "Moldavian Female",
  sr: "Serbian Male",
  sh: "Serbo-Croatian Male",
  sw: "Swahili Male",
  cy: "Welsh Male",
};

const Quiz = () => {
  const { cid, id } = useParams();
  const myDivRef = useRef(null);
  const myDivRefQue = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ///////////////////////////////////////////////

  const userDetails = useSelector((state) => state.auth.userDetails);
  const userSubscription = useSelector(
    (state) => state.subscription.userSubscription,
  );
  const userId = userDetails?._id;

  const [subscriptionLoaded, setSubscriptionLoaded] = useState(false); // Track when subscription data is loaded

  useEffect(() => {
    // If user is logged in and userId exists, fetch subscription data
    if (userId) {
      dispatch(fetchUserSubscriptions(userId))
        .then(() => setSubscriptionLoaded(true)) // Set subscriptionLoaded to true once data is fetched
        .catch(() => setSubscriptionLoaded(true)); // Handle error and set subscriptionLoaded to true
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (!userDetails || Object.keys(userDetails).length === 0) {
      navigate("/");
      toast.error("Access Denied"); // Redirect to login if user is not logged in
    } else if (
      userDetails.role === "admin" ||
      userDetails.role === "instructortrainee" ||
      userDetails.role === "theoryinstructor"
    ) {
      // Allow admin to access the portal
      return;
    } else if (subscriptionLoaded) {
      const hasAccess =
        Array.isArray(userSubscription) &&
        userSubscription.some((subscription) => {
          const { planCategory } = subscription.subscriptionId || {};
          const { couponApplied } = subscription; // Assuming couponApplied is part of the subscription object

          return (
            subscription.isActive &&
            (planCategory === "pdi-part-three packages" ||
              planCategory === "Complete packages" ||
              planCategory === "pdi-part-one packages" ||
              planCategory === "pdi-part-two packages" ||
              planCategory === "theory-portal package")
          );
        });
      if (!hasAccess) {
        navigate("/");
        toast.error("Access Denied"); // Redirect to subscription page if no valid plan found
      }
    }
  }, [userDetails, userSubscription, subscriptionLoaded, dispatch, navigate]);

  ////////////////////////////////////////////////////

  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(null);

  const [questionTranslate, setQuestionTranslate] = useState("en-Us");
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [answered, setAnswered] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [hasTranslated, setHasTranslated] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [categoryFetched, setCategoryFetched] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [visibleQuestions, setVisibleQuestions] = useState(10); // Initially show 10 questions
  const [showAll, setShowAll] = useState(false);
  const [translatedQuestionText, setTranslatedQuestionText] = useState("");
  const [translatedDescriptionText, setTranslatedDescriptionText] =
    useState("");
  const [translatedOptions, setTranslatedOptions] = useState({});

  const [confettiActive, setConfettiActive] = useState(false);

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  const {
    oneQuiz,
    oneQuizOutput,
    outputData,
    isQuizRestarted,
    TotalQuestions,
    AttemptedQuestions,
    loading,
  } = useSelector((state) => state.quiz);
  const { quizCategory } = useSelector((state) => state.quizCategory);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (window.responsiveVoice) {
      // Ensure ResponsiveVoice is ready
      window.responsiveVoice.onready = () => {
        console.log("ResponsiveVoice is ready.");
      };
    }
  }, []);

  useEffect(() => {
    if (window.responsiveVoice) {
      const availableVoices = window.responsiveVoice.getVoices();
      console.log("Available voices:");
      availableVoices.forEach((voice) => {
        console.log(`• ${voice.name} (${voice.lang})`);
      });
    }
  }, []);

  const getVoiceForLanguage = (langCode) => {
    const voices = window.responsiveVoice?.getVoices() || [];
    const lang = langCode.split("-")[0]; // e.g. 'en-US' → 'en'
    const selectedVoice = languageCodeToVoice[lang];

    if (voices.some((voice) => voice.name === selectedVoice)) {
      return selectedVoice;
    }

    // fallback if selectedVoice doesn't exist
    return fallbackVoice;
  };

  const speak = (text) => {
    if (text) {
      const selectedVoice = getVoiceForLanguage(questionTranslate);
      window.responsiveVoice.speak(text, selectedVoice); // Use ResponsiveVoice
    } else {
      console.error("No text provided to speak.");
    }
  };

  const handleTranslationAndSpeech = async () => {
    if (hasTranslated) return;
    setHasTranslated(true);
    setIsTranslating(true);
    const formdata = new FormData();
    const question =
      oneQuiz[currentQuestionIndex]?.question || "No question provided";
    const description = oneQuiz[currentQuestionIndex]?.description || "N/A";
    formdata.append("question", question);
    formdata.append("description", description);
    formdata.append("lang", questionTranslate);

    ["option1", "option2", "option3", "option4"].forEach((option) => {
      const optionText = document.getElementById(`lab${option}`)?.innerHTML;
      if (optionText) {
        formdata.append(option, optionText);
      }
    });

    try {
      const response = await httpHandler.post("/api/quiz/translate", formdata);

      const result = await response.data;
      if (myDivRef.current) {
        setTranslatedQuestionText(result.question);
      }
      if (myDivRef.current) {
        setTranslatedDescriptionText(result.description);
      }

      ["option1", "option2", "option3", "option4"].forEach((option) => {
        if (result[option]) {
          setTranslatedOptions({
            option1: result.option1,
            option2: result.option2,
            option3: result.option3,
            option4: result.option4,
          });
        }
      });
      console.log("Translation response:", result);
    } catch (error) {
      console.error("Translation error:", error.message);
    } finally {
      setIsTranslating(false);
    }
  };
  useEffect(() => {
    if (questionTranslate !== "en-Us") {
      handleTranslationAndSpeech();
    }
  }, [questionTranslate, currentQuestionIndex]);

  const hasFetchedRef = useRef(false);
  useEffect(() => {
    // Create a ref to track if the API has already been called

    if (!hasFetchedRef.current) {
      dispatch(getRandomQuestionByName(cid));
      hasFetchedRef.current = true; // Set it to true to avoid re-triggering
    }
  }, [cid, dispatch]); // Keep dependencies for `cid` and `dispatch`

  const handleAnswerOptionClick = (answerOption, answerImage) => {
    let finData = {
      questionId: oneQuiz[currentQuestionIndex].questionId,
      answer: answerOption,
      answerImage: answerImage,
    };

    setAnswered(answerOption);
    setAnsweredQuestions((prev) => [...prev, finData]);
    dispatch(getAnswerRandomQuestion(finData));
  };

  const resetTranslation = () => {
    setHasTranslated(false);
    setIsTranslating(false);
  };
  const stopSpeech = () => {
    if (window.responsiveVoice) {
      window.responsiveVoice.cancel(); // This stops any ongoing speech
    }
  };

  const totalQuestions = Object.keys(oneQuiz).length;

  const handleQuestionClick = (index) => {
    stopSpeech();
    resetTranslation();

    setCurrentQuestionIndex(index);
    // Optionally reset quiz output when changing question

    // If the question is not already answered, mark it as answered
    if (!answeredQuestions.includes(index)) {
      setAnsweredQuestions((prev) => [...prev, index]);
    }
    setConfettiActive(false);
  };

  const handleNextQuestion = () => {
    stopSpeech();
    resetTranslation();

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }

    if (currentQuestionIndex === totalQuestions - 1) {
      setQuizCompleted(true); // Mark the quiz as completed when the last question is answered
    }

    setConfettiActive(false);
  };

  useEffect(() => {
    if (oneQuizOutput.answerAttempt === "Correct") {
      setConfettiActive(true); // Enable confetti when the answer is correct
    }
  }, [oneQuizOutput]);

  const endQuiz = () => {
    navigate("/quizResult");
    dispatch(resetOneQuizOutput());
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleToggle = () => {
    if (showAll) {
      setVisibleQuestions(10); // Reset to show only 10 questions
    } else {
      setVisibleQuestions(totalQuestions); // Show all questions
    }
    setShowAll(!showAll); // Toggle the state to switch between "See More" and "See Less"
  };

  // /////////////////////////

  useEffect(() => {
    // Only dispatch getQuizCategoryById if the category is not fetched yet
    if (oneQuiz[currentQuestionIndex]?.category) {
      dispatch(getQuizCategoryById(oneQuiz[currentQuestionIndex].category));
    }
  }, [dispatch, oneQuiz[currentQuestionIndex]?.category]);

  const prevTimerRef = useRef();
  const intervalRef = useRef();

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  useEffect(() => {
    if (quizCategory?.timer) {
      setTimer(quizCategory?.timer * 60); // Convert minutes to seconds
    }
  }, [quizCategory]);

  useEffect(() => {
    prevTimerRef.current = timer;

    if (timer > 0 && !isPaused) {
      // Start or continue the timer if it's not paused
      intervalRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime - 1); // Decrease the timer by 1 every second
      }, 1000);
    } else {
      // Clear the interval when the timer is paused
      clearInterval(intervalRef.current);
    }
    // Clean up interval on component unmount or when the timer hits 0
    return () => clearInterval(intervalRef.current);
  }, [timer, isPaused]);

  useEffect(() => {
    if (timer === 0) {
      setTimeUp(true); // Set the "Time's Up!" state when the timer ends

      setQuizEnded(true); // End the quiz when the timer hits 0
    }
  }, [timer]);

  const handlePauseResume = () => {
    setIsPaused((prevState) => !prevState); // Toggle the pause/resume state
  };

  ///////////////////////////////////////////////////////////////////////////////////////

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setQuestionTranslate(selectedLanguage);
    setHasTranslated(false);
  };

  useEffect(() => {
    if (isQuizRestarted) {
      dispatch(resetQuizRestarted()); // Reset the restart status after handling
    }
  }, [isQuizRestarted, dispatch]);

  const handleRestart = () => {
    stopSpeech();
    dispatch(restartQuiz(cid));
    setQuizCompleted(false);
    setCategoryFetched(false);
    // Reset the category fetched flag for restart
    if (quizCategory?.timer) {
      setTimer(quizCategory?.timer * 60); // Convert minutes to seconds
    }

    // Dispatch the restart action
  };

  const backbtn = () => {
    navigate(-2);
  };

  return (
    <>
      {confettiActive && (
        <Confetti run={confettiActive} width={width} height={height} />
      )}

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50 flex justify-center px-3 sm:px-4 py-6">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-4 sm:p-6 text-gray-800 border border-gray-100">
          {loading ? (
            <Loader />
          ) : timeUp ? (
            <div className="flex flex-col items-center gap-6 py-16 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">
                "⏰ Time’s Up!"
              </h2>
              <button
                onClick={handleRestart}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg hover:scale-105 transition"
              >
                Restart Quiz
              </button>
            </div>
          ) : quizCompleted ? (
            <div className="flex flex-col items-center justify-center gap-4 mt-8 p-6 bg-red-50 border border-red-200 rounded-2xl">
              <p className="text-lg font-semibold text-red-700">
                Quiz Completed – View Result
              </p>

              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-6 py-2 rounded-xl
             bg-red-600 text-white font-semibold
             hover:bg-red-700 transition active:scale-95"
              >
                Restart Quiz
              </button>
            </div>
          ) : oneQuiz[currentQuestionIndex]?.question ? (
            <>
              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
                {/* Language */}
                <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl border">
                  <Languages className="text-green-600" />
                  <select
                    onChange={handleLanguageChange}
                    className="bg-transparent outline-none text-sm sm:text-base"
                  >
                    {Object.entries(languageCodes).map((itm) => (
                      <option key={itm[1]} value={itm[1]}>
                        {itm[0]}
                      </option>
                    ))}
                  </select>
                  {isTranslating && (
                    <span className="text-xs text-gray-500">Loading…</span>
                  )}
                </div>

                {/* Timer */}
                {quizCategory?.timer && (
                  <div className="flex items-center gap-3 bg-yellow-50 px-4 py-2 rounded-xl border border-yellow-200">
                    <Clock className="text-yellow-600" />
                    <span className="font-semibold">{formatTime(timer)}</span>
                    <button onClick={handlePauseResume}>
                      {isPaused ? <Play /> : <Pause />}
                    </button>
                  </div>
                )}
              </div>

              {/* QUESTION STATS */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-xl p-3 border border-green-200">
                  <p
                    style={{ marginBottom: "0px" }}
                    className="text-xs text-gray-500"
                  >
                    Attempted
                  </p>
                  <p
                    style={{ marginBottom: "0px" }}
                    className="font-semibold text-green-700"
                  >
                    {AttemptedQuestions}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
                  <p
                    className="text-xs text-gray-500"
                    style={{ marginBottom: "0px" }}
                  >
                    Total
                  </p>
                  <p
                    style={{ marginBottom: "0px" }}
                    className="font-semibold text-blue-700"
                  >
                    {TotalQuestions}
                  </p>
                </div>
              </div>

              {/* QUESTION NAVIGATION */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {Array.from({ length: totalQuestions }, (_, index) =>
                  index < visibleQuestions ? (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(index)}
                      className={`min-w-[40px] h-10 rounded-lg font-bold transition
                  ${
                    currentQuestionIndex === index
                      ? "bg-blue-600 text-white scale-110"
                      : "bg-gray-100"
                  }
                  ${
                    answeredQuestions.includes(index)
                      ? "ring-2 ring-green-400"
                      : ""
                  }`}
                    >
                      {index + 1}
                    </button>
                  ) : null,
                )}

                {totalQuestions > 10 && (
                  <button
                    onClick={handleToggle}
                    className="px-4 h-10 rounded-lg bg-gray-100 whitespace-nowrap"
                  >
                    {showAll ? "See Less" : "See More"}
                  </button>
                )}
              </div>

              {/* QUESTION */}
              <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-6 border">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div
                    ref={myDivRef}
                    className="text-base sm:text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: oneQuiz[currentQuestionIndex]?.question.replace(
                        ">",
                        "><br/>",
                      ),
                    }}
                  />
                  <button
                    disabled={!hasTranslated || isTranslating}
                    onClick={() => speak(translatedQuestionText)}
                    style={{
                      border: "none",
                    }}
                    className="text-blue-600 hover:scale-110 disabled:opacity-40"
                  >
                    <Volume2 />
                  </button>
                </div>
              </div>

              {/* IMAGE */}
              {oneQuiz[currentQuestionIndex]?.questionImage && (
                <div className="flex justify-center mb-6">
                  <img
                    src={
                      imageBaseUrl +
                      oneQuiz[currentQuestionIndex]?.questionImage
                    }
                    className="rounded-xl shadow max-w-full sm:max-w-xs"
                    alt="Question"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {oneQuiz[currentQuestionIndex]?.option.map(
                  (answerOption, index) => {
                    const outputItem = outputData.find(
                      (item) =>
                        item.questionId ===
                        oneQuiz[currentQuestionIndex]?.questionId,
                    );

                    const optionKey = `Option${index + 1}`;

                    const isSelected = optionKey === outputItem?.answer;
                    const isCorrectAttempt =
                      outputItem?.answerAttempt === "Correct";

                    // 👇 IMPORTANT: correct option key from backend
                    const isCorrectOption =
                      optionKey === outputItem?.correctAnswer;

                    const optionImage =
                      oneQuiz[currentQuestionIndex]?.optionImage?.[index];

                    return (
                      <button
                        key={index}
                        disabled={
                          outputItem?.questionId ===
                          oneQuiz[currentQuestionIndex]?.questionId
                        }
                        onClick={() =>
                          handleAnswerOptionClick(
                            optionKey,
                            "Image" + (index + 1),
                          )
                        }
                        className={`relative p-4 rounded-xl text-left border transition
          ${
            isCorrectOption
              ? "bg-green-100 border-green-400 text-green-900"
              : isSelected && !isCorrectAttempt
                ? "bg-red-100 border-red-400 text-red-900"
                : "bg-white border-gray-200 text-gray-800"
          }
          hover:scale-[1.02] disabled:opacity-70`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <p
                            style={{ marginBottom: "0px" }}
                            className="text-sm sm:text-base leading-relaxed flex-1"
                          >
                            {answerOption}
                          </p>

                          <div className="flex items-center gap-2">
                            {/* ✅ Correct option icon (always shown) */}
                            {isCorrectOption && (
                              <CheckCircle className="text-green-600" />
                            )}

                            {/* ❌ Wrong selected option icon */}
                            {isSelected && !isCorrectOption && (
                              <XCircle className="text-red-600" />
                            )}
                          </div>

                          <button
                            style={{
                              border: "none",
                              cursor:
                                !hasTranslated || isTranslating
                                  ? "not-allowed"
                                  : "pointer",
                              opacity:
                                !hasTranslated || isTranslating ? 0.5 : 1,
                            }}
                            disabled={!hasTranslated || isTranslating}
                            onClick={(e) => {
                              e.stopPropagation();

                              const optionKeyLower = `option${index + 1}`;
                              const textToSpeak =
                                translatedOptions?.[optionKeyLower] ||
                                translatedOptions?.[
                                  optionKeyLower.toLowerCase()
                                ] ||
                                answerOption;

                              if (!textToSpeak) return;

                              speak(textToSpeak);
                            }}
                            className="mt-0.5 text-indigo-600 hover:text-indigo-800
              hover:scale-110 transition disabled:opacity-40"
                          >
                            <Volume2 size={18} />
                          </button>
                        </div>

                        {/* OPTION IMAGE */}
                        {optionImage && (
                          <div className="mt-3 flex justify-center">
                            <img
                              src={
                                optionImage.includes("https")
                                  ? optionImage
                                  : imageBaseUrl + optionImage
                              }
                              alt={`Option ${index + 1}`}
                              className="max-w-[120px] w-full rounded-lg shadow-md"
                            />
                          </div>
                        )}
                      </button>
                    );
                  },
                )}
              </div>

              {/* EXPLANATION */}
              {outputData.find(
                (item) =>
                  item.questionId === oneQuiz[currentQuestionIndex]?.questionId,
              )?.answerAttempt && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold">Explanation</h4>
                    <button
                      onClick={() => speak(translatedDescriptionText)}
                      className="text-blue-600"
                      style={{
                        border: "none",
                      }}
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>
                  <p style={{ marginBottom: "0px" }}>
                    {oneQuiz[currentQuestionIndex]?.description}
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 mt-8 p-6 bg-red-50 border border-red-200 rounded-2xl">
              <p className="text-lg font-semibold text-red-700">
                Quiz Completed – View Result
              </p>

              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-6 py-2 rounded-xl
             bg-red-600 text-white font-semibold
             hover:bg-red-700 transition active:scale-95"
              >
                Restart Quiz
              </button>
            </div>
          )}

          {/* FOOTER */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
            {/* QUIZ COMPLETED / RESTART */}

            <button
              onClick={endQuiz}
              className="flex items-center justify-center gap-2 px-4 py-3
          bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-500
          text-white rounded-xl shadow hover:scale-105 w-full sm:w-auto"
            >
              <BarChart3 /> View Result
            </button>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={backbtn}
                className="flex items-center justify-center gap-1 px-4 py-3 bg-gray-100 rounded-xl w-full sm:w-auto"
              >
                <ChevronLeft /> Back
              </button>

              {oneQuizOutput.answerAttempt && !quizCompleted && !timeUp && (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center justify-center gap-1 px-4 py-3 bg-green-600 text-white rounded-xl hover:scale-105 w-full sm:w-auto"
                >
                  Next <ChevronRight />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
