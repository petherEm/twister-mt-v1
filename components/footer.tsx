"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "./util/container";
import { Link } from "./util/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  LogIn,
  Shield,
  Globe,
} from "lucide-react";
import { Button } from "./util/button";
import { motion } from "framer-motion";

function ContactCard({ dict }: { dict: any }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden bg-gradient-to-br from-black to-gray-900 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Contact information */}
        <div className="p-8 md:p-12 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-wu-official/10 rounded-br-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-wu-official/5 rounded-tl-full"></div>

          {/* Animated highlight line */}
          <motion.div
            className="absolute left-0 top-12 h-1 bg-wu-official"
            initial={{ width: 0 }}
            whileInView={{ width: "30%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 relative mt-4">
            {dict.footer.contact.title
              .split(dict.footer.contact.highlightSend)
              .map((part: string, i: number, array: string[]) => {
                if (i === array.length - 1) return part;
                return (
                  <React.Fragment key={i}>
                    {part}
                    <span className="text-wu-official font-bold">
                      {dict.footer.contact.highlightSend}
                    </span>
                    {i < array.length - 2 && " "}
                  </React.Fragment>
                );
              })}{" "}
          </h2>

          <p className="text-gray-300 mb-10 max-w-md">
            {dict.footer.contact.description}
          </p>

          <div className="space-y-6">
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-wu-official/20 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-wu-official" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold text-white">
                  {dict.footer.contact.address}
                </h3>
                <div className="mt-1 text-sm text-gray-300">
                  <p className="font-medium">
                    {dict.footer.contact.companyName}
                  </p>
                  <p>{dict.footer.contact.street}</p>
                  <p>
                    {dict.footer.contact.city}, {dict.footer.contact.country}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-wu-official/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-wu-official" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold text-white">
                  {dict.footer.contact.phone}
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  <a
                    href={`tel:${dict.footer.contact.phoneNumber.replace(
                      /\s+/g,
                      ""
                    )}`}
                    className="hover:text-wu-official transition-colors"
                  >
                    {dict.footer.contact.phoneNumber}
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-wu-official/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-wu-official" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold text-white">
                  {dict.footer.contact.email}
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  <a
                    href={`mailto:${dict.footer.contact.emailAddress}`}
                    className="hover:text-wu-official transition-colors"
                  >
                    {dict.footer.contact.emailAddress}
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href={`tel:${dict.footer.contact.phoneNumber.replace(
                /\s+/g,
                ""
              )}`}
              className="inline-flex"
            >
              <Button className="group bg-wu-official hover:bg-wu-official/90 text-black font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                {dict.footer.contact.contactUs}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right side - Map */}
        <div className="relative h-[350px] md:h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-full w-full"
          >
            <Image
              alt={dict.aboutUs.images.map}
              src="/company/6.png"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute bottom-6 right-6 z-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="https://maps.app.goo.gl/KwGeNnCGxegPNdHaA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-wu-official px-4 py-3 text-sm font-bold text-black hover:bg-white transition-colors shadow-lg"
            >
              <span>{dict.footer.contact.viewMap}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Location pin with animation */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="h-8 w-8 rounded-full bg-wu-official flex items-center justify-center shadow-lg">
              <MapPin className="h-5 w-5 text-black" />
            </div>
            <div className="h-4 w-4 bg-wu-official transform rotate-45 -mt-2 mx-auto"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  lang = "pl",
  className = "",
  icon,
}: {
  href: string;
  children: React.ReactNode;
  lang?: string;
  className?: string;
  icon?: React.ReactNode;
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
        className={`group flex items-center hover:text-black transition-colors duration-200 text-sm ${className}`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        <span>{children}</span>
        {!icon && (
          <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        )}
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
      <h3 className="text-sm font-bold text-black tracking-wider uppercase mb-4 border-b border-black/20 pb-2">
        {title}
      </h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

// Agent Login Button Component
function AgentLoginButton({ lang = "pl" }: { lang?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Link
        href={`/${lang}/login`}
        className="flex flex-col items-center justify-center bg-black text-wu-official p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-wu-official"
      >
        <Shield className="h-10 w-10 mb-3" />
        <h3 className="text-lg font-bold mb-1">Strefa Agenta</h3>
        <p className="text-xs text-center text-wu-official/80 mb-3">
          Bezpieczny dostęp do Twojego konta agenta
        </p>
        <div className="flex items-center justify-center bg-wu-official text-black font-bold py-2 px-4 rounded-md mt-2 w-full">
          <LogIn className="h-4 w-4 mr-2" />
          <span>Zaloguj się</span>
        </div>
      </Link>
    </motion.div>
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
    { code: "pl", flag: "/flags/pl.svg", alt: "Polski" },
    { code: "en", flag: "/flags/gb.svg", alt: "English" },
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
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-3">
        <Globe className="h-4 w-4 text-wu-official mr-1" />
        {languages.map((language) => (
          <motion.div
            key={language.code}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={getLanguageUrl(language.code)}
              className={`relative flex items-center justify-center overflow-hidden w-8 h-6 border ${
                currentLang === language.code
                  ? "ring-2 ring-wu-official border-wu-official"
                  : "border-gray-700 opacity-70 hover:opacity-100 hover:border-wu-official"
              } transition-all duration-200 shadow-sm`}
              title={language.alt}
            >
              <Image
                src={language.flag || "/placeholder.svg"}
                alt={language.alt}
                fill
                className="object-cover"
                sizes="32px"
              />
            </Link>
          </motion.div>
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
    <footer id="footer" className="relative">
      {/* Diagonal divider */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-wu-official to-yellow-500 transform -skew-y-2 z-10"></div>

      {/* Main footer content */}
      <div className="relative pt-32 pb-24 bg-gradient-to-b from-wu-official to-yellow-500 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-black/5 -skew-y-2 z-20"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-black/5 rounded-tl-full z-5"></div>
        <div className="absolute top-40 right-10 w-20 h-20 rounded-full bg-black/5 z-5"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-black/5 z-5"></div>

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
          <div className="mt-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and description - on the left */}
            <div className="col-span-2 md:col-span-5 order-1 md:order-1">
              <motion.div
                className="flex flex-wrap items-center gap-8 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Official Partner */}
                <div className="flex flex-col w-fit text-center items-center">
                  <div className="relative h-12 w-36">
                    <Image
                      src="/wu-logo-black.svg"
                      alt="WU logo black"
                      fill
                      className="object-contain mt-2"
                    />
                  </div>
                  <dt className="text-xs font-bold text-black mt-2">
                    Officjalny Partner
                  </dt>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="/logo-black-nobg-3.png"
                    alt="Twister MT Logo"
                    width={180}
                    height={72}
                    className="object-contain"
                  />
                </div>
              </motion.div>

              <motion.p
                className="text-black/80 max-w-[500px] text-sm mt-6 pr-4 leading-relaxed border-l-4 border-black/20 pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {dict.footer?.company?.description}
              </motion.p>
            </div>

            {/* Footer links columns */}
            <div className="col-span-1 md:col-span-2 order-2 md:order-2 !text-black">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
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
              </motion.div>
            </div>

            <div className="col-span-1 md:col-span-2 order-3 md:order-3 !text-black z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
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
              </motion.div>
            </div>

            {/* Agent Login - Separate and distinct */}
            <div className="col-span-1 md:col-span-3 order-4 md:order-4 !text-black z-50">
              <AgentLoginButton lang={lang} />
            </div>
          </div>
        </Container>
      </div>

      {/* Black background section with language switcher and copyright */}
      <div className="bg-black py-6">
        <Container>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-wu-official text-sm font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {dict.footer?.company?.copyright?.replace(
                "{year}",
                year.toString()
              )}
            </motion.p>

            <div className="flex flex-col md:flex-row items-center gap-6 mt-6 md:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link
                  href={`/${lang}/rodo`}
                  className="text-wu-official text-sm hover:opacity-80 transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  {dict.footer?.company?.privacyPolicy || "RODO/GDPR"}
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  href={`/${lang}/polityka-prywatnosci`}
                  className="text-wu-official text-sm hover:opacity-80 transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  {dict.footer?.company?.privacyPolicy ||
                    "Privacy Policy/Cookies"}
                </Link>
              </motion.div>
              <motion.div
                className="mt-4 md:mt-0"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <LanguageSwitcher
                  currentLang={lang}
                  currentPath={currentPath}
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
