import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import styles from "./Quiz.module.css";

const ResultQuiz = ({
  score,
  totalQuestions,
  onRestart,
  quizName,
  startTime,
  endTime,
  questions, // added questions prop
}) => {
  const duration = Math.floor((endTime - startTime) / 1000); // duration in seconds
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text(`${quizName} Result`, 20, 10);
    autoTable(doc, {
      head: [["Question", "Your Answer", "Correct Answer"]],
      
      body: questions.map((q) => {
        const userAnswer = q.userAnswer || "Not Answered"; // If userAnswer is null or undefined, display "Not Answered"
        return [
          q.questionText,
          userAnswer,
          q.correctAnswer,
        ];
      }),
    });

    doc.save("quiz-result.pdf");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Test Has Been Completed
      </h2>
      <div className="overflow-x-auto">
        <table
          className="min-w-full bg-white dark:bg-zinc-800 border border-black"
          id={styles.resultTableData}
        >
          <thead>
            <tr className="w-full bg-zinc-800 bg-dark dark:bg-zinc-700 text-white">
              <th className="py-2 px-4 text-left border border-black">
                Quiz Name
              </th>
              <th className="py-2 px-4 text-left border border-black">Start</th>
              <th className="py-2 px-4 text-left border border-black">End</th>
              <th className="py-2 px-4 text-left border border-black">
                Duration
              </th>
              <th className="py-2 px-4 text-left border border-black">Score</th>
              <th className="py-2 px-4 text-left border border-black">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-zinc-700">
              <td className="py-2 px-4 border border-black">{quizName}</td>
              <td className="py-2 px-4 border border-black">
                {new Date(startTime).toLocaleString()}
              </td>
              <td className="py-2 px-4 border border-black">
                {new Date(endTime).toLocaleString()}
              </td>
              <td className="py-2 px-4 border border-black">{`${Math.floor(
                duration / 60
              )}m ${duration % 60}s`}</td>
              <td className="py-2 px-4 border border-black">{`${percentage}%`}</td>
              <td className="py-2 px-4 border border-black">
                <button
                  className="bg-black text-white py-1 px-3 rounded"
                  onClick={generatePDF}
                >
                  Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.restartQuizBtn}>
        <button
          onClick={onRestart}
          className="mt-4 bg-black text-white py-1 px-3 rounded"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultQuiz;
