import Image from 'next/image';
import Link from 'next/link';
import SBI_noBackground from '../public/SBI_noBackground.png';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
            <Link href="/" className="flex items-center space-x-2 hover:text-indigo-500">
              <Image 
                src={SBI_noBackground} 
                alt="Smart BMI Advisor Logo" 
                width={60} 
                height={60} 
                priority 
              />
              <span>Smart BMI Advisor</span>
            </Link>
          </div>
          <div className="flex space-x-6 text-lg">
            <Link href="/" className="text-gray-600 transition-colors duration-300 hover:text-indigo-500">
              Calculator
            </Link>
            <Link href="/history" className="text-gray-600 transition-colors duration-300 hover:text-indigo-500">
              History
            </Link>
            <Link href="/About" className="text-gray-600 transition-colors duration-300 hover:text-indigo-500">
              About
            </Link>
            <Link href="/Profile" className="text-gray-600 transition-colors duration-300 hover:text-indigo-500">
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;