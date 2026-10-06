import { Link } from "react-router-dom";
import {
  TrafficCone,
  Car,
  AlertTriangle,
  Wrench,
  PlayCircle,
} from "lucide-react";

export default function Band2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-amber-50 to-white flex items-center justify-center px-4">
      {/* Card */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-purple-100">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-purple-100 rounded-xl">
            <TrafficCone className="w-8 h-8 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Band 2 – Traffic Signs & Vehicle Control
            </h1>
            <p className="text-purple-600 font-medium">
              Signs, safety & mechanical awareness
            </p>
          </div>
        </div>

        {/* Topics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-xl">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <span className="font-medium text-gray-700">
              Traffic Signs & Signals
            </span>
          </div>

          <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-xl">
            <Car className="w-6 h-6 text-purple-600" />
            <span className="font-medium text-gray-700">
              Car Control & Handling
            </span>
          </div>

          <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-xl">
            <TrafficCone className="w-6 h-6 text-amber-600" />
            <span className="font-medium text-gray-700">
              Pedestrians & Road Safety
            </span>
          </div>

          <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-xl">
            <Wrench className="w-6 h-6 text-purple-600" />
            <span className="font-medium text-gray-700">
              Mechanical Knowledge
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          Band Two Practice Questions cover traffic signs, signals, vehicle
          control, pedestrian awareness, and mechanical knowledge. With{" "}
          <span className="font-semibold text-gray-800">
            300+ multiple-choice questions
          </span>
          , you can practise 50, 100, or attempt the full set to build
          confidence for your ADI Part One exam.
        </p>

        {/* CTA */}
        <Link to="/takequizCatName/Band-2---Traffic-Signs-and-Signals--Car-Control--Pedestrians-and-Mechanical-Knowledge">
          <button
            className="w-full md:w-auto inline-flex items-center justify-center gap-3
                       bg-gradient-to-r from-purple-600 to-purple-500
                       hover:from-amber-700 hover:to-amber-600
                       text-white px-8 py-4 rounded-xl font-semibold
                       transition-all duration-300
                       shadow-lg hover:shadow-xl"
          >
            <PlayCircle className="w-6 h-6" />
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}
