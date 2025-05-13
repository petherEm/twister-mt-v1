import { AnimatedNumber } from "@/components/util/animated-number";
import Image from "next/image";
import { Container } from "@/components/util/container";
import { GradientBackground } from "@/components/util/gradient";
import { Heading, Lead, Subheading } from "@/components/util/text";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Western Union",
  description:
    "Western Union is a global leader in cross-border, cross-currency money movement and payments.",
};

type HeaderProps = {
  dict: {
    westernUnion: {
      images: {
        headquarters: string;
      };
      title: string;
      lead: string;
      services: {
        title: string;
        items: Array<{
          title: string;
          description: string;
        }>;
      };
      stats: {
        title: string;
        yearsInBusiness: string;
        countriesAndTerritories: string;
        locations: string;
        transactionsPerSecond: string;
      };
      history: {
        title: string;
        lead: string;
        paragraphs: string[];
        images: {
          headquarters: string;
          telegraphEquipment: string;
          telegraphStation: string;
          telegraphOperator: string;
        };
      };
      faq?: {
        title: string;
        subtitle: string;
        items: Array<{
          question: { [key: string]: string };
          answer: { [key: string]: string };
        }>;
      };
    };
  };
};
type WUHistoryProps = {
  dict: {
    westernUnion: {
      history?: {
        title?: string;
        lead?: string;
        paragraphs?: string[];
        images?: {
          headquarters?: string;
          telegraphEquipment?: string;
          telegraphStation?: string;
          telegraphOperator?: string;
        };
      };
    };
  };
};

type FAQProps = {
  dict: {
    westernUnion: {
      faq?: {
        title?: string;
        subtitle?: string;
        items?: Array<{
          question: { [key: string]: string };
          answer: { [key: string]: string };
        }>;
      };
    } & Record<string, any>;
  };
  lang: string;
};

