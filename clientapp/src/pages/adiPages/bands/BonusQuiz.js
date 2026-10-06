import { Link } from "react-router-dom";
import { Star, PlayCircle, ArrowRight } from "lucide-react";

export default function BonusQuiz() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-white flex flex-col items-center justify-center px-4 py-12 gap-8">
      {/* Bonus Quiz Card */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-cyan-100">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-cyan-100 rounded-xl">
            <Star className="w-8 h-8 text-cyan-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Bonus Quiz</h2>
            <p className="text-cyan-600 font-medium">
              Extra practice for ADI Part 1
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          Click the button below to start the bonus quiz and see your results.
          Perfect for extra practice and confidence building.
        </p>

        {/* Start Quiz Button */}
        <Link to="/takequizCatName/adi-part-1--bonus-Quiz">
          <button
            className="w-full md:w-auto inline-flex items-center justify-center gap-3
                       bg-gradient-to-r from-cyan-600 to-teal-500
                       hover:from-cyan-700 hover:to-teal-600
                       text-white px-8 py-4 rounded-xl font-semibold
                       transition-all duration-300
                       shadow-lg hover:shadow-xl"
          >
            <PlayCircle className="w-6 h-6" />
            Start Quiz
          </button>
        </Link>
      </div>

      {/* Next Page Button */}
      <div className="max-w-3xl w-full flex justify-end">
        <Link to="/hazard-preception-part-2">
          <button className="inline-flex items-center gap-2 bg-teal-50 hover:bg-teal-100 text-teal-700 px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-sm">
            NEXT PAGE Hazard Perception
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
}
