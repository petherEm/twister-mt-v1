import { AnimatedNumber } from "@/components/util/animated-number";
import Image from "next/image";
import { Container } from "@/components/util/container";
import { GradientBackground } from "@/components/util/gradient";
import { Heading, Lead } from "@/components/util/text";
import { Button } from "../util/button";
import { BanknoteArrowUp as CurrencyDollar } from "lucide-react";

function Header({ dict, lang }: { dict: any; lang: string }) {
  return (
    <Container className="mt-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:max-w-3xl">
          <Heading as="h1" className="!font-bold text-white">
            {dict.westernUnion.title}
          </Heading>
          <Lead className="mt-12 text-white">{dict.westernUnion.lead}</Lead>
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
              (item: any, index: number) => (
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
          {/* <Subheading className="text-white">
            {dict.westernUnion.stats.title}
          </Subheading> */}
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

          <div className="mt-8 flex flex-col">
            {/* Compact Agent Recruitment Message */}
            <div className="flex items-center gap-2 mb-2 text-yellow-400">
              <CurrencyDollar className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm font-medium">
                {lang === "en"
                  ? "Join WU network with us and start earning money:"
                  : lang === "pl"
                  ? "Dołącz do sieci WU z nami i zacznij zarabiać:"
                  : "Приєднуйтесь до мережі WU з нами та почніть заробляти:"}
              </p>
            </div>

            <Button variant="primary" className="" href="/agent">
              {dict.hero.becomeAgentButton}
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default function AboutWU({
  dict = {},
  lang = "pl",
}: {
  dict?: any;
  lang?: string;
}) {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Header dict={dict} lang={lang} />
    </main>
  );
}
