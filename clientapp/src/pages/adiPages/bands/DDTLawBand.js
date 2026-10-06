import { Link } from "react-router-dom";
import { ClipboardCheck, Timer, CheckCircle2, PlayCircle } from "lucide-react";

export default function DDTLawBand() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-slate-50 flex items-center justify-center px-4">
      {/* Card */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-emerald-100">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-emerald-100 rounded-xl">
            <ClipboardCheck className="w-8 h-8 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Band Three Mock Test
            </h1>
            <p className="text-teal-600 font-medium">
              Driving Test & Law • Exam Mode
            </p>
          </div>
        </div>

        {/* Exam Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-teal-50 rounded-xl p-4 flex items-center gap-3">
            <ClipboardCheck className="w-6 h-6 text-teal-600" />
            <div>
              <p className="text-sm text-gray-500">Questions</p>
              <p className="font-semibold text-gray-800">25 MCQs</p>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-xl p-4 flex items-center gap-3">
            <Timer className="w-6 h-6 text-emerald-600" />
            <div>
              <p className="text-sm text-gray-500">Time Limit</p>
              <p className="font-semibold text-gray-800">15 Minutes</p>
            </div>
          </div>

          <div className="bg-slate-100 rounded-xl p-4 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-slate-600" />
            <div>
              <p className="text-sm text-gray-500">Pass Mark</p>
              <p className="font-semibold text-gray-800">20 / 25</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          This mock test quickly evaluates your knowledge of the driving test,
          legal responsibilities, and professional standards. You’ll face
          <span className="font-semibold"> 25 questions</span> in
          <span className="font-semibold"> 15 minutes</span> and must score at
          least <span className="font-semibold text-teal-600"> 20/25</span> to
          pass. Perfect for exam preparation and confidence building.
        </p>

        {/* CTA */}
        <Link to="/takequizCatName/band-three-test">
          <button
            className="w-full md:w-auto inline-flex items-center justify-center gap-3
                       bg-gradient-to-r from-emerald-600 to-teal-600
                       hover:from-emerald-700 hover:to-teal-700
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
