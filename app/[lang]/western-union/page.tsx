import { AnimatedNumber } from "@/components/util/animated-number";
import Image from "next/image";
import { Container } from "@/components/util/container";
import { GradientBackground } from "@/components/util/gradient";
import { Heading, Lead, Subheading } from "@/components/util/text";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { FAQ_ITEMS } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HistoryPage } from "@/components/history";

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
          <div className="w-full lg:max-w-[480px] mx-auto lg:mx-0 relative">
            <video
              src="/WU_animated_logo.mp4"
              poster="/wu-hq-03.webp"
              width={600}
              height={300}
              className="w-full"
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Fallback for browsers that don't support video */}
            <noscript>
              <Image
                src="/wu-hq-03.webp"
                alt={dict.westernUnion.images.headquarters}
                width={600}
                height={300}
                className="mx-auto w-full lg:mx-0 lg:max-w-[480px]"
                priority
              />
            </noscript>
          </div>
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
          <hr className="mt-6 border-t border-gray-800" />
          <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-x-8">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-800 pb-4">
              <dt className="text-sm/6 text-white">
                {dict.westernUnion.stats.yearsInBusiness}
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={175} />
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
                <AnimatedNumber start={0} end={500} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-white">
                {dict.westernUnion.stats.transactionsPerSecond}
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={10} />
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  );
}

function FrequentlyAskedQuestions({ dict, lang }: FAQProps) {
  // Default to English if the current language is not supported
  const language = ["en", "pl", "ua"].includes(lang) ? lang : "en";

  return (
    <Container className="py-16">
      <section id="faqs" className="scroll-mt-8">
        <Heading className="text-center text-wu-official">
          {dict.westernUnion.faq?.title || "Frequently asked questions"}
        </Heading>

        <div className="mx-auto mt-12 mb-10 max-w-xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.slice(0, 5).map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-sm font-semibold text-left">
                  {item.question[language as keyof typeof item.question]}
                </AccordionTrigger>
                <AccordionContent className="text-sm/6 text-gray-400">
                  {item.answer[language as keyof typeof item.answer]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang as "en" | "pl" | "ua");

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Header dict={dict} />
      <HistoryPage dict={dict} lang={lang} />
      <FrequentlyAskedQuestions dict={dict} lang={lang} />
    </main>
  );
}
