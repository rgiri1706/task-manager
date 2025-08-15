// Types for form data
export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type ValidationErrors = {[key: string]: string};

// Individual field validators
export const validateEmail = (email: string): string => {
  if (!email.trim()) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email';
  return '';
};

export const validatePassword = (password: string): string => {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  return '';
};

export const validateName = (name: string): string => {
  if (!name.trim()) return 'Name is required';
  if (name.trim().length < 2) return 'Name must be at least 2 characters';
  return '';
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string => {
  if (!confirmPassword) return 'Please confirm your password';
  if (password !== confirmPassword) return 'Passwords do not match';
  return '';
};

// Form-level validators
export const validateLoginForm = (formData: LoginFormData): ValidationErrors => {
  const errors: ValidationErrors = {};
  
  const emailError = validateEmail(formData.email);
  const passwordError = validatePassword(formData.password);
  
  if (emailError) errors.email = emailError;
  if (passwordError) errors.password = passwordError;
  
  return errors;
};

export const validateSignupForm = (formData: SignupFormData): ValidationErrors => {
  const errors: ValidationErrors = {};
  
  const nameError = validateName(formData.name);
  const emailError = validateEmail(formData.email);
  const passwordError = validatePassword(formData.password);
  const confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);
  
  if (nameError) errors.name = nameError;
  if (emailError) errors.email = emailError;
  if (passwordError) errors.password = passwordError;
  if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;
  
  return errors;
};

// Helper to check if form is valid
export const isFormValid = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length === 0;
};

// Helper to clear specific error
export const clearFieldError = (errors: ValidationErrors, fieldName: string): ValidationErrors => {
  const newErrors = { ...errors };
  delete newErrors[fieldName];
  return newErrors;
};
