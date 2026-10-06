import { Link } from "react-router-dom";
import { TrafficCone, Timer, CheckCircle2, PlayCircle } from "lucide-react";

export default function TrafficSignalBand() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 flex items-center justify-center px-4">
      {/* Card */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-yellow-200">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-green-100 rounded-xl">
            <TrafficCone className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Band Two Mock Test
            </h1>
            <p className="text-yellow-600 font-medium">
              Traffic Signs & Signals • Exam Mode
            </p>
          </div>
        </div>

        {/* Exam Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3">
            <TrafficCone className="w-6 h-6 text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Questions</p>
              <p className="font-semibold text-gray-800">25 MCQs</p>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-4 flex items-center gap-3">
            <Timer className="w-6 h-6 text-yellow-600" />
            <div>
              <p className="text-sm text-gray-500">Time Limit</p>
              <p className="font-semibold text-gray-800">15 Minutes</p>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-4 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-red-600" />
            <div>
              <p className="text-sm text-gray-500">Pass Mark</p>
              <p className="font-semibold text-gray-800">20 / 25</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          This mock test simulates real exam conditions for Band Two. You’ll
          have <span className="font-semibold">15 minutes</span> to answer
          <span className="font-semibold"> 25 questions</span> and must score at
          least <span className="font-semibold text-red-600">20 out of 25</span>
          to pass. Ideal for testing your knowledge of traffic signs and
          signals.
        </p>

        {/* CTA */}
        <Link to="/takequizCatName/band-Two-test">
          <button
            className="w-full md:w-auto inline-flex items-center justify-center gap-3
                       bg-gradient-to-r from-green-600 via-yellow-500 to-red-500
                       hover:from-green-700 hover:via-yellow-600 hover:to-red-600
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
