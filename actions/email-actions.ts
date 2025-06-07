"use server"

import { z } from "zod"
import { Resend } from "resend"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Updated form validation schema with city instead of locationCount
const formSchema = z.object({
  companyName: z.string().min(2).max(50),
  email: z.string().email(),
  phoneNumber: z.string().min(7).max(15),
  city: z.string().min(2).max(50),
  businessType: z.string().optional(),
  message: z.string().optional(),
})

export async function sendAgentFormEmail(formData: FormData) {
  try {
    // Extract and validate form data
    const data = {
      companyName: formData.get("companyName") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      city: formData.get("city") as string,
      businessType: formData.get("businessType") as string,
      message: formData.get("message") as string,
    }

    // Validate the data
    const validatedData = formSchema.parse(data)

    // Send email to your company
    const { data: companyEmailData, error: companyEmailError } = await resend.emails.send({
      from: `Agent Applications <agent-applications@${process.env.RESEND_DOMAIN}>`,
      to: [process.env.NOTIFICATION_EMAIL as string],
      subject: `Nowe zapytanie o zostanie agentem WU: ${validatedData.companyName}`,
      reply_to: validatedData.email,
      html: `
        <h1>Potencjalnie Nowy Agent</h1>
        <p><strong>Nazwa firmy:</strong> ${validatedData.companyName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Telefon:</strong> ${validatedData.phoneNumber}</p>
        <p><strong>Miasto:</strong> ${validatedData.city}</p>
        <p><strong>Typ biznesu:</strong> ${validatedData.businessType || "Nie wskazano"}</p>
        <p><strong>Dodatkowa wiadomość:</strong> ${validatedData.message || "Brak"}</p>
      `,
    })

    if (companyEmailError) {
      console.error("Error sending company notification:", companyEmailError)
      throw new Error("Failed to send notification email")
    }

    // Send confirmation email to the applicant
    const { data: confirmationData, error: confirmationError } = await resend.emails.send({
      from: `MoneyTransfer PL <no-reply@${process.env.RESEND_DOMAIN}>`,
      to: [validatedData.email],
      subject: "Dziękujemy za Twoją aplikację",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">Thank You for Your Application</h1>
          
          <p>Drogi ${validatedData.companyName},</p>
          
          <p>Dostaliśmy Twoją aplikację na zostanie agentem WU. Skontaktujemy się z Tobą wkrótce.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Aplikacja:</h3>
            <p><strong>Nazwa Firmy:</strong> ${validatedData.companyName}</p>
            <p><strong>Miasto:</strong> ${validatedData.city}</p>
            <p><strong>Typ działalności:</strong> ${validatedData.businessType || "Nie wskazano"}</p>
          </div>
          
          <p>W razie pytań zapraszamy do kontaku!</p>
          
          <p>Pozdrawiamy<br>Zespół MoneyTransfer PL</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>To jest wiadomość automatyczna. Nie odpowiadaj. Napisz na kontakt@moneytransfer.pl</p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #666;">
            <h4 style="color: #333; margin-bottom: 10px;">Nasze dane kontaktowe:</h4>
            <p><strong>Western Union Wrocław</strong></p>
            <p>ul. T. Kościuszki 27</p>
            <p>50-011 Wrocław, Polska</p>
            <p>Tel: +48 71 343 90 26</p>
            <p>Email: kontakt@moneytransfer.pl</p>
          </div>
        </div>
      `,
    })

    if (confirmationError) {
      console.error("Error sending confirmation email:", confirmationError)
      // We'll still return success if only the confirmation email fails
    }

    return { success: true }
  } catch (error) {
    console.error("Form submission error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}