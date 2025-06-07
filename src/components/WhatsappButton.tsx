'use client';
import { MessageCircle } from 'lucide-react';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5584999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition z-50"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
