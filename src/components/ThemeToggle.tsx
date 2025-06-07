'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full z-50"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}