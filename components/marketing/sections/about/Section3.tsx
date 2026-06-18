import styles from "@/styles/marketing/about/aboutSection3.module.css";

const schoolFaqs = [
  {
    question: "Hvordan bestiller jeg vikar til skole?",
    answer:
      "Det er enkelt å bestille vikar til skole gjennom Brobyggere. Vi leverer kvalifisert personell til grunnskoler, ungdomsskoler, videregående skoler og andre undervisningsinstitusjoner. Enten behovet er akutt eller planlagt, hjelper vi deg med å finne riktig kandidat raskt og effektivt.",
  },
  {
    question: "Kan Brobyggere levere skolevikar på kort varsel?",
    answer:
      "Ja. Vi leverer skolevikarer ved både akutte og planlagte behov. Ved sykdom, permisjoner eller andre uforutsette situasjoner jobber vi raskt for å finne kvalifisert personell som kan starte så snart som mulig.",
  },
  {
    question: "Hvilke typer personell leverer dere til skoler?",
    answer:
      "Brobyggere leverer blant annet lærere, faglærere, spesialpedagoger, miljøarbeidere, miljøterapeuter, skoleassistenter, barne- og ungdomsarbeidere og AKS/SFO-personell.",
  },
  {
    question: "Leverer dere personell til både korte og lange oppdrag?",
    answer:
      "Ja. Vi leverer personell til akutt behov, dags-, uke-, og langtidsvikariater og prosjektbaserte oppdrag.",
  },
  {
    question: "Hvilke områder dekker dere?",
    answer:
      "Brobyggere leverer personell til skoler over store deler av Norge, med særlig fokus på Vestlandet, Rogaland, Oslo og Akershus.",
  },
  {
    question: "Har Brobyggere erfaring med offentlige avtaler?",
    answer:
      "Ja. Brobyggere har erfaring med offentlige innkjøp og leveranser til kommunal sektor, blant annet er vi en del av samkjøpsavtalen til Oslo kommune.",
  },
  {
    question: "Hvorfor velger skoler Brobyggere som bemanningspartner?",
    answer:
      "Skoler velger Brobyggere fordi vi tilbyr rask responstid, enkel bestillingsprosess, kvalitetssikrede kandidater, fleksible løsninger og erfaring fra skole- og oppvekstsektoren.",
  },
  {
    question: "Kan dere hjelpe ved mangel på lærere?",
    answer:
      "Ja. Brobyggere jobber kontinuerlig med rekruttering og bemanning for å kunne tilby lærere og annet pedagogisk personell til skoler som trenger ekstra ressurser.",
  },
  {
    question: "Hvordan sikrer dere kvaliteten på kandidatene?",
    answer:
      "Alle kandidater vurderes gjennom intervjuer, referansesjekker og kvalitetssikring av kompetanse og erfaring. Målet er å finne kandidater som både oppfyller formelle krav og passer inn i skolens miljø og kultur.",
  },
  {
    question: "Hva gjør jeg hvis en lærer blir syk samme morgen?",
    answer:
      "Når en lærer blir syk på kort varsel, hjelper Brobyggere med raske og fleksible bemanningsløsninger slik at skolen kan sikre kontinuitet i undervisningen.",
  },
  {
    question: "Hvor finner jeg kvalifiserte lærervikarer?",
    answer:
      "Brobyggere rekrutterer og formidler lærere, faglærere, spesialpedagoger og annet pedagogisk personell til skoler på Vestlandet, i Rogaland og i Oslo/Akershus.",
  },
  {
    question: "Hvordan dekker jeg langtidsfravær i skolen?",
    answer:
      "Brobyggere tilbyr bemanningsløsninger for langtidsvikariater og midlertidige behov, slik at skolen får stabilitet og kontinuitet gjennom hele perioden.",
  },
  {
    question:
      "Kan dere levere spesialpedagoger, miljøarbeidere og miljøterapeuter?",
    answer:
      "Ja. Vi bistår skoler med spesialpedagoger, spesialundervisningspersonell, miljøarbeidere og miljøterapeuter som kan bidra til et trygt og godt læringsmiljø.",
  },
];

