import React from 'react';
import { Home, Library, TrendingUp, User, Heart } from 'lucide-react';
import { ViewType } from '../types';

interface DockProps {
  currentView: ViewType;
  onChangeView: (view: ViewType) => void;
}

export const Dock: React.FC<DockProps> = ({ currentView, onChangeView }) => {
  const navItems: { id: ViewType; icon: React.ElementType; label: string }[] = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'library', icon: Library, label: 'Library' },
    { id: 'favorites', icon: Heart, label: 'Favorites' },
    { id: 'trending', icon: TrendingUp, label: 'Trending' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 perspective-1000">
      <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] transform transition-all hover:scale-[1.02] duration-300">
        
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-komorebi-red text-white shadow-neon-red -translate-y-2' 
                  : 'text-white/60 hover:bg-white/10 hover:text-white hover:-translate-y-1'
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              
              {/* Tooltip */}
              <span className={`absolute -top-10 bg-black/80 backdrop-blur text-white text-[10px] px-2 py-1 rounded opacity-0 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-white/10 ${isActive ? 'opacity-100' : 'group-hover:opacity-100'}`}>
                {item.label}
              </span>

              {/* Reflection Effect for 3D look */}
              {isActive && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
              )}
            </button>
          );
        })}

      </div>
    </div>
  );
};