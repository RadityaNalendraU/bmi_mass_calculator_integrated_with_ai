"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'; // <-- Import framer-motion

// Asumsikan logo Anda berada di folder public
import Logo from '../public/SBI_noBackground.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Calculator", href: "/" },
    { name: "History", href: "/history" },
    { name: "About", href: "/About" },
    { name: "Profile", href: "/Profile" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        
        {/* Logo dan Judul Situs */}
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src={Logo} 
            alt="Smart BMI Advisor Logo" 
            width={50}
            height={50}
            priority 
          />
          <span className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
            Smart BMI Advisor
          </span>
        </Link>

        {/* Menu untuk Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-slate-700 hover:text-indigo-600 transition-colors font-medium text-lg ${
                pathname === link.href ? 'text-indigo-600' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Tombol Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white border-t absolute w-full shadow-lg"
          >
            <div className="flex flex-col items-center space-y-4 p-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-center py-2 text-lg text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md transition-colors font-medium ${
                    pathname === link.href ? 'text-indigo-600 bg-slate-100' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;