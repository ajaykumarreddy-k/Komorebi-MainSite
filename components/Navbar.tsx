import React from 'react';
import { Search, Menu, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenAI: () => void;
  onLogoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAI, onLogoClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-b from-komorebi-black/90 to-transparent backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={onLogoClick}
          className="flex items-center gap-3 group cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
            {/* Red Circle Sakura Logo */}
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(192,0,36,0.5)]">
              <circle cx="50" cy="50" r="48" fill="#C00024" />
              {/* Branch */}
              <path d="M20 60 Q 40 50 60 50 T 90 40" stroke="#0A0A0A" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M50 52 Q 60 35 70 42" stroke="#0A0A0A" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Flowers */}
              <circle cx="20" cy="60" r="4" fill="#F5EDE0" />
              <circle cx="35" cy="52" r="5" fill="#F5EDE0" />
              <circle cx="50" cy="52" r="4" fill="#F5EDE0" />
              <circle cx="65" cy="45" r="5" fill="#F5EDE0" />
              <circle cx="80" cy="40" r="4" fill="#F5EDE0" />
              <circle cx="90" cy="35" r="3" fill="#F5EDE0" />
              <circle cx="70" cy="35" r="3" fill="#F5EDE0" />
              <circle cx="55" cy="35" r="3" fill="#F5EDE0" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tighter text-komorebi-cream font-mono group-hover:text-white transition-colors mt-1">
            KOMOREBI
          </h1>
        </button>

        {/* Center Search - Desktop */}
        <div className="hidden md:flex items-center bg-komorebi-glass rounded-full px-4 py-2 border border-white/10 w-96 focus-within:border-komorebi-red/50 focus-within:bg-black/40 transition-all duration-300 group shadow-glass">
          <Search size={18} className="text-white/40 group-focus-within:text-komorebi-red transition-colors" />
          <input 
            type="text" 
            placeholder="Search titles, authors..." 
            className="bg-transparent border-none outline-none text-sm ml-3 text-komorebi-cream w-full placeholder:text-white/20"
          />
          <div className="text-[10px] font-mono text-white/20 border border-white/10 px-1.5 rounded">CMD+K</div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
           <button 
             onClick={onOpenAI}
             className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-komorebi-red/20 to-transparent border border-komorebi-red/30 hover:border-komorebi-red hover:shadow-neon-red transition-all duration-300 group"
           >
             <Sparkles size={16} className="text-komorebi-red group-hover:animate-pulse" />
             <span className="text-xs font-medium text-komorebi-red">Ask AI</span>
           </button>

           <button className="p-2 rounded-full hover:bg-white/5 transition-colors md:hidden">
             <Search size={24} className="text-komorebi-cream" />
           </button>
           
           <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
             <Menu size={24} className="text-komorebi-cream" />
           </button>
        </div>
      </div>
    </nav>
  );
};