
import React from 'react';
import { Star, Eye } from 'lucide-react';
import { Manga } from '../types';

interface MangaCardProps {
  manga: Manga;
  onClick?: (manga: Manga) => void;
}

export const MangaCard: React.FC<MangaCardProps> = ({ manga, onClick }) => {
  return (
    <div 
      className="group relative w-full perspective-1000 cursor-pointer"
      onClick={() => onClick && onClick(manga)}
    >
      <div className="relative w-full aspect-[2/3] rounded-xl transition-all duration-500 transform-style-3d group-hover:rotate-x-12 group-hover:translate-y-[-8px] shadow-2xl">
        
        {/* Image Container */}
        <div className="absolute inset-0 rounded-xl overflow-hidden bg-komorebi-dark border border-white/5">
           <img 
             src={manga.coverUrl} 
             alt={manga.title}
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
           />
           
           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          {manga.newChapter && (
             <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-komorebi-red text-white rounded-md shadow-neon-red">
               New {manga.newChapter}
             </span>
          )}
        </div>

        {/* Content Info */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-z-20">
           <h3 className="text-lg font-bold text-white leading-tight mb-1 group-hover:text-komorebi-red transition-colors">
             {manga.title}
           </h3>
           <p className="text-xs text-white/60 mb-3 font-mono">{manga.author}</p>
           
           <div className="flex items-center justify-between text-xs font-medium text-white/80 border-t border-white/10 pt-2">
             <div className="flex items-center gap-1">
               <Star size={12} className="text-yellow-500 fill-yellow-500" />
               <span>{manga.rating}</span>
             </div>
             <div className="flex items-center gap-1">
               <Eye size={12} />
               <span>{manga.views}</span>
             </div>
           </div>
        </div>

        {/* Hover Glow */}
        <div className="absolute -inset-1 bg-komorebi-red/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>
    </div>
  );
};
