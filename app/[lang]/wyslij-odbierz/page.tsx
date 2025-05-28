import Image from "next/image";
import { Button } from "@/components/util/button";
import { Container } from "@/components/util/container";
import { GradientBackground } from "@/components/util/gradient";
import { Heading, Lead } from "@/components/util/text";
import { getDictionary } from "@/lib/dictionary";
import type { Metadata } from "next";

import {
  Banknote,
  Landmark,
  AlertCircle,
  MapPin,
  FileCheck,
  UserCheck,
  DollarSign,
  HelpCircle,
  ArrowRight,
  Send,
  CreditCard,
  Globe,
  Receipt,
} from "lucide-react";
import { COUNTRY_PRICING } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as "en" | "pl" | "ua");
  return {
    title: dict.trackTransfer.metadata.title,
    description: dict.trackTransfer.metadata.description,
  };
}

type HeaderProps = {
  dict: {
    trackTransfer: {
      title: string;
      lead: string;
      howItWorks: {
        title: string;
        description1: string;
        description2: string;
      };
      trackButton: string;
      redirectNotice: string;
      image: {
        alt: string;
      };
    };
  };
};

function AboutPrices({ dict, lang }: { dict: any; lang: string }) {
  return (
    <>
      {/* Hero Section */}
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-16 lg:gap-8 lg:items-start">
          {/* Left content column - takes 6 of 12 columns */}
          <div className="lg:col-span-7 z-10 flex flex-col justify-center h-full">
            <h1 className="font-display text-5xl font-bold tracking-normal text-balance text-wu-official sm:text-7xl md:text-7xl">
              {dict.prices.title}
            </h1>
            <p className="mt-8 max-w-lg text-lg/7 font-medium text-white sm:text-xl/8">
              We are waiting for you at our office in Wrocław.
            </p>
            <div className="mt-10">
              <Button variant="primary" href="/wyslij-odbierz">
                Contact us
              </Button>
            </div>
          </div>

          {/* Right image column - takes 10 of 16 columns */}
          <div className="lg:col-span-9 mt-4 lg:mt-0 relative">
            <div className="relative overflow-hidden h-full max-h-[90vh]">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 z-10"></div>

              {/* Additional vignette effect */}
              <div className="absolute inset-0 bg-radial-gradient z-10 opacity-40"></div>

              <Image
                src="/hero-4.jpg"
                alt="Money transfer service"
                width={900}
                height={1000}
                className="object-contain lg:object-cover h-auto w-full max-h-[90vh]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-16">
        {/* Country Pricing Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-medium text-white tracking-tight mb-6">
            {dict.prices.rates}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COUNTRY_PRICING.map((country) => (
              <div
                key={country.id}
                className="group overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div className="flex h-full">
                  {/* Flag Section (1/5 width) */}
                  <div className="w-1/5 relative bg-gray-800 flex items-center justify-start pl-2 py-3 rounded-l-xl">
                    <div className="relative w-[85%] aspect-square overflow-hidden rounded-full border-2 border-yellow-500 shadow-md">
                      <Image
                        src={`/flags/${country.countryCode}.svg`}
                        alt={`${
                          country.name[lang as keyof typeof country.name]
                        } Flag`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Pricing Section (4/5 width) */}
                  <div className="w-4/5 bg-transparent p-4">
                    <h3 className="text-sm font-semibold text-white mb-2 truncate">
                      {country.name[lang as keyof typeof country.name]}
                    </h3>

                    {/* Transfer Types - Side by Side */}
                    <div className="flex space-x-4">
                      {/* To Cash */}
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className="p-1 bg-gray-800 rounded-md">
                            <Banknote className="h-3 w-3 text-yellow-500" />
                          </div>
                          <span className="font-medium text-gray-300 text-xs">
                            {dict.prices.toCash}
                          </span>
                        </div>
                        <div>
                          <p className="flex items-baseline">
                            <span className="text-gray-400 text-[10px]">
                              {dict.prices.from}
                            </span>
                            <span className="font-bold text-sm text-yellow-400 ml-1">
                              {country.cash.price} PLN
                            </span>
                          </p>
                          <p className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">
                            {lang === "en"
                              ? country.cash.timeEn
                              : lang === "pl"
                                ? country.cash.timePl
                                : country.cash.timeUa}
                          </p>
                        </div>
                      </div>

                      {/* To Bank Account */}
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className="p-1 bg-gray-800 rounded-md">
                            <Landmark className="h-3 w-3 text-yellow-500" />
                          </div>
                          <span className="font-medium text-gray-300 text-xs">
                            {dict.prices.toBank}
                          </span>
                        </div>
                        <div>
                          <p className="flex items-baseline">
                            <span className="text-gray-400 text-[10px]">
                              {dict.prices.from}
                            </span>
                            <span className="font-bold text-sm text-yellow-400 ml-1">
                              {country.bank.price} PLN
                            </span>
                          </p>
                          <p className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">
                            {lang === "en"
                              ? country.bank.timeEn
                              : lang === "pl"
                                ? country.bank.timePl
                                : country.bank.timeUa}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Send Money Transfer Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-medium text-white tracking-tight mb-8">
            {dict.prices.howToSend?.title || "How to Send a Money Transfer"}
          </h2>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* If dict.prices.howToSend.steps exists, use it, otherwise use the placeholder steps */}
              {(
                dict.prices.howToSend?.steps || [
                  {
                    title: "Visit an Agent Location",
                    description:
                      "Find your nearest Western Union agent location using our locator tool.",
                  },
                  {
                    title: "Provide Recipient Details",
                    description:
                      "Share the recipient's name and destination country. For bank transfers, you'll need their account information.",
                  },
                  {
                    title: "Show Valid ID",
                    description:
                      "Present a government-issued photo ID and provide your contact information.",
                  },
                  {
                    title: "Pay for Your Transfer",
                    description:
                      "Pay the transfer amount plus fees using your preferred payment method.",
                  },
                  {
                    title: "Get Your Receipt",
                    description:
                      "Keep your receipt with the tracking number (MTCN) to share with your recipient and track your transfer.",
                  },
                ]
              ).map((step: any, index: number) => (
                <div key={index} className="flex flex-col group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-yellow-500 font-semibold group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                      {index + 1}
                    </div>
                    <div className="flex items-center gap-2">
                      {index === 0 ? (
                        <MapPin className="h-5 w-5 text-yellow-500" />
                      ) : index === 1 ? (
                        <Globe className="h-5 w-5 text-yellow-500" />
                      ) : index === 2 ? (
                        <UserCheck className="h-5 w-5 text-yellow-500" />
                      ) : index === 3 ? (
                        <CreditCard className="h-5 w-5 text-yellow-500" />
                      ) : index === 4 ? (
                        <Receipt className="h-5 w-5 text-yellow-500" />
                      ) : (
                        <Send className="h-5 w-5 text-yellow-500" />
                      )}
                      <h3 className="font-medium text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 ml-11">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Receive Money Transfer Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-medium text-white tracking-tight mb-8">
            {dict.prices.howToReceive.title}
          </h2>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dict.prices.howToReceive.steps.map(
                (step: any, index: number) => (
                  <div key={index} className="flex flex-col group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-yellow-500 font-semibold group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                        {index + 1}
                      </div>
                      <div className="flex items-center gap-2">
                        {index === 0 ? (
                          <MapPin className="h-5 w-5 text-yellow-500" />
                        ) : index === 1 ? (
                          <FileCheck className="h-5 w-5 text-yellow-500" />
                        ) : index === 2 ? (
                          <UserCheck className="h-5 w-5 text-yellow-500" />
                        ) : index === 3 ? (
                          <DollarSign className="h-5 w-5 text-yellow-500" />
                        ) : index === 4 ? (
                          <HelpCircle className="h-5 w-5 text-yellow-500" />
                        ) : (
                          <ArrowRight className="h-5 w-5 text-yellow-500" />
                        )}
                        <h3 className="font-medium text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 ml-11">
                      {step.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        {/* <section className="mt-16 mb-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-lg">
            <h2 className="text-md font-bold tracking-tight text-white">
              {dict.prices.disclaimer.title}
            </h2>
            <ul className="mt-6 space-y-4 text-sm/6 text-white">
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0 text-yellow-500">
                  <AlertCircle className="h-5 w-5" />
                </span>

                <span className="text-xs text-gray-300">
                  {dict.prices.disclaimer.westernUnionNotice}
                </span>
              </li>
            </ul>
          </div>
        </section> */}
      </Container>
    </>
  );
}

function Header({ dict }: HeaderProps) {
  return (
    <Container className="mt-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-16 lg:gap-8 lg:items-start">
        {/* Left content column - takes 6 of 12 columns */}
        <div className="lg:col-span-6 z-10">
          <Heading as="h1" className="text-white">
            {dict.trackTransfer.title}
          </Heading>
          <Lead className="mt-6 max-w-3xl text-white">
            {dict.trackTransfer.lead}
          </Lead>
          <div className="mt-10">
            <Button
              as="a"
              href="https://www.westernunion.com/web/global-service/track-transfer"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.trackTransfer.trackButton}
            </Button>
            <p className="mt-4 text-xs text-white/70">
              {dict.trackTransfer.redirectNotice}
            </p>
          </div>

          <div className="mt-16 mb-16 max-w-lg">
            <h2 className="text-2xl font-medium tracking-tight">
              {dict.trackTransfer.howItWorks.title}
            </h2>
            <p className="mt-6 text-sm/6 text-white">
              {dict.trackTransfer.howItWorks.description1}
            </p>
            <p className="mt-8 text-sm/6 text-white">
              {dict.trackTransfer.howItWorks.description2}
            </p>
          </div>
        </div>

        {/* Right image column - takes 6 of 12 columns and extends to edge */}
        <div className="lg:col-span-10 mt-16 lg:mt-0 relative ">
          <div className="relative overflow-hidden h-full">
            {/* Gradient overlay - stronger gradient from left */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 z-10"></div>

            {/* Additional vignette effect for better blending */}
            <div className="absolute inset-0 bg-radial-gradient z-10 opacity-40"></div>

            <Image
              alt={dict.trackTransfer.image.alt}
              src="/concept-store.webp"
              width={900}
              height={1000}
              className="object-contain lg:object-cover h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default async function TrackTransfer({
  params,
}: {
  params: { lang: string };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang as "en" | "pl" | "ua");

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <AboutPrices dict={dict} lang={lang} />
      <Header dict={dict} />
    </main>
  );
}
