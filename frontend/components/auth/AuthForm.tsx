"use client";

import React from 'react';
import { Mail, User } from 'lucide-react';
import FormInput from '../ui/FormInput';
import PasswordInput from '../ui/PasswordInput';
import SubmitButton from '../ui/SubmitButton';

interface FormData {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface AuthFormProps {
  isLogin: boolean;
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  onTogglePassword: () => void;
  onSubmit: () => void;
  isLoaded: boolean;
  errors: {[key: string]: string};
  isSubmitting: boolean;
}

const AuthForm = ({
  isLogin,
  formData,
  onInputChange,
  showPassword,
  onTogglePassword,
  onSubmit,
  isLoaded,
  errors,
  isSubmitting
}: AuthFormProps) => {
  return (
    <div className={`space-y-6 transform transition-all duration-700 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
      {/* Name field */}
      {!isLogin && (
        <FormInput
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={onInputChange}
          placeholder="Full Name"
          icon={User}
          error={errors.name}
        />
      )}

      {/* Email field */}
      <FormInput
        type="email"
        name="email"
        value={formData.email}
        onChange={onInputChange}
        placeholder="Email Address"
        icon={Mail}
        required
        error={errors.email}
      />

      {/* Password field */}
      <PasswordInput
        name="password"
        value={formData.password}
        onChange={onInputChange}
        placeholder="Password"
        showPassword={showPassword}
        onToggleVisibility={onTogglePassword}
        required
        error={errors.password}
      />

      {/* Confirm Password field - only for signup */}
      {!isLogin && (
        <PasswordInput
          name="confirmPassword"
          value={formData.confirmPassword || ''}
          onChange={onInputChange}
          placeholder="Confirm Password"
          showPassword={showPassword}
          onToggleVisibility={onTogglePassword}
          required
          error={errors.confirmPassword}
        />
      )}

      {/* Forgot password */}
      {isLogin && (
        <div className="text-right">
          <a 
            href="#" 
            className="text-slate-400 hover:text-purple-300 text-sm transition-all duration-300 hover:underline decoration-purple-300/50 underline-offset-4"
          >
            Forgot password?
          </a>
        </div>
      )}

      {/* General API Error */}
      {errors.general && (
        <div className="text-center">
          <p className="text-red-400 text-sm animate-in slide-in-from-top-1 duration-200">
            {errors.general}
          </p>
        </div>
      )}

      {/* Submit button */}
      <SubmitButton onClick={onSubmit} isLogin={isLogin} isSubmitting={isSubmitting} />
    </div>
  );
};

export default AuthForm;
