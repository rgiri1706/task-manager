// API Base URL
export const API_BASE_URL = 'http://localhost:5000/api';

// Simple API Response type
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Simple API call function
export async function apiCall<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: any
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || data.error || `Error ${response.status}`,
      };
    }

    return {
      success: true,
      data,
      message: data.message,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Network error - please check your connection',
    };
  }
}
