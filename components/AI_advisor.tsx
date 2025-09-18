"use client";

import ReactMarkdown from "react-markdown";

// Define the types for the component's props
type AiAdvisorProps = {
  suggestion: string;
  isLoading: boolean;
  error: string | null;
};

export default function AI_advisor({
  suggestion,
  isLoading,
  error,
}: AiAdvisorProps) {
  return (
    <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-lg w-full">
      <h2 className="text-2xl font-semibold text-gray-700 mb-1">
        AI-Powered Suggestions
      </h2>
      <p className="text-sm text-slate-500 mb-4">
        Powered by IBM Granite
      </p>

      {/* Display area for AI response, loading, or error messages */}
      <div className="mt-4 p-4 bg-slate-50 rounded-md min-h-[150px] text-sm text-slate-700">
        {isLoading && (
          <p className="animate-pulse text-center pt-10 text-slate-500">
            AI is thinking... please wait.
          </p>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {suggestion && (
          <div className="prose prose-sm max-w-none">
             {/* Using ReactMarkdown to correctly render formatted text */}
            <ReactMarkdown>{suggestion}</ReactMarkdown>
          </div>
        )}
        {!isLoading && !error && !suggestion && (
          <p className="text-slate-400 text-center pt-10">
            Your personalized workout and meal suggestions will appear here.
          </p>
        )}
      </div>
    </div>
  );
}