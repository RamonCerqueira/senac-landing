'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface HeaderPAgeCursoProps {
  title: string;
}

export default function Header({ title }: HeaderPAgeCursoProps) {
  const router = useRouter();

  return (
    <header className="bg-[#0D3B66] shadow-md p-4 flex items-center gap-4">
      <button
        onClick={() => router.back()}
        aria-label="Voltar"
        className="text-white bg-orange-500 hover:bg-orange-600 transition-colors px-3 py-1.5 rounded-md font-semibold"
      >
        ← Voltar
      </button>

      <h1 className="text-white font-bold text-xl md:text-2xl">{title}</h1>
    </header>
  );
}
