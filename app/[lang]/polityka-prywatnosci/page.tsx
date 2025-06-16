import { Container } from "@/components/util/container";
import { Calendar } from "lucide-react";
import { PrintButton } from "@/components/print-button";

interface PrivacyPolicyPageProps {
  params: Promise<{ lang: string }>;
}

export default async function PrivacyPolicyPage({
  params,
}: PrivacyPolicyPageProps) {
  const { lang } = await params;
  const lastUpdated = new Date("2024-05-26");

  return (
    <>
      <Container className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden print:shadow-none">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between print:hidden">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>05.2025</span>
            </div>
            <PrintButton />
          </div>

          <div className="px-6 py-8 md:p-10 prose prose-gray max-w-none text-black">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Polityka Prywatności i Plików Cookies (dalej powoływana jako :
              „Polityka")
            </h1>

            <div className="space-y-8">
              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-lg">
                  Niżej powołana Polityka Prywatności i Plików Cookies określa
                  przede wszystkim cele i zasady przechowywania, a także prawa
                  dostępu do informacji na aparaturach Klientów przy pomocy
                  plików Cookies, dzięki którym możliwa jest realizacja usług
                  świadczonych drogą elektroniczną przez Moneytransfer.pl, z
                  których to czynią użytek Klienci.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
                  1. Definicje
                </h2>
                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      1. Administrator i/lub Moneytransfer.pl
                    </p>
                    <p>
                      RAFAŁ ZAWISZA, prowadzący działalność gospodarczą pod
                      firmą RAFAŁ ZAWISZA TWISTER z siedzibą we Wrocławiu, kod
                      pocztowy 50-011, przy ul. T. Kościuszki 27, będący
                      podatnikiem podatku od towarów i usług VAT, dysponujący
                      numerem identyfikacji podatkowej NIP: 8942376235,
                      posiadający REGON: 931982471, świadczący Usługi Drogą
                      Elektroniczną za pośrednictwem Serwisu, a także
                      przechowujący i nabywający dostęp do informacji w
                      aparaturze, z której korzysta Klient.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">2. Cookies</p>
                    <p>
                      Dane informatyczne, a przede wszystkim nieznacznej
                      wielkości pliki tekstowe, które zapisywane są, a także
                      przechowywane na aparaturze Klientów, przy pomocy której
                      Klient czyni użytek z Serwisu.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">3. Serwis</p>
                    <p>
                      Serwis internetowy, znajdujący się pod adresem:
                      https://moneytransfer.pl, za którego pośrednictwem
                      Moneytransfer.pl świadczy usługi drogą elektroniczną,
                      usługi na odległość przez Centrum informacji
                      Moneytransfer.pl oraz stacjonarnie w Punkcie Obsługi
                      Klienta (POK) Moneytransfer.pl.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      4. Świadczenie Usług Drogą Elektroniczną
                    </p>
                    <p>
                      Przeprowadzanie usług świadczonych przez Moneytransfer.pl
                      bez wymaganej jednoczesnej obecności stron (czyt. na
                      odległość), za pomocą przekazywania danych na indywidualne
                      żądanie Klienta, przesyłanych i odbieranych za pomocą
                      aparatury do elektronicznego przetwarzania (wliczając w to
                      kompresję cyfrową), oraz przechowywania danych, które to
                      są nadawane, odbierane lub transmitowane w całości przy
                      pomocy sieci telekomunikacyjnej w rozumieniu ustawy Prawo
                      komunikacyjne z dnia 16 lipca 2004 r. (Dz. U. Nr 171, poz.
                      1800, z późniejszymi zmianami).
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">5. Aparatura</p>
                    <p>
                      Każda aparatura / urządzenie elektroniczne, za którego
                      pośrednictwem Klient nabywa dostęp do Serwisu.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">6. Klient</p>
                    <p>
                      Osoba korzystająca z usług Moneytransfer.pl za
                      pośrednictwem Serwisu lub pozostałych usług
                      Moneytransfer.pl, która jest stroną umowy o świadczenie
                      usług drogą elektroniczną, do której zastosowanie mają
                      również postanowienia Regulaminu korzystania z serwisu
                      internetowego Moneytransfer.pl zamieszczonego na stronie
                      internetowej Serwisu pod adresem https://moneytransfer.pl
                      a także Regulaminu świadczenia usług drogą elektroniczną,
                      który to zamieszczony jest na stronie internetowej Serwisu
                      pod adresem: https:// moneytransfer.pl oraz Polityka
                      Ochrony Danych Osobowych, która to dostępna jest pod
                      adresem https://moneytransfer.pl.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
                  2. Postanowienia Polityki
                </h2>
                <div className="space-y-4">
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                        <span className="font-semibold text-amber-800">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        {i === 0 && (
                          <p>
                            Moneytransfer.pl świadczy Usługi Drogą
                            Elektroniczną, zgodnie z postanowieniami Regulaminu
                            Świadczenia Usług Drogą Elektroniczną, który to
                            znajduje się na stronie internetowej Serwisu
                            Moneytransfer.pl.
                          </p>
                        )}
                        {i === 1 && (
                          <p>
                            Moneytransfer.pl postępuje zgodnie z prawem do
                            ochrony prywatności i tym samym dokłada wszelkich
                            starań, aby zagwarantować każdej osobie,
                            uzupełniającej formularze kontaktowe, rejestrującej
                            się oraz logującej na stronie Serwisu, że wszystkie
                            dane Cookies będą odpowiednio chronione. Każdy
                            Klient Serwisu pozostaje anonimowy, od indywidualnej
                            decyzji Klienta jest zależne, czy i kiedy wypełni
                            zgłoszenie, dokona logowania czy rejestracji w celu
                            skorzystania z usług świadczonych przez
                            Moneytransfer.pl.
                          </p>
                        )}
                        {i === 2 && (
                          <p>
                            Moneytransfer.pl korzysta z Cookies Własnych, tj.
                            Cookies umieszczanych w Serwisie przez
                            Administratora, oraz Cookies Zewnętrznych, tj.
                            Cookies umieszczanych za pośrednictwem Serwisu przez
                            kontrahentów Administratora.
                          </p>
                        )}
                        {i === 3 && (
                          <p>
                            Moneytransfer.pl przechowuje dane, które zawierane
                            są w logach systemowych, tj. dane, które serwerowi
                            Moneytransfer.pl przekazywane są przez aparaturę
                            Klienta.
                          </p>
                        )}
                        {i === 4 && (
                          <p>
                            Dane wskazane w niniejszym paragrafie wykorzystywane
                            są przez Moneytransfer.pl głównie w celach
                            technicznych, natomiast adresy IP są wykorzystywane
                            przez Moneytransfer.pl do zbierania statystycznych
                            informacji.
                          </p>
                        )}
                        {i === 5 && (
                          <p>
                            W oparciu o zebrane pliki Cookies, dane dotyczące
                            Klientów są przechowywane dla celów marketingowych w
                            ramach własnych Moneytransfer.pl oraz podmiotów
                            trzecich, na co Klient akceptuje wchodząc na stronę
                            internetową Serwisu.
                          </p>
                        )}
                        {i === 6 && (
                          <p>
                            Właściciel Serwisu Moneytransfer.pl zastrzega, iż
                            Serwis wykorzystuje technologie takie jak wtyczki
                            portali społecznościowych, dzięki którym dostawcy
                            usług portali społecznościowych mogą uzyskać dostęp
                            do danych osobowych Klienta. W tym celu w
                            odpowiednich sekcjach i stronach Serwisu umieszczono
                            kod bądź inne odesłanie odwołujące się do
                            konkretnego serwisu społecznościowego. Korzystając z
                            kodu lub innego odesłania odwołującego się do
                            konkretnego serwisu społecznościowego, uważa się
                            jednoznacznie, iż Klient zapoznał się i zaakceptował
                            zasady ochrony prywatności firmy konkretnego serwisu
                            społecznościowego. Z zasadami tymi można zapoznać
                            się na odpowiednich stronach serwisów
                            społecznościowych.
                          </p>
                        )}
                        {i === 7 && (
                          <p>
                            Serwis otoczony jest protokołem bezpieczeństwa SSL,
                            dzięki czemu Klient ma zapewnioną ochronę transmisji
                            danych w sposób maksymalny podczas korzystania z
                            usług i funkcji Serwisu. Jednocześnie Właściciel
                            Serwisu Moneytransfer.pl informuje, iż stosowane
                            przez Serwis pliki Cookies są bezpieczne także dla
                            aparatury, którą wykorzystuje Klient to korzystania
                            z Serwisu.
                          </p>
                        )}
                        {i === 8 && (
                          <p>
                            Klient w każdym czasie ma prawo do samodzielnej
                            zmiany we własnym zakresie ustawień dotyczących
                            plików Cookies, wskazując sposób ich przechowywania
                            i uzyskiwania dostępu przez Cookies do aparatury
                            Klienta. Zmian tych dokonać można przy pomocy
                            ustawień przeglądarki internetowej, która zawiera
                            szczegółowe informacje o formach obsługi plików
                            Cookies. Klient może także w dowolnym czasie usuwać
                            pliki Cookies używając w tym celu dostępnych funkcji
                            przeglądarki internetowej, z której korzysta.
                            Moneytransfer.pl uprzedza, iż indywidualne
                            ustawienia Klienta co do stosowania plików Cookies
                            mogą rzutować na funkcjonalność niektórych usług i
                            funkcji Serwisu.
                          </p>
                        )}
                        {i === 9 && (
                          <p>
                            Moneytransfer.pl używa w Serwisie plików Cookies
                            sesyjnych tj. plików, które przechowywane są na
                            aparaturze Klienta do chwili zakończenia konkretnej
                            sesji przeglądarki internetowej Klienta, po czym
                            ulegają one automatycznemu usunięciu z aparatury
                            Klienta; oraz trwałych tj. plików Cookies, które
                            przechowywane są na aparaturze Klienta aż do chwili
                            ich usunięcia przez Klienta. Oba rodzaje plików
                            Cookies stosowanych przez Moneytransfer.pl nie
                            pozwalają na pobranie danych osobowych, a także
                            danych poufnych z aparatury Klienta.
                          </p>
                        )}
                        {i === 10 && (
                          <div>
                            <p className="mb-2">
                              Moneytransfer.pl używa plików Cookies własnych w
                              niżej określonych celach:
                            </p>
                            <ul className="list-disc pl-8 space-y-2">
                              <li className="text-gray-800">
                                zagwarantowanie bezpieczeństwa i wymaganej
                                funkcjonalności i prawidłowego działania
                                wszelkich procesów i dostępnych usług strony
                                Serwisu;
                              </li>
                              <li className="text-gray-800">
                                konfiguracja Serwisu w celu zaadaptowania stron
                                Serwisu do indywidualnych preferencji Klienta, a
                                także optymalnego działania stron internetowych
                                Serwisu, w tym identyfikacji rodzaju aparatury
                                używanej przez Klienta oraz określenia jego
                                lokalizacji;
                              </li>
                              <li className="text-gray-800">
                                badania i wszelkiego rodzaju analizy, w tym
                                anonimowe statystyki, przeprowadzane w celu
                                zapoznania się i optymalizacji procesów, z
                                których Klienci Serwisu czynią pożytek
                                korzystając ze stron internetowych Serwisu, a
                                także świadczenia usług reklamowych, w tym usług
                                reklamowych dostosowanych do preferencji
                                Klienta.
                              </li>
                            </ul>
                          </div>
                        )}
                        {i === 11 && (
                          <div>
                            <p className="mb-2">
                              Moneytransfer.pl używa plików Cookies zewnętrznych
                              w niżej określonych celach:
                            </p>
                            <ul className="list-disc pl-8 space-y-2">
                              <li className="text-gray-800">
                                udostępnianie Klientom na stronach Serwisu
                                treści multimedialnych, pobieranych uprzednio z
                                zewnętrznych serwisów należących do innych
                                podmiotów, niż Moneytransfer.pl;
                              </li>
                              <li className="text-gray-800">
                                nabywanie oraz przechowywanie za pośrednictwem
                                programów analitycznych anonimowych danych
                                statystycznych;
                              </li>
                              <li className="text-gray-800">
                                kooperowanie Serwisu z serwisami
                                społecznościowymi logowania się do nich;
                              </li>
                              <li className="text-gray-800">
                                E-mail marketing.
                              </li>
                            </ul>
                          </div>
                        )}
                        {i === 12 && (
                          <p>
                            Integralną częścią niniejszej Polityki jest
                            następujący dokument: Polityka Ochrony Danych
                            Osobowych, zamieszczony na stronie internetowej
                            serwisu pod adresem: https:// Moneytransfer.pl
                          </p>
                        )}
                        {i === 13 && (
                          <p>
                            O wszelkich zmianach w postanowieniach niniejszej
                            Polityki, Moneytransfer.pl każdorazowo będzie
                            informował poprzez umieszczenie jej nowego brzmienia
                            w zaktualizowanej wersji na stronie internetowej
                            Serwisu.
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-600">
              <p>
                © {new Date().getFullYear()} Twister Money Transfers. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
