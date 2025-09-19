"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

type AiAdvisorProps = {
  bmi: number;
  category: string;
  height: string;
  weight: string;
  onSuggestionGenerated: (suggestion: string) => void;
};

export default function AI_advisor({ 
  bmi, 
  category, 
  height, 
  weight, 
  onSuggestionGenerated 
}: AiAdvisorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [error, setError] = useState("");

  const handleGetSuggestion = async () => {
    setIsLoading(true);
    setAiResponse("");
    setError("");

    try {
      const response = await fetch("/API/AI_get_suggestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bmi, category, height, weight }),
      });

      if (!response.ok) {
        throw new Error(`Error: Failed to fetch data`);
      }
      
      const data = await response.json();

      if (data.output && Array.isArray(data.output)) {
        const suggestionText = data.output.join("");
        setAiResponse(suggestionText);
        onSuggestionGenerated(suggestionText); 
      }
    } catch (err) {
      setError("Sorry, an error occurred while contacting the AI. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700">AI-Powered Advisor</h2>
      <p className="text-sm text-slate-500 mb-4">Get workout and diet suggestions from the AI</p>

      <button
        onClick={handleGetSuggestion}
        disabled={isLoading}
        className="w-full bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg hover:bg-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:bg-slate-400 disabled:cursor-not-allowed"
      >
        {/* --- BUTTON TEXT CHANGE HERE --- */}
        {isLoading ? "Analyzing..." : "Generate AI Suggestion & Update History"}
      </button>

      <div className="mt-4 p-4 bg-slate-50 rounded-md min-h-[150px] text-sm text-slate-700">
        {isLoading && (
          <p className="animate-pulse text-center pt-10 text-slate-500">
            The AI is thinking... please wait.
          </p>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {aiResponse && (
          <div className="prose prose-sm max-w-none">
            <ReactMarkdown>{aiResponse}</ReactMarkdown>
          </div>
        )}
        {!isLoading && !error && !aiResponse && (
          <p className="text-slate-400 text-center pt-10">
            Click the button above to get suggestions and update the history.
          </p>
        )}
      </div>
    </div>
  );
}