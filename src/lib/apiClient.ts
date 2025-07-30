/**
 * @author Shivam Mishra
 */

import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ApiResponse } from '@/interfaces/form';

const API_BASE_URL = 'https://5ahinmt4vf.execute-api.eu-north-1.amazonaws.com/prod';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Custom API error class for better error handling
 */
export class ApiError extends Error {
  public status: number;
  public statusText: string;
  public data: any;
  public config: any;

  constructor(message: string, status: number, statusText: string, data?: any, config?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.statusText = statusText;
    this.data = data;
    this.config = config;
  }
}

/**
 * Network error class for connection issues
 */
export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

/**
 * Timeout error class for request timeouts
 */
export class TimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TimeoutError';
  }
}

/**
 * Handles different types of errors and throws appropriate custom errors
 * @param error - Axios error object
 * @param method - HTTP method that failed
 * @param endpoint - API endpoint that failed
 * @throws ApiError, NetworkError, or TimeoutError
 */
const handleApiError = (error: AxiosError, method: string, endpoint: string): never => {
  if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
    throw new TimeoutError(`Request timeout for ${method} ${endpoint}`);
  }

  if (!error.response) {
    throw new NetworkError(`Network error: Unable to connect to ${endpoint}`);
  }

  const { status, statusText, data } = error.response;
  const errorMessage = (data as any)?.message || (data as any)?.error || statusText || error.message;

  throw new ApiError(
    `API Error (${method} ${endpoint}): ${errorMessage}`,
    status,
    statusText,
    data,
    error.config
  );
};

/**
 * Generic API request method for all HTTP methods with enhanced error handling
 * @param method - HTTP method (GET, POST, PUT, DELETE, PATCH)
 * @param endpoint - API endpoint path
 * @param data - Request data (for POST, PUT, PATCH)
 * @param config - Additional axios configuration
 * @returns Promise with API response
 * @throws ApiError, NetworkError, or TimeoutError
 */
export const apiRequest = async <T = any>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T> | never> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await apiClient.request({
      method,
      url: endpoint,
      data,
      ...config,
    });
    
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      handleApiError(error, method, endpoint);
    } else {
      throw new Error(`Unexpected error in ${method} ${endpoint}: ${error.message}`);
    }
  }
};

/**
 * Safe API request wrapper that catches all errors and returns ApiResponse
 * @param method - HTTP method (GET, POST, PUT, DELETE, PATCH)
 * @param endpoint - API endpoint path
 * @param data - Request data (for POST, PUT, PATCH)
 * @param config - Additional axios configuration
 * @returns Promise with ApiResponse (never throws)
 */
export const safeApiRequest = async <T = any>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  try {
    return await apiRequest<T>(method, endpoint, data, config);
  } catch (error: any) {
    console.error(`Safe API Request Error (${method} ${endpoint}):`, error);
    
    let errorMessage = 'An unexpected error occurred';
    
    if (error instanceof ApiError) {
      errorMessage = error.message;
    } else if (error instanceof NetworkError) {
      errorMessage = 'Network connection error. Please check your internet connection.';
    } else if (error instanceof TimeoutError) {
      errorMessage = 'Request timeout. Please try again.';
    } else {
      errorMessage = error.message || 'An unexpected error occurred';
    }

    return {
      success: false,
      message: errorMessage,
    };
  }
};

/**
 * Convenience wrapper for GET requests
 * @param endpoint - API endpoint path
 * @param config - Additional axios configuration
 * @returns Promise with API response
 * @throws ApiError, NetworkError, or TimeoutError
 */
export const apiRequestGet = <T = any>(endpoint: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  return apiRequest<T>('GET', endpoint, undefined, config);
};

/**
 * Convenience wrapper for POST requests
 * @param endpoint - API endpoint path
 * @param data - Request data
 * @param config - Additional axios configuration
 * @returns Promise with API response
 * @throws ApiError, NetworkError, or TimeoutError
 */
export const apiRequestPost = <T = any>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  return apiRequest<T>('POST', endpoint, data, config);
};

/**
 * Convenience wrapper for PUT requests
 * @param endpoint - API endpoint path
 * @param data - Request data
 * @param config - Additional axios configuration
 * @returns Promise with API response
 * @throws ApiError, NetworkError, or TimeoutError
 */
export const apiRequestPut = <T = any>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  return apiRequest<T>('PUT', endpoint, data, config);
};

/**
 * Convenience wrapper for PATCH requests
 * @param endpoint - API endpoint path
 * @param data - Request data
 * @param config - Additional axios configuration
 * @returns Promise with API response
 * @throws ApiError, NetworkError, or TimeoutError
 */
export const apiRequestPatch = <T = any>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  return apiRequest<T>('PATCH', endpoint, data, config);
};

/**
 * Convenience wrapper for DELETE requests
 * @param endpoint - API endpoint path
 * @param config - Additional axios configuration
 * @returns Promise with API response
 * @throws ApiError, NetworkError, or TimeoutError
 */
export const apiRequestDelete = <T = any>(endpoint: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  return apiRequest<T>('DELETE', endpoint, undefined, config);
};

/**
 * Safe convenience wrapper for GET requests (never throws)
 * @param endpoint - API endpoint path
 * @param config - Additional axios configuration
 * @returns Promise with ApiResponse
 */
export const safeApiRequestGet = <T = any>(endpoint: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  return safeApiRequest<T>('GET', endpoint, undefined, config);
};

/**
 * Safe convenience wrapper for POST requests (never throws)
 * @param endpoint - API endpoint path
 * @param data - Request data
 * @param config - Additional axios configuration
 * @returns Promise with ApiResponse
 */
export const safeApiRequestPost = async <T = any>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  try {
    const response = await apiRequest<T>('POST', endpoint, data, config);
    return response;
  } catch (error: any) {
    let errorMessage = 'An unexpected error occurred';
    
    if (error instanceof ApiError) {
      errorMessage = error.message;
    } else if (error instanceof NetworkError) {
      errorMessage = 'Network error: Unable to connect to the server';
    } else if (error instanceof TimeoutError) {
      errorMessage = 'Request timeout: Please try again';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return {
      success: false,
      message: errorMessage,
    };
  }
};

/**
 * Safe convenience wrapper for PUT requests (never throws)
 * @param endpoint - API endpoint path
 * @param data - Request data
 * @param config - Additional axios configuration
 * @returns Promise with ApiResponse
 */
export const safeApiRequestPut = <T = any>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  return safeApiRequest<T>('PUT', endpoint, data, config);
};

/**
 * Safe convenience wrapper for PATCH requests (never throws)
 * @param endpoint - API endpoint path
 * @param data - Request data
 * @param config - Additional axios configuration
 * @returns Promise with ApiResponse
 */
export const safeApiRequestPatch = <T = any>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  return safeApiRequest<T>('PATCH', endpoint, data, config);
};

/**
 * Safe convenience wrapper for DELETE requests (never throws)
 * @param endpoint - API endpoint path
 * @param config - Additional axios configuration
 * @returns Promise with ApiResponse
 */
export const safeApiRequestDelete = <T = any>(endpoint: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  return safeApiRequest<T>('DELETE', endpoint, undefined, config);
}; 