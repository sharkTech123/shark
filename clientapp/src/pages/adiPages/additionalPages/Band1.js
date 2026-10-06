import { Link } from "react-router-dom";
import { BookOpenCheck, ListChecks, PlayCircle } from "lucide-react";

export default function Band1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      {/* Card */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-blue-100 rounded-xl">
            <BookOpenCheck className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Band 1 – Road Procedures
            </h1>
            <p className="text-gray-500">
              Practice theory questions confidently
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <ListChecks className="w-6 h-6 text-green-600 mt-1" />
            <p className="text-gray-600 leading-relaxed">
              Band One Practice Questions focus on essential road procedures.
              With{" "}
              <span className="font-semibold text-gray-800">
                300+ multiple-choice questions
              </span>
              , you can sharpen your understanding and exam readiness.
            </p>
          </div>

          <p className="text-gray-600">
            Choose to practise <span className="font-semibold">50</span>,{" "}
            <span className="font-semibold">100</span>, or attempt{" "}
            <span className="font-semibold">all questions</span> in one go.
          </p>
        </div>

        {/* CTA */}
        <Link to="/takequizCatName/Band-1---Road-Procedure">
          <button
            className="w-full md:w-auto inline-flex items-center justify-center gap-3
                       bg-blue-600 hover:bg-blue-700 text-white
                       px-8 py-4 rounded-xl font-semibold
                       transition-all duration-300
                       shadow-md hover:shadow-lg"
          >
            <PlayCircle className="w-6 h-6" />
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}
