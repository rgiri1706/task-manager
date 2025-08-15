"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: LucideIcon;
  required?: boolean;
  error?: string;
}

const FormInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  required = false,
  error
}: FormInputProps) => {
  return (
    <div className="space-y-1">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
          <Icon className={`h-5 w-5 transition-all duration-300 ${
            error ? 'text-red-400' : 'text-slate-400 group-focus-within:text-purple-300'
          }`} />
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-12 pr-4 py-4 bg-white/[0.03] rounded-xl text-white placeholder-slate-400 focus:outline-none backdrop-blur-sm transition-all duration-300 text-base group-hover:bg-white/[0.05] ${
            error 
              ? 'border border-red-400/50 focus:border-red-400/70 focus:bg-red-500/[0.03]'
              : 'border border-white/10 focus:border-purple-400/50 focus:bg-white/[0.06] hover:border-white/20'
          }`}
          required={required}
        />
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

export default FormInput;
