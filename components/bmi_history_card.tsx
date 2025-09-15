interface BmiHistoryCardProps {
  bmi: number;
  date: string;
}

const BmiHistoryCard = ({ bmi, date }: BmiHistoryCardProps) => {
  // Fungsi untuk mendapatkan kategori BMI
  const getBmiCategory = (bmiValue: number) => {
    if (bmiValue < 18.5) return { text: 'Underweight', color: 'bg-blue-100 text-blue-800' };
    if (bmiValue < 24.9) return { text: 'Normal', color: 'bg-green-100 text-green-800' };
    if (bmiValue < 29.9) return { text: 'Overweight', color: 'bg-yellow-100 text-yellow-800' };
    return { text: 'Obesity', color: 'bg-red-100 text-red-800' };
  };

  const category = getBmiCategory(bmi);
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">BMI Result</p>
          <p className="text-3xl font-bold text-gray-800">{bmi.toFixed(2)}</p>
        </div>
        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${category.color}`}>
          {category.text}
        </span>
      </div>
      <div className="mt-4 border-t pt-4">
        <p className="text-sm text-gray-500">{formattedDate}</p>
      </div>
    </div>
  );
};

export default BmiHistoryCard;