"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

// The schema remains the same, but we'll add more validation messages later
const formSchema = z.object({
  companyName: z.string().min(2).max(50),
  email: z.string().email(),
  phoneNumber: z.string().min(10).max(15),
  locationCount: z.string().min(1).max(3),
  message: z.string().optional(),
});

const AgentForm = ({
  dict = {},
  lang = "pl",
}: {
  dict?: any;
  lang?: string;
}) => {
  // Form dictionary fallbacks in case translations are missing
  const formDict = dict.agent?.form?.formFields || {
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
    message: {
      label: "Additional Message",
      placeholder: "Any additional information you'd like to share",
      description: "",
    },
    submit: "Submit",
    success: "Thanks for your submission! We'll be in touch soon.",
    error: "There was a problem submitting your form. Please try again.",
  };

  // Define form with hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      email: "",
      phoneNumber: "",
      locationCount: "",
      message: "",
    },
  });

  // Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values
    console.log(values);
    // You could add submission logic here or API calls
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              <FormMessage />
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
              <FormMessage />
            </FormItem>
          )}
        />

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
              <FormMessage />
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
              {formDict.phoneNumber.description && (
                <FormDescription className="text-white/70">
                  {formDict.phoneNumber.description}
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant="primary"
          type="submit"
          className="w-full bg-wu-official hover:bg-wu-official/90 text-black font-medium"
        >
          {formDict.submit}
        </Button>
      </form>
    </Form>
  );
};

export default AgentForm;
