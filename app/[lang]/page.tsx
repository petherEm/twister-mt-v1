import Hero from "@/components/main/hero";
import AboutUs from "@/components/main/about-us";
import AboutWU from "@/components/main/about-wu";
import AboutPrices from "@/components/main/about-prices";
import { Testimonials } from "@/components/testimonials";
import { MidBannerLogo } from "@/components/mid-banner-logo";
import { getDictionary } from "@/lib/dictionary";
import BecomeAgentMain from "@/components/main/become-agent-main";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl" | "ua");

  return (
    <div className="overflow-hidden">
      <Hero dict={dict} />
      <main>
        <MidBannerLogo dict={dict} />
        {/* <div id="o-nas" className="bg-wu-official">
          <AboutUs dict={dict} lang={lang} />
        </div> */}
        <div id="o-nas" className="bg-wu-official">
          <BecomeAgentMain dict={dict} lang={lang} />
        </div>
        <div className="bg-black">
          <AboutWU dict={dict} lang={lang} />
        </div>
        <div id="wyslij" className="bg-black">
          <AboutPrices dict={dict} lang={lang} />
        </div>
      </main>
      <Testimonials dict={dict} lang={lang} />
    </div>
  );
}
