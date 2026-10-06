import { Link } from "react-router-dom";
import {
  BookMarked,
  Presentation,
  GraduationCap,
  PlayCircle,
} from "lucide-react";

export default function Band4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-rose-50 to-slate-50 flex items-center justify-center px-4">
      {/* Card */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-indigo-100">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-indigo-100 rounded-xl">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Band 4 – Publications & Instructional Techniques
            </h1>
            <p className="text-indigo-600 font-medium">
              Teaching methods & official guidance
            </p>
          </div>
        </div>

        {/* Topic Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-indigo-50 rounded-xl p-4 flex flex-col items-center text-center gap-2">
            <BookMarked className="w-7 h-7 text-indigo-600" />
            <span className="font-medium text-gray-700">
              Official Publications
            </span>
          </div>

          <div className="bg-rose-50 rounded-xl p-4 flex flex-col items-center text-center gap-2">
            <Presentation className="w-7 h-7 text-rose-600" />
            <span className="font-medium text-gray-700">
              Instructional Techniques
            </span>
          </div>

          <div className="bg-slate-100 rounded-xl p-4 flex flex-col items-center text-center gap-2">
            <GraduationCap className="w-7 h-7 text-slate-600" />
            <span className="font-medium text-gray-700">
              Professional Standards
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          Band Four Practice Questions focus on official DVSA publications and
          effective instructional techniques used by professional driving
          instructors. With{" "}
          <span className="font-semibold text-gray-800">
            100+ multiple-choice questions
          </span>
          , you can practise 50, 100, or complete the full set to enhance your
          teaching knowledge and exam readiness.
        </p>

        {/* CTA */}
        <Link to="/takequizCatName/Band-4---Publications-and-Instructional-Techniques">
          <button
            className="w-full md:w-auto inline-flex items-center justify-center gap-3
                       bg-gradient-to-r from-rose-600 to-rose-500
                       hover:from-indigo-700 hover:to-indigo-600
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
