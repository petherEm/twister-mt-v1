import "@/styles/tailwind.css";
import { locales } from "@/middleware";
import { Container } from "@/components/util/container";
import { getDictionary } from "@/lib/dictionary";

import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import DemoPage from "@/components/price-tag-demo";
import { Footer } from "@/components/footer";
import { NavbarWithPath } from "@/components/navbar-with-path";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Improves performance
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Define viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Generate metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  // await params first as we are in Next.js 15
  const paramsAwaited = await params;
  // Get dictionary for the current locale
  const dict = await getDictionary(paramsAwaited.lang as "en" | "pl" | "ua");

  // Base URL for absolute URLs
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://moneytransfer.pl";

  return {
    // Basic metadata
    title: {
      template: "%s | Twister Money Transfers",
      default: "WU Agent Money Transfers | Twister",
    },
    description:
      dict.metadata?.description ||
      "Send money worldwide with Twister. Fast, secure, and affordable money transfer services powered by Western Union.",

    // Keywords
    keywords: [
      "money transfer",
      "przekazy pieniężne",
      "zostań agentem",
      "agent Western Union",
      "international money transfer",
      "fast money transfer",
      "secure money transfer",
      "western union",
      "international transfers",
      "send money",
      "twister",
    ],

    // Canonical URL
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${paramsAwaited.lang}`,
      languages: {
        en: "/en",
        pl: "/pl",
        //@ts-expect-error
        ua: "/ua",
      },
    },

    // Open Graph
    openGraph: {
      type: "website",
      locale: paramsAwaited.lang,
      url: `${baseUrl}/${paramsAwaited.lang}`,
      title: "Money Transfer PL | Twister",
      description:
        dict.metadata?.ogDescription ||
        "Fast and secure international money transfers with Twister and Western Union.",
      siteName: "Twister Money Transfers",
      images: [
        {
          url: `${baseUrl}/mt-logo-4.png`,
          width: 1200,
          height: 630,
          alt: "Money Transfer PL | Twister",
        },
      ],
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },

    // Verification
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },

    // Icons
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-icon.png" }],
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.svg",
        },
      ],
    },

    // App information
    applicationName: "Money Transfer PL | Twister",
    authors: [{ name: "Money Transfer PL | Twister", url: baseUrl }],
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    creator: "Money Transfer PL | Twister",
    publisher: "Money Transfer PL | Twister",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl" | "ua");

  return (
    <html lang={lang} dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DemoPage />
        <Container>
          <NavbarWithPath lang={lang} dict={dict} />
        </Container>

        <main id="main-content">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
