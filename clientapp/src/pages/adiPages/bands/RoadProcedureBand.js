import { Link } from "react-router-dom";
import { Timer, ClipboardList, CheckCircle2, PlayCircle } from "lucide-react";

export default function RoadProcedureBand() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-slate-100 flex items-center justify-center px-4">
      {/* Card */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-red-100">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-red-100 rounded-xl">
            <ClipboardList className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Band One Mock Test
            </h1>
            <p className="text-red-600 font-medium">
              Road Procedures • Exam Simulation
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-orange-50 rounded-xl p-4 flex items-center gap-3">
            <ClipboardList className="w-6 h-6 text-orange-600" />
            <div>
              <p className="text-sm text-gray-500">Questions</p>
              <p className="font-semibold text-gray-800">25 MCQs</p>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-4 flex items-center gap-3">
            <Timer className="w-6 h-6 text-red-600" />
            <div>
              <p className="text-sm text-gray-500">Time Limit</p>
              <p className="font-semibold text-gray-800">15 Minutes</p>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Pass Mark</p>
              <p className="font-semibold text-gray-800">20 / 25</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          This mock test is a fast-paced summary of your Road Procedure
          revision. You’ll face{" "}
          <span className="font-semibold text-gray-800">25 questions</span>
          under timed conditions and must score at least{" "}
          <span className="font-semibold text-red-600">20 out of 25</span>
          to pass. Perfect for assessing your exam readiness.
        </p>

        {/* CTA */}
        <Link to="/takequizCatName/band-one-test">
          <button
            className="w-full md:w-auto inline-flex items-center justify-center gap-3
                       bg-gradient-to-r from-red-600 to-orange-500
                       hover:from-red-700 hover:to-orange-600
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
