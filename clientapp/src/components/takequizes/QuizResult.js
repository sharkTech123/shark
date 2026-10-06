import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizResult } from "../../redux/features/quizSlice";
import { Link, useNavigate } from "react-router-dom";
import LoadingWeb from "../../components/loader/LoadingWeb";
import styles from "./QuizResult.module.css";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

import { CheckCircle, XCircle, Trophy, ArrowLeft, Clock } from "lucide-react";
import Loader from "../loader/Loader";

const QuizResult = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 20;
  const { quizResult } = useSelector((state) => state.quiz);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.userDetails?._id);
  const url = window.location.pathname.split("/").pop();

  useEffect(() => {
    if (userId) {
      setLoading(true);
      dispatch(getQuizResult(userId, url)).then(() => {
        setLoading(false);
      });
    }
  }, [dispatch, userId, url]);

  console.log("asdassdas", quizResult);

  const currentTime = new Date();
  const twentyFourHoursAgo = new Date(currentTime - 24 * 60 * 60 * 1000);

  // Filter results to only include those within the last 24 hours
  const filteredQuizResults = quizResult.filter((itm) => {
    const createdOn = new Date(itm.createdOn);
    return createdOn >= twentyFourHoursAgo;
  });

  const sortedQuizResults = [...filteredQuizResults].sort(
    (a, b) => new Date(b.createdOn) - new Date(a.createdOn),
  );

  const groupedResults = sortedQuizResults.reduce((acc, itm) => {
    const quizName = itm.result?.name;
    const band = itm.question?.band || " ";

    if (!acc[quizName]) {
      acc[quizName] = {};
    }
    if (!acc[quizName][band]) {
      acc[quizName][band] = { results: [], correct: 0, incorrect: 0 };
    }

    // Check if the answer was correct or incorrect
    const isCorrect = itm.answerAttempt === "Correct";
    if (isCorrect) {
      acc[quizName][band].correct += 1;
    } else {
      acc[quizName][band].incorrect += 1;
    }

    acc[quizName][band].results.push(itm);

    return acc;
  }, {});

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = Object.values(groupedResults)
    .flat()
    .slice(indexOfFirstItem, indexOfLastItem);

  const truncateQuizName = (name) => {
    if (!name) return "Unnamed";
    const words = name.split(" ");
    return words.length > 5 ? `${words.slice(0, 4).join(" ")}...` : name;
  };

  const getAnswerText = (question, answer) => {
    if (!question || !answer || !question.option) return "N/A";
    const answerIndex = parseInt(answer.replace("Option", "")) - 1;
    return question.option[answerIndex] || "N/A";
  };

  const getAnswer2Text = (question, answer) => {
    if (!question || !answer || !question.option) return "N/A"; // Safe check for undefined question or answer
    const answerIndex = parseInt(answer.replace("Option", "")) - 1;
    return question.option[answerIndex] || "N/A"; // Safe access to the option array
  };

  const calculatePercentage = (correct, incorrect) => {
    const total = correct + incorrect;
    return total > 0 ? ((correct / total) * 100).toFixed(2) : 0;
  };

  const getPassOrFail = (percentage) => {
    return percentage >= 80 ? (
      <span style={{ color: "green", margin: "0px 0.5rem" }}>Pass</span>
    ) : (
      <span style={{ color: "red", margin: "0px 0.5rem" }}>Fail</span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-indigo-600" />
            Quiz Results
          </h2>

          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={() => navigate(-3)}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 text-white shadow-lg hover:scale-105 transition-transform"
            >
              <ArrowLeft size={18} /> Go Back
            </button>

            <Link
              to="/all-results"
              className="px-5 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-900 transition"
            >
              View All
            </Link>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
            {/* Quiz Category Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.keys(groupedResults).map((quizName) => (
                <button
                  key={quizName}
                  onClick={() => {
                    const el = document.getElementById(quizName);
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="px-4 py-2 rounded-lg bg-white shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  {truncateQuizName(quizName)}
                </button>
              ))}
            </div>

            {/* Results */}
            {Object.entries(groupedResults).map(([quizName, bands]) => (
              <div
                key={quizName}
                id={quizName}
                className="mb-14 p-6 rounded-2xl bg-white shadow-xl border border-slate-200"
              >
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex justify-between">
                  {quizName}
                  <Link
                    to="/all-results"
                    className="text-indigo-600 hover:underline"
                  >
                    View all
                  </Link>
                </h3>

                {Object.entries(bands).map(([band, data]) => {
                  const { results, correct, incorrect } = data;
                  const percentage = calculatePercentage(correct, incorrect);
                  const isPass = percentage >= 80;

                  return (
                    <div
                      key={band}
                      className="mb-10 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-lg p-6"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <h4 className="text-lg font-semibold text-slate-700">
                          {band}
                        </h4>

                        <div
                          className={`px-5 py-2 rounded-full text-white text-sm font-semibold shadow-md ${
                            isPass ? "bg-emerald-600" : "bg-rose-600"
                          }`}
                        >
                          {percentage}% • {isPass ? "Pass" : "Fail"}
                        </div>
                      </div>

                      <div className="flex gap-6 mb-6 text-sm">
                        <span className="text-emerald-600 font-semibold">
                          Correct: {correct}
                        </span>
                        <span className="text-rose-600 font-semibold">
                          Incorrect: {incorrect}
                        </span>
                      </div>

                      {/* Table */}
                      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-inner">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-800 text-white sticky top-0">
                            <tr>
                              {[
                                "Quiz",
                                "Question",
                                "Correct Answer",
                                "Your Answer",
                                "Description",
                                "Time",
                              ].map((h) => (
                                <th key={h} className="px-4 py-3 text-left">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>

                          <tbody>
                            {results.map((itm) => (
                              <tr
                                key={itm.result?._id}
                                className="border-b hover:bg-slate-50 transition"
                              >
                                <td className="px-4 py-3">{quizName}</td>

                                <td className="px-4 py-3 max-w-md">
                                  {itm.question?.question || "N/A"}
                                </td>

                                <td className="px-4 py-3 text-emerald-700 font-medium">
                                  {getAnswer2Text(
                                    itm.question,
                                    itm?.question?.answer,
                                  )}
                                </td>

                                <td
                                  className={`px-4 py-3 font-medium flex items-center gap-2 ${
                                    itm.answerAttempt === "Correct"
                                      ? "text-emerald-700"
                                      : "text-rose-700"
                                  }`}
                                >
                                  {getAnswerText(itm.question, itm.answer)}
                                  {itm.answerAttempt === "Correct" ? (
                                    <CheckCircle size={18} />
                                  ) : (
                                    <XCircle size={18} />
                                  )}
                                </td>

                                <td className="px-4 py-3">
                                  {itm.question?.description || "N/A"}
                                </td>

                                <td className="px-4 py-3 flex items-center gap-2 text-slate-600">
                                  <Clock size={14} />
                                  {new Date(itm.createdOn).toLocaleString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default QuizResult;
