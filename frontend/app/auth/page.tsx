"use client";

import React, { useState } from 'react';
import { 
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const TaskFlowAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle authentication logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4 py-6 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Authentication Container */}
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg z-10">
        {/* Glass morphism card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/20 relative">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-sm -z-10"></div>
          
          {/* Logo/Brand Section */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 rounded-full mb-4 sm:mb-6 shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-110 relative">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full blur-xl animate-pulse"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent drop-shadow-sm">
              TaskFlow
            </h1>
            <p className="text-white/80 text-sm sm:text-base font-medium px-4 sm:px-0">Transform your productivity journey</p>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-3 sm:mt-4 rounded-full"></div>
          </div>

          {/* Mode Toggle Buttons */}
          <div className="flex bg-black/20 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 mb-8 sm:mb-12 backdrop-blur-sm border border-white/10 shadow-inner">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold transition-all duration-500 relative overflow-hidden ${
                isLogin
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl transform scale-105 shadow-purple-500/25'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {isLogin && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-xl sm:rounded-2xl blur-sm"></div>
              )}
              <span className="relative z-10 hidden sm:inline">Welcome Back</span>
              <span className="relative z-10 sm:hidden">Sign In</span>
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold transition-all duration-500 relative overflow-hidden ${
                !isLogin
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl transform scale-105 shadow-purple-500/25'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {!isLogin && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-xl sm:rounded-2xl blur-sm"></div>
              )}
              <span className="relative z-10 hidden sm:inline">Get Started</span>
              <span className="relative z-10 sm:hidden">Sign Up</span>
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-5 sm:space-y-7">
            {/* Name field (signup only) */}
            {!isLogin && (
              <div className="relative group animate-fadeIn">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <User className="h-5 w-5 text-white/50 group-focus-within:text-purple-300 transition-colors duration-300" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-4 sm:py-5 bg-white/5 border-2 border-white/10 rounded-xl sm:rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 focus:bg-white/10 hover:border-white/20 text-base sm:text-lg"
                />
              </div>
            )}

            {/* Email field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Mail className="h-5 w-5 text-white/50 group-focus-within:text-purple-300 transition-colors duration-300" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 sm:py-5 bg-white/5 border-2 border-white/10 rounded-xl sm:rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 focus:bg-white/10 hover:border-white/20 text-base sm:text-lg"
                required
              />
            </div>

            {/* Password field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Lock className="h-5 w-5 text-white/50 group-focus-within:text-purple-300 transition-colors duration-300" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-4 sm:py-5 bg-white/5 border-2 border-white/10 rounded-xl sm:rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 focus:bg-white/10 hover:border-white/20 text-base sm:text-lg"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center z-10 hover:scale-110 transition-transform duration-200"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-white/50 hover:text-white/80 transition-colors" />
                ) : (
                  <Eye className="h-5 w-5 text-white/50 hover:text-white/80 transition-colors" />
                )}
              </button>
            </div>

            {/* Forgot password link (login only) */}
            {isLogin && (
              <div className="text-right">
                <a 
                  href="#" 
                  className="text-white/70 hover:text-purple-300 text-sm transition-colors duration-300 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              className="group relative w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400/50 shadow-2xl hover:shadow-purple-500/40 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl group-hover:blur-lg transition-all duration-500"></div>
              <span className="relative z-10 mr-2 sm:mr-3 text-base sm:text-lg">
                {isLogin ? 'Sign In to TaskFlow' : 'Create Your Account'}
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>


          {/* Switch mode link */}
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-white/70 text-sm">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-300 hover:text-purple-200 transition-colors duration-300 font-medium hover:underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-full blur-sm"></div>
        <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-pink-500/20 rounded-full blur-md"></div>
      </div>
    </div>
  );
};

export default TaskFlowAuth;



