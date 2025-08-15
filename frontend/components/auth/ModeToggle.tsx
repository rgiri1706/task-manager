"use client";

import React from 'react';

interface ModeToggleProps {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  isLoaded: boolean;
}

const ModeToggle = ({ isLogin, setIsLogin, isLoaded }: ModeToggleProps) => {
  return (
    <div className={`relative bg-black/20 backdrop-blur-sm rounded-2xl p-1 mb-8 border border-white/5 transform transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
      <div 
        className={`absolute top-1 bottom-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl transition-all duration-500 shadow-lg ${
          isLogin ? 'left-1 right-1/2 mr-0.5' : 'right-1 left-1/2 ml-0.5'
        }`}
      />
      <div className="relative flex">
        <button
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 z-10 ${
            isLogin ? 'text-white' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 z-10 ${
            !isLogin ? 'text-white' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default ModeToggle;
