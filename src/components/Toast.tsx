import React from 'react';
import { X, Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center gap-3 px-5 py-3 bg-[#0C0C0F] editorial-border text-white shadow-2xl text-xs font-mono tracking-widest uppercase">
        <Check className="w-3.5 h-3.5 text-white shrink-0" />
        <span>{message}</span>
        <button
          onClick={onClose}
          className="p-1 text-zinc-500 hover:text-white transition-colors ml-3 cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
