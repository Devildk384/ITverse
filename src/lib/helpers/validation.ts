/**
 * @author Shivam Mishra
 */

/**
 * Validates email format using regex
 * @param email - Email string to validate
 * @returns Boolean indicating if email is valid
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates phone number format
 * @param phone - Phone string to validate
 * @returns Boolean indicating if phone is valid
 */
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validates required field with minimum length
 * @param value - Value to validate
 * @param minLength - Minimum required length
 * @returns Boolean indicating if value is valid
 */
export const validateRequired = (value: string, minLength: number = 2): boolean => {
  return value.trim().length >= minLength;
};

/**
 * Validates contact form data
 * @param data - ContactFormData object
 * @returns Validation result with errors
 */
export const validateContactForm = (data: any): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!validateRequired(data.firstName)) {
    errors.firstName = 'First name must be at least 2 characters';
  }

  if (!validateRequired(data.lastName)) {
    errors.lastName = 'Last name must be at least 2 characters';
  }

  if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!validateRequired(data.interest)) {
    errors.interest = 'Please select an interest';
  }

  if (!validateRequired(data.budget)) {
    errors.budget = 'Please select a budget range';
  }

  if (!validateRequired(data.message, 10)) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};



/**
 * Validates consultation form data
 * @param data - ConsultationFormData object
 * @returns Validation result with errors
 */
export const validateConsultationForm = (data: any): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  // Basic required field validation
  if (!data.firstName || !data.firstName.trim() || data.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }

  if (!data.lastName || !data.lastName.trim() || data.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }

  if (!data.email || !data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.phone || !data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // if (!data.company || !data.company.trim() || data.company.trim().length < 2) {
  //   errors.company = 'Company name must be at least 2 characters';
  // }

  if (!data.projectType || !data.projectType.trim()) {
    errors.projectType = 'Please select a project type';
  }

  if (!data.budget || !data.budget.trim()) {
    errors.budget = 'Please select a budget range';
  }

  if (!data.timeline || !data.timeline.trim()) {
    errors.timeline = 'Please select a timeline';
  }

  if (!data.description || !data.description.trim() || data.description.trim().length < 10) {
    errors.description = 'Description must be at least 10 characters';
  }

  if (!data.preferredDate || !data.preferredDate.trim()) {
    errors.preferredDate = 'Please select a preferred date';
  }

  if (!data.preferredTime || !data.preferredTime.trim()) {
    errors.preferredTime = 'Please select a preferred time';
  }

  if (!data.timezone || !data.timezone.trim()) {
    errors.timezone = 'Please select a timezone';
  }

  if (!data.communicationMethod || !data.communicationMethod.trim()) {
    errors.communicationMethod = 'Please select a communication method';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}; 