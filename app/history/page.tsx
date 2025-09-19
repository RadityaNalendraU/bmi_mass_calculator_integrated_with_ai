"use client";

import { useState, useEffect } from 'react';
import BmiHistoryCard from '@/components/bmi_history_card'; // <-- Nama komponen yang benar
import History_modal from '@/components/History_modal'; // <-- DITAMBAHKAN: Import modal

// DIUBAH: Gunakan interface yang sama persis seperti di page.tsx
export interface BmiHistoryEntry {
  id: string;
  bmi: number;
  category: string;
  date: string;
  suggestion: string;
}

const HistoryPage = () => {
  const [history, setHistory] = useState<BmiHistoryEntry[]>([]);
  
  // DITAMBAHKAN: State untuk mengelola pop-up (modal)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState<BmiHistoryEntry | null>(null);

  useEffect(() => {
    const storedHistory = localStorage.getItem('bmiHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  // DITAMBAHKAN: Fungsi untuk menghapus riwayat
  const handleDeleteHistory = (id: string) => {
    const updatedHistory = history.filter(entry => entry.id !== id);
    setHistory(updatedHistory);
    localStorage.setItem('bmiHistory', JSON.stringify(updatedHistory));
  };
  
  // DITAMBAHKAN: Fungsi untuk membuka pop-up
  const handleOpenModal = (entry: BmiHistoryEntry) => {
    setSelectedHistory(entry);
    setIsModalOpen(true);
  };

  // DITAMBAHKAN: Fungsi untuk menutup pop-up
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHistory(null);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Calculation History
        </h1>
        {history.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {history.map((entry) => (
              // DIUBAH: Kirim props sesuai yang diharapkan oleh BmiHistoryCard
              <BmiHistoryCard 
                key={entry.id} 
                entry={entry}
                onOpenModal={() => handleOpenModal(entry)}
                onDelete={() => handleDeleteHistory(entry.id)}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-12 bg-gray-50 p-10 rounded-lg">
            No history found. Go to the calculator to get your first result!
          </p>
        )}
      </div>

      {/* DITAMBAHKAN: Logika untuk menampilkan modal */}
      {isModalOpen && selectedHistory && (
        <History_modal entry={selectedHistory} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default HistoryPage;