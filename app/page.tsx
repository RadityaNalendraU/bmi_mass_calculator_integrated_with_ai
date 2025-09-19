"use client";

import { useState, useEffect } from 'react';
import AI_advisor from '@/components/AI_advisor';
import BMI_history_card from '@/components/bmi_history_card';
import History_modal from '@/components/History_modal';

// Tipe data untuk entri history (tidak ada perubahan)
export interface BmiHistoryEntry {
  id: string;
  bmi: number;
  category: string;
  date: string;
  suggestion: string;
}

const MainPage = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [history, setHistory] = useState<BmiHistoryEntry[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState<BmiHistoryEntry | null>(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('bmiHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const getBmiCategory = (bmiValue: number | null) => {
    if (bmiValue === null) return { text: '', color: '' };
    if (bmiValue < 18.5) return { text: 'Underweight', color: 'text-blue-500' };
    if (bmiValue < 24.9) return { text: 'Normal weight', color: 'text-green-500' };
    if (bmiValue < 29.9) return { text: 'Overweight', color: 'text-yellow-500' };
    return { text: 'Obesity', color: 'text-red-500' };
  };

  // --- PERUBAHAN LOGIKA DIMULAI DI SINI ---

  const calculateBmi = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      setError('Please enter valid height and weight.');
      setBmi(null);
      return;
    }
    const heightInMeters = h / 100;
    const calculatedBmi = w / (heightInMeters * heightInMeters);
    const finalBmi = parseFloat(calculatedBmi.toFixed(2));
    
    setBmi(finalBmi);
    setError('');
    
    // LANGKAH 1: Langsung simpan hasil BMI ke riwayat dengan saran kosong
    savePreliminaryHistory(finalBmi);
  };

  // Fungsi baru untuk menyimpan riwayat awal tanpa saran AI
  const savePreliminaryHistory = (calculatedBmi: number) => {
    const bmiCategory = getBmiCategory(calculatedBmi);
    const newEntry: BmiHistoryEntry = {
      id: new Date().toISOString(),
      bmi: calculatedBmi,
      category: bmiCategory.text,
      date: new Date().toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' }),
      suggestion: '', // Saran AI sengaja dikosongkan
    };
    const updatedHistory = [newEntry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('bmiHistory', JSON.stringify(updatedHistory));
  };

  // Fungsi 'saveHistory' sekarang diubah menjadi 'updateHistoryWithSuggestion'
  const updateHistoryWithSuggestion = (suggestion: string) => {
    // Kita asumsikan entri yang mau di-update adalah yang paling baru (di urutan pertama)
    if (history.length === 0) return;

    // Buat salinan dari array riwayat
    const updatedHistory = [...history];
    
    // Update properti 'suggestion' dari entri pertama
    updatedHistory[0].suggestion = suggestion;

    // Simpan kembali array yang sudah di-update
    setHistory(updatedHistory);
    localStorage.setItem('bmiHistory', JSON.stringify(updatedHistory));
  };

  // --- PERUBAHAN LOGIKA BERAKHIR DI SINI ---

  const handleDeleteHistory = (id: string) => {
    const updatedHistory = history.filter(entry => entry.id !== id);
    setHistory(updatedHistory);
    localStorage.setItem('bmiHistory', JSON.stringify(updatedHistory));
  };
  
  const handleOpenModal = (entry: BmiHistoryEntry) => {
    setSelectedHistory(entry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHistory(null);
  };

  const bmiCategory = getBmiCategory(bmi);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">BMI Calculator</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Input & Result Cards (tidak ada perubahan) */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Enter Your Details</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-600 mb-2">Height (cm)</label>
                <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="e.g., 175"/>
              </div>
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-600 mb-2">Weight (kg)</label>
                <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="e.g., 70"/>
              </div>
              <button onClick={calculateBmi} className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700">
                Calculate BMI & Save
              </button>
              {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Result</h2>
            {bmi !== null ? (
              <div>
                <p className="text-6xl font-bold text-gray-800">{bmi}</p>
                <p className={`text-2xl font-medium mt-2 ${bmiCategory.color}`}>{bmiCategory.text}</p>
              </div>
            ) : (
              <p className="text-gray-500">Your BMI result will appear here.</p>
            )}
          </div>
        </div>
        
        {/* Komponen AI Advisor sekarang akan meng-update riwayat, bukan membuat baru */}
        {bmi !== null && (
          <AI_advisor
            bmi={bmi}
            category={bmiCategory.text}
            height={height}
            weight={weight}
            onSuggestionGenerated={updateHistoryWithSuggestion} 
          />
        )}
        
        {/* Bagian Riwayat (tidak ada perubahan) */}
        <div className="w-full max-w-4xl mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Calculation History</h2>
          {history.length > 0 ? (
            <div className="space-y-4">
              {history.map((entry, index) => (
                <BMI_history_card 
                  key={entry.id || index}
                  entry={entry}
                  onOpenModal={() => handleOpenModal(entry)}
                  onDelete={() => handleDeleteHistory(entry.id)}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-500 bg-slate-50 p-8 rounded-lg">No history yet.</p>
          )}
        </div>
      </div>

      {isModalOpen && selectedHistory && (
        <History_modal entry={selectedHistory} onClose={handleCloseModal} />
      )}
    </>
  );
};
export default MainPage;