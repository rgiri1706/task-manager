"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SubmitButtonProps {
  onClick: () => void;
  isLogin: boolean;
  isSubmitting?: boolean;
}

const SubmitButton = ({ onClick, isLogin, isSubmitting = false }: SubmitButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isSubmitting}
      className={`group relative w-full bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg flex items-center justify-center overflow-hidden ${
        isSubmitting 
          ? 'opacity-75 cursor-not-allowed' 
          : 'hover:scale-[1.02] hover:shadow-purple-500/25 active:scale-[0.98]'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      
      {isSubmitting ? (
        <>
          <div className="relative z-10 mr-3 w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          <span className="relative z-10 text-base">
            {isLogin ? 'Signing In...' : 'Creating Account...'}
          </span>
        </>
      ) : (
        <>
          <span className="relative z-10 mr-3 text-base">
            {isLogin ? 'Sign In' : 'Create Account'}
          </span>
          <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