const kindergartenFaqs = [
  {
    question: "Hva gjør jeg hvis en ansatt blir syk samme morgen?",
    answer:
      "Brobyggere hjelper barnehager med å skaffe kvalifiserte vikarer ved akutte behov. Vi jobber raskt for å finne kandidater som kan bidra fra første dag.",
  },
  {
    question: "Hvordan finner jeg vikar til barnehage på kort varsel?",
    answer:
      "Brobyggere leverer barnehagevikarer til både planlagte og akutte oppdrag. Vi har kandidater med erfaring fra arbeid med barn og oppvekst.",
  },
  {
    question: "Hvor raskt kan dere levere barnehagevikar?",
    answer:
      "Ved akutte behov arbeider vi raskt for å finne tilgjengelig personell. Leveringstiden avhenger av lokasjon, kompetansekrav og tilgjengelige kandidater.",
  },
  {
    question: "Hvilke typer personell leverer dere til barnehager?",
    answer:
      "Brobyggere leverer blant annet pedagogiske ledere, barnehagelærere, fagarbeidere, barne- og ungdomsarbeidere, barnehageassistenter, støttepersonell, miljøarbeidere og miljøterapeuter.",
  },
  {
    question: "Kan dere levere barnehagelærere?",
    answer:
      "Ja. Brobyggere formidler kvalifiserte barnehagelærere til kommunale og private barnehager som trenger ekstra ressurser eller dekning ved fravær.",
  },
  {
    question: "Hvordan dekker jeg langtidsfravær i barnehagen?",
    answer:
      "Ved permisjoner, sykefravær eller andre langvarige fravær kan Brobyggere levere personell over lengre perioder.",
  },
  {
    question: "Kan dere hjelpe med faste ansettelser?",
    answer:
      "Ja. I tillegg til bemanning bistår vi med rekruttering til faste stillinger i barnehager.",
  },
  {
    question: "Hvorfor bruke et bemanningsbyrå til barnehage?",
    answer:
      "Et bemanningsbyrå gir rask tilgang til kvalifiserte kandidater og reduserer tiden som brukes på annonsering, intervjuer og administrasjon.",
  },
  {
    question: "Har dere erfaring med kommunale barnehager?",
    answer:
      "Ja. Brobyggere samarbeider med både kommunale og private barnehager.",
  },
  {
    question: "Hvilke områder leverer dere barnehagepersonell til?",
    answer:
      "Vi leverer personell til barnehager på Vestlandet, i Rogaland, Oslo og Akershus.",
  },
  {
    question: "Hvordan sikrer dere kvaliteten på kandidatene?",
    answer:
      "Alle kandidater vurderes gjennom intervjuer, referansesjekk og kvalitetssikring av relevant erfaring og kompetanse.",
  },
  {
    question:
      "Kan dere levere personell til spesielle behov eller ekstra ressurser?",
    answer:
      "Ja. Brobyggere kan bistå med personell som har relevant erfaring og kompetanse til oppdrag knyttet til ekstra støtte rundt enkeltbarn eller grupper.",
  },
  {
    question: "Kan dere levere personell gjennom hele året?",
    answer:
      "Ja. Vi leverer personell gjennom hele året og bistår ved sykefravær, permisjoner, ferieavvikling, økt bemanningsbehov og andre situasjoner.",
  },
];

const allFaqs = [...schoolFaqs, ...kindergartenFaqs];

export default function Section3() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={styles.root}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <div className={styles.header}>
          <h2>Ofte stilte spørsmål</h2>
          <p>
            Finn svar på vanlige spørsmål om bemanning til barnehage og skole,
            akutte behov, langtidsvikariater og rekruttering gjennom Brobyggere.
          </p>
        </div>

        <div className={styles.grid}>
          <FaqGroup
            label="Skole"
            title="Vikar til skole"
            description="Kvalifisert personell til grunnskoler, ungdomsskoler, videregående skoler og andre undervisningsinstitusjoner."
            faqs={schoolFaqs}
          />

          <FaqGroup
            label="Barnehage"
            title="Vikar til barnehage"
            description="Trygge og kvalitetssikrede vikarer til private og kommunale barnehager ved både akutte og planlagte behov."
            faqs={kindergartenFaqs}
          />
        </div>
      </div>
    </section>
  );
}

function FaqGroup({
  label,
  title,
  description,
  faqs,
}: {
  label: string;
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
}) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelTop}>
        <span>{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={styles.accordion}>
        {faqs.map((faq, index) => (
          <details key={faq.question} className={styles.item}>
            <summary>
              <span>{faq.question}</span>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </summary>

            <div className={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
