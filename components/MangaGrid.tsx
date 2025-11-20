
import React from 'react';
import { MangaCard } from './MangaCard';
import { MOCK_MANGA } from '../constants';
import { Manga } from '../types';

interface MangaGridProps {
  filter: 'all' | 'popular' | 'latest';
  onMangaClick?: (manga: Manga) => void;
}

export const MangaGrid: React.FC<MangaGridProps> = ({ filter, onMangaClick }) => {
  // Simulate filtering logic
  const displayManga = filter === 'all' 
    ? MOCK_MANGA 
    : filter === 'latest' 
      ? MOCK_MANGA.filter(m => m.status === 'Ongoing') 
      : MOCK_MANGA.slice(0, 4); // Popular just takes first 4 for demo

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
      {displayManga.map((manga) => (
        <MangaCard 
          key={manga.id} 
          manga={manga} 
          onClick={onMangaClick}
        />
      ))}
    </div>
  );
};
