import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/" className="hover:text-indigo-500">
              BMI AI Calculator
            </Link>
          </div>
          <div className="flex space-x-6 text-lg">
            <Link href="/" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
              Calculator
            </Link>
            <Link href="/history" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
              History
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
              About
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;