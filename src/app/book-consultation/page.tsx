"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  Calendar,
  Clock,
  Users,
  MessageSquare,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Loader2,
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
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
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

interface FormErrors {
  [key: string]: string;
}

export default function BookConsultationPage() {
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState<{ success: boolean; message: string } | null>(null);

  const [formData, setFormData] = useState<FormData>({
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
    timezone: "",
    alternativeTime: "",
    communicationMethod: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: FormErrors = {};

    if (stepNumber === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number";
      }
      
      if (!formData.company.trim()) newErrors.company = "Company name is required";
    }

    if (stepNumber === 2) {
      if (!formData.projectType) newErrors.projectType = "Project type is required";
      if (!formData.budget) newErrors.budget = "Budget range is required";
      if (!formData.timeline) newErrors.timeline = "Timeline is required";
      if (!formData.description.trim()) newErrors.description = "Project description is required";
    }

    if (stepNumber === 3) {
      if (!formData.preferredDate) {
        newErrors.preferredDate = "Preferred date is required";
      } else {
        const selectedDate = new Date(formData.preferredDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
          newErrors.preferredDate = "Please select a future date";
        }
      }
      if (!formData.preferredTime) newErrors.preferredTime = "Preferred time is required";
      if (!formData.timezone) newErrors.timezone = "Timezone is required";
      if (!formData.communicationMethod) newErrors.communicationMethod = "Communication method is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      if (step < 3) {
        setDirection(1);
        setStep(step + 1);
      } else {
        submitForm();
      }
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    setApiResponse(null);

    try {
      const formattedData = {
        ...formData,
        preferredDate: formData.preferredDate 
          ? new Date(formData.preferredDate).toLocaleDateString('en-GB')
          : formData.preferredDate,
        alternativeTime: formData.alternativeTime || "Not specified"
      };

      console.log("Submitting consultation form data:", formattedData);

      const response = await axios.post(
        "https://5ahinmt4vf.execute-api.eu-north-1.amazonaws.com/prod",
        formattedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );

      console.log("API Response:", response.data);

      setApiResponse({
        success: true,
        message: response.data.message || "Consultation booked successfully! We'll contact you soon to confirm the details.",
      });
      setFormSubmitted(true);
    } catch (error: any) {
      console.error("API Error:", error);
      console.error("Error details:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        statusText: error.response?.statusText
      });
      
      let errorMessage = "Something went wrong. Please try again.";
      
      if (error.code === 'ECONNABORTED') {
        errorMessage = "Request timed out. Please check your connection and try again.";
      } else if (error.code === 'ERR_NETWORK') {
        errorMessage = "Network error. Please check your internet connection and try again. If the problem persists, the API server might be down.";
      } else if (error.response?.status === 400) {
        errorMessage = "Invalid data. Please check your form inputs.";
      } else if (error.response?.status === 500) {
        errorMessage = "Server error. Please try again later.";
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      
      setApiResponse({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const testApiConnectivity = async () => {
    try {
      console.log("Testing API connectivity...");
      const response = await axios.get("https://5ahinmt4vf.execute-api.eu-north-1.amazonaws.com/prod", {
        timeout: 5000,
      });
      console.log("API is reachable:", response.status);
      alert("API is reachable! Status: " + response.status);
    } catch (error: any) {
      console.error("API connectivity test failed:", error);
      alert("API connectivity test failed: " + error.message);
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormSubmitted(false);
    setApiResponse(null);
    setFormData({
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
      timezone: "",
      alternativeTime: "",
      communicationMethod: "",
    });
    setErrors({});
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

  if (formSubmitted && apiResponse?.success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container px-4 md:px-6 mx-auto py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Consultation Booked!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {apiResponse.message}
              </p>
              <div className="space-y-3">
                <Button onClick={resetForm} className="w-full">
                  Book Another Consultation
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-white to-teal-100 dark:from-blue-900/20 dark:via-gray-900 dark:to-teal-900/20">
          <div className="absolute inset-0 opacity-50 dark:opacity-30">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-blue-500 to-teal-400"
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
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 mb-4">
              Free Consultation
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-teal-600 to-blue-500 dark:from-blue-400 dark:via-teal-300 dark:to-blue-300 mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get expert advice on your project. Our 30-minute consultation is completely free with no obligation.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                  }`}>
                    1
                  </div>
                  <span className="text-sm font-medium">Your Info</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                  }`}>
                    2
                  </div>
                  <span className="text-sm font-medium">Project Details</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                  }`}>
                    3
                  </div>
                  <span className="text-sm font-medium">Schedule</span>
                </div>
              </div>
              <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
                  variants={progressVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
            </div>

            <Card className="border-blue-100 dark:border-blue-800 shadow-lg">
              <CardContent className="p-8">
                {apiResponse && !apiResponse.success && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <p className="text-red-700 dark:text-red-300 text-sm">{apiResponse.message}</p>
                  </div>
                )}

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-6"
                  >
                    {step === 1 && (
                      <div>
                        <div className="mb-6">
                          <h2 className="text-2xl font-bold mb-2">Your Information</h2>
                          <p className="text-gray-600 dark:text-gray-400">
                            Tell us about yourself so we can personalize your consultation.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First name *</Label>
                            <Input
                              id="first-name"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              className={errors.firstName ? "border-red-500 focus-visible:ring-red-500" : ""}
                              placeholder="Enter your first name"
                            />
                            {errors.firstName && (
                              <p className="text-red-500 text-xs">{errors.firstName}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last name *</Label>
                            <Input
                              id="last-name"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange("lastName", e.target.value)}
                              className={errors.lastName ? "border-red-500 focus-visible:ring-red-500" : ""}
                              placeholder="Enter your last name"
                            />
                            {errors.lastName && (
                              <p className="text-red-500 text-xs">{errors.lastName}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                            placeholder="Enter your email"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs">{errors.email}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
                            placeholder="Enter your phone number"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs">{errors.phone}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company *</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            className={errors.company ? "border-red-500 focus-visible:ring-red-500" : ""}
                            placeholder="Enter your company name"
                          />
                          {errors.company && (
                            <p className="text-red-500 text-xs">{errors.company}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <div className="mb-6">
                          <h2 className="text-2xl font-bold mb-2">Project Details</h2>
                          <p className="text-gray-600 dark:text-gray-400">
                            Tell us about your project so we can prepare for our consultation.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>What type of solution are you looking for? *</Label>
                            <RadioGroup
                              value={formData.projectType}
                              onValueChange={(value) => handleInputChange("projectType", value)}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Website" id="website" />
                                <Label htmlFor="website">Website</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Web Application" id="web-app" />
                                <Label htmlFor="web-app">Web Application</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Mobile App" id="mobile-app" />
                                <Label htmlFor="mobile-app">Mobile App</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="E-commerce" id="ecommerce" />
                                <Label htmlFor="ecommerce">E-commerce</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="ERP System" id="erp" />
                                <Label htmlFor="erp">ERP System</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Other" id="other" />
                                <Label htmlFor="other">Other</Label>
                              </div>
                            </RadioGroup>
                            {errors.projectType && (
                              <p className="text-red-500 text-xs">{errors.projectType}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="budget">Approximate budget *</Label>
                            <Select 
                              value={formData.budget} 
                              onValueChange={(value) => handleInputChange("budget", value)}
                            >
                              <SelectTrigger className={errors.budget ? "border-red-500 focus-visible:ring-red-500" : ""}>
                                <SelectValue placeholder="Select your budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</SelectItem>
                                <SelectItem value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</SelectItem>
                                <SelectItem value="₹1,00,000 - ₹2,00,000">₹1,00,000 - ₹2,00,000</SelectItem>
                                <SelectItem value="₹2,00,000+">₹2,00,000+</SelectItem>
                                <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.budget && (
                              <p className="text-red-500 text-xs">{errors.budget}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="timeline">Desired timeline *</Label>
                            <Select 
                              value={formData.timeline} 
                              onValueChange={(value) => handleInputChange("timeline", value)}
                            >
                              <SelectTrigger className={errors.timeline ? "border-red-500 focus-visible:ring-red-500" : ""}>
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="As soon as possible">As soon as possible</SelectItem>
                                <SelectItem value="1-2 months">1-2 months</SelectItem>
                                <SelectItem value="2-3 months">2-3 months</SelectItem>
                                <SelectItem value="3-6 months">3-6 months</SelectItem>
                                <SelectItem value="Flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.timeline && (
                              <p className="text-red-500 text-xs">{errors.timeline}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="description">Project description *</Label>
                            <Textarea
                              id="description"
                              value={formData.description}
                              onChange={(e) => handleInputChange("description", e.target.value)}
                              className={`min-h-[120px] ${errors.description ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                              placeholder="Describe your project and requirements"
                            />
                            {errors.description && (
                              <p className="text-red-500 text-xs">{errors.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Schedule */}
                    {step === 3 && (
                      <div>
                        <div className="mb-6">
                          <h2 className="text-2xl font-bold mb-2">Schedule Consultation</h2>
                          <p className="text-gray-600 dark:text-gray-400">
                            Choose your preferred time for the consultation.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="preferred-date">Preferred date *</Label>
                            <Input
                              id="preferred-date"
                              type="date"
                              value={formData.preferredDate}
                              onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                              className={errors.preferredDate ? "border-red-500 focus-visible:ring-red-500" : ""}
                              min={new Date().toISOString().split('T')[0]}
                            />
                            {errors.preferredDate && (
                              <p className="text-red-500 text-xs">{errors.preferredDate}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="preferred-time">Preferred time *</Label>
                            <Input
                              id="preferred-time"
                              type="time"
                              value={formData.preferredTime}
                              onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                              className={errors.preferredTime ? "border-red-500 focus-visible:ring-red-500" : ""}
                            />
                            {errors.preferredTime && (
                              <p className="text-red-500 text-xs">{errors.preferredTime}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="timezone">Timezone *</Label>
                          <Select 
                            value={formData.timezone} 
                            onValueChange={(value) => handleInputChange("timezone", value)}
                          >
                            <SelectTrigger className={errors.timezone ? "border-red-500 focus-visible:ring-red-500" : ""}>
                              <SelectValue placeholder="Select timezone" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Central European Time (CET)">Central European Time (CET)</SelectItem>
                              <SelectItem value="Eastern Standard Time (EST)">Eastern Standard Time (EST)</SelectItem>
                              <SelectItem value="Pacific Standard Time (PST)">Pacific Standard Time (PST)</SelectItem>
                              <SelectItem value="Indian Standard Time (IST)">Indian Standard Time (IST)</SelectItem>
                              <SelectItem value="Greenwich Mean Time (GMT)">Greenwich Mean Time (GMT)</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.timezone && (
                            <p className="text-red-500 text-xs">{errors.timezone}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="alternative-time">Alternative time (optional)</Label>
                          <Input
                            id="alternative-time"
                            value={formData.alternativeTime}
                            onChange={(e) => handleInputChange("alternativeTime", e.target.value)}
                            placeholder="e.g., 29-07-2025, 16:00"
                          />
                          <p className="text-xs text-gray-500">If you have an alternative date/time that works better for you</p>
                        </div>

                        <div className="space-y-2">
                          <Label>Preferred communication method *</Label>
                          <RadioGroup
                            value={formData.communicationMethod}
                            onValueChange={(value) => handleInputChange("communicationMethod", value)}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Video call (Zoom/Teams)" id="video" />
                              <Label htmlFor="video">Video call (Zoom/Teams)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Phone call" id="phone" />
                              <Label htmlFor="phone">Phone call</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Email" id="email-comm" />
                              <Label htmlFor="email-comm">Email</Label>
                            </div>
                          </RadioGroup>
                          {errors.communicationMethod && (
                            <p className="text-red-500 text-xs">{errors.communicationMethod}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handlePrevStep}
                    disabled={step === 1}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <div className="flex gap-2">
                    {step === 3 && (
                      <Button
                        variant="outline"
                        onClick={testApiConnectivity}
                        className="text-xs"
                      >
                        Test API
                      </Button>
                    )}
                    <Button
                      onClick={handleNextStep}
                      disabled={isSubmitting}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Booking...
                        </>
                      ) : (
                        <>
                          {step === 3 ? "Book Consultation" : "Next"}
                          {step !== 3 && <ArrowRight className="h-4 w-4" />}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                What happens during the consultation?
              </h2>
              <p className="text-xl text-white/80">
                Our expert team will discuss your project requirements, provide technical insights, and create a customized solution plan.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">
                  Project Analysis
                </h3>
                <p className="text-white/80">
                  We'll analyze your requirements and suggest the best technical approach for your project.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">
                  Timeline & Budget
                </h3>
                <p className="text-white/80">
                  Get a clear timeline and budget estimate based on your specific requirements.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">
                  Next Steps
                </h3>
                <p className="text-white/80">
                  We'll provide a detailed proposal and outline the next steps to get your project started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
