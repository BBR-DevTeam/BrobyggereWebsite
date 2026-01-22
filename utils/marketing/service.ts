// utils/marketing/service.ts

export type ServiceDetailSection =
  | {
      type: "text";
      title: string;
      paragraphs: string[];
    }
  | {
      type: "list";
      title: string;
      items: string[];
    };

export type Service = {
  id: string; // e.g. "skole"
  slug: string; // e.g. "skole"
  title: string; // short label: "Skole"
  subtitle: string; // card title
  description: string; // card description
  image: string;
  iconClass: string;

  // Detail page fields
  detailTitle: string;
  detailHeroImage: string;
  detailIntro: string;

  // ✅ now flexible like vacancies
  detailSections: ServiceDetailSection[];
};

export const services: Service[] = [
  {
    id: "skole",
    slug: "skole",
    title: "Skole",
    subtitle: "Vikarer til skole",
    description:
      "Lærervikarer, assistenter, SFO-personale og miljøarbeidere som skaper ro, struktur og støtte i klasserommet.",
    image: "/assets/img/service/service1-img2.jpg",
    iconClass: "fa-solid fa-school",

    detailTitle: "Bemanning til skoler – trygt, raskt og fleksibelt",
    detailHeroImage: "/assets/img/service/service1-img2.jpg",
    detailIntro:
      "Når hverdagen krever ekstra ressurser, leverer vi kompetent personell til grunnskole og videregående skole. Vi sørger for god flyt i undervisningen og trygghet i skolemiljøet – enten dere trenger hjelp for én dag, flere uker eller lengre perioder.",

    detailSections: [
      {
        type: "text",
        title: "KVALITET OG OPPLÆRING",
        paragraphs: [
          "Vi gjør alt vi kan for å kvalitetssikre personellet vårt slik at skoleeiere – og ikke minst vikarene selv – kan føle seg trygge på at oppdraget blir riktig utført. Våre vikarer får opplæring og forberedelse før oppstart, slik at de står stødig i rollen og raskt kan tilpasse seg skolens rutiner og forventninger.",
          "Alle våre vikarer er håndplukket basert på faglig kompetanse, erfaring og evne til å fungere godt i skolemiljø. Når du bestiller vikar gjennom oss, får du dyktige og pålitelige mennesker som stiller opp når du trenger det.",
        ],
      },

      {
        type: "text",
        title: "TILGJENGELIGHET",
        paragraphs: [
          "Med erfaring fra bransjen vet vi hvor avgjørende tilgjengelighet og fleksibilitet er for skolens hverdag. Derfor jobber vi målrettet for å være en samarbeidspartner du kan stole på – også når behovet oppstår på kort varsel.",
          "Vi tilpasser oss skolens behov, timeplaner og preferanser, og jobber raskt for å finne riktig person til riktig oppdrag. Vårt fokus på fleksibilitet og tilgjengelighet gjør at vi kan løse bemanningsutfordringer effektivt og smidig.",
        ],
      },

      {
        type: "text",
        title: "TRYGGHET FOR DEG SOM SKOLEDERE",
        paragraphs: [
          "Alle skoler har ulike behov og utfordringer. Derfor tilpasser vi bemanningen etter skolens struktur, elevgrunnlag og spesifikke krav. Enten dere trenger vikar for én dag eller for en lengre periode, står vi klare til å hjelpe.",
          "Når faste lærere er fraværende, er det viktig at undervisningen beholder sin kontinuitet. Våre vikarer er forberedt på å overta undervisning på kort varsel, slik at elevenes læring påvirkes minst mulig og skolehverdagen kan gå som normalt.",
        ],
      },

      {
        type: "text",
        title: "HVA VI KAN BISTÅ MED",
        paragraphs: [
          "Vi tilbyr fleksibel bemanning til både grunnskoler og videregående skoler, og kan blant annet bistå med:",
        ],
      },

      {
        type: "list",
        title: "",
        items: [
          "Undervisningsvikar (kort- og langtidsfravær)",
          "Elevassistent / miljøarbeider",
          "Spesialpedagogisk støtte (ved behov og etter avtale)",
          "SFO/AKS-personell",
          "Tilsyn og støtte i friminutt, garderobe og aktiviteter",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: [
          "Uansett om behovet er planlagt eller oppstår akutt, jobber vi raskt for å finne en løsning som passer deres skole.",
        ],
      },

      {
        type: "text",
        title: "SLIK JOBBER VI",
        paragraphs: [
          "Vi er opptatt av at skolene får en løsning som fungerer i praksis. Derfor legger vi vekt på:",
        ],
      },

      {
        type: "list",
        title: "",
        items: [
          "Rask respons når behovet oppstår (5 til 10 min)",
          "Riktig match mellom oppdrag og person (kompetanse, språk, erfaring og personlighet)",
          "Tydelig kommunikasjon før oppstart og underveis",
          "Forutsigbarhet for skoleledelse, lærere og elever",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: [
          "Vårt mål er å gjøre bemanning enkelt, trygt og effektivt – slik at dere kan fokusere på det viktigste: elevenes læring og trivsel.",
        ],
      },
    ],
  },

  {
    id: "barnehage",
    slug: "barnehage",
    title: "Barnehage",
    subtitle: "Vikarer til barnehage",
    description:
      "Kvalifiserte barnehageassistenter og barnehagelærere som skaper trygghet, lek og læring i hverdagen.",
    image: "/assets/img/service/service1-img1.jpg",
    iconClass: "fa-solid fa-children",

    detailTitle: "Bemanning til barnehager – trygt, raskt og fleksibelt",
    detailHeroImage: "/assets/img/service/service1-img1.jpg",
    detailIntro:
      "Vi tilbyr kvalifisert personell som kan steppe inn på kort varsel og sikre god drift i barnehagen. Med fokus på trygghet, kvalitet og kontinuitet leverer vi vikarer til både korte og langvarige behov.",

    detailSections: [
      {
        type: "text",
        title: "TRYGGHET",
        paragraphs: [
          "Vi vet hvor viktig trygghet er i barnehagehverdagen – både for barn, foreldre og ansatte.Derfor er vi stolte av å være en pålitelig samarbeidspartner som setter omsorg, stabilitet og forutsigbarhet i sentrum.",
          "Våre vikarer blir grundig fulgt opp og får nødvendig opplæring, slik at de føler seg trygge i rollen og kan møte barna med ro, varme og profesjonalitet. Målet vårt er at både barnehageeiere og medarbeidere skal føle seg ivaretatt i samarbeidet med oss.",
        ],
      },
      {
        type: "text",
        title: "KVALITET",
        paragraphs: [
          "Vi vet at dyktige voksne er selve grunnmuren i en god barnehage. Derfor legger vi stor vekt på rekruttering av vikarer som har riktig kompetanse, erfaring og personlige egenskaper for arbeid med barn.",
          "Alle våre medarbeidere vurderes nøye før de settes i oppdrag, slik at de møter barnehagens krav og verdier. På denne måten sikrer vi at barna får den omsorgen, støtten og tryggheten de trenger i hverdagen.",
        ],
      },

      {
        type: "text",
        title: "FLEKSIBILITET",
        paragraphs: [
          "Ingen barnehager er like – og behovene kan endre seg raskt. Derfor tilbyr vi fleksible løsninger som tilpasses akkurat deres situasjon.",
          "Enten dere trenger akutt vikarhjelp eller planlagt bemanning over tid, tilpasser vi oss deres timeplan og bemanningsbehov. Med raske avklaringer og smidige prosesser gjør vi det enkelt å håndtere både forutsette og uforutsette bemanningsutfordringer.",
        ],
      },

      {
        type: "text",
        title: "TILGJENGELIGHET",
        paragraphs: [
          "Vi er tilgjengelige når dere trenger oss. Behov for vikar kan oppstå når som helst, og derfor jobber vi målrettet for å kunne svare raskt – også på kort varsel.",
          "Uansett om det gjelder en akutt situasjon eller et planlagt oppdrag, kan dere stole på at vi følger opp og finner en løsning. Brobyggere skal være en trygg og tilgjengelig partner i barnehagens hverdag.",
        ],
      },

      {
        type: "text",
        title: "EVALUERING",
        paragraphs: [
          "Vi ønsker hele tiden å bli bedre – sammen med dere. Derfor tar vi tilbakemeldinger og evalueringer på alvor, og bruker dem aktivt til å forbedre tjenestene våre.",
          "Deres erfaringer hjelper oss å gjøre nødvendige justeringer og sikre enda bedre kvalitet i leveransene våre. Sammen skaper vi et stadig bedre barnehagemiljø.",
        ],
      },

      {
        type: "text",
        title: "RELASJONSBYGGING",
        paragraphs: [
          "Gode relasjoner er nøkkelen til vellykket samarbeid. Vi legger stor vekt på å bygge tillit mellom barnehagestyrere, ansatte og våre vikarer.",
          "Gjennom tett dialog, god oppfølging og nøye utvelgelse av personell jobber vi for et samarbeidsklima som fremmer trivsel, stabilitet og kvalitet. Målet vårt er å være mer enn en leverandør – vi skal være en langsiktig samarbeidspartner.",
        ],
      },

      {
        type: "text",
        title: "HVA VI KAN BISTÅ MED",
        paragraphs: [
          "Vi tilbyr fleksibel bemanning til både private og kommunale barnehager, og kan blant annet bistå med:",
        ],
      },

      {
        type: "list",
        title: "",
        items: [
          "Barnehageassistent",
          "Barnehagelærer",
          "Spesialpedagog (ved behov og etter avtale)",
          "Støttepersonell til barn med særskilte behov",
          "Ekstra bemanning ved høyt fravær eller perioder med økt behov",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: [
          "Uansett om behovet er planlagt eller oppstår akutt, jobber vi raskt for å finne en løsning som passer deres barnehage.",
        ],
      },

      {
        type: "text",
        title: "SLIK JOBBER VI",
        paragraphs: [
          "Vi er opptatt av at skolene får en løsning som fungerer i praksis. Derfor legger vi vekt på:",
        ],
      },

      {
        type: "list",
        title: "",
        items: [
          "Rask respons når behovet oppstår (5 til 10 min)",
          "Riktig match mellom oppdrag og person (kompetanse, språk, erfaring og personlighet)",
          "Tydelig kommunikasjon før oppstart og underveis",
          "Forutsigbarhet for skoleledelse, lærere og elever",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: [
          "Vårt mål er å gjøre bemanning enkelt, trygt og effektivt – slik at dere kan fokusere på det viktigste: elevenes læring og trivsel.",
        ],
      },
    ],
  },

  {
    id: "helse-og-omsorg",
    slug: "helse-og-omsorg",
    title: "Helse og omsorg",
    subtitle: "Bemanning innen helse og omsorg",
    description:
      "Fagpersonell og assistenter til helse- og omsorgstjenester ved behov",
    image: "/assets/img/service/service1-img3.JPG",
    iconClass: "fa-solid fa-heart-pulse",

    detailTitle: "Bemanning til helse og omsorg – trygt, raskt og fleksibelt",
    detailHeroImage: "/assets/img/service/service1-img3.jpg",
    detailIntro:
      "Vi tilbyr kvalifisert personell som kan steppe inn på kort varsel og sikre god drift i helse- og omsorgstjenester. Med fokus på trygghet, kvalitet og kontinuitet leverer vi vikarer til både korte og langvarige behov.",

    detailSections: [
      {
        type: "text",
        title: "TRYGGHET",
        paragraphs: [
          "Vi vet hvor avgjørende trygghet er i helse- og omsorgssektoren – både for brukere, pårørende og ansatte.Derfor er vi stolte av å være en pålitelig samarbeidspartner som setter omsorg, profesjonalitet og respekt i sentrum.",
          "Våre vikarer blir grundig kvalitetssikret og fulgt opp før og under oppdrag, slik at de føler seg trygge i rollen og kan møte brukerne med ro, empati og faglig trygghet. Målet vårt er at både oppdragsgivere og medarbeidere skal føle seg ivaretatt i samarbeidet med oss.",
        ],
      },
      {
        type: "text",
        title: "KVALITET",
        paragraphs: [
          "Vi vet at dyktige fagpersoner er selve fundamentet i gode helse- og omsorgstjenester. Derfor legger vi stor vekt på rekruttering av personell med riktig utdanning, erfaring og personlige egenskaper.",
          "Alle våre medarbeidere vurderes nøye før de settes i oppdrag, slik at de møter krav til faglig kompetanse, etikk og kvalitet. På denne måten sikrer vi at brukerne får den omsorgen, støtten og behandlingen de trenger i hverdagen.",
        ],
      },

      {
        type: "text",
        title: "FLEKSIBILITET",
        paragraphs: [
          "Behov i helse- og omsorgstjenester kan endre seg raskt. Derfor tilbyr vi fleksible bemanningsløsninger som tilpasses deres turnus, drift og spesifikke behov.",
          "Med smidige prosesser og raske avklaringer gjør vi det enkelt å håndtere både forutsette og uforutsette bemanningsutfordringer.",
        ],
      },

      {
        type: "text",
        title: "TILGJENGELIGHET",
        paragraphs: [
          "Vi er tilgjengelige når dere trenger oss. Bemanningsbehov kan oppstå når som helst, og derfor jobber vi målrettet for å kunne svare raskt – også på kort varsel.",
          "Uansett om det gjelder en akutt situasjon eller et planlagt oppdrag, kan dere stole på at vi følger opp og finner en løsning. Brobyggere skal være en trygg og tilgjengelig partner i helse- og omsorgshverdagen.",
        ],
      },

      {
        type: "text",
        title: "EVALUERING",
        paragraphs: [
          "Vi ønsker hele tiden å bli bedre – sammen med dere. Derfor tar vi tilbakemeldinger og evalueringer på alvor, og bruker dem aktivt til å forbedre tjenestene våre.",
          "Deres erfaringer hjelper oss å gjøre nødvendige justeringer og sikre enda bedre kvalitet i leveransene våre. Sammen skaper vi tryggere og mer effektive helse- og omsorgstjenester.",
        ],
      },

      {
        type: "text",
        title: "RELASJONSBYGGING",
        paragraphs: [
          "Gode relasjoner er nøkkelen til vellykket samarbeid. Vi legger stor vekt på å bygge tillit mellom oppdragsgivere, ansatte og våre vikarer.",
          "Gjennom tett dialog, god oppfølging og nøye utvelgelse av personell jobber vi for et samarbeidsklima som fremmer kvalitet, stabilitet og trygghet. Målet vårt er å være mer enn en leverandør – vi skal være en langsiktig samarbeidspartner.",
        ],
      },

      {
        type: "text",
        title: "HVA VI KAN BISTÅ MED",
        paragraphs: [
          "Vi tilbyr fleksibel bemanning til både kommunale og private helse- og omsorgstjenester, og kan blant annet bistå med:",
        ],
      },

      {
        type: "list",
        title: "",
        items: [
          "Helsefagarbeider",
          "Sykepleier",
          "Vernepleier",
          "Miljøarbeider",
          "Pleiemedarbeider",
          "Assistent i helse og omsorg",
          "Personell til institusjon, hjemmetjeneste og bolig",
          "Ekstra bemanning ved høyt fravær eller perioder med økt behov",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: [
          "Uansett om behovet er planlagt eller oppstår akutt, jobber vi raskt for å finne en løsning som passer deres virksomhet.",
        ],
      },

      {
        type: "text",
        title: "SLIK JOBBER VI",
        paragraphs: [
          "Vi er opptatt av at skolene får en løsning som fungerer i praksis. Derfor legger vi vekt på:",
        ],
      },

      {
        type: "list",
        title: "",
        items: [
          "Rask respons når behovet oppstår (5 til 10 min)",
          "Riktig match mellom oppdrag og person (kompetanse, språk, erfaring og personlighet)",
          "Tydelig kommunikasjon før oppstart og underveis",
          "Forutsigbarhet for skoleledelse, lærere og elever",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: [
          "Vårt mål er å gjøre bemanning enkelt, trygt og effektivt – slik at dere kan fokusere på det viktigste: elevenes læring og trivsel.",
        ],
      },
    ],
  },

  {
    id: "renhold",
    slug: "renhold",
    title: "Renhold",
    subtitle: "Fleksible renholdstjenester",
    description:
      "Pålitelig renholdspersonell til skoler, barnehager og andre virksomheter – for et rent og trygt miljø.",
    image: "/assets/img/service/service1-img4.jpg",
    iconClass: "fa-solid fa-broom",

    detailTitle: "Bemanning til renhold – trygt, raskt og fleksibelt",
    detailHeroImage: "/assets/img/service/service1-img4.jpg",
    detailIntro:
      "Vi tilbyr pålitelig og erfarent renholdspersonell som kan steppe inn på kort varsel og sikre rene, trygge og hygieniske lokaler. Med fokus på kvalitet, effektivitet og kontinuitet leverer vi renholdstjenester til både korte og langvarige behov.",

    detailSections: [
      {
        type: "text",
        title: "TRYGGHET",
        paragraphs: [
          "Vi vet hvor viktig et rent og hygienisk miljø er for trivsel, helse og sikkerhet. Derfor er vi stolte av å være en pålitelig samarbeidspartner som setter kvalitet, grundighet og ansvarlighet i sentrum.",
          "Våre renholdere blir grundig kvalitetssikret og fulgt opp før og under oppdrag, slik at de føler seg trygge i rollen og leverer stabil og profesjonell rengjøring. Målet vårt er at både oppdragsgivere og medarbeidere skal føle seg ivaretatt i samarbeidet med oss.",
        ],
      },
      {
        type: "text",
        title: "KVALITET",
        paragraphs: [
          "Vi vet at godt renhold handler om mer enn bare overflater – det handler om standard, rutiner og detaljer. Derfor legger vi stor vekt på rekruttering av renholdspersonell med riktig erfaring, arbeidsmoral og forståelse for hygienekrav.",
          "Alle våre medarbeidere vurderes nøye før de settes i oppdrag, slik at de møter krav til kvalitet, effektivitet og pålitelighet. På denne måten sikrer vi rene og trivelige lokaler som holder et høyt nivå – hver eneste dag.",
        ],
      },

      {
        type: "text",
        title: "FLEKSIBILITET",
        paragraphs: [
          "Ingen bygg er like, og renholdsbehov kan variere over tid. Derfor tilbyr vi fleksible renholdsløsninger som tilpasses deres lokaler, åpningstider og spesifikke behov.",
          "Enten dere trenger akutt vikarhjelp, fast renhold eller ekstra innsats ved høyt fravær, finner vi en løsning som passer deres situasjon. Med smidige prosesser og raske avklaringer gjør vi det enkelt å håndtere både planlagte og uforutsette renholdsbehov. ",
        ],
      },

      {
        type: "text",
        title: "TILGJENGELIGHET",
        paragraphs: [
          "Vi er tilgjengelige når dere trenger oss. Behov for renhold kan oppstå når som helst, og derfor jobber vi målrettet for å kunne svare raskt – også på kort varsel.",
          "Uansett om det gjelder en akutt situasjon eller et planlagt oppdrag, kan dere stole på at vi følger opp og finner en løsning. Brobyggere skal være en trygg og tilgjengelig partner i deres renholdshverdag.",
        ],
      },

      {
        type: "text",
        title: "HVA VI KAN BISTÅ MED",
        paragraphs: [
          "Vi tilbyr fleksible renholdstjenester til både private og offentlige bygg, og kan blant annet bistå med:",
        ],
      },

      {
        type: "list",
        title: "",
        items: [
          "Daglig renhold",
          "Periodisk renhold",
          "Hovedrenhold",
          "Smittevask og desinfisering",
          "Trappevask",
          "Kontorrenhold",
          "Renhold i skole, barnehage og institusjon",
          "Ekstra bemanning ved høyt fravær eller økt behov",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: [
          "Uansett om behovet er planlagt eller oppstår akutt, jobber vi raskt for å finne en løsning som passer deres lokaler og drift.",
        ],
      },

      {
        type: "text",
        title: "SLIK JOBBER VI",
        paragraphs: [
          "Vi er opptatt av at skolene får en løsning som fungerer i praksis. Derfor legger vi vekt på:",
        ],
      },

      {
        type: "list",
        title: "",
        items: [
          "Rask respons når behovet oppstår (5 til 10 min)",
          "Riktig match mellom oppdrag og person (kompetanse, språk, erfaring og personlighet)",
          "Tydelig kommunikasjon før oppstart og underveis",
          "Forutsigbarhet for skoleledelse, lærere og elever",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: [
          "Vårt mål er å gjøre bemanning enkelt, trygt og effektivt – slik at dere kan fokusere på det viktigste: elevenes læring og trivsel.",
        ],
      },
    ],
  },
];
