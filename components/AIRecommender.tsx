import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, Loader2, Key, Lock } from 'lucide-react';
import { getMangaRecommendations } from '../services/geminiService';

interface AIRecommenderProps {
  onClose: () => void;
}

interface Recommendation {
  title: string;
  description: string;
  genre: string;
}

export const AIRecommender: React.FC<AIRecommenderProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [hasKey, setHasKey] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animation entrance
    setTimeout(() => setVisible(true), 10);
  }, []);

  const handleKeySubmit = () => {
    if (apiKey.trim()) {
      setHasKey(true);
    }
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const results = await getMangaRecommendations(query, apiKey);
    setRecommendations(results);
    setLoading(false);
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={handleClose} />

      {/* Modal */}
      <div className={`relative w-full max-w-2xl bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 ${visible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>
        
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-komorebi-red/10 to-transparent">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-komorebi-red/20 rounded-lg">
              <Sparkles size={20} className="text-komorebi-red" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Komorebi AI</h3>
              <p className="text-xs text-white/50">Powered by Gemini 2.5</p>
            </div>
          </div>
          <button onClick={handleClose} className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 min-h-[300px] max-h-[60vh] overflow-y-auto flex flex-col">
          {!hasKey ? (
            // API Key Input View
            <div className="flex flex-col items-center justify-center h-full flex-1 py-8">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
                <Lock size={32} className="text-komorebi-red" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Authentication Required</h3>
              <p className="text-white/50 text-center max-w-md mb-8">
                Please enter your Google Gemini API key to access AI recommendations. 
                Your key is used locally and not stored.
              </p>

              <div className="w-full max-w-md space-y-4">
                <div className="flex items-center bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus-within:border-komorebi-red/50 transition-colors">
                  <Key size={18} className="text-white/30" />
                  <input 
                    type="password" 
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleKeySubmit()}
                    className="bg-transparent border-none outline-none text-white ml-3 w-full placeholder:text-white/20"
                    placeholder="Paste your API Key here"
                  />
                </div>
                <button 
                  onClick={handleKeySubmit}
                  disabled={!apiKey.trim()}
                  className="w-full py-3 bg-komorebi-red text-white rounded-xl font-bold tracking-wide shadow-neon-red hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
                <p className="text-xs text-center text-white/30 mt-4">
                  Get a key at <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 underline hover:text-komorebi-red">Google AI Studio</a>
                </p>
              </div>
            </div>
          ) : (
            // Search & Results View
            <>
              {recommendations.length === 0 && !loading ? (
                <div className="flex flex-col items-center justify-center h-48 text-center opacity-50 mt-auto mb-auto">
                  <Sparkles size={48} className="mb-4 text-white/20" />
                  <p className="text-lg font-medium">Ask for a recommendation</p>
                  <p className="text-sm max-w-xs mt-2">Try "I want a sad cyberpunk story" or "Manga like Berserk but in space"</p>
                </div>
              ) : loading ? (
                 <div className="flex flex-col items-center justify-center h-48 mt-auto mb-auto">
                   <Loader2 size={40} className="text-komorebi-red animate-spin mb-4" />
                   <p className="text-sm text-white/50 animate-pulse">Analyzing your taste...</p>
                 </div>
              ) : (
                <div className="space-y-4">
                  {recommendations.map((rec, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-komorebi-red/50 transition-colors group">
                       <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-white group-hover:text-komorebi-red transition-colors">{rec.title}</h4>
                          <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/10 rounded text-white/70">{rec.genre}</span>
                       </div>
                       <p className="text-sm text-white/70 leading-relaxed">{rec.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Input - Only visible if authenticated */}
        {hasKey && (
          <div className="p-4 border-t border-white/5 bg-[#0A0A0A]">
            <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-komorebi-red/50 transition-colors">
              <input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Describe what you want to read..."
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/20"
              />
              <button 
                onClick={handleSearch}
                disabled={!query.trim() || loading}
                className="p-2 bg-komorebi-red rounded-lg text-white hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};