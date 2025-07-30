/**
 * @author Shivam Mishra
 */

/**
 * Time slots for consultation scheduling
 */
export const CONSULTATION_TIME_SLOTS = [
  { value: "9:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "14:30", label: "2:30 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" }
];

/**
 * Project types for consultation form
 */
export const PROJECT_TYPES = [
  { value: "website", label: "Website Development" },
  { value: "web-app", label: "Web Application" },
  { value: "mobile-app", label: "Mobile Application" },
  { value: "ecommerce", label: "E-commerce Platform" },
  { value: "api", label: "API Development" },
  { value: "database", label: "Database Design" },
  { value: "integration", label: "System Integration" },
  { value: "maintenance", label: "Maintenance & Support" },
  { value: "other", label: "Other" }
];

/**
 * Budget ranges for consultation form
 */
export const BUDGET_RANGES = [
  { value: "₹25,000 - ₹50,000", label: "₹25,000 - ₹50,000" },
  { value: "₹50,000 - ₹1,00,000", label: "₹50,000 - ₹1,00,000" },
  { value: "₹1,00,000 - ₹2,00,000", label: "₹1,00,000 - ₹2,00,000" },
  { value: "₹2,00,000 - ₹5,00,000", label: "₹2,00,000 - ₹5,00,000" },
  { value: "₹5,00,000+", label: "₹5,00,000+" },
  { value: "not-sure", label: "Not sure yet" }
];

/**
 * Timeline options for consultation form
 */
export const TIMELINE_OPTIONS = [
  { value: "1-2 weeks", label: "1-2 weeks" },
  { value: "2-4 weeks", label: "2-4 weeks" },
  { value: "1-2 months", label: "1-2 months" },
  { value: "2-3 months", label: "2-3 months" },
  { value: "3-6 months", label: "3-6 months" },
  { value: "6+ months", label: "6+ months" },
  { value: "not-sure", label: "Not sure yet" }
];

/**
 * Timezone options for consultation form
 */
export const TIMEZONE_OPTIONS = [
  { value: "Central European Time (CET)", label: "Central European Time (CET)" },
  { value: "Greenwich Mean Time (GMT)", label: "Greenwich Mean Time (GMT)" },
  { value: "Eastern Standard Time (EST)", label: "Eastern Standard Time (EST)" },
  { value: "Pacific Standard Time (PST)", label: "Pacific Standard Time (PST)" },
  { value: "Indian Standard Time (IST)", label: "Indian Standard Time (IST)" },
  { value: "Other", label: "Other" }
];

/**
 * Communication method options for consultation form
 */
export const COMMUNICATION_METHODS = [
  { value: "Video call (Zoom/Teams)", label: "Video call (Zoom/Teams)" },
  { value: "Phone call", label: "Phone call" },
  { value: "Email", label: "Email" },
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "Other", label: "Other" }
];

/**
 * Interest options for contact form
 */
export const INTEREST_OPTIONS = [
  { value: "custom-web-app", label: "Custom Web Application" },
  { value: "database-solution", label: "Database Solution" },
  { value: "api-integration", label: "API Integration" },
  { value: "analytics-reporting", label: "Analytics & Reporting" },
  { value: "customer-portal", label: "Customer Portal" },
  { value: "ecommerce", label: "E-commerce Solution" },
  { value: "mobile-app", label: "Mobile Application" },
  { value: "other", label: "Other" }
];

/**
 * Contact form budget ranges
 */
export const CONTACT_BUDGET_RANGES = [
  { value: "₹25,000 - ₹50,000", label: "₹25,000 - ₹50,000" },
  { value: "₹50,000 - ₹1,00,000", label: "₹50,000 - ₹1,00,000" },
  { value: "₹1,00,000 - ₹2,00,000", label: "₹1,00,000 - ₹2,00,000" },
  { value: "₹2,00,000+", label: "₹2,00,000+" },
  { value: "Not sure yet", label: "Not sure yet" }
];

/**
 * Form validation rules
 */
export const VALIDATION_RULES = {
  MIN_NAME_LENGTH: 2,
  MIN_DESCRIPTION_LENGTH: 10,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/
};

/**
 * Form field labels and placeholders
 */
export const FORM_LABELS = {
  FIRST_NAME: "First name",
  LAST_NAME: "Last name",
  EMAIL: "Email",
  PHONE: "Phone",
  COMPANY: "Company name",
  PROJECT_TYPE: "Project type",
  BUDGET: "Budget range",
  TIMELINE: "Timeline",
  DESCRIPTION: "Project description",
  PREFERRED_DATE: "Preferred date",
  PREFERRED_TIME: "Preferred time",
  TIMEZONE: "Your timezone",
  COMMUNICATION_METHOD: "Communication method",
  ALTERNATIVE_TIME: "Alternative date/time (optional)",
  MESSAGE: "Message"
};

/**
 * Form placeholders
 */
export const FORM_PLACEHOLDERS = {
  FIRST_NAME: "Enter your first name",
  LAST_NAME: "Enter your last name",
  EMAIL: "Enter your email",
  PHONE: "Enter your phone number",
  COMPANY: "Enter your company name",
  DESCRIPTION: "Tell us about your project and requirements",
  ALTERNATIVE_TIME: "If you have alternative dates/times that work for you, please list them here",
  MESSAGE: "Tell us about your project and requirements"
};

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: "This field is required",
  MIN_LENGTH: (field: string, min: number) => `${field} must be at least ${min} characters`,
  INVALID_EMAIL: "Please enter a valid email address",
  INVALID_PHONE: "Please enter a valid phone number",
  FUTURE_DATE: "Please select a future date",
  FUTURE_TIME: "Please select a future time",
  SELECT_OPTION: "Please select an option"
}; 