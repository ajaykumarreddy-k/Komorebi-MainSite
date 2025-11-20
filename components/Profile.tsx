import React, { useState } from 'react';
import { User, Settings, Award, BookOpen, CheckCircle, Clock, LogOut, ChevronRight, Shield, Mail, Key } from 'lucide-react';
import { MOCK_MANGA } from '../constants';
import { MangaCard } from './MangaCard';

interface ProfileProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ isLoggedIn, onLogin, onLogout }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  // Mock User Data
  const user = {
    name: "Kairos_01",
    handle: "@kairos_manga",
    avatar: "https://picsum.photos/200?random=88",
    joined: "Sep 2023",
    read: 142,
    completed: 68,
    level: 12,
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === '1' && password === '1') {
      onLogin();
      setError('');
    } else {
      setError('Invalid credentials. Try 1 / 1');
    }
  };

  // Login View
  if (!isLoggedIn) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center animate-fade-in px-4">
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
           {/* Decorative glow */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-komorebi-red/20 rounded-full blur-[60px]" />
           
           <div className="relative z-10">
             <div className="text-center mb-8">
               <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-neon-red transform rotate-3 bg-komorebi-black rounded-full border-2 border-komorebi-red">
                  <span className="text-2xl font-bold text-komorebi-red">K</span>
               </div>
               <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
               <p className="text-white/50 text-sm">Enter the world of Komorebi</p>
             </div>

             <form onSubmit={handleSignIn} className="space-y-4">
               <div className="space-y-2">
                 <label className="text-xs font-mono text-white/70 uppercase ml-1">Username</label>
                 <div className="flex items-center bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus-within:border-komorebi-red/50 transition-colors">
                   <User size={18} className="text-white/30" />
                   <input 
                     type="text" 
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     className="bg-transparent border-none outline-none text-white ml-3 w-full placeholder:text-white/20"
                     placeholder="Username"
                   />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-xs font-mono text-white/70 uppercase ml-1">Password</label>
                 <div className="flex items-center bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus-within:border-komorebi-red/50 transition-colors">
                   <Key size={18} className="text-white/30" />
                   <input 
                     type="password" 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="bg-transparent border-none outline-none text-white ml-3 w-full placeholder:text-white/20"
                     placeholder="••••••••"
                   />
                 </div>
               </div>

               {error && <p className="text-komorebi-red text-xs text-center">{error}</p>}

               <button 
                 type="submit"
                 className="w-full py-4 bg-komorebi-red text-white rounded-xl font-bold tracking-wide shadow-neon-red hover:bg-red-600 transition-colors mt-4"
               >
                 SIGN IN
               </button>
             </form>

             <div className="mt-6 text-center">
               <p className="text-xs text-white/30">Don't have an account? <span className="text-komorebi-red cursor-pointer hover:underline">Sign Up</span></p>
             </div>
           </div>
        </div>
      </div>
    );
  }

  // Settings View
  if (showSettings) {
    return (
      <div className="pt-8 pb-24 animate-fade-in max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => setShowSettings(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight size={24} className="rotate-180" />
          </button>
          <h2 className="text-3xl font-bold">Settings</h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><User size={18}/> Account</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-white/70">Email Notifications</span>
                <div className="w-10 h-6 bg-komorebi-red rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                 <span className="text-white/70">Profile Visibility</span>
                 <span className="text-xs text-white/50">Public</span>
              </div>
            </div>
          </div>

           <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Shield size={18}/> Privacy & Security</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-white/70">Two-Factor Authentication</span>
                <span className="text-komorebi-red text-sm cursor-pointer">Enable</span>
              </div>
              <div className="flex justify-between items-center py-2">
                 <span className="text-white/70">Change Password</span>
                 <ChevronRight size={16} className="text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const readLaterList = MOCK_MANGA.slice(0, 3);

  // Dashboard View
  return (
    <div className="pt-8 pb-24 animate-fade-in">
      {/* Header Section */}
      <div className="relative mb-12">
        {/* Banner/Background */}
        <div className="h-48 w-full rounded-3xl overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-r from-komorebi-red/20 to-komorebi-black"></div>
           <img src="https://picsum.photos/1200/400?random=5" className="w-full h-full object-cover opacity-40" />
        </div>

        {/* User Info */}
        <div className="absolute -bottom-10 left-8 md:left-12 flex items-end gap-6">
          <div className="relative group">
             <div className="w-28 h-28 rounded-2xl border-4 border-[#0A0A0A] overflow-hidden shadow-2xl bg-komorebi-dark">
               <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-2 -right-2 bg-komorebi-red text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-[#0A0A0A]">
               LVL {user.level}
             </div>
          </div>
          <div className="mb-2">
             <h2 className="text-3xl font-bold text-white">{user.name}</h2>
             <p className="text-white/50 text-sm font-mono">{user.handle} • Joined {user.joined}</p>
          </div>
        </div>

        {/* Settings Button */}
        <div className="absolute top-4 right-4">
          <button 
            onClick={() => setShowSettings(true)}
            className="p-2 bg-black/40 backdrop-blur rounded-full border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Settings size={20} className="text-white/70" />
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column - Stats */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-lg font-bold flex items-center gap-2">
                 <Award className="text-komorebi-red" size={20} /> 
                 Stats
               </h3>
               <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Online</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-white/50 mb-1 text-xs uppercase tracking-wider">
                    <BookOpen size={14} /> Read
                  </div>
                  <div className="text-2xl font-bold text-white">{user.read}</div>
               </div>
               <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-white/50 mb-1 text-xs uppercase tracking-wider">
                    <CheckCircle size={14} /> Completed
                  </div>
                  <div className="text-2xl font-bold text-white">{user.completed}</div>
               </div>
            </div>
            
            {/* Removed Level Progress as requested */}
          </div>

          <div 
            onClick={onLogout}
            className="bg-white/5 rounded-2xl p-6 border border-white/5 backdrop-blur-sm flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors"
          >
             <span className="text-white/70 font-medium">Log Out</span>
             <LogOut size={18} className="text-white/50 group-hover:text-komorebi-red transition-colors" />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="md:col-span-8">
           
           {/* Read Later */}
           <div className="mb-8">
             <div className="flex items-center justify-between mb-6">
               <h3 className="text-xl font-bold flex items-center gap-2">
                 <Clock className="text-komorebi-red" size={20} />
                 Read Later
               </h3>
               <button className="text-xs text-white/40 hover:text-komorebi-red transition-colors">View All</button>
             </div>
             
             <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {readLaterList.map(manga => (
                  <MangaCard key={manga.id} manga={manga} />
                ))}
             </div>
           </div>

           {/* Activity Graph Placeholder */}
           <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h3 className="text-sm font-bold text-white/70 mb-4 uppercase tracking-widest">Activity</h3>
              <div className="flex items-end gap-1 h-24 w-full">
                {[...Array(30)].map((_, i) => {
                  const h = Math.floor(Math.random() * 100);
                  return (
                    <div 
                      key={i} 
                      style={{height: `${h}%`}} 
                      className={`flex-1 rounded-sm ${h > 80 ? 'bg-komorebi-red' : 'bg-white/10'} hover:bg-white/40 transition-colors`}
                    />
                  )
                })}
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};