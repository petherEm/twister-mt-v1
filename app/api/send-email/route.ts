// import { NextResponse } from "next/server"
// import nodemailer from "nodemailer"

// export async function POST(request: Request) {
//   try {
//     const data = await request.json()
//     const { companyName, email, phoneNumber, locationCount, businessType, message } = data

//     // Create a transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_SERVER_HOST,
//       port: Number(process.env.EMAIL_SERVER_PORT),
//       secure: true, // true for 465, false for other ports
//       auth: {
//         user: process.env.EMAIL_SERVER_USER,
//         pass: process.env.EMAIL_SERVER_PASSWORD,
//       },
//     })

//     // Format the email content
//     const htmlContent = `
//       <h1>New Agent Application</h1>
//       <p><strong>Company Name:</strong> ${companyName}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone Number:</strong> ${phoneNumber}</p>
//       <p><strong>Number of Locations:</strong> ${locationCount}</p>
//       <p><strong>Business Type:</strong> ${businessType || "Not specified"}</p>
//       <p><strong>Additional Message:</strong> ${message || "None"}</p>
//     `

//     // Send the email
//     await transporter.sendMail({
//       from: process.env.EMAIL_FROM,
//       to: process.env.EMAIL_TO,
//       subject: `New Agent Application: ${companyName}`,
//       html: htmlContent,
//       replyTo: email,
//     })

//     // Also send a confirmation email to the applicant
//     await transporter.sendMail({
//       from: process.env.EMAIL_FROM,
//       to: email,
//       subject: "Thank you for your application",
//       html: `
//         <h1>Thank you for your application</h1>
//         <p>Dear ${companyName},</p>
//         <p>We have received your application to become an agent. Our team will review your information and contact you shortly.</p>
//         <p>Best regards,</p>
//         <p>Your Company Team</p>
//       `,
//     })

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error("Email sending failed:", error)
//     return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
//   }
// }
