
export type ViewType = 'home' | 'library' | 'trending' | 'profile' | 'latest' | 'favorites';

export interface Manga {
  id: string;
  title: string;
  author: string;
  rating: number;
  views: string;
  coverUrl: string;
  tags: string[];
  description: string;
  status: 'Ongoing' | 'Completed' | 'Hiatus';
  newChapter?: string;
}

export interface User {
  name: string;
  avatar: string;
  level: number;
  joinedDate: string;
  mangaRead: number;
  mangaCompleted: number;
  isLoggedIn: boolean;
}
