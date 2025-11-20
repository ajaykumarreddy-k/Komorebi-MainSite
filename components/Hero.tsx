import React from 'react';
import { Play, Bookmark, Info } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[500px] rounded-3xl overflow-hidden mt-4 group perspective-1000">
      {/* Background Image */}
      <div className="absolute inset-0 bg-komorebi-dark">
        <img 
          src="https://picsum.photos/1200/800?random=99" 
          alt="Featured" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-[10s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-komorebi-black via-komorebi-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-komorebi-black to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full md:w-2/3 p-8 md:p-12 flex flex-col items-start z-10">
        <span className="px-3 py-1 mb-4 border border-komorebi-red/50 bg-komorebi-red/10 text-komorebi-red text-xs font-bold tracking-widest uppercase rounded-full backdrop-blur-md">
          Editor's Choice
        </span>
        
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-2xl">
          ECHOES OF <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-komorebi-red to-orange-600">ETERNITY</span>
        </h1>
        
        <p className="text-white/70 text-sm md:text-base max-w-lg mb-8 line-clamp-3 font-light leading-relaxed">
          In a world where memories are currency, a thief steals the forgotten past of a dying god. 
          Experience the visual masterpiece that has captivated millions worldwide.
        </p>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3 bg-komorebi-red hover:bg-red-700 text-white rounded-xl font-bold transition-all hover:shadow-neon-red hover:-translate-y-1 active:translate-y-0">
            <Play size={20} fill="currentColor" />
            <span>Read Now</span>
          </button>
          
          <button className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur text-white rounded-xl border border-white/10 transition-all hover:-translate-y-1">
            <Bookmark size={20} />
          </button>
          
           <button className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur text-white rounded-xl border border-white/10 transition-all hover:-translate-y-1">
            <Info size={20} />
          </button>
        </div>
      </div>

      {/* Decorative 3D Element */}
      <div className="absolute top-10 right-10 hidden md:block w-48 h-72 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transform rotate-y-12 rotate-z-6 shadow-2xl opacity-80 animate-float">
          <img src="https://picsum.photos/300/450?random=99" className="w-full h-full object-cover rounded-xl opacity-80" />
      </div>
    </div>
  );
};