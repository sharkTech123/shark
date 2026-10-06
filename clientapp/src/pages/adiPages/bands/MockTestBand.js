import { Link } from "react-router-dom";
import { BookMarked, Timer, CheckCircle2, PlayCircle } from "lucide-react";

export default function PublicationTechBand() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-rose-50 to-slate-50 flex items-center justify-center px-4">
      {/* Card */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-indigo-100">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-indigo-100 rounded-xl">
            <BookMarked className="w-8 h-8 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Mock Test</h1>
            <p className="text-rose-600 font-medium">
              The ADI Part 1 test consists of two sections: the multiple-choice
              questions and the hazard perception test.
            </p>
          </div>
        </div>

        {/* Exam Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-indigo-50 rounded-xl p-4 flex items-center gap-3">
            <BookMarked className="w-6 h-6 text-indigo-600" />
            <div>
              <p className="text-sm text-gray-500">Questions</p>
              <p className="font-semibold text-gray-800">100 MCQs</p>
            </div>
          </div>

          <div className="bg-rose-50 rounded-xl p-4 flex items-center gap-3">
            <Timer className="w-6 h-6 text-rose-600" />
            <div>
              <p className="text-sm text-gray-500">Time Limit</p>
              <p className="font-semibold text-gray-800">60 Minutes</p>
            </div>
          </div>

          <div className="bg-slate-100 rounded-xl p-4 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-slate-600" />
            <div>
              <p className="text-sm text-gray-500">Pass Mark</p>
              <p className="font-semibold text-gray-800">85 / 100</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          The ADI Part 1 test consists of two sections: the multiple-choice
          questions and the hazard perception test. The multiple-choice section
          includes <span className="font-semibold">100 questions</span> to be
          answered within <span className="font-semibold">60 minutes</span>,
          covering four key categories: road procedure; traffic signs and
          signals, car control, pedestrians, and mechanical knowledge; driving
          test, disabilities, and the law; and publications and instructional
          techniques. To pass, candidates must achieve a minimum of{" "}
          <span className="font-semibold text-rose-600"> 85/100</span>, with at
          least 20 correct answers in each category.
        </p>

        {/* CTA */}
        <Link to="/takequizCatName/Mock--Tests">
          <button
            className="w-full md:w-auto inline-flex items-center justify-center gap-3
                       bg-gradient-to-r from-indigo-600 to-rose-500
                       hover:from-indigo-700 hover:to-rose-600
                       text-white px-8 py-4 rounded-xl font-semibold
                       transition-all duration-300
                       shadow-lg hover:shadow-xl"
          >
            <PlayCircle className="w-6 h-6" />
            Start Mock Test
          </button>
        </Link>
      </div>
    </div>
  );
}
