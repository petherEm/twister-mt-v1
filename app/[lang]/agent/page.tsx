import { Container } from "@/components/util/container";
import Image from "next/image";
import { Heading, Lead, Subheading } from "@/components/util/text";
import {
  Globe,
  Clock,
  Users,
  Award,
  Medal,
  Phone,
  Banknote,
} from "lucide-react";
import AgentForm from "@/components/main/agent-form";
import type { Metadata } from "next";
import { BECOME_AGENT_FAQ } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionary";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Zostań agentem",
  description:
    "Zostań agentem Western Union i zarabiaj na transakcjach międzynarodowych.",
  openGraph: {
    title: "Zostań agentem",
    description:
      "Zostań agentem Western Union i zarabiaj na transakcjach międzynarodowych.",
    url: "https://www.westernunion.com/agent",
    images: [
      {
        url: "https://www.westernunion.com/agent/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Western Union",
  },
};

function Header({ dict }: { dict: any }) {
  return (
    <Container className="mt-16 flex items-center justify-center">
      <Heading className="mt-12 text-white text-center mb-10" as="h1">
        {dict.agent.header.title}
      </Heading>
      <Lead className="mt-10 mb-10 text-center max-w-5xl text-white/75">
        {dict.agent.header.subtitle}
      </Lead>
    </Container>
  );
}

function FormContainer({ dict, lang }: { dict: any; lang: string }) {
  return (
    <Container className="mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="prose prose-lg prose-invert">
          <h2 className="text-2xl font-bold text-white mb-4">
            {dict.agent.form.title}
          </h2>
          <p className="text-white/80 mb-6">{dict.agent.form.subtitle}</p>

          <div className="mt-12 space-y-10">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-wu-official">
                <Banknote size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {dict.agent.form.benefits.earnings.title}
                </h3>
                <p className="text-white/70">
                  {dict.agent.form.benefits.earnings.description}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-wu-official">
                <Globe size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {dict.agent.form.benefits.global.title}
                </h3>
                <p className="text-white/70">
                  {dict.agent.form.benefits.global.description}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-wu-official">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {dict.agent.form.benefits.innovative.title}
                </h3>
                <p className="text-white/70">
                  {dict.agent.form.benefits.innovative.description}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-wu-official">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {dict.agent.form.benefits.customers.title}
                </h3>
                <p className="text-white/70">
                  {dict.agent.form.benefits.customers.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 shadow-lg backdrop-blur-sm border border-wu-official">
          <AgentForm dict={dict} lang={lang} />
        </div>
      </div>
    </Container>
  );
}

function Benefits({ dict }: { dict: any }) {
  return (
    <Container className="mt-24 mb-24 bg-wu-official">
      <div className="rounded-2xl py-16 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Heading className="text-black" as="h1">
            {dict.agent.brand.title}
          </Heading>

          <p className="mt-10 text-lg text-black/90 leading-relaxed">
            {dict.agent.brand.description}
          </p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 relative pt-16">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <Award size={40} className="text-wu-official" />
          </div>
          <h3 className="text-xl font-semibold text-black mb-4 text-center">
            {dict.agent.offerings.tools.title}
          </h3>
          <p className="text-black text-center">
            {dict.agent.offerings.tools.description}
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 relative pt-16">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <Medal size={40} className="text-wu-official" />
          </div>
          <h3 className="text-xl font-semibold text-black mb-4 text-center">
            {dict.agent.offerings.starter.title}
          </h3>
          <p className="text-black text-center">
            {dict.agent.offerings.starter.description}
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 relative pt-16">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <Phone size={40} className="text-wu-official" />
          </div>
          <h3 className="text-xl font-semibold text-black mb-4 text-center">
            {dict.agent.offerings.support.title}
          </h3>
          <p className="text-black text-center">
            {dict.agent.offerings.support.description}
          </p>
        </div>
      </div>
    </Container>
  );
}

function Testimonial({ dict }: { dict: any }) {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-wu-official pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl  outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt=""
                    src="/concept-store-4.jpg"
                    className="aspect-3/4 w-full object-cover"
                    width={384}
                    height={384}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-black before:absolute before:-translate-x-full lg:text-4xl">
                  {dict.agent.testimonial.quote}
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-black">
                  {dict.agent.testimonial.name}
                </p>
                <p className="text-sm/6 font-medium">
                  <span className="text-wu-official bg-clip-text ">
                    {dict.agent.testimonial.title}
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  );
}

function FrequentlyAskedQuestions({
  dict,
  lang = "en",
}: {
  dict: any;
  lang?: string;
}) {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          {dict.agent.faq.subheading}
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          {dict.agent.faq.heading}
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl">
          <Accordion type="single" collapsible className="w-full">
            {BECOME_AGENT_FAQ.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-sm font-semibold text-left">
                  {faq.question[lang as keyof typeof faq.question] ||
                    faq.question.en}
                </AccordionTrigger>
                <AccordionContent className="text-sm/6 text-gray-400">
                  {faq.answer[lang as keyof typeof faq.answer] || faq.answer.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Container>
  );
}

export default async function Agent({ params }: { params: { lang: string } }) {
  // Await the params object before accessing lang
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const dict = await getDictionary(lang as "en" | "pl" | "ua");

  return (
    <main className="overflow-hidden">
      <Header dict={dict} />
      <FormContainer dict={dict} lang={lang} />
      <Benefits dict={dict} />
      <Testimonial dict={dict} />
      <FrequentlyAskedQuestions dict={dict} lang={lang} />
    </main>
  );
}
