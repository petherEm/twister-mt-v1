"use client";

import { Container } from "@/components/util/container";
import { Printer, Calendar } from "lucide-react";

interface GDPRClientPageProps {
  lang: string;
}

export default function GDPRClientPage({ lang }: GDPRClientPageProps) {
  // Last updated date - replace with your actual last updated date
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

            <button
              onClick={() => window.print()}
              className="mt-3 sm:mt-0 inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <Printer className="h-4 w-4 mr-2" />
              Drukuj
            </button>
          </div>

          <div className="px-6 py-8 md:p-10 prose prose-gray max-w-none text-black">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Polityka Ochrony Danych Osobowych (RODO)
            </h1>

            <div className="space-y-8">
              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  ADMINISTRATOR DANYCH OSOBOWYCH
                </h2>
                <p className="text-lg">
                  Administratorem danych osobowych pozyskiwanych za
                  pośrednictwem Serwisu https://moneytransfer.pl, a zarazem
                  podmiotem decyzyjnym w kwestii sposobów wykorzystywania
                  Państwa danych osobowych, jest Właściciel Serwisu
                  Moneytransfer.pl RAFAŁ ZAWISZA, prowadzący działalność
                  gospodarczą pod firmą RAFAŁ ZAWISZA TWISTER z siedzibą we
                  Wrocławiu, kod pocztowy 50-011, przy ul. T. Kościuszki 27,
                  będący podatnikiem podatku od towarów i usług VAT, dysponujący
                  numerem identyfikacji podatkowej NIP: 8942376235, posiadający
                  REGON: 931982471, zwany dalej „Administrator". Ciąży na nim
                  odpowiedzialność za bezpieczeństwo danych osobowych
                  przekazanych przez Państwa.
                </p>
                <p className="mt-4">
                  Dane osobowe przetwarzane są zgodnie z powszechnie
                  obowiązującymi przepisami prawa, a w szczególności z
                  postanowieniami Rozporządzenia Parlamentu Europejskiego i Rady
                  (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
                  osób fizycznych w związku z przetwarzaniem danych osobowych i
                  w sprawie swobodnego przepływu takich danych oraz uchylenia
                  dyrektywy 95/46/WE (dalej: RODO) oraz innymi aktualnie
                  obowiązującymi (tj. przez cały okres przetwarzania określonych
                  danych) przepisami prawa o ochronie danych osobowych.
                </p>
                <p className="mt-4">
                  Administrator nominował Inspektora Danych Osobowych (IOD),
                  który pozostaje do Państwa dyspozycji w sprawach dotyczących
                  danych osobowych, a także w sprawach związanych z wykonywaniem
                  praw przysługujących Klientom zgodnie z przepisami o ochronie
                  danych osobowych. Kontakt można uzyskać za pośrednictwem
                  poczty elektronicznej pod adresem e-mail:{" "}
                  <span className="text-blue-600">serwis@moneytransfer.pl</span>
                  .
                </p>
                <p className="mt-4">
                  Administrator zastrzega, iż w razie każdorazowego skorzystania
                  z Serwisu dochodzi do gromadzenia danych pozyskiwanych i
                  rejestrowanych automatycznie, a także danych osobowych
                  przekazywanych przez użytkownika Serwisu. Cel, a także zakres
                  przetwarzanych przez Administratora danych osobowych określony
                  jest w Umowie zawartej przez Klienta, a także wynika ze zgody
                  Klienta, przepisów powszechnie obowiązującego prawa, a także
                  dookreślane są w rezultacie czynności podejmowanych przez
                  Klienta.
                </p>
                <p className="mt-4">
                  Kontakt z Administratorem możliwy jest za pośrednictwem poczty
                  elektronicznej pod adresem:
                  <span className="text-blue-600">
                    {" "}
                    serwis@moneytransfer.pl
                  </span>{" "}
                  a także telefonicznie pod numer
                  <span className="text-blue-600"> + 48 71 343 90 26</span>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
                  §1 Usługi elektroniczne
                </h2>
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="mb-2 font-semibold">
                      1. Administrator przetwarza dane osobowe w niżej
                      wymienionych celach:
                    </p>
                    <ul className="list-inside space-y-2 pl-4">
                      <li className="flex">
                        <span className="font-semibold mr-2">i.</span>
                        <span>
                          dostarczania Klientowi informacji marketingowych za
                          zgodą Klienta na uczynienie użytku z danych w tym celu
                          (zgodnie z art. 6 ust.1 lit. a RODO);
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">ii.</span>
                        <span>
                          zawarcia umowy o świadczenie usług elektronicznych, a
                          także rejestracji i prowadzenia konta Klienta w
                          Serwisie (zgodnie z art. 6 ust.1 lit. b RODO);
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">iii.</span>
                        <span>
                          bezpośredniego marketingu, a w szczególności
                          przygotowywania i prezentowania Klientowi
                          spersonalizowanej oferty (zgodnie z art. 6 ust.1 lit.
                          f RODO);
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">iv.</span>
                        <span>
                          dochodzenia roszczeń związanych z zwarciem Umowy
                          (zgodnie z art. 6 ust.1 lit. f RODO).
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      2. Administrator jest uprawniony do przetwarzania danych
                      osobowych w celu rejestracji i prowadzenia konta Klienta,
                      a w szczególności danych następujących: imię (imiona),
                      nazwisko, numer telefonu, adres zamieszkania, adres
                      e-mail, adres IP.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      3. Podanie wyżej wskazanych danych osobowych przez Klienta
                      jest dobrowolne, jednakże niezbędne w przypadku chęci
                      zawarcia umowy, a także rejestracji i prowadzenia Konta
                      Klienta w Serwisie.
                    </p>
                    <p className="mt-2">
                      W przypadku braku uzyskania wyżej wymienionych danych
                      osobowych, Klient pozbawiony będzie możliwości zawarcia
                      danej umowy, a także zarejestrowania i prowadzenia Konta
                      Klienta.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      4. Administrator jest uprawniony do przetwarzania
                      uzyskanych danych osobowych przez okres konieczny do
                      realizacji określonych w niniejszym paragrafie celów.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      5. Adekwatnie do postanowień zawartych w przepisach ustawy
                      Prawo telekomunikacyjne oraz ustawy o świadczeniu usług
                      drogą elektroniczną, Administrator przetwarza dane osobowe
                      w celu dostarczania informacji handlowych poprzez
                      wykorzystanie poczty elektronicznej, a także do celów
                      marketingu bezpośredniego w drodze kontaktu
                      telefonicznego.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      6. W granicach koniecznych do prawidłowego wykonania
                      umowy, Administrator zastrzega sobie możliwość przekazania
                      danych osobowych Klienta do państw znajdujących się poza
                      Europejskim Obszarem Gospodarczym.
                    </p>
                    <p className="mt-2">
                      W takim wypadku Administrator zapewnia jednak, iż transfer
                      danych wykonywany jest w sposób, który kontrolowany jest,
                      a także zabezpieczany odpowiednimi umowami z odbiorcami
                      danych. Umowy te spełniają warunki określone w V rozdziale
                      RODO.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      7. Administrator jest uprawniony do przekazywania danych
                      osobowych Klienta osobom upoważnionym przez
                      Administratora, a także innym podmiotom, z zachowaniem
                      wszelkich gwarancji bezpieczeństwa.
                    </p>
                    <p className="mt-2">
                      Podmiotami tymi są w szczególności podmioty uprawnione do
                      otrzymywania danych przez obowiązujące przepisy prawa,
                      inni administratorzy w graniach koniecznych do realizacji
                      usług oraz wymogów prawnych, a także podmioty, które
                      przetwarzają dane osobowe w imieniu Administratora.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="mb-2 font-semibold">
                      8. Klientowi przysługują w związku z przetwarzaniem przez
                      Administratora danych osobowych następujące uprawnienia:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <ul className="list-inside space-y-2">
                        <li className="flex">
                          <span className="font-semibold mr-2">i.</span>
                          <span>prawo dostępu do danych osobowych;</span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">ii.</span>
                          <span>prawo usunięcia danych osobowych;</span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">iii.</span>
                          <span>prawo do sprostowania danych osobowych;</span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">iv.</span>
                          <span>
                            prawo do przeniesienia danych osobowych do innego
                            administratora;
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">v.</span>
                          <span>
                            prawo do ograniczenia przetwarzania danych
                            osobowych;
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">vi.</span>
                          <span>
                            prawo do wniesienia sprzeciwu wobec przetwarzania
                            danych osobowych (dot. przypadku gdy dane osobowe są
                            przetwarzane ze względu na prawnie uzasadniony
                            interes Administratora);
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">vii.</span>
                          <span>
                            prawo wniesienia skargi do Prezesa Urzędu Ochrony
                            Danych Osobowych (dot. przypadku, gdy w subiektywnej
                            opinii Klienta przetwarzanie jego danych osobowych
                            narusza postanowienia Rozporządzenia);
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">viii.</span>
                          <span>
                            prawo do cofnięcia zgody na przetwarzanie danych
                            osobowych Klienta w dowolny, wybrany przez Klienta
                            sposób.
                          </span>
                        </li>
                      </ul>
                      <p className="mt-4 font-medium">
                        Celem realizacji wyżej wskazanych uprawnień Klienta,
                        zaleca się kontakt z Administratorem poprzez użycie
                        poczty elektronicznej, pod adresem:{" "}
                        <span className="text-blue-600">
                          serwis@moneytransfer.pl
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
                  §2 Formularz Kontaktowy
                </h2>
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="mb-2 font-semibold">
                      1. Administrator przetwarza dane osobowe w niżej
                      wymienionych celach:
                    </p>
                    <ul className="list-inside space-y-2 pl-4">
                      <li className="flex">
                        <span className="font-semibold mr-2">i.</span>
                        <span>
                          dostarczania Klientowi informacji marketingowych za
                          zgodą Klienta na uczynienie użytku z danych w tym celu
                          (zgodnie z art. 6 ust.1 lit. a RODO);
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">ii.</span>
                        <span>
                          bezpośredniego marketingu, a w szczególności
                          przygotowywania i prezentowania Klientowi
                          spersonalizowanej oferty (zgodnie z art. 6 ust.1 lit.
                          f RODO);
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">iii.</span>
                        <span>
                          udzielenia odpowiedzi na zgłoszone uprzednio przez
                          Klienta pytanie za pośrednictwem odpowiedniego
                          formularza kontaktowego dostępnego w Serwisie na
                          stronie internetowej https://www.moneytransfer.pl
                          (zgodnie z art. 6 ust.1 lit. f RODO).
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex">
                    <div className="pl-4 border-l-4 border-amber-200">
                      <p>
                        2. Administrator jest uprawniony do przetwarzania danych
                        osobowych w celu udzielenia odpowiedzi na zgłoszone
                        przez Klienta pytanie, a w szczególności danych
                        następujących: imię, nazwisko, numer telefonu, adres
                        e-mail, adres IP, a także dodatkowe udzielone
                        dobrowolnie przez Klienta dane.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="pl-4 border-l-4 border-amber-200">
                      <p>
                        3. Podanie wyżej wskazanych danych osobowych przez
                        Klienta jest dobrowolne, jednakże niezbędne w przypadku
                        chęci uzyskania odpowiedzi na postawione pytanie. W
                        przypadku braku uzyskania wyżej wymienionych danych
                        osobowych, Klient pozbawiony będzie możliwości uzyskania
                        odpowiedzi na zadane przez niego pytanie.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="pl-4 border-l-4 border-amber-200">
                      <p>
                        4. Administrator jest uprawniony do przetwarzania
                        uzyskanych danych osobowych przez okres konieczny do
                        realizacji określonych w niniejszym paragrafie celów.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="pl-4 border-l-4 border-amber-200">
                      <p>
                        5. Adekwatnie do postanowień zawartych w przepisach
                        ustawy Prawo telekomunikacyjne oraz ustawy o świadczeniu
                        usług drogą elektroniczną, Administrator przetwarza dane
                        osobowe w celu dostarczania informacji handlowych
                        poprzez wykorzystanie poczty elektronicznej, a także do
                        celów marketingu bezpośredniego w drodze kontaktu
                        telefonicznego.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="pl-4 border-l-4 border-amber-200">
                      <p>
                        6. W granicach koniecznych do prawidłowego wykonania
                        umowy, Administrator zastrzega sobie możliwość
                        przekazania danych osobowych Klienta do państw
                        znajdujących się poza Europejskim Obszarem Gospodarczym,
                        które zdaniem Komisji Europejskiej gwarantują stosowny
                        poziom ochrony, ale także i do państw, które nie
                        zapewniają odpowiedniego poziomu ochrony danych
                        osobowych Klienta. W takim wypadku Administrator
                        zapewnia jednak, iż transfer danych wykonywany jest w
                        sposób, który kontrolowany jest, a także zabezpieczany
                        odpowiednimi umowami z odbiorcami danych. Umowy te
                        spełniają warunki określone w V rozdziale RODO.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="pl-4 border-l-4 border-amber-200">
                      <p>
                        7. Administrator jest uprawniony do przekazywania danych
                        osobowych Klienta osobom upoważnionym przez
                        Administratora, a także innym podmiotom, z zachowaniem
                        wszelkich gwarancji bezpieczeństwa. Podmiotami tymi są w
                        szczególności podmioty uprawnione do otrzymywania danych
                        przez obowiązujące przepisy prawa, inni administratorzy
                        w graniach koniecznych do realizacji usług oraz wymogów
                        prawnych, a także podmioty, które przetwarzają dane
                        osobowe w imieniu Administratora.
                      </p>
                    </div>
                  </div>

                  {/* More sections follow a similar pattern */}

                  {/* Rights section with highlighted box */}
                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="mb-2 font-semibold">
                      8. Klientowi przysługują w związku z przetwarzaniem przez
                      Administratora danych osobowych następujące uprawnienia:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <ul className="list-inside space-y-2">
                        <li className="flex">
                          <span className="font-semibold mr-2">i.</span>
                          <span>prawo dostępu do danych osobowych;</span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">ii.</span>
                          <span>prawo usunięcia danych osobowych;</span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">iii.</span>
                          <span>prawo do sprostowania danych osobowych;</span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">iv.</span>
                          <span>
                            prawo do przeniesienia danych osobowych do innego
                            administratora;
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">v.</span>
                          <span>
                            prawo do ograniczenia przetwarzania danych
                            osobowych;
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">vi.</span>
                          <span>
                            prawo do wniesienia sprzeciwu wobec przetwarzania
                            danych osobowych (dot. przypadku gdy dane osobowe są
                            przetwarzane ze względu na prawnie uzasadniony
                            interes Administratora);
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">vii.</span>
                          <span>
                            prawo wniesienia skargi do Prezesa Urzędu Ochrony
                            Danych Osobowych (dot. przypadku, gdy w subiektywnej
                            opinii Klienta przetwarzanie jego danych osobowych
                            narusza postanowienia Rozporządzenia);
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">viii.</span>
                          <span>
                            prawo do cofnięcia zgody na przetwarzanie danych
                            osobowych Klienta w dowolny, wybrany przez Klienta
                            sposób.
                          </span>
                        </li>
                      </ul>
                      <p className="mt-4 font-medium">
                        Celem realizacji wyżej wskazanych uprawnień Klienta,
                        zaleca się kontakt z Administratorem poprzez użycie
                        poczty elektronicznej, pod adresem:{" "}
                        <span className="text-blue-600">
                          serwis@moneytransfer.pl
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Adding additional sections in the same format */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
                  §3 Formularz Zapytania o Ofertę
                </h2>
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="mb-2 font-semibold">
                      1. Administrator przetwarza dane osobowe w niżej
                      wymienionych celach:
                    </p>
                    <ul className="list-inside space-y-2 pl-4">
                      <li className="flex">
                        <span className="font-semibold mr-2">i.</span>
                        <span>
                          dostarczania Klientowi informacji marketingowych za
                          zgodą Klienta na uczynienie użytku z danych w tym celu
                          (zgodnie z art. 6 ust.1 lit. a RODO);
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">ii.</span>
                        <span>
                          bezpośredniego marketingu, a w szczególności
                          przygotowywania i prezentowania Klientowi
                          spersonalizowanej oferty (zgodnie z art. 6 ust.1 lit.
                          f RODO);
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">iii.</span>
                        <span>
                          udzielenia odpowiedzi na zgłoszone zapytanie Klienta,
                          w szczególności dotyczące przedstawienia oferty imprez
                          i/lub usług turystycznych (zgodnie z art. 6 ust. 1
                          lit. b RODO).
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      2. Administrator jest uprawniony do przetwarzania danych
                      osobowych w celu odpowiedzi na zgłoszone zapytanie, a w
                      szczególności danych następujących: imię, nazwisko, numer
                      telefonu, adres zamieszkania, adres e-mail, adres IP, a
                      także inne dane, które Klient przekaże dobrowolnie.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      3. Podanie wyżej wskazanych danych osobowych przez Klienta
                      jest dobrowolne, jednakże niezbędne do odpowiedzi na
                      zgłoszone przez Klienta zapytanie.
                    </p>
                    <p className="mt-2">
                      W przypadku braku uzyskania wyżej wymienionych danych
                      osobowych, Klient pozbawiony będzie możliwości uzyskania
                      odpowiedzi na postawione przez niego pytanie, a w
                      szczególności nie zostanie mu zaprezentowana oferta.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      4. Administrator jest uprawniony do przetwarzania
                      uzyskanych danych osobowych przez okres konieczny do
                      realizacji określonych w niniejszym paragrafie celów.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      5. Adekwatnie do postanowień zawartych w przepisach ustawy
                      Prawo telekomunikacyjne oraz ustawy o świadczeniu usług
                      drogą elektroniczną, Administrator przetwarza dane osobowe
                      w celu dostarczania informacji handlowych poprzez
                      wykorzystanie poczty elektronicznej, a także do celów
                      marketingu bezpośredniego w drodze kontaktu
                      telefonicznego.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      6. W granicach koniecznych do prawidłowego wykonania
                      umowy, Administrator zastrzega sobie możliwość przekazania
                      danych osobowych Klienta do państw znajdujących się poza
                      Europejskim Obszarem Gospodarczym, które zdaniem Komisji
                      Europejskiej gwarantują stosowny poziom ochrony, ale także
                      i do państw, które nie zapewniają odpowiedniego poziomu
                      ochrony danych osobowych Klienta.
                    </p>
                    <p className="mt-2">
                      W takim wypadku Administrator zapewnia jednak, iż transfer
                      danych wykonywany jest w sposób, który kontrolowany jest,
                      a także zabezpieczany odpowiednimi umowami z odbiorcami
                      danych. Umowy te spełniają warunki określone w V rozdziale
                      RODO.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      7. Administrator jest uprawniony do przekazywania danych
                      osobowych Klienta osobom upoważnionym przez
                      Administratora, a także innym podmiotom, z zachowaniem
                      wszelkich gwarancji bezpieczeństwa.
                    </p>
                    <p className="mt-2">
                      Podmiotami tymi są w szczególności podmioty uprawnione do
                      otrzymywania danych przez obowiązujące przepisy prawa,
                      inni administratorzy w graniach koniecznych do realizacji
                      usług oraz wymogów prawnych, a także podmioty, które
                      przetwarzają dane osobowe w imieniu Administratora.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="mb-2 font-semibold">
                      8. Klientowi przysługują w związku z przetwarzaniem przez
                      Administratora danych osobowych następujące uprawnienia:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <ul className="list-inside space-y-2">
                        <li className="flex">
                          <span className="font-semibold mr-2">i.</span>
                          <span>prawo dostępu do danych osobowych;</span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">ii.</span>
                          <span>prawo usunięcia danych osobowych;</span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">iii.</span>
                          <span>prawo do sprostowania danych osobowych;</span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">iv.</span>
                          <span>
                            prawo do przeniesienia danych osobowych do innego
                            administratora;
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">v.</span>
                          <span>
                            prawo do ograniczenia przetwarzania danych
                            osobowych;
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">vi.</span>
                          <span>
                            prawo do wniesienia sprzeciwu wobec przetwarzania
                            danych osobowych (dot. przypadku gdy dane osobowe są
                            przetwarzane ze względu na prawnie uzasadniony
                            interes Administratora);
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">vii.</span>
                          <span>
                            prawo wniesienia skargi do Prezesa Urzędu Ochrony
                            Danych Osobowych (dot. przypadku, gdy w subiektywnej
                            opinii Klienta przetwarzanie jego danych osobowych
                            narusza postanowienia Rozporządzenia);
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">viii.</span>
                          <span>
                            prawo do cofnięcia zgody na przetwarzanie danych
                            osobowych Klienta w dowolny, wybrany przez Klienta
                            sposób.
                          </span>
                        </li>
                      </ul>
                      <p className="mt-4 font-medium">
                        Celem realizacji wyżej wskazanych uprawnień Klienta,
                        zaleca się kontakt z Administratorem poprzez użycie
                        poczty elektronicznej, pod adresem:{" "}
                        <span className="text-blue-600">
                          serwis@moneytransfer.pl
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
                  §4 Infolinia
                </h2>
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="mb-2 font-semibold">
                      1. Administrator przetwarza dane osobowe w niżej
                      wymienionych celach:
                    </p>
                    <ul className="list-inside space-y-2 pl-4">
                      <li className="flex">
                        <span className="font-semibold mr-2">i.</span>
                        <span>
                          wypełnienia obowiązków prawnych ciążących na
                          Administratorze, m.in. udzielaniu informacja i
                          sprawozdawczości rachunkowej (zgodnie z art. 6 ust.1
                          lit. c RODO);
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">ii.</span>
                        <span>
                          modernizacja jakości usług świadczonych w Serwisie
                          (zgodnie z art. 6 ust. 1 lit. f RODO);
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">iii.</span>
                        <span>
                          ustalenia i dochodzenia roszczeń, a także obrona przed
                          roszczeniami, w celu realizacji prawnie uzasadnionego
                          interesu Administratora (zgodnie z art. 6 ust.1 lit. f
                          RODO);
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">iv.</span>
                        <span>
                          udzielenia odpowiedzi na postawione przez Klienta w
                          czasie rozmowy telefonicznej pytanie (zgodnie z art. 6
                          ust. 1 lit. f RODO);
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">v.</span>
                        <span>
                          gromadzenie i wykorzystanie danych osobowych przy
                          pomocy systemu nagrywania rozmów telefonicznych w celu
                          oceny prawidłowości realizowanych usług (zgodnie z
                          art. 6 ust.1 lit. f RODO).
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      2. Administrator jest uprawniony do przetwarzania danych
                      osobowych w celu odpowiedzi na postawione przez Klienta
                      pytanie a w szczególności danych następujących: imię
                      (imiona), nazwisko, płeć, data urodzenia, numer telefonu,
                      adres zamieszkania, adres e-mail.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      3. Podanie wyżej wskazanych danych osobowych przez Klienta
                      jest dobrowolne, jednakże niezbędne w przypadku chęci
                      uzyskania odpowiedzi na postawione przez Klienta pytanie.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      4. Administrator jest uprawniony do przetwarzania
                      uzyskanych danych osobowych przez okres konieczny do
                      realizacji określonych w niniejszym paragrafie celów.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      5. Administrator jest podmiotem odpowiedzialnym za
                      bezpieczeństwo przekazywanych przez Klienta w czasie
                      rozmowy telefonicznej danych osobowych, a także za zgodne
                      z przepisami obowiązującego prawa ich przetwarzanie.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      6. W granicach koniecznych do prawidłowego wykonania
                      umowy, Administrator zastrzega sobie możliwość przekazania
                      danych osobowych Klienta do państw znajdujących się poza
                      Europejskim Obszarem Gospodarczym, które zdaniem Komisji
                      Europejskiej gwarantują stosowny poziom ochrony, ale także
                      i do państw, które nie zapewniają odpowiedniego poziomu
                      ochrony danych osobowych Klienta.
                    </p>
                    <p className="mt-2">
                      W takim wypadku Administrator zapewnia jednak, iż transfer
                      danych wykonywany jest w sposób, który kontrolowany jest,
                      a także zabezpieczany odpowiednimi umowami z odbiorcami
                      danych. Umowy te spełniają warunki określone w V rozdziale
                      RODO.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      7. Administrator jest uprawniony do przekazywania danych
                      osobowych Klienta osobom upoważnionym przez
                      Administratora, a także innym podmiotom, z zachowaniem
                      wszelkich gwarancji bezpieczeństwa.
                    </p>
                    <p className="mt-2">
                      Podmiotami tymi są w szczególności podmioty uprawnione do
                      otrzymywania danych przez obowiązujące przepisy prawa,
                      inni administratorzy w graniach koniecznych do realizacji
                      usług oraz wymogów prawnych, a także podmioty, które
                      przetwarzają dane osobowe w imieniu Administratora.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      8. W granicach koniecznych do prawidłowego wykonania
                      umowy, Administrator zastrzega sobie możliwość zapisania
                      rozmów w systemie nagrywania rozmów telefonicznych.
                    </p>
                    <p className="mt-2">
                      Zapisy utrwalone w systemie nagrywania rozmów
                      telefonicznych będą przechowywane nie dłużej niż 3
                      miesiące od dnia ich nagrania, poza przypadkiem, gdy
                      stanowić one będą dowód w postępowaniu prowadzonym na
                      podstawie obowiązujących przepisów prawa. Okres ten może
                      ulec również wydłużeniu w przypadku, gdy Administrator
                      powziął wiadomość, iż niniejsze zapisy mogą stanowić dowód
                      w postępowaniu. W obu przypadkach, termin ten ulega
                      przedłużeniu do czasu prawomocnego zakończenia
                      postępowania. Wraz z upływem tych okresów, zapisy
                      zawierające dane osobowe, ulegną zniszczeniu.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="mb-2 font-semibold">
                      9. Klientowi przysługują w związku z przetwarzaniem przez
                      Administratora danych osobowych następujące uprawnienia:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <ul className="list-inside space-y-2">
                        <li className="flex">
                          <span className="font-semibold mr-2">i.</span>
                          <span>prawo dostępu do danych osobowych;</span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">ii.</span>
                          <span>prawo usunięcia danych osobowych;</span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">iii.</span>
                          <span>prawo do sprostowania danych osobowych;</span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">iv.</span>
                          <span>
                            prawo do przeniesienia danych osobowych do innego
                            administratora;
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">v.</span>
                          <span>
                            prawo do ograniczenia przetwarzania danych
                            osobowych;
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">vi.</span>
                          <span>
                            prawo do wniesienia sprzeciwu wobec przetwarzania
                            danych osobowych (dot. przypadku gdy dane osobowe są
                            przetwarzane ze względu na prawnie uzasadniony
                            interes Administratora);
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">vii.</span>
                          <span>
                            prawo wniesienia skargi do Prezesa Urzędu Ochrony
                            Danych Osobowych (dot. przypadku, gdy w subiektywnej
                            opinii Klienta przetwarzanie jego danych osobowych
                            narusza postanowienia Rozporządzenia);
                          </span>
                        </li>
                        <li className="flex">
                          <span className="font-semibold mr-2">viii.</span>
                          <span>
                            prawo do cofnięcia zgody na przetwarzanie danych
                            osobowych Klienta w dowolny, wybrany przez Klienta
                            sposób.
                          </span>
                        </li>
                      </ul>
                      <p className="mt-4 font-medium">
                        Celem realizacji wyżej wskazanych uprawnień Klienta,
                        zaleca się kontakt z Administratorem poprzez użycie
                        poczty elektronicznej, pod adresem:{" "}
                        <span className="text-blue-600">
                          serwis@moneytransfer.pl
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
                  §5 Dane gromadzone automatycznie
                </h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="pl-4 border-l-4 border-amber-200">
                      <p>
                        Administrator zastrzega do wiadomości Klientów, iż
                        każdorazowe skorzystanie z Serwisu pod adresem
                        https://www.moneytransfer.pl związane jest z
                        przesyłaniem zapytań do serwera, które następnie są
                        automatycznie zapisywane w dziennikach zdarzeń, do
                        których dostęp posiadają osoby upoważnione przez
                        Administratora do administrowania Serwisem. Dane te nie
                        są kojarzone z konkretnymi osobami.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="pl-4 border-l-4 border-amber-200">
                      <p>
                        W dziennikach zdarzeń zapisywane są dane związane z
                        sesją Klienta, a więc w szczególności rodzaj i nazwa
                        urządzenia, adres IP, data i czas skorzystania z
                        Serwisu.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="pl-4 border-l-4 border-amber-200">
                      <p>
                        Analiza dzienników zdarzeń prowadzona w sposób
                        chronologiczny pełni funkcję jedynie materiału
                        pomocniczego, na podstawie którego zapewnia się
                        bezpieczeństwo Serwisu, wykrywa się zagrożenia, a także
                        dokonuje badań statystycznych (zgodnie z art. 6 ust. 1
                        lit. f RODO).
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="pl-4 border-l-4 border-amber-200">
                      <p>
                        Do prawidłowego działania, Serwis wykorzystuje pliki
                        Cookies. Szczegółowe informacje na temat plików Cookies
                        uzyskają Państwo w Polityce Prywatności i Plików
                        Cookies, dostępnej na stronie internetowej pod adresem:{" "}
                        <span className="text-blue-600">
                          serwis@moneytransfer.pl
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
                  §8 Postanowienia końcowe
                </h2>
                <div className="space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p>
                    1. Niniejsze postanowienia mają charakter informacyjny i
                    dotyczą wyłącznie Serwisu https://moneytransfer.pl.
                  </p>
                  <p>
                    2. Administrator zabezpiecza przetwarzane przez siebie dane
                    osobowe zgodnie z powszechnie obowiązującymi przepisami
                    prawa.
                  </p>
                  <p>
                    3. Administrator zastrzega sobie wyłączne prawo do
                    modyfikacji postanowień niniejszego dokumentu. Zmieniony
                    dokument wchodzić będzie w życie z dniem jego publikacji na
                    stronie internetowej Serwisu.
                  </p>
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
