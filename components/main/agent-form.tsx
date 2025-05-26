"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendAgentFormEmail } from "@/actions/email-actions";
import { Button } from "@/components/util/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// The schema remains the same, but we'll add more validation messages
const formSchema = z.object({
  companyName: z
    .string()
    .min(2, {
      message: "Company name must be at least 2 characters.",
    })
    .max(50, {
      message: "Company name must not exceed 50 characters.",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z
    .string()
    .min(7, {
      message: "Phone number must be at least 10 digits.",
    })
    .max(15, {
      message: "Phone number must not exceed 15 digits.",
    }),
  locationCount: z
    .string()
    .min(1, {
      message: "Please enter the number of locations.",
    })
    .max(3, {
      message: "Number of locations must not exceed 3 digits.",
    }),
  businessType: z.string().optional(),
  message: z.string().optional(),
});

const AgentForm = ({
  dict = {},
  lang = "pl",
}: {
  dict?: any;
  lang?: string;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  // Form dictionary fallbacks in case translations are missing
  const fallbackFormDict = {
    companyName: {
      label: "Company Name",
      placeholder: "Enter your company name",
      description: "",
    },
    locationCount: {
      label: "Number of Locations",
      placeholder: "How many locations do you have?",
      description: "",
    },
    email: {
      label: "Email",
      placeholder: "Enter your email",
      description: "",
    },
    phoneNumber: {
      label: "Phone Number",
      placeholder: "Enter your phone number",
      description: "We'll use this to contact you about becoming an agent",
    },
    businessType: {
      label: "Business Type",
      placeholder: "Travel agency, currency exchange, store, etc.",
      description: "",
    },
    message: {
      label: "Additional Message",
      placeholder: "Any additional information you'd like to share",
      description: "",
    },
    submit: "Submit",
    success: "Thanks for your submission! We'll be in touch soon.",
    error: "There was a problem submitting your form. Please try again.",
  };

  // Use actual form fields from translations if available, otherwise fallback
  const formDict = dict.agent?.form?.formFields || fallbackFormDict;

  // Define form with hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      email: "",
      phoneNumber: "",
      locationCount: "",
      businessType: "",
      message: "",
    },
  });

  // Define a submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setFormStatus({});

    try {
      // Create FormData object
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      // Call the server action
      const result = await sendAgentFormEmail(formData);

      if (result.success) {
        setFormStatus({
          success: true,
          message: formDict.success,
        });
        form.reset();
      } else {
        setFormStatus({
          success: false,
          message: result.error || formDict.error,
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        success: false,
        message: formDict.error,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      {formStatus.message && (
        <div
          className={`p-4 rounded-md ${
            formStatus.success
              ? "bg-green-500/20 border border-green-500/50"
              : "bg-red-500/20 border border-red-500/50"
          }`}
        >
          <div className="flex items-center">
            {formStatus.success ? (
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
            )}
            <p className="text-white">{formStatus.message}</p>
          </div>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    {formDict.companyName.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={formDict.companyName.placeholder}
                      {...field}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </FormControl>
                  {formDict.companyName.description && (
                    <FormDescription className="text-white/70">
                      {formDict.companyName.description}
                    </FormDescription>
                  )}
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="locationCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    {formDict.locationCount.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={formDict.locationCount.placeholder}
                      {...field}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </FormControl>
                  {formDict.locationCount.description && (
                    <FormDescription className="text-white/70">
                      {formDict.locationCount.description}
                    </FormDescription>
                  )}
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    {formDict.email.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={formDict.email.placeholder}
                      type="email"
                      {...field}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </FormControl>
                  {formDict.email.description && (
                    <FormDescription className="text-white/70">
                      {formDict.email.description}
                    </FormDescription>
                  )}
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    {formDict.phoneNumber.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={formDict.phoneNumber.placeholder}
                      type="tel"
                      {...field}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  {formDict.businessType?.label || "Business Type"}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      formDict.businessType?.placeholder ||
                      "Travel agency, currency exchange, store, etc."
                    }
                    {...field}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  {formDict.message?.label || "Additional Message"}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={
                      formDict.message?.placeholder ||
                      "Any additional information you'd like to share"
                    }
                    {...field}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <Button
            variant="primary"
            type="submit"
            className="w-full bg-wu-official hover:bg-wu-official/90 text-black font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              formDict.submit
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AgentForm;
