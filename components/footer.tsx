"use client";

import React from "react";

import { useState } from "react";
import Image from "next/image";
import { Container } from "./util/container";
import { Link } from "./util/link";
import { MapPin, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./util/button";
import { motion } from "framer-motion";

function ContactCard({ dict }: { dict: any }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden bg-white shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Contact information */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0]">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {dict.footer.contact.title
              .split(dict.footer.contact.highlightSend)
              .map((part: string, i: number, array: string[]) => {
                if (i === array.length - 1) return part;
                return (
                  <React.Fragment key={i}>
                    {part}
                    <span className="text-[#ffcc00]">
                      {dict.footer.contact.highlightSend}
                    </span>
                    {i < array.length - 2 && " "}
                  </React.Fragment>
                );
              })}{" "}
          </h2>

          <p className="text-black mb-10">{dict.footer.contact.description}</p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#ffcc00]/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-[#ffcc00]" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold text-black">
                  {dict.footer.contact.address}
                </h3>
                <div className="mt-1 text-sm text-black">
                  <p className="font-medium">
                    {dict.footer.contact.companyName}
                  </p>
                  <p>{dict.footer.contact.street}</p>
                  <p>
                    {dict.footer.contact.city}, {dict.footer.contact.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#ffcc00]/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-[#ffcc00]" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold text-black">
                  {dict.footer.contact.phone}
                </h3>
                <p className="mt-1 text-sm text-black">
                  {dict.footer.contact.phoneNumber}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#ffcc00]/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-[#ffcc00]" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold text-black">
                  {dict.footer.contact.email}
                </h3>
                <p className="mt-1 text-sm text-black">
                  {dict.footer.contact.emailAddress}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Button className="group">
              {dict.footer.contact.contactUs}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Right side - Map */}
        <div className="relative h-[300px] md:h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
          <Image
            alt={dict.aboutUs.images.map}
            src="/company/6.png"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute bottom-4 right-4 z-20">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium text-gray-900 hover:bg-white transition-colors"
            >
              <span>{dict.footer.contact.viewMap}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  lang = "pl",
}: {
  href: string;
  children: React.ReactNode;
  lang?: string;
}) {
  // If href starts with "/" but not with a language code, add the language
  const formattedHref =
    href.startsWith("/") && !href.match(/^\/(en|pl|ua)/)
      ? `/${lang}${href}`
      : href;

  return (
    <li>
      <Link
        href={formattedHref}
        className="text-black hover:text-gray-700 transition-colors duration-200 text-sm"
      >
        {children}
      </Link>
    </li>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-bold text-black tracking-wider uppercase mb-4">
        {title}
      </h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

// Language switcher component with flags
function LanguageSwitcher({
  currentLang,
  currentPath,
}: {
  currentLang: string;
  currentPath?: string;
}) {
  // Define available languages with their flags
  const languages = [
    { code: "en", flag: "/flags/gb.svg", alt: "English" },
    { code: "pl", flag: "/flags/pl.svg", alt: "Polski" },
    { code: "ua", flag: "/flags/ua.svg", alt: "Українська" },
  ];

  // Function to get the equivalent URL in another language
  const getLanguageUrl = (langCode: string) => {
    // If we have a current path, replace the language segment
    if (currentPath) {
      // Split the path to get segments
      const pathSegments = currentPath.split("/").filter(Boolean);

      // Check if the first segment is a language code
      if (languages.some((lang) => lang.code === pathSegments[0])) {
        // Replace the language code
        pathSegments[0] = langCode;
        return "/" + pathSegments.join("/");
      } else {
        // No language code in the path, add it at the beginning
        return "/" + langCode + "/" + pathSegments.join("/");
      }
    }

    // Default to just the language code
    return `/${langCode}`;
  };

  return (
    <div className="flex items-center gap-3 mt-6">
      <div className="flex items-center gap-3">
        {languages.map((language) => (
          <Link
            key={language.code}
            href={getLanguageUrl(language.code)}
            className={`relative flex items-center justify-center rounded-md overflow-hidden w-8 h-6 border ${
              currentLang === language.code
                ? "ring-2 ring-[#ffcc00] border-[#ffcc00]"
                : "border-gray-200 opacity-70 hover:opacity-100 hover:border-gray-300"
            } transition-all duration-200`}
            title={language.alt}
          >
            <Image
              src={language.flag}
              alt={language.alt}
              fill
              className="object-cover"
              sizes="32px"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Footer({
  dict = {},
  lang = "pl",
  currentPath,
}: {
  dict?: any;
  lang?: string;
  currentPath?: string;
}) {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer id="footer" className="bg-wu-official">
      <div className="relative py-24 overflow-hidden">
        <Container>
          {/* Contact card with map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactCard dict={dict} />
          </motion.div>

          {/* Footer links and info */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-12 gap-8">
            {/* Logo and description */}
            <div className="col-span-2 md:col-span-6">
              <Image
                src="/logo-black-nobg.png"
                alt="Twister MT Logo"
                width={240}
                height={72}
                className="mb-6"
              />
              <p className="text-black text-sm mt-4 pr-4">
                {dict.footer?.company?.description}
              </p>
            </div>

            {/* Footer links columns */}
            <div className="col-span-1 md:col-span-2">
              <FooterColumn title={dict.footer?.columns?.becomeAgent}>
                <FooterLink href={`/${lang}/agent`} lang={lang}>
                  {dict.footer?.columns?.benefits}
                </FooterLink>
                <FooterLink href={`/${lang}/agent`} lang={lang}>
                  {dict.footer?.columns?.form}
                </FooterLink>
                <FooterLink href={`/${lang}/agent/#faqs`} lang={lang}>
                  {dict.footer?.columns?.faq}
                </FooterLink>
              </FooterColumn>
            </div>

            <div className="col-span-1 md:col-span-2">
              <FooterColumn title={dict.footer?.columns?.westernUnion}>
                <FooterLink href={`/${lang}/western-union`} lang={lang}>
                  {dict.footer?.columns?.about}
                </FooterLink>
                <FooterLink
                  href={`/${lang}/western-union/#history`}
                  lang={lang}
                >
                  {dict.footer?.columns?.history}
                </FooterLink>
                <FooterLink href={`/${lang}/western-union/#faqs`} lang={lang}>
                  {dict.footer?.columns?.support}
                </FooterLink>
              </FooterColumn>
            </div>

            {/* Language switcher as the last column */}
            <div className="col-span-2 md:col-span-2">
              <h3 className="text-sm font-bold text-black tracking-wider uppercase mb-4">
                {dict.footer?.columns?.language}
              </h3>
              <LanguageSwitcher currentLang={lang} currentPath={currentPath} />
            </div>
          </div>

          {/* Copyright bar */}
          <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center">
            <p className="text-black text-sm">
              {dict.footer?.company?.copyright?.replace(
                "{year}",
                year.toString()
              )}
            </p>
            {/* <div className="mt-4 md:mt-0">
              <p>{dict.footer?.company?.createdBy}</p>
            </div> */}
          </div>
        </Container>
      </div>
    </footer>
  );
}
