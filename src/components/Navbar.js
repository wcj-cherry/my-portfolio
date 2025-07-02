'use client'; // because we're using useState and DOM APIs

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="p-4 bg-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold text-gray-900 dark:text-white">My Portfolio</div>
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-gray-800 dark:text-gray-200 hover:underline">Home</Link>
        {/* <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:underline">About</Link> */}
        <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:underline">Contact</Link>

        {/* 🌙 Toggle Button */}
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-sm px-3 py-1 border rounded-md dark:border-gray-500 border-gray-300 text-gray-700 dark:text-gray-200"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button> */}
      </div>
    </nav>
  );
}
