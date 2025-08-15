import { apiCall, ApiResponse } from './api';
import { LoginFormData, SignupFormData } from './validation';

// Types for API responses
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  user: User;
  token?: string;
  message?: string;
}

// Login API call
export async function loginUser(formData: LoginFormData): Promise<ApiResponse<AuthResponse>> {
  return apiCall<AuthResponse>('/auth/login', 'POST', {
    email: formData.email,
    password: formData.password,
  });
}

// Signup API call
export async function signupUser(formData: SignupFormData): Promise<ApiResponse<AuthResponse>> {
  return apiCall<AuthResponse>('/auth/signup', 'POST', {
    name: formData.name,
    email: formData.email,
    password: formData.password,
  });
}
