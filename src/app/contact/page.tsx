"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  Globe,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "custom-web-app",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiResponse, setApiResponse] = useState<{ success: boolean; message: string } | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

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
    
    if (!formData.budget) newErrors.budget = "Budget range is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submission started");
    console.log("Current form data:", formData);
    
    if (!validateForm()) {
      console.log("Form validation failed");
      return;
    }

    console.log("Form validation passed, starting submission");
    setIsSubmitting(true);
    setApiResponse(null);

    try {
      // Map the form data to match the API structure
      const apiData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: "Contact Form Submission", // Default company name
        projectType: formData.interest === "custom-web-app" ? "Website" : 
                    formData.interest === "api-integration" ? "API Integration" :
                    formData.interest === "database-solution" ? "Database Solution" :
                    formData.interest === "analytics-reporting" ? "Analytics & Reporting" :
                    formData.interest === "customer-portal" ? "Customer Portal" : "Other",
        budget: formData.budget === "25-50k" ? "₹25,000 - ₹50,000" :
               formData.budget === "50-100k" ? "₹50,000 - ₹1,00,000" :
               formData.budget === "1-2lakh" ? "₹1,00,000 - ₹2,00,000" :
               formData.budget === "2lakh+" ? "₹2,00,000+" : 
               formData.budget === "not-sure" ? "Not sure yet" : formData.budget,
        timeline: "1-2 months", // Default timeline
        description: formData.message,
        preferredDate: new Date().toLocaleDateString('en-GB'), // Today's date
        preferredTime: "14:30", // Default time
        timezone: "Central European Time (CET)", // Default timezone
        alternativeTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString('en-GB') + ", 16:00", // Tomorrow
        communicationMethod: "Video call (Zoom/Teams)" // Default communication method
      };

      console.log("Submitting contact form data:", apiData);

      const response = await axios.post(
        "https://5ahinmt4vf.execute-api.eu-north-1.amazonaws.com/prod",
        apiData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // 10 second timeout
        }
      );

      console.log("API Response:", response.data);

      setApiResponse({
        success: true,
        message: response.data.message || "Message sent successfully! We'll get back to you within 24 hours.",
      });
      setIsSubmitted(true);
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

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "custom-web-app",
      budget: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setApiResponse(null);
  };

  if (isSubmitted && apiResponse?.success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container px-4 md:px-6 mx-auto py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {apiResponse.message}
              </p>
              <div className="space-y-3">
                <Button onClick={resetForm} className="w-full">
                  Send Another Message
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-white to-blue-100 dark:from-purple-900/20 dark:via-gray-900 dark:to-blue-900/20">
          <div className="absolute inset-0 opacity-50 dark:opacity-30">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-purple-500 to-blue-400"
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
            <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300 mb-4">
              Get in Touch
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 dark:from-purple-400 dark:via-blue-300 dark:to-teal-300 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Have questions or ready to start your project? Reach out to us
              today and {"let's"} discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <Card className="border-blue-100 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        info@syslence.com
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        support@syslence.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-teal-100 p-2 dark:bg-teal-900/30">
                      <Phone className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        +91 8887931189
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/30">
                      <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Stockholm, Sweden
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Remote work available worldwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100 p-2 dark:bg-amber-900/30">
                      <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Monday - Friday: 9:00 AM - 6:00 PM CET
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Weekend consultations available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Free Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    We offer a 30-minute free consultation to understand your
                    needs and suggest the right system. After the meeting, we
                    send you a simple project proposal.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">No obligation</span> - Our
                        consultation is completely free with no strings attached
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Expert advice</span> - Get
                        insights from experienced developers and consultants
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Clear roadmap</span> -
                        Receive a detailed plan for your {"project's"}
                        implementation
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full text-white bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
                  >
                    <Link href="/book-consultation">
                      Book Your Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="border-blue-100 dark:border-blue-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Debug info - remove in production */}
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs">
                  <p className="font-medium mb-2">Debug Info:</p>
                  <p>Form Data: {JSON.stringify(formData, null, 2)}</p>
                  <p>Errors: {JSON.stringify(errors, null, 2)}</p>
                  <p>Is Submitting: {isSubmitting.toString()}</p>
                  <p>Is Submitted: {isSubmitted.toString()}</p>
                </div>

                {apiResponse && !apiResponse.success && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <p className="text-red-700 dark:text-red-300 text-sm">{apiResponse.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name *</Label>
                      <Input
                        id="first-name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={`border-blue-200 dark:border-blue-800 ${
                          errors.firstName ? "border-red-500 focus-visible:ring-red-500" : ""
                        }`}
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
                        className={`border-blue-200 dark:border-blue-800 ${
                          errors.lastName ? "border-red-500 focus-visible:ring-red-500" : ""
                        }`}
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
                      className={`border-blue-200 dark:border-blue-800 ${
                        errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
                      }`}
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
                      className={`border-blue-200 dark:border-blue-800 ${
                        errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs">{errors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>What are you interested in?</Label>
                    <RadioGroup
                      value={formData.interest}
                      onValueChange={(value) => {
                        console.log("Interest selected:", value);
                        handleInputChange("interest", value);
                      }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="custom-web-app"
                          id="custom-web-app"
                        />
                        <Label htmlFor="custom-web-app">
                          Custom Web Application
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="database-solution"
                          id="database-solution"
                        />
                        <Label htmlFor="database-solution">
                          Database Solution
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="api-integration"
                          id="api-integration"
                        />
                        <Label htmlFor="api-integration">API Integration</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="analytics-reporting"
                          id="analytics-reporting"
                        />
                        <Label htmlFor="analytics-reporting">
                          Analytics & Reporting
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="customer-portal"
                          id="customer-portal"
                        />
                        <Label htmlFor="customer-portal">Customer Portal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Approximate budget *</Label>
                    <Select 
                      value={formData.budget} 
                      onValueChange={(value) => {
                        console.log("Budget selected:", value);
                        handleInputChange("budget", value);
                      }}
                    >
                      <SelectTrigger className={errors.budget ? "border-red-500 focus-visible:ring-red-500" : ""}>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25-50k">
                          ₹25,000 - ₹50,000
                        </SelectItem>
                        <SelectItem value="50-100k">
                          ₹50,000 - ₹1,00,000
                        </SelectItem>
                        <SelectItem value="1-2lakh">
                          ₹1,00,000 - ₹2,00,000
                        </SelectItem>
                        <SelectItem value="2lakh+">₹2,00,000+</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.budget && (
                      <p className="text-red-500 text-xs">{errors.budget}</p>
                    )}
                    <p className="text-xs text-gray-500">Current budget value: {formData.budget || "None"}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`min-h-[120px] border-blue-200 dark:border-blue-800 ${
                        errors.message ? "border-red-500 focus-visible:ring-red-500" : ""
                      }`}
                      placeholder="Tell us about your project and requirements"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Contact us"
                      )}
                    </Button>
                    
                    {/* Debug button for testing */}
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => {
                        console.log("Test button clicked");
                        console.log("Current form state:", {
                          formData,
                          errors,
                          isSubmitting,
                          isSubmitted,
                          apiResponse
                        });
                        
                        // Fill with test data
                        const testData = {
                          firstName: "John",
                          lastName: "Doe",
                          email: "john@example.com",
                          phone: "+1234567890",
                          interest: "custom-web-app",
                          budget: "1-2lakh",
                          message: "This is a test message from the contact form."
                        };
                        setFormData(testData);
                        setErrors({});
                      }}
                      className="w-full text-xs"
                    >
                      Fill Test Data
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about our services and process
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* FAQ Item 1 */}
            <Card className="border-blue-100 dark:border-blue-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                    <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      How much does a custom web application cost?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The cost depends on the complexity and scope of your
                      project. Our packages start at ₹25,000 for simple
                      applications. We provide detailed quotes after
                      understanding your specific requirements during our free
                      consultation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Item 2 */}
            <Card className="border-green-100 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                    <MessageSquare className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      How long does it take to complete a project?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Project timelines vary based on complexity. Simple
                      applications take 2-4 weeks, while complex systems can
                      take 2-6 months. We provide detailed timelines during our
                      consultation and keep you updated throughout the process.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Item 3 */}
            <Card className="border-amber-100 dark:border-amber-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-amber-100 p-2 dark:bg-amber-900/30">
                    <MessageSquare className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      How do you handle communication during the project?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We maintain clear communication throughout the project
                      with regular updates and progress reports. Our Swedish
                      team handles all client communication, ensuring smooth
                      interaction and understanding of your needs.
                    </p>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80">
                Book a free consultation to discuss your project and discover
                how our custom solutions can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link href="/book-consultation">Book Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white hover:text-white text-white hover:bg-white/10"
                >
                  <Link href="/what-we-offer">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-white/20 blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">
                        Free 30-minute consultation
                      </div>
                      <div className="text-sm text-white/80">
                        No obligation, just valuable insights
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">
                        Personalized recommendation
                      </div>
                      <div className="text-sm text-white/80">
                        Tailored to your specific needs
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">Clear project proposal</div>
                      <div className="text-sm text-white/80">
                        Transparent pricing and timeline
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
