"use client";

import React, { useState, useEffect } from 'react';
import BackgroundElements from '../../components/ui/BackgroundElements';
import BrandSection from '../../components/auth/BrandSection';
import { useRouter } from 'next/navigation';
import ModeToggle from '../../components/auth/ModeToggle';
import AuthForm from '../../components/auth/AuthForm';
import {
  LoginFormData,
  SignupFormData,
  ValidationErrors,
  validateLoginForm,
  validateSignupForm,
  isFormValid,
  clearFieldError
} from '../../utils/validation';
import { loginUser, signupUser } from '../../utils/auth-api';

const TaskFlowAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  // Separate states for login and signup forms
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  
  const [signupFormData, setSignupFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Validation errors
  const [loginErrors, setLoginErrors] = useState<ValidationErrors>({});
  const [signupErrors, setSignupErrors] = useState<ValidationErrors>({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    });
    // Clear error when user starts typing using helper function
    if (loginErrors[name]) {
      setLoginErrors(clearFieldError(loginErrors, name));
    }
  };
  
  const handleSignupInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupFormData({
      ...signupFormData,
      [name]: value
    });
    // Clear error when user starts typing using helper function
    if (signupErrors[name]) {
      setSignupErrors(clearFieldError(signupErrors, name));
    }
  };

  const handleSubmit = async () => {
    // First validate the form
    let errors: ValidationErrors = {};
    
    if (isLogin) {
      errors = validateLoginForm(loginFormData);
      setLoginErrors(errors);
    } else {
      errors = validateSignupForm(signupFormData);
      setSignupErrors(errors);
    }
    
    if (!isFormValid(errors)) {
      return; // Don't submit if validation fails
    }

    // Start loading
    setIsSubmitting(true);

    try {
      if (isLogin) {
        // Call login API
        const result = await loginUser(loginFormData);
        
        if (result.success) {
          console.log('Login successful:', result.data);
          router.push('/dashboard');
          // TODO: Redirect to dashboard or save token
        } else {
          console.error('Login failed:', result.error);
          setLoginErrors({ general: result.error || 'Login failed' });
        }
      } else {
        // Call signup API
        const result = await signupUser(signupFormData);
        
        if (result.success) {
          console.log('Signup successful:', result.data);
          router.push('/dashboard');
          // TODO: Redirect to dashboard or auto-login
        } else {
          console.error('Signup failed:', result.error);
          setSignupErrors({ general: result.error || 'Signup failed' });
        }
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      const errorMessage = 'Something went wrong. Please try again.';
      
      if (isLogin) {
        setLoginErrors({ general: errorMessage });
      } else {
        setSignupErrors({ general: errorMessage });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleLoginPassword = () => {
    setShowLoginPassword(!showLoginPassword);
  };
  
  const handleToggleSignupPassword = () => {
    setShowSignupPassword(!showSignupPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements isLoaded={isLoaded} />

      {/* Main Container */}
      <div className={`relative w-full max-w-md z-10 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        {/* Premium glass card */}
        <div className="relative bg-white/[0.05] backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/10 overflow-hidden">
          {/* Enhanced border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 p-px">
            <div className="w-full h-full bg-transparent rounded-3xl"></div>
          </div>
          
          {/* Inner glow effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

          {/* Brand Section */}
          <BrandSection isLoaded={isLoaded} />

          {/* Mode Toggle */}
          <ModeToggle 
            isLogin={isLogin} 
            setIsLogin={setIsLogin} 
            isLoaded={isLoaded} 
          />

          {/* Form Fields */}
          <AuthForm
            isLogin={isLogin}
            formData={isLogin ? loginFormData : signupFormData}
            onInputChange={isLogin ? handleLoginInputChange : handleSignupInputChange}
            showPassword={isLogin ? showLoginPassword : showSignupPassword}
            onTogglePassword={isLogin ? handleToggleLoginPassword : handleToggleSignupPassword}
            onSubmit={handleSubmit}
            isLoaded={isLoaded}
            errors={isLogin ? loginErrors : signupErrors}
            isSubmitting={isSubmitting}
          />

          {/* Switch mode */}
          <div className={`text-center mt-8 transform transition-all duration-700 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="text-slate-400 text-sm">
              {isLogin ? "New to TaskFlow? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-300 hover:text-purple-200 transition-colors duration-300 font-medium hover:underline decoration-purple-300/50 underline-offset-4"
              >
                {isLogin ? 'Create account' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute -top-3 -left-3 w-6 h-6 bg-purple-500/10 rounded-full blur-sm"></div>
        <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-violet-500/10 rounded-full blur-md"></div>
        <div className="absolute top-1/2 -right-6 w-4 h-4 bg-purple-400/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default TaskFlowAuth;