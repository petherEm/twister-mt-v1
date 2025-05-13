import "@/styles/tailwind.css";
import { locales } from "@/middleware";
import { Container } from "@/components/util/container";
import { getDictionary } from "@/lib/dictionary";

import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import DemoPage from "@/components/price-tag-demo";
import { Footer } from "@/components/footer";
import { NavbarWithPath } from "@/components/navbar-with-path";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: {
    template: "Money Transfers - Twister",
    default: "Money Transfers - Twister",
  },
};

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
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DemoPage />
        <Container>
          <NavbarWithPath lang={lang} dict={dict} />
        </Container>

        {children}
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
