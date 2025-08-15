"use client";

import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

interface BrandSectionProps {
  isLoaded: boolean;
}

const BrandSection = ({ isLoaded }: BrandSectionProps) => {
  return (
    <div className={`text-center mb-10 transform transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
      <div className="relative inline-flex items-center justify-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 relative group">
          <CheckCircle className="w-10 h-10 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-purple-300 animate-pulse" />
      </div>
      
      <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
        TaskFlow
      </h1>
      <p className="text-slate-300 text-base font-medium mb-4">
        Elevate your productivity
      </p>
      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto rounded-full"></div>
    </div>
  );
};

export default BrandSection;
