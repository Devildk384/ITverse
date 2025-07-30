/**
 * @author Shivam Mishra
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Users,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";
import { ConsultationFormData } from "@/interfaces/form";
import { 
  validateConsultationForm, 
  submitConsultationForm 
} from "@/lib/apiService";
import {
  CONSULTATION_TIME_SLOTS,
  PROJECT_TYPES,
  BUDGET_RANGES,
  TIMELINE_OPTIONS,
  TIMEZONE_OPTIONS,
  COMMUNICATION_METHODS,
  VALIDATION_RULES,
  FORM_LABELS,
  FORM_PLACEHOLDERS,
  ERROR_MESSAGES
} from "@/lib/constants/form";

interface ValidationErrors {
  [key: string]: string;
}

/**
 * Book consultation page component with multi-step form and API integration
 * @returns JSX element for book consultation page
 */
export default function BookConsultationPage() {
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const [formData, setFormData] = useState<ConsultationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    preferredDate: "",
    preferredTime: "",
    timezone: "Central European Time (CET)",
    alternativeTime: "",
    communicationMethod: "Video call (Zoom/Teams)",
  });

  /**
   * Gets current date in YYYY-MM-DD format for min attribute
   * @returns Current date string
   */
  const getCurrentDate = (): string => {
    return new Date().toISOString().split('T')[0];
  };



  /**
   * Updates form data and clears related errors
   * @param field - Form field to update
   * @param value - New value for the field
   */
  const updateFormData = (field: keyof ConsultationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }


  };



  /**
   * Validates current step using step-specific validation
   * @param currentStep - Current step number to validate
   * @returns boolean indicating if validation passed
   */
  const validateStep = (currentStep: number): boolean => {
    const newErrors: ValidationErrors = {};

    if (currentStep === 1) {
      // Step 1: Personal Information
      if (!formData.firstName.trim() || formData.firstName.trim().length < VALIDATION_RULES.MIN_NAME_LENGTH) {
        newErrors.firstName = ERROR_MESSAGES.MIN_LENGTH('First name', VALIDATION_RULES.MIN_NAME_LENGTH);
      }
      if (!formData.lastName.trim() || formData.lastName.trim().length < VALIDATION_RULES.MIN_NAME_LENGTH) {
        newErrors.lastName = ERROR_MESSAGES.MIN_LENGTH('Last name', VALIDATION_RULES.MIN_NAME_LENGTH);
      }
      if (!formData.email.trim()) {
        newErrors.email = ERROR_MESSAGES.REQUIRED_FIELD;
      } else if (!VALIDATION_RULES.EMAIL_REGEX.test(formData.email)) {
        newErrors.email = ERROR_MESSAGES.INVALID_EMAIL;
      }
      if (!formData.phone.trim()) {
        newErrors.phone = ERROR_MESSAGES.REQUIRED_FIELD;
      } else if (!VALIDATION_RULES.PHONE_REGEX.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = ERROR_MESSAGES.INVALID_PHONE;
      }
    }

    if (currentStep === 2) {
      // Step 2: Project Details
      if (!formData.projectType) {
        newErrors.projectType = ERROR_MESSAGES.SELECT_OPTION;
      }
      if (!formData.budget) {
        newErrors.budget = ERROR_MESSAGES.SELECT_OPTION;
      }
      if (!formData.timeline) {
        newErrors.timeline = ERROR_MESSAGES.SELECT_OPTION;
      }
      if (!formData.description.trim() || formData.description.trim().length < VALIDATION_RULES.MIN_DESCRIPTION_LENGTH) {
        newErrors.description = ERROR_MESSAGES.MIN_LENGTH('Description', VALIDATION_RULES.MIN_DESCRIPTION_LENGTH);
      }
    }

    if (currentStep === 3) {
      // Step 3: Scheduling
      if (!formData.preferredDate) {
        newErrors.preferredDate = ERROR_MESSAGES.SELECT_OPTION;
      }
      
      if (!formData.preferredTime) {
        newErrors.preferredTime = ERROR_MESSAGES.SELECT_OPTION;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles navigation to next step or form submission
   */
  const handleNextStep = () => {
    if (step < 3) {
      if (validateStep(step)) {
        setDirection(1);
        setStep(step + 1);
      }
    } else {
      // On step 3, call handleSubmit directly to bypass validateStep issues
      handleSubmit();
    }
  };

  /**
   * Handles navigation to previous step
   */
  const handlePrevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  /**
   * Submits consultation form using common API service
   */
  const handleSubmit = async () => {
    // Check if already submitting
    if (isSubmitting) {
      return;
    }
    
    // Validate all required fields before submission
    const validation = validateConsultationForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await submitConsultationForm(formData);
      
      if (response.success) {
        setFormSubmitted(true);
      } else {
        setErrors({ submit: response.message });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };





  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    center: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: {
      width: `${((step - 1) / 2) * 100}%`,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const stepIconVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "var(--gray-200)",
      color: "var(--gray-500)",
    },
    active: {
      scale: [1, 1.1, 1],
      backgroundColor: "var(--gradient-color)",
      color: "white",
      transition: {
        duration: 0.5,
        backgroundColor: { duration: 0.3 },
        scale: { times: [0, 0.5, 1], duration: 0.5 },
      },
    },
  };

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100 via-white to-blue-100 dark:from-teal-900/20 dark:via-gray-900 dark:to-blue-900/20">
          <div className="absolute inset-0 opacity-50 dark:opacity-30">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-teal-500 to-blue-400"
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3,
                  transform: `scale(${Math.random() * 0.8 + 0.2})`,
                  animation: `float ${
                    Math.random() * 10 + 15
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  willChange: "transform",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container relative px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-full bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-700 dark:text-teal-300 mb-4">
              Free Consultation
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-700 via-blue-600 to-blue-500 dark:from-teal-400 dark:via-blue-300 dark:to-blue-400 mb-6">
              Book Your Consultation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Schedule a free 30-minute consultation to discuss your project and
              get expert advice.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait" custom={direction}>
              {!formSubmitted ? (
                <motion.div
                  key="form"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={slideVariants}
                >
                  <div className="mb-10">
                    <div className="flex justify-between items-center mb-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col items-center">
                          <motion.div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-2 ${
                              step >= i
                                ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white"
                                : "bg-gray-200 text-gray-500 dark:bg-gray-700"
                            }`}
                            initial="inactive"
                            animate={step >= i ? "active" : "inactive"}
                            variants={stepIconVariants}
                            style={
                              {
                                "--gradient-color":
                                  "linear-gradient(to right, #0d9488, #2563eb)",
                              } as MotionStyle
                            }
                          >
                            {i}
                          </motion.div>
                          <div className="text-sm font-medium">
                            {i === 1
                              ? "Your Info"
                              : i === 2
                              ? "Project Details"
                              : "Schedule"}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="relative">
                      <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <motion.div
                          className="h-full bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"
                          initial="initial"
                          animate="animate"
                          variants={progressVariants}
                        ></motion.div>
                      </div>
                    </div>
                  </div>

                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-8 relative">
                      {errors.submit && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                          <span className="text-red-700 dark:text-red-300">{errors.submit}</span>
                        </div>
                      )}

                      <AnimatePresence
                        mode="wait"
                        custom={direction}
                        initial={false}
                      >
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            custom={direction}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={slideVariants}
                            className="space-y-6"
                          >
                            <h2 className="text-2xl font-bold">
                              Your Information
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                              Tell us a bit about yourself so we can personalize
                              your consultation.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="first-name">First name *</Label>
                                <Input
                                  id="first-name"
                                  placeholder="Enter your first name"
                                  value={formData.firstName}
                                  onChange={(e) => updateFormData('firstName', e.target.value)}
                                  className={errors.firstName ? "border-red-500 focus:border-red-500" : ""}
                                />
                                {errors.firstName && (
                                  <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                                    <AlertCircle className="h-4 w-4" />
                                    {errors.firstName}
                                  </p>
                                )}
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="last-name">Last name *</Label>
                                <Input
                                  id="last-name"
                                  placeholder="Enter your last name"
                                  value={formData.lastName}
                                  onChange={(e) => updateFormData('lastName', e.target.value)}
                                  className={errors.lastName ? "border-red-500 focus:border-red-500" : ""}
                                />
                                {errors.lastName && (
                                  <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                                    <AlertCircle className="h-4 w-4" />
                                    {errors.lastName}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="email">Email *</Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => updateFormData('email', e.target.value)}
                                className={errors.email ? "border-red-500 focus:border-red-500" : ""}
                              />
                              {errors.email && (
                                <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                                  <AlertCircle className="h-4 w-4" />
                                  {errors.email}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone *</Label>
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={(e) => updateFormData('phone', e.target.value)}
                                className={errors.phone ? "border-red-500 focus:border-red-500" : ""}
                              />
                              {errors.phone && (
                                <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                                  <AlertCircle className="h-4 w-4" />
                                  {errors.phone}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="company">
                                Company (optional)
                              </Label>
                              <Input
                                id="company"
                                placeholder="Enter your company name"
                                value={formData.company}
                                onChange={(e) => updateFormData('company', e.target.value)}
                              />
                            </div>
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div
                            key="step2"
                            custom={direction}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={slideVariants}
                            className="space-y-6"
                          >
                            <h2 className="text-2xl font-bold">
                              Project Details
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                              Tell us about your project so we can prepare for
                              our consultation.
                            </p>

                            <div className="space-y-2">
                              <Label>
                                What type of solution are you looking for? *
                              </Label>
                              <RadioGroup
                                value={formData.projectType}
                                onValueChange={(value) => updateFormData('projectType', value)}
                                className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2"
                              >
                                {PROJECT_TYPES.map((type) => (
                                  <div key={type.value} className="flex items-center space-x-2">
                                    <RadioGroupItem
                                      value={type.value}
                                      id={type.value}
                                    />
                                    <Label htmlFor={type.value}>{type.label}</Label>
                                  </div>
                                ))}
                              </RadioGroup>
                              {errors.projectType && (
                                <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                                  <AlertCircle className="h-4 w-4" />
                                  {errors.projectType}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="budget">Approximate budget *</Label>
                              <Select value={formData.budget} onValueChange={(value) => updateFormData('budget', value)}>
                                <SelectTrigger className={errors.budget ? "border-red-500 focus:border-red-500" : ""}>
                                  <SelectValue placeholder="Select your budget range" />
                                </SelectTrigger>
                                <SelectContent>
                                  {BUDGET_RANGES.map((range) => (
                                    <SelectItem key={range.value} value={range.value}>
                                      {range.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              {errors.budget && (
                                <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                                  <AlertCircle className="h-4 w-4" />
                                  {errors.budget}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="timeline">
                                Expected timeline *
                              </Label>
                              <Select value={formData.timeline} onValueChange={(value) => updateFormData('timeline', value)}>
                                <SelectTrigger className={errors.timeline ? "border-red-500 focus:border-red-500" : ""}>
                                  <SelectValue placeholder="Select your timeline" />
                                </SelectTrigger>
                                <SelectContent>
                                  {TIMELINE_OPTIONS.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              {errors.timeline && (
                                <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                                  <AlertCircle className="h-4 w-4" />
                                  {errors.timeline}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="description">
                                Project description *
                              </Label>
                              <Textarea
                                id="description"
                                placeholder="Please describe your project, goals, and any specific requirements"
                                className={`min-h-[120px] ${errors.description ? "border-red-500 focus:border-red-500" : ""}`}
                                value={formData.description}
                                onChange={(e) => updateFormData('description', e.target.value)}
                              />
                              {errors.description && (
                                <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                                  <AlertCircle className="h-4 w-4" />
                                  {errors.description}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        )}

                        {step === 3 && (
                          <motion.div
                            key="step3"
                            custom={direction}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={slideVariants}
                            className="space-y-6"
                          >
                            <h2 className="text-2xl font-bold">
                              Schedule Your Consultation
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                              Choose a date and time that works for you.
                              Consultations are 30 minutes.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="date">Preferred date *</Label>
                                {formData.preferredDate && (
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Selected: {new Date(formData.preferredDate).toLocaleDateString()}
                                  </p>
                                )}
                                <Input 
                                  id="date" 
                                  type="date" 
                                  min={getCurrentDate()}
                                  value={formData.preferredDate}
                                  onChange={(e) => updateFormData('preferredDate', e.target.value)}
                                  className={errors.preferredDate ? "border-red-500 focus:border-red-500" : ""}
                                />
                                {errors.preferredDate && (
                                  <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                                    <AlertCircle className="h-4 w-4" />
                                    {errors.preferredDate}
                                  </p>
                                )}
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="time">Preferred time *</Label>

                                <Select 
                                  value={formData.preferredTime} 
                                  onValueChange={(value) => updateFormData('preferredTime', value)}

                                >
                                  <SelectTrigger className={errors.preferredTime ? "border-red-500 focus:border-red-500" : ""}>
                                    <SelectValue placeholder="Select a time" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {CONSULTATION_TIME_SLOTS.map((timeSlot) => {
                                      return (
                                        <SelectItem 
                                          key={timeSlot.value} 
                                          value={timeSlot.value}
                                        >
                                          {timeSlot.label}
                                        </SelectItem>
                                      );
                                    })}
                                  </SelectContent>
                                </Select>
                                {errors.preferredTime && (
                                  <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                                    <AlertCircle className="h-4 w-4" />
                                    {errors.preferredTime}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="timezone">Your timezone</Label>
                              <Select value={formData.timezone} onValueChange={(value) => updateFormData('timezone', value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your timezone" />
                                </SelectTrigger>
                                <SelectContent>
                                  {TIMEZONE_OPTIONS.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="alternative">
                                Alternative date/time (optional)
                              </Label>
                              <Textarea
                                id="alternative"
                                placeholder="If you have alternative dates/times that work for you, please list them here"
                                className="min-h-[80px]"
                                value={formData.alternativeTime}
                                onChange={(e) => updateFormData('alternativeTime', e.target.value)}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="communication">
                                Preferred communication method
                              </Label>
                              <RadioGroup
                                value={formData.communicationMethod}
                                onValueChange={(value) => updateFormData('communicationMethod', value)}
                                className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2"
                              >
                                {COMMUNICATION_METHODS.map((method) => (
                                  <div key={method.value} className="flex items-center space-x-2">
                                    <RadioGroupItem value={method.value} id={method.value} />
                                    <Label htmlFor={method.value}>{method.label}</Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex justify-between mt-8">
                        {step > 1 ? (
                          <Button variant="outline" onClick={handlePrevStep}>
                            Back
                          </Button>
                        ) : (
                          <div></div>
                        )}
                        <Button
                          onClick={() => {
                            if (step === 3) {
                              handleSubmit();
                            } else {
                              handleNextStep();
                            }
                          }}
                          disabled={isSubmitting}
                          className="bg-gradient-to-r text-white from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 disabled:opacity-50"
                        >
                          {isSubmitting ? "Submitting..." : step < 3 ? "Continue" : "Submit Request"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="border-0 shadow-lg text-center p-8">
                    <div className="flex flex-col items-center space-y-6">
                      <motion.div
                        className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: 0.2,
                          },
                        }}
                      >
                        <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <motion.h2
                        className="text-3xl font-bold"
                        initial={{ y: 20 }}
                        animate={{
                          y: 0,
                          transition: { delay: 0.3, duration: 0.3 },
                        }}
                      >
                        Consultation Request Submitted!
                      </motion.h2>
                      <motion.p
                        className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl"
                        initial={{ y: 20 }}
                        animate={{
                          y: 0,
                          transition: { delay: 0.4, duration: 0.3 },
                        }}
                      >
                        Thank you for booking a consultation with us. {"We'll"}{" "}
                        review your request and get back to you within 24 hours
                        to confirm your appointment.
                      </motion.p>
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md mt-4"
                        initial={{ y: 20 }}
                        animate={{
                          y: 0,
                          transition: { delay: 0.5, duration: 0.3 },
                        }}
                      >
                        <Button asChild variant="outline">
                          <Link href="/">Return Home</Link>
                        </Button>
                        <Button
                          asChild
                          className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
                        >
                          <Link href="/what-we-offer">View Our Services</Link>
                        </Button>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 mb-4">
                What to Expect
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our Consultation Process
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Book Your Slot</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Fill out the form with your details and project
                      requirements, then select a convenient time for your
                      consultation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      30-Minute Discussion
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We&apos;ll spend 30 minutes understanding your business
                      needs, goals, and answering any questions you have.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Expert Recommendations
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our team will provide expert advice and suggest the most
                      suitable solutions for your specific needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Follow-Up Proposal
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      After the consultation, we&apos;ll send you a detailed
                      proposal with pricing, timeline, and next steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-xl"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="space-y-6">
                  <div className="inline-block rounded-full bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
                    Why Choose Us
                  </div>
                  <h3 className="text-2xl font-bold">
                    Benefits of Our Consultation
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">No obligation</span> - Our
                        consultation is completely free with no strings attached
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">Expert advice</span> - Get
                        insights from experienced developers and consultants
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">Clear roadmap</span> -
                        Receive a detailed plan for your project&apos;s
                        implementation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">Transparent pricing</span> -
                        Get upfront cost estimates with no hidden fees
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">Tailored solutions</span> -
                        Custom recommendations based on your specific needs
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-600 to-teal-600 dark:from-blue-700 dark:to-teal-700">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">
                  Is the consultation really free?
                </h3>
                <p className="text-white/80">
                  Yes, the 30-minute consultation is completely free with no
                  obligation to purchase any services.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">
                  How should I prepare for the consultation?
                </h3>
                <p className="text-white/80">
                  Think about your project goals, timeline, and budget. The more
                  information you can provide, the more valuable the
                  consultation will be.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">
                  What happens after the consultation?
                </h3>
                <p className="text-white/80">
                  We&apos;ll send you a detailed proposal based on our
                  discussion, including pricing, timeline, and next steps.
                  You&apos;re free to accept it or not.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">
                  Can I reschedule my consultation?
                </h3>
                <p className="text-white/80">
                  Yes, you can reschedule your consultation up to 24 hours
                  before the scheduled time by contacting us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
