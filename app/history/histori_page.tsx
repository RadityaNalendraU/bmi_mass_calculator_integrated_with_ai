"use client"; // Diperlukan untuk mengakses local storage dan state

import { useState, useEffect } from 'react';
import BmiHistoryCard from '@/components/bmi_history_card';

// Tipe data untuk entri history
interface BmiHistoryEntry {
  bmi: number;
  date: string;
}

const HistoryPage = () => {
  const [history, setHistory] = useState<BmiHistoryEntry[]>([]);

  useEffect(() => {
    // Ambil data dari local storage saat komponen di-mount
    const storedHistory = localStorage.getItem('bmiHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Calculation History
      </h1>
      {history.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {history.map((entry, index) => (
            <BmiHistoryCard key={index} bmi={entry.bmi} date={entry.date} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-12">
          No history found. Go to the calculator to get your first result!
        </p>
      )}
    </div>
  );
};

export default HistoryPage;