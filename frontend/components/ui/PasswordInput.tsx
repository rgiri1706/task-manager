"use client";

import React from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  showPassword: boolean;
  onToggleVisibility: () => void;
  required?: boolean;
  error?: string;
}

const PasswordInput = ({
  name,
  value,
  onChange,
  placeholder,
  showPassword,
  onToggleVisibility,
  required = false,
  error
}: PasswordInputProps) => {
  return (
    <div className="space-y-1">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
          <Lock className={`h-5 w-5 transition-all duration-300 ${
            error ? 'text-red-400' : 'text-slate-400 group-focus-within:text-purple-300'
          }`} />
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-12 pr-12 py-4 bg-white/[0.03] rounded-xl text-white placeholder-slate-400 focus:outline-none backdrop-blur-sm transition-all duration-300 text-base group-hover:bg-white/[0.05] ${
            error 
              ? 'border border-red-400/50 focus:border-red-400/70 focus:bg-red-500/[0.03]'
              : 'border border-white/10 focus:border-purple-400/50 focus:bg-white/[0.06] hover:border-white/20'
          }`}
          required={required}
        />
        <button
          type="button"
          onClick={onToggleVisibility}
          className="absolute inset-y-0 right-0 pr-4 flex items-center z-10 group/eye"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-slate-400 group-hover/eye:text-slate-200 transition-all duration-200 group-hover/eye:scale-110" />
          ) : (
            <Eye className="h-5 w-5 text-slate-400 group-hover/eye:text-slate-200 transition-all duration-200 group-hover/eye:scale-110" />
          )}
        </button>
        <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent transition-all duration-300 ${
          error ? 'via-red-400/50' : 'via-purple-400/0 group-focus-within:via-purple-400/50'
        }`}></div>
      </div>
      {error && (
        <p className="text-red-400 text-xs ml-1 animate-in slide-in-from-top-1 duration-200">
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
