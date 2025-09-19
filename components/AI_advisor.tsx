"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

// Tipe data untuk props komponen, sekarang termasuk fungsi callback
type AiAdvisorProps = {
  bmi: number;
  category: string;
  height: string;
  weight: string;
  onSuggestionGenerated: (suggestion: string) => void; // Prop baru untuk mengirim data ke parent
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
        throw new Error(`Error: Gagal mengambil data`);
      }
      
      const data = await response.json();

      if (data.output && Array.isArray(data.output)) {
        const suggestionText = data.output.join("");
        setAiResponse(suggestionText);
        // Panggil fungsi callback untuk mengirim teks saran ke page.tsx agar bisa disimpan
        onSuggestionGenerated(suggestionText); 
      }
    } catch (err) {
      setError("Maaf, terjadi kesalahan saat menghubungi AI. Silakan coba lagi.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700">AI-Powered Advisor</h2>
      <p className="text-sm text-slate-500 mb-4">Dapatkan saran workout dan makanan dari AI</p>

      <button
        onClick={handleGetSuggestion}
        disabled={isLoading}
        className="w-full bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg hover:bg-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:bg-slate-400 disabled:cursor-not-allowed"
      >
        {isLoading ? "Menganalisis..." : "Generate AI Suggestion & Save to History"}
      </button>

      <div className="mt-4 p-4 bg-slate-50 rounded-md min-h-[150px] text-sm text-slate-700">
        {isLoading && (
          <p className="animate-pulse text-center pt-10 text-slate-500">
            AI sedang berpikir... mohon tunggu.
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
            Klik tombol di atas untuk mendapatkan saran dan menyimpannya ke riwayat.
          </p>
        )}
      </div>
    </div>
  );
}