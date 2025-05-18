"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "./util/link";
import Image from "next/image";

import { PlusGrid, PlusGridItem, PlusGridRow } from "./util/plus-grid";

// Updated getLinks function to include language in URLs
function getLinks(dict: any, lang: string = "pl") {
  return [
    {
      href: `/${lang}/agent`,
      label: dict?.navbar?.becomeAgent || "Zostań agentem",
    },
    { href: `/${lang}#o-nas`, label: dict?.navbar?.aboutUs || "O nas" },
    {
      href: `/${lang}/western-union`,
      label: dict?.navbar?.westernUnion || "Western Union",
    },
    {
      href: `/${lang}/wyslij-odbierz`,
      label: dict?.navbar?.trackTransfer || "Wyślij/odbierz",
    },
    { href: `/${lang}#footer`, label: dict?.navbar?.contact || "Kontakt" },
  ];
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
    <div className="flex items-center gap-2">
      {languages.map((language) => (
        <Link
          key={language.code}
          href={getLanguageUrl(language.code)}
          className={`relative flex items-center justify-center rounded overflow-hidden w-4 h-4 ${
            currentLang === language.code
              ? "ring-2 ring-white ring-opacity-70"
              : "opacity-70 hover:opacity-100"
          }`}
          title={language.alt}
        >
          <Image
            src={language.flag}
            alt={language.alt}
            fill
            className="object-cover"
          />
        </Link>
      ))}
    </div>
  );
}

function DesktopNav({
  links,
}: {
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-white relative group transition-colors duration-200 ease-out hover:text-[#FFCC00]"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  );
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-wu-official data-hover:text-black lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  );
}

function MobileNav({
  links,
  lang,
  currentPath,
}: {
  links: Array<{ href: string; label: string }>;
  lang: string;
  currentPath?: string;
}) {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-white">
              {label}
            </Link>
          </motion.div>
        ))}

        {/* Language switcher in mobile menu */}
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.15,
            ease: "easeInOut",
            rotateX: { duration: 0.3, delay: links.length * 0.1 },
          }}
          className="mt-2"
        >
          <div className="flex items-center gap-2 py-2">
            <span className="text-base font-medium text-white mr-2">
              Language:
            </span>
            <LanguageSwitcher currentLang={lang} currentPath={currentPath} />
          </div>
        </motion.div>
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  );
}

export function Navbar({
  banner,
  dict = {},
  lang = "pl",
  currentPath,
}: {
  banner?: React.ReactNode;
  dict?: any;
  lang?: string;
  currentPath?: string;
}) {
  const links = getLinks(dict, lang);

  return (
    <Disclosure as="header" className="pt-2 sm:pt-2 ">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href={`/${lang}`} title="Home">
                <div className="flex items-center justify-start">
                  <Image
                    src="/wu-official-partner-3.png"
                    alt="Logo"
                    width={120}
                    height={100}
                    className="bg-black"
                  />
                  <Image
                    src="/mt-logo-4.png"
                    alt="Logo"
                    width={120}
                    height={100}
                    className="bg-black mt-1"
                  />
                </div>
              </Link>
            </PlusGridItem>

            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <div className="flex items-center">
            <DesktopNav links={links} />

            {/* Desktop language switcher - moved closer to menu */}
            <div className="hidden lg:flex items-center pl-2">
              <LanguageSwitcher currentLang={lang} currentPath={currentPath} />
            </div>
          </div>

          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav links={links} lang={lang} currentPath={currentPath} />
    </Disclosure>
  );
}