function Header({ dict }: HeaderProps) {
  return (
    <Container className="mt-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:max-w-3xl">
          <Heading as="h1" className="!font-bold text-white">
            Western Union
          </Heading>
          <Lead className="mt-6 text-white">{dict.westernUnion.lead}</Lead>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-8 lg:flex-shrink-0">
          <Image
            src="/wu-hq-03.webp"
            alt={dict.westernUnion.images.headquarters}
            width={600}
            height={300}
            className="mx-auto w-full lg:mx-0 lg:max-w-[480px]"
            priority
          />
        </div>
      </div>

      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 mb-20">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">
            {dict.westernUnion.services.title}
          </h2>
          <ul className="mt-6 space-y-4 text-sm/6 text-white">
            {dict.westernUnion.services.items.map(
              (item: { title: string; description: string }, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-wu-official text-lg">■</span>
                  <span>
                    <strong>{item.title}:</strong> {item.description}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="text-white">
          <Subheading className="text-white">
            {dict.westernUnion.stats.title}
          </Subheading>
          <hr className="mt-6 border-t border-gray-800" />
          <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-x-8">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-800 pb-4">
              <dt className="text-sm/6 text-white">
                {dict.westernUnion.stats.yearsInBusiness}
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={170} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-800 pb-4">
              <dt className="text-sm/6 text-white">
                {dict.westernUnion.stats.countriesAndTerritories}
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={200} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-800 pb-4 sm:border-b-0">
              <dt className="text-sm/6 text-white">
                {dict.westernUnion.stats.locations}
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={500} decimals={1} />k
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-white">
                {dict.westernUnion.stats.transactionsPerSecond}
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={100} />
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  );
}

function WUHistory({ dict }: WUHistoryProps) {
  return (
    <Container className="mt-16 bg-wu-official py-16">
      <div id="history" className="flex flex-col lg:flex-row lg:gap-12">
        {/* Left column - Photo grid (swapped from right) */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="overflow-hidden">
              <Image
                src="/wu-hq-03.webp"
                alt={
                  dict.westernUnion.history?.images?.headquarters ||
                  "Western Union Headquarters"
                }
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                priority
              />
              <div className="p-3">
                <p className="text-sm font-medium text-black">
                  {dict.westernUnion.history?.images?.headquarters ||
                    "Western Union Headquarters"}
                </p>
              </div>
            </div>

            <div className="overflow-hidden">
              <Image
                src="/wu-telegraph-01.jpg"
                alt={
                  dict.westernUnion.history?.images?.telegraphEquipment ||
                  "Historical Telegraph Equipment"
                }
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                priority
              />
              <div className="p-3">
                <p className="text-sm font-medium text-black">
                  {dict.westernUnion.history?.images?.telegraphEquipment ||
                    "Historical Telegraph Equipment"}
                </p>
              </div>
            </div>

            <div className="overflow-hidden">
              <Image
                src="/wu-telegraph-02.webp"
                alt={
                  dict.westernUnion.history?.images?.telegraphStation ||
                  "Telegraph Station"
                }
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                priority
              />
              <div className="p-3">
                <p className="text-sm font-medium text-black">
                  {dict.westernUnion.history?.images?.telegraphStation ||
                    "Telegraph Station"}
                </p>
              </div>
            </div>

            <div className="overflow-hidden">
              <Image
                src="/wu-telegraph-03.jpg"
                alt={
                  dict.westernUnion.history?.images?.telegraphOperator ||
                  "Telegraph Operator"
                }
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                priority
              />
              <div className="p-3">
                <p className="text-sm font-medium text-black">
                  {dict.westernUnion.history?.images?.telegraphOperator ||
                    "Telegraph Operator"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Text content (swapped from left) */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <Heading as="h1" className="!font-bold text-black">
            {dict.westernUnion.history?.title || "History Brief"}
          </Heading>
          <Lead className="mt-6 text-black">
            {dict.westernUnion.history?.lead ||
              "Western Union was founded in 1851 as a telegraph company and has evolved into a global leader in cross-border, cross-currency money movement and payments."}
          </Lead>

          <div className="mt-8 space-y-6 text-black">
            {dict.westernUnion.history?.paragraphs ? (
              dict.westernUnion.history.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                )
              )
            ) : (
              <>
                <p>
                  The company began as a telegraph service provider,
                  revolutionizing communication across the United States. By
                  1861, Western Union had completed the first transcontinental
                  telegraph line, connecting the east and west coasts.
                </p>
                <p>
                  In 1871, Western Union introduced money transfer services,
                  which would eventually become the company's primary business.
                  Throughout the 20th century, Western Union continued to expand
                  its services and global reach.
                </p>
                <p>
                  Today, with a presence in over 200 countries and territories,
                  WU has adapted to the changing needs of customers, offering a
                  wide range of financial services that connect people and
                  businesses worldwide.
                </p>
                <p>
                  Western Union's legacy of innovation continues as it embraces
                  digital transformation while maintaining its commitment to
                  serving communities globally.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

function FrequentlyAskedQuestions({ dict, lang }: FAQProps) {
  // Default to English if the current language is not supported
  const language = ["en", "pl", "ua"].includes(lang) ? lang : "en";

  return (
    <Container className="py-16">
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center text-wu-official">
          {dict.westernUnion.faq?.title || "Frequently asked questions"}
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          {dict.westernUnion.faq?.subtitle || "Your questions answered."}
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          {FAQ_ITEMS.slice(0, 5).map((item, index) => (
            <dl key={index}>
              <dt className="text-sm font-semibold">
                {item.question[language as keyof typeof item.question]}
              </dt>
              <dd className="mt-4 text-sm/6 text-gray-400">
                {item.answer[language as keyof typeof item.answer]}
              </dd>
            </dl>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default async function WesternUnion({
  params,
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang as "en" | "pl" | "ua");

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Header dict={dict} />
      <WUHistory dict={dict} />
      <FrequentlyAskedQuestions dict={dict} lang={params.lang} />
    </main>
  );
}
