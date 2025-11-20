import React, { useEffect } from 'react';
import { X, ChevronLeft, MessageSquare, Settings } from 'lucide-react';
import { Manga } from '../types';

interface MangaReaderProps {
  manga: Manga;
  onClose: () => void;
}

export const MangaReader: React.FC<MangaReaderProps> = ({ manga, onClose }) => {
  // Lock body scroll when reader is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-komorebi-black flex flex-col animate-fade-in">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/90 to-transparent z-20 flex items-center justify-between px-4 md:px-8">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-white/70 hover:text-komorebi-red transition-colors"
        >
          <ChevronLeft size={24} />
          <span className="font-mono text-sm hidden md:inline">Back to Details</span>
        </button>
        
        <div className="text-center">
          <h3 className="text-white font-bold text-sm md:text-base">{manga.title}</h3>
          <p className="text-xs text-white/50 font-mono">{manga.newChapter || 'Chapter 1'}</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white/50 hover:text-white transition-colors">
            <Settings size={20} />
          </button>
          <button onClick={onClose} className="p-2 bg-white/10 rounded-full hover:bg-komorebi-red hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Reader Area - Vertical Scroll */}
      <div className="flex-1 overflow-y-auto scroll-smooth overscroll-none bg-[#111]">
        <div className="max-w-3xl mx-auto min-h-screen bg-black shadow-2xl">
          {/* Placeholder Pages */}
          {[1, 2, 3, 4, 5].map((page) => (
            <div key={page} className="relative w-full aspect-[2/3] border-b border-white/5 group">
               <img 
                 src={`https://picsum.photos/800/1200?random=${parseInt(manga.id) * 10 + page}`} 
                 alt={`Page ${page}`}
                 className="w-full h-full object-cover"
                 loading="lazy"
               />
               <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/50 backdrop-blur text-[10px] text-white/50 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                 Page {page}
               </div>
            </div>
          ))}
          
          {/* End of Chapter */}
          <div className="p-12 flex flex-col items-center justify-center gap-6 bg-komorebi-dark border-t border-white/10">
            <h4 className="text-xl font-mono text-white/70">Chapter Completed</h4>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors">
                Prev
              </button>
              <button 
                className="px-6 py-3 rounded-lg bg-komorebi-red text-white font-bold hover:shadow-neon-red transition-all"
                onClick={onClose}
              >
                Next Chapter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Overlay Controls (optional, hidden on scroll typically but visible here for UX) */}
      <div className="absolute bottom-8 right-8 z-20">
        <button className="p-4 bg-komorebi-red rounded-full shadow-neon-red text-white hover:scale-110 transition-transform">
          <MessageSquare size={24} />
        </button>
      </div>
    </div>
  );
};