"use client"; // Diperlukan karena kita menggunakan state (useState) dan local storage

import { useState } from 'react';

// Tipe data untuk entri history
interface BmiHistoryEntry {
  bmi: number;
  date: string;
}

const MainPage = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculateBmi = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    // Validasi input
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      setError('Please enter valid height and weight.');
      setBmi(null);
      return;
    }

    // Hitung BMI (tinggi dalam meter)
    const heightInMeters = h / 100;
    const calculatedBmi = w / (heightInMeters * heightInMeters);
    const finalBmi = parseFloat(calculatedBmi.toFixed(2));
    
    setBmi(finalBmi);
    setError('');

    // Simpan ke local storage
    saveToHistory(finalBmi);
  };

  const saveToHistory = (newBmi: number) => {
    const newEntry: BmiHistoryEntry = {
      bmi: newBmi,
      date: new Date().toISOString(), // Simpan sebagai ISO string agar mudah di-parse
    };

    // Ambil data lama dari local storage
    const existingHistory: BmiHistoryEntry[] = JSON.parse(localStorage.getItem('bmiHistory') || '[]');
    
    // Tambahkan entri baru
    const updatedHistory = [newEntry, ...existingHistory];

    // Simpan kembali ke local storage
    localStorage.setItem('bmiHistory', JSON.stringify(updatedHistory));
  };

  const getBmiCategory = (bmiValue: number | null) => {
    if (bmiValue === null) return '';
    if (bmiValue < 18.5) return { text: 'Underweight', color: 'text-blue-500' };
    if (bmiValue < 24.9) return { text: 'Normal weight', color: 'text-green-500' };
    if (bmiValue < 29.9) return { text: 'Overweight', color: 'text-yellow-500' };
    return { text: 'Obesity', color: 'text-red-500' };
  };

  const bmiCategory = getBmiCategory(bmi);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">BMI Calculator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Card untuk Input */}
        <div className="bg-white p-8 rounded-xl shadow-lg transition-shadow hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Enter Your Details</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-600 mb-2">Height (cm)</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="e.g., 175"
              />
            </div>
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-600 mb-2">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="e.g., 70"
              />
            </div>
            <button
              onClick={calculateBmi}
              className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-transform transform hover:scale-105"
            >
              Calculate BMI
            </button>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          </div>
        </div>

        {/* Card untuk Hasil */}
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transition-shadow hover:shadow-2xl">
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
    </div>
  );
};

export default MainPage;