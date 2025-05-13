import Image from "next/image";
import { Container } from "@/components/util/container";
import { Heading } from "@/components/util/text";
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
} from "lucide-react";
import { COUNTRY_PRICING } from "@/lib/constants";

function Header({ dict, lang }: { dict: any; lang: string }) {
  return (
    <Container className="mt-16">
      <Heading as="h1" className="!font-bold text-black">
        {dict.prices.title}
      </Heading>

      {/* Country Pricing Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-medium text-black tracking-tight mb-6">
          {dict.prices.rates}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COUNTRY_PRICING.map((country) => (
            <div
              key={country.id}
              className="group overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div className="flex h-full">
                {/* Flag Section (1/5 width) */}
                <div className="w-1/5 relative bg-gray-50 flex items-center justify-start pl-2 py-3">
                  <div className="relative w-[85%] aspect-square overflow-hidden rounded-full border-2 border-white shadow-sm">
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
                <div className="w-4/5 bg-white p-3">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 truncate">
                    {country.name[lang as keyof typeof country.name]}
                  </h3>

                  {/* Transfer Types - Side by Side */}
                  <div className="flex space-x-4">
                    {/* To Cash */}
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="p-0.5 bg-gray-50 rounded-md">
                          <Banknote className="h-3 w-3 text-gray-700" />
                        </div>
                        <span className="font-medium text-gray-800 text-xs">
                          {dict.prices.toCash}
                        </span>
                      </div>
                      <div>
                        <p className="flex items-baseline">
                          <span className="text-gray-500 text-[10px]">
                            {dict.prices.from}
                          </span>
                          <span className="font-bold text-sm text-gray-900 ml-1">
                            {country.cash.price} PLN
                          </span>
                        </p>
                        <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">
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
                        <div className="p-0.5 bg-gray-50 rounded-md">
                          <Landmark className="h-3 w-3 text-gray-700" />
                        </div>
                        <span className="font-medium text-gray-800 text-xs">
                          {dict.prices.toBank}
                        </span>
                      </div>
                      <div>
                        <p className="flex items-baseline">
                          <span className="text-gray-500 text-[10px]">
                            {dict.prices.from}
                          </span>
                          <span className="font-bold text-sm text-gray-900 ml-1">
                            {country.bank.price} PLN
                          </span>
                        </p>
                        <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">
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

      {/* How to Receive Money Transfer Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-medium text-black tracking-tight mb-8">
          {dict.prices.howToReceive.title}
        </h2>

        <div className="bg-white border border-gray-100 shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.prices.howToReceive.steps.map((step: any, index: number) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex items-center gap-2">
                    {index === 0 ? (
                      <MapPin className="h-5 w-5 text-gray-700" />
                    ) : index === 1 ? (
                      <FileCheck className="h-5 w-5 text-gray-700" />
                    ) : index === 2 ? (
                      <UserCheck className="h-5 w-5 text-gray-700" />
                    ) : index === 3 ? (
                      <DollarSign className="h-5 w-5 text-gray-700" />
                    ) : index === 4 ? (
                      <HelpCircle className="h-5 w-5 text-gray-700" />
                    ) : (
                      <ArrowRight className="h-5 w-5 text-gray-700" />
                    )}
                    <h3 className="font-medium text-gray-900">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 ml-11">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-16 mb-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-md font-bold tracking-tight text-black">
            {dict.prices.disclaimer.title}
          </h2>
          <ul className="mt-6 space-y-4 text-sm/6 text-black">
            <li className="flex items-start">
              <span className="mr-2 flex-shrink-0 text-red-500">
                <AlertCircle className="h-5 w-5" />
              </span>

              <span className="text-xs">
                {dict.prices.disclaimer.westernUnionNotice}
              </span>
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
}

export default function AboutPrices({
  dict = {},
  lang = "pl",
}: {
  dict?: any;
  lang?: string;
}) {
  return (
    <main className="overflow-hidden">
      <Header dict={dict} lang={lang} />
    </main>
  );
}
