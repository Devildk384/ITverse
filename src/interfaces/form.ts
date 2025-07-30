/**
 * @author Shivam Mishra
 */

/**
 * Contact form data interface
 */
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  budget: string;
  message: string;
}

/**
 * Consultation form data interface
 */
export interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  alternativeTime: string;
  communicationMethod: string;
}

/**
 * API response interface
 */
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
} 