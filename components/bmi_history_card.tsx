"use client";

import { BmiHistoryEntry } from "@/app/page"; // Impor tipe data dari page.tsx

// Tipe props diperbarui untuk menerima 'entry' dan fungsi onClick
type BmiHistoryCardProps = {
  entry: BmiHistoryEntry;
  onOpenModal: () => void;
  onDelete: () => void;
};

const BmiHistoryCard = ({ entry, onOpenModal, onDelete }: BmiHistoryCardProps) => {
  // Fungsi baru untuk memetakan teks kategori ke warna
  const getCategoryStyle = (categoryText: string) => {
    switch (categoryText.toLowerCase()) {
      case 'underweight':
        return { color: 'bg-blue-100 text-blue-800' };
      case 'normal weight':
        return { color: 'bg-green-100 text-green-800' };
      case 'overweight':
        return { color: 'bg-yellow-100 text-yellow-800' };
      case 'obesity':
        return { color: 'bg-red-100 text-red-800' };
      default:
        return { color: 'bg-gray-100 text-gray-800' };
    }
  };

  const categoryStyle = getCategoryStyle(entry.category);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">BMI Result</p>
          <p className="text-3xl font-bold text-gray-800">{entry.bmi.toFixed(2)}</p>
        </div>
        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${categoryStyle.color}`}>
          {entry.category}
        </span>
      </div>
      
      {/* Bagian bawah kartu sekarang berisi tanggal dan tombol-tombol baru */}
      <div className="mt-4 border-t pt-4">
        <p className="text-sm text-gray-500">{entry.date}</p>
        
        {/* Tombol "Details" dan "Delete" ditambahkan di bawah tanggal */}
        <div className="mt-4 flex gap-2">
            <button 
              onClick={onOpenModal}
              className="w-full px-3 py-2 text-sm font-semibold text-indigo-600 bg-indigo-100 hover:bg-indigo-200 rounded-lg transition-colors"
            >
              Details
            </button>
            <button 
              onClick={onDelete}
              className="w-full px-3 py-2 text-sm font-semibold text-red-600 bg-red-100 hover:bg-red-200 rounded-lg transition-colors"
            >
              Delete
            </button>
        </div>
      </div>
    </div>
  );
};

export default BmiHistoryCard;