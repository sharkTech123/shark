import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizResult } from "../../redux/features/quizSlice";
import { useNavigate } from "react-router-dom";


import { ArrowLeft, Trophy, CheckCircle, XCircle, Clock } from "lucide-react";
import Loader from "../loader/Loader";

const AllResult = () => {
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

  const groupedResults = quizResult.reduce((acc, itm) => {
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
    <div className="min-h-screen bg-slate-50 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold flex items-center gap-3 text-slate-800">
            <Trophy className="w-8 h-8 text-indigo-600" />
            All Quiz Results
          </h2>

          <button
            onClick={() => navigate(-1)}
            className="mt-4 md:mt-0 flex items-center gap-2 px-6 py-2 rounded-xl bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
            {/* Quiz Navigation */}
            <div className="flex flex-wrap gap-3 mb-10">
              {Object.keys(groupedResults).map((quizName, index) => (
                <button
                  key={`${quizName}-${index}`}
                  onClick={() => {
                    const el = document.getElementById(quizName);
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="px-4 py-2 rounded-lg bg-white border border-slate-200 shadow hover:shadow-lg hover:-translate-y-1 transition-all text-slate-700"
                >
                  {truncateQuizName(quizName)}
                </button>
              ))}
            </div>

            {/* Results */}
            {Object.entries(groupedResults).map(([quizName, bands]) => (
              <section
                key={quizName}
                id={quizName}
                className="mb-16 p-6 rounded-2xl bg-white border border-slate-200 shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-6 text-indigo-700">
                  {quizName}
                </h3>

                {Object.entries(bands).map(([band, data], index) => {
                  const { results, correct, incorrect } = data;
                  const percentage = calculatePercentage(correct, incorrect);
                  const isPass = percentage >= 80;

                  return (
                    <div
                      key={`${band}-${index}`}
                      className="mb-12 p-6 rounded-xl bg-slate-50 border border-slate-200 shadow hover:shadow-2xl transition-all"
                    >
                      {/* Band Header */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <h4 className="text-lg font-semibold text-slate-700">
                          {band}
                        </h4>

                        <div
                          className={`px-5 py-2 rounded-full text-sm font-semibold shadow ${
                            isPass
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-rose-100 text-rose-700"
                          }`}
                        >
                          {percentage}% • {isPass ? "Pass" : "Fail"}
                        </div>
                      </div>

                      {/* Score Summary */}
                      <div className="flex gap-6 mb-6 text-sm">
                        <span className="text-emerald-600 font-semibold">
                          Correct: {correct}
                        </span>
                        <span className="text-rose-600 font-semibold">
                          Incorrect: {incorrect}
                        </span>
                      </div>

                      {/* Table */}
                      <div className="overflow-x-auto rounded-xl border border-slate-200">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-100 sticky top-0">
                            <tr>
                              {[
                                "Quiz",
                                "Question",
                                "Correct Answer",
                                "Your Answer",
                                "Description",
                                "Time",
                              ].map((h) => (
                                <th
                                  key={h}
                                  className="px-4 py-3 text-left text-slate-700 font-semibold"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>

                          <tbody>
                            {results.map((itm, i) => (
                              <tr
                                key={`${itm.result?._id}-${i}`}
                                className="border-b border-slate-200 hover:bg-slate-100 transition"
                              >
                                <td className="px-4 py-3 text-slate-700">
                                  {quizName}
                                </td>

                                <td className="px-4 py-3 max-w-md text-slate-600">
                                  {itm.question?.question || "N/A"}
                                </td>

                                <td className="px-4 py-3 text-emerald-700 font-medium">
                                  {getAnswer2Text(
                                    itm.question,
                                    itm?.question?.answer,
                                  )}
                                </td>

                                <td
                                  className={`px-4 py-3 flex items-center gap-2 font-medium ${
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

                                <td className="px-4 py-3 text-slate-600">
                                  {itm.question?.description || "N/A"}
                                </td>

                                <td className="px-4 py-3 flex items-center gap-2 text-slate-500">
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
              </section>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AllResult;
