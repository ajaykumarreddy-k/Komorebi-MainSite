import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Dock } from './components/Dock';
import { Hero } from './components/Hero';
import { MangaGrid } from './components/MangaGrid';
import { Profile } from './components/Profile';
import { AIRecommender } from './components/AIRecommender';
import { MangaReader } from './components/MangaReader';
import { ViewType, Manga } from './types';
import { Code, Paintbrush, Server, Rocket, Github, Twitter } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [readingManga, setReadingManga] = useState<Manga | null>(null);

  // Smooth scroll to top when view changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentView]);

  const handleViewAllLatest = () => {
    setCurrentView('latest');
  };

  const handleMangaClick = (manga: Manga) => {
    setReadingManga(manga);
  };

  const handleLogoClick = () => {
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-subtle-glow text-komorebi-cream selection:bg-komorebi-red selection:text-white pb-32 relative">
      {/* Ambient Red Glows */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-komorebi-red/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-komorebi-red/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar onOpenAI={() => setIsAiOpen(true)} onLogoClick={handleLogoClick} />

        <main className="container mx-auto px-4 md:px-8 pt-24">
          {currentView === 'home' && (
            <div className="animate-fade-in">
              <Hero />
              <div className="mt-16 mb-8 flex items-end justify-between">
                 <h2 className="text-3xl font-bold font-mono tracking-tight">
                  Latest <span className="text-komorebi-red">Updates</span>
                </h2>
                <button 
                  onClick={handleViewAllLatest}
                  className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-komorebi-red transition-colors"
                >
                  View All
                </button>
              </div>
              <MangaGrid filter="latest" onMangaClick={handleMangaClick} />
              
              <div className="mt-24 mb-8 flex items-end justify-between">
                 <h2 className="text-3xl font-bold font-mono tracking-tight">
                  Staff <span className="text-komorebi-red">Picks</span>
                </h2>
              </div>
              <MangaGrid filter="popular" onMangaClick={handleMangaClick} />

              {/* Team Section */}
              <div className="mt-32 mb-12 border-t border-white/10 pt-16">
                <h2 className="text-3xl font-bold font-mono tracking-tight text-center mb-16">
                  Meet the <span className="text-komorebi-red">Creators</span>
                </h2>
                
                <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 items-center">
                  
                  {/* Ajay */}
                  <div className="group relative">
                    <div className="relative w-48 h-48 mb-6 mx-auto">
                      <div className="absolute inset-0 bg-komorebi-red rounded-full blur opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-komorebi-red transition-colors duration-300 ring-4 ring-black">
                        <img 
                          src="https://i.pinimg.com/736x/28/ee/92/28ee922dbd6fae562390ba826836d613.jpg" 
                          alt="Ajay" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-komorebi-red text-white p-2 rounded-full shadow-neon-red">
                        <Paintbrush size={16} />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-komorebi-red transition-colors">Ajay</h3>
                      <div className="flex items-center justify-center gap-2 text-xs font-mono text-komorebi-red uppercase tracking-widest mb-3 opacity-80">
                        <span>Design</span>
                        <span className="w-1 h-1 rounded-full bg-white/30"></span>
                        <span>Front End</span>
                      </div>
                      <p className="text-white/40 text-sm max-w-[200px] mx-auto mb-4">
                        "Who decided that? I decide the UI."
                      </p>
                      <div className="flex justify-center gap-3 text-white/30">
                        <Github size={18} className="hover:text-white transition-colors cursor-pointer" />
                        <Twitter size={18} className="hover:text-white transition-colors cursor-pointer" />
                      </div>
                    </div>
                  </div>

                  {/* Aary */}
                  <div className="group relative">
                     <div className="relative w-48 h-48 mb-6 mx-auto">
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-500 transition-colors duration-300 ring-4 ring-black">
                        <img 
                          src="https://i.pinimg.com/564x/98/44/57/98445772760c750a3b474d388449893b.jpg" 
                          alt="Aary" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]">
                        <Server size={16} />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Aary</h3>
                       <div className="flex items-center justify-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-3 opacity-80">
                        <span>Backend</span>
                        <span className="w-1 h-1 rounded-full bg-white/30"></span>
                        <span>Deployment</span>
                      </div>
                      <p className="text-white/40 text-sm max-w-[200px] mx-auto mb-4">
                        Architecting the shadows behind the interface.
                      </p>
                      <div className="flex justify-center gap-3 text-white/30">
                        <Github size={18} className="hover:text-white transition-colors cursor-pointer" />
                        <Rocket size={18} className="hover:text-white transition-colors cursor-pointer" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {currentView === 'latest' && (
            <div className="pt-10 animate-fade-in">
               <h2 className="text-4xl font-bold mb-8 font-mono">Latest Updates</h2>
               <MangaGrid filter="latest" onMangaClick={handleMangaClick} />
            </div>
          )}

          {currentView === 'library' && (
            <div className="pt-10 animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 font-mono">My Library</h2>
              <MangaGrid filter="all" onMangaClick={handleMangaClick} />
            </div>
          )}

          {currentView === 'favorites' && (
            <div className="pt-10 animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 font-mono text-komorebi-red">My Favorites</h2>
              <p className="text-white/50 mb-8">Your personally curated collection.</p>
              <MangaGrid filter="popular" onMangaClick={handleMangaClick} />
            </div>
          )}

          {currentView === 'trending' && (
             <div className="pt-10 animate-fade-in">
             <h2 className="text-4xl font-bold mb-8 font-mono">Trending Now</h2>
             <p className="text-white/50 mb-8">Most popular series this week across the network.</p>
             <MangaGrid filter="popular" onMangaClick={handleMangaClick} />
           </div>
          )}
          
          {currentView === 'profile' && (
             <Profile 
               isLoggedIn={isLoggedIn} 
               onLogin={() => setIsLoggedIn(true)}
               onLogout={() => setIsLoggedIn(false)}
             />
          )}

        </main>
      </div>

      {/* AI Recommender Overlay */}
      {isAiOpen && (
        <AIRecommender onClose={() => setIsAiOpen(false)} />
      )}

      {/* Manga Reader Overlay */}
      {readingManga && (
        <MangaReader manga={readingManga} onClose={() => setReadingManga(null)} />
      )}

      <Dock currentView={currentView} onChangeView={setCurrentView} />
    </div>
  );
}