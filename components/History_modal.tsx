"use client";

import { BmiHistoryEntry } from "@/app/page";
import ReactMarkdown from "react-markdown";

type HistoryModalProps = {
  entry: BmiHistoryEntry;
  onClose: () => void;
};

export default function History_modal({ entry, onClose }: HistoryModalProps) {
  return (
    // Dark background layer (overlay)
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">History Details</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600"
          >
            {/* 'X' icon to close */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">BMI Snapshot</h3>
            <div className="bg-slate-50 p-4 rounded-lg flex items-center gap-4">
              <p className="text-4xl font-bold text-slate-800">{entry.bmi}</p>
              <div>
                <p className="font-semibold">{entry.category}</p>
                <p className="text-sm text-slate-500">{entry.date}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">AI-Powered Suggestion</h3>
            <div className="bg-slate-50 p-4 rounded-lg min-h-[100px] flex items-center">
              {entry.suggestion ? (
                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown>{entry.suggestion}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-slate-500 italic">
                  No AI suggestion for this BMI History
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}