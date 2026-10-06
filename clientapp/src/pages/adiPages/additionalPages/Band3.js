import { Link } from "react-router-dom";
import { ClipboardCheck, Scale, Accessibility, PlayCircle } from "lucide-react";

export default function Band3() {
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
              Band 3 – Test, Law & Responsibility
            </h1>
            <p className="text-emerald-600 font-medium">
              Knowledge for professional driving standards
            </p>
          </div>
        </div>

        {/* Topic Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-teal-50 rounded-xl p-4 flex flex-col items-center text-center gap-2">
            <ClipboardCheck className="w-7 h-7 text-teal-600" />
            <span className="font-medium text-gray-700">Driving Test</span>
          </div>

          <div className="bg-emerald-50 rounded-xl p-4 flex flex-col items-center text-center gap-2">
            <Accessibility className="w-7 h-7 text-emerald-600" />
            <span className="font-medium text-gray-700">Disabilities</span>
          </div>

          <div className="bg-slate-100 rounded-xl p-4 flex flex-col items-center text-center gap-2">
            <Scale className="w-7 h-7 text-slate-600" />
            <span className="font-medium text-gray-700">The Law</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          Band Three Practice Questions focus on the driving test process, legal
          responsibilities, and supporting drivers with disabilities. With{" "}
          <span className="font-semibold text-gray-800">
            200+ multiple-choice questions
          </span>
          , you can practise 50, 100, or complete the full set to strengthen
          your understanding of professional driving standards.
        </p>

        {/* CTA */}
        <Link to="/takequizCatName/Band-3---Driving-Test--Disabilities--and-The-Law">
          <button
            className="w-full md:w-auto inline-flex items-center justify-center gap-3
                       bg-gradient-to-r from-emerald-600 to-teal-600
                       hover:from-emerald-700 hover:to-teal-700
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
