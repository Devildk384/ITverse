/**
 * @author Shivam Mishra
 */

import { ContactFormData, ConsultationFormData } from '@/interfaces/form';
import { safeApiRequestPost, safeApiRequestPostMessage } from './apiClient';
import { validateContactForm, validateConsultationForm } from './helpers/validation';

/**
 * Submits contact form data to API with validation and safe error handling
 * @param data - ContactFormData object
 * @returns Promise with API response
 */
export const submitContactForm = async (data: ContactFormData) => {
  try {
    // Validate form data before submission
    const validation:any = validateContactForm(data);
    
    if (!validation.isValid) {
      return {
        success: false,
        message: 'Validation failed',
        errors: validation.errors,
      };
    }

    // Submit to API with safe error handling
    const response :any= await safeApiRequestPostMessage('/prod', data);
    
    return response;
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Failed to submit contact form. Please try again.',
    };
  }
};

/**
 * Submits consultation form data to API with validation and safe error handling
 * @param data - ConsultationFormData object
 * @returns Promise with API response
 */
export const submitConsultationForm = async (data: ConsultationFormData) => {
  try {
    // Validate form data before submission
    const validation :any = validateConsultationForm(data);
    
    if (!validation.isValid) {
      return {
        success: false,
        message: 'Validation failed',
        errors: validation.errors,
      };
    }

    // Submit to API with safe error handling
    const response :any = await safeApiRequestPost('/prod', data);
    
    return response;
  } catch (error: any) {
    console.error('Consultation form submission error:', error);
    return {
      success: false,
      message: 'Failed to submit consultation form. Please try again.',
    };
  }
};

// Re-export validation functions for backward compatibility
export { validateContactForm, validateConsultationForm } from './helpers/validation'; 