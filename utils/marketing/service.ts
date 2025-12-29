// utils/marketing/service.ts

export type ServiceDetailSection = {
  title: string;
  paragraphs: string[];
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
  detailTitle: string; // big title on detail page
  detailHeroImage: string; // top image on detail page
  detailIntro: string; // short intro paragraph on detail page

  // New: flexible content sections for detail page
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
    image: "assets/img/service/service1-img2.png",
    iconClass: "fa-solid fa-school",

    detailTitle: "Bemanning til skole",
    detailHeroImage: "assets/img/service/service1-img2.png",
    detailIntro:
      "Vi hjelper skoler med fleksibel og trygg bemanning – enten dere trenger lærervikarer, fagarbeidere, miljøarbeidere eller ekstra støtte i SFO.",

    detailSections: [
      {
        title: "Støtte i undervisning og læringsmiljø",
        paragraphs: [
          "Våre vikarer bidrar til et trygt og forutsigbart læringsmiljø, enten det gjelder å holde undervisning, støtte enkeltelever eller være ekstraressurs i klasserommet.",
          "Vi tilpasser bemanningen etter skolens behov – fra kortvarige fravær til lengre vikariater over flere måneder.",
        ],
      },
      {
        title: "Fleksible løsninger for SFO og spesialundervisning",
        paragraphs: [
          "I tillegg til tradisjonell undervisning kan vi bistå med personell til SFO, leksehjelp og spesialpedagogisk støtte.",
          "Målet vårt er å gjøre det enkelt for dere å dekke akutte behov, uten å gå på kompromiss med kvaliteten i tilbudet til elevene.",
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
      "Erfarne barnehageassistenter og barnehagelærere som skaper trygghet, lek og læring i hverdagen.",
    image: "assets/img/service/service1-img1.png",
    iconClass: "fa-solid fa-children",

    detailTitle: "Bemanning til barnehage",
    detailHeroImage: "assets/img/service/service1-img1.png",
    detailIntro:
      "Vi leverer barnehageassistenter og barnehagelærere som bidrar til et trygt, varmt og utviklende miljø for barna.",

    detailSections: [
      {
        title: "Trygghet og omsorg i barnehagehverdagen",
        paragraphs: [
          "Vikarene våre trår raskt til ved fravær og sikrer at barna møter trygge voksne som følger rutiner og skaper gode rammer.",
          "Vi kjenner barnehagehverdagen og vet hvor viktig det er med fleksible løsninger som fungerer både for store og små.",
        ],
      },
      {
        title: "Pedagogisk kvalitet og kontinuitet",
        paragraphs: [
          "Når dere har behov for barnehagelærer, kan vi bistå med fagpersoner som ivaretar planlegging, gjennomføring og dokumentasjon.",
          "Vi tilstreber kontinuitet der det er mulig, slik at barna slipper for mange utskiftninger i hverdagen.",
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
    image: "assets/img/service/service1-img4.png",
    iconClass: "fa-solid fa-broom",

    detailTitle: "Renholdstjenester",
    detailHeroImage: "assets/img/service/service1-img4.png",
    detailIntro:
      "Vi tilbyr profesjonelt renhold til offentlige og private virksomheter, med fleksible løsninger tilpasset deres hverdag.",

    detailSections: [
      {
        title: "Rent og trygt miljø for barn og ansatte",
        paragraphs: [
          "Et godt renhold gir bedre trivsel, mindre smitte og et sunnere innemiljø for både barn og voksne.",
          "Våre renholdere jobber effektivt og strukturert, med fokus på kvalitet og tillit.",
        ],
      },
      {
        title: "Fleksible avtaler og tilpasset omfang",
        paragraphs: [
          "Vi tilpasser frekvens og omfang etter deres behov – enten det er daglig renhold, periodisk vask eller ekstra innsats ved sykdom og sesongtopper.",
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
      "Fagpersonell og assistenter til helse- og omsorgstjenester når behovet er størst.",
    image: "assets/img/service/service1-img3.png",
    iconClass: "fa-solid fa-heart-pulse",

    detailTitle: "Bemanning innen helse og omsorg",
    detailHeroImage: "assets/img/service/service1-img3.png",
    detailIntro:
      "Vi leverer bemanning til helse- og omsorgssektoren, med fokus på trygghet, kvalitet og kontinuitet for brukere og pasienter.",

    detailSections: [
      {
        title: "Rett kompetanse på rett sted",
        paragraphs: [
          "Vi bistår med miljøarbeidere, assistenter og annet personell som avlaster egne ansatte og sikrer stabil drift.",
          "Våre medarbeidere får tett oppfølging, og vi er opptatt av både faglighet og menneskelige egenskaper.",
        ],
      },
      {
        title: "Fleksibel bemanning ved sykdom og toppbelastning",
        paragraphs: [
          "Når sykefravær eller ekstra belastning oppstår, hjelper vi dere med raske og forutsigbare løsninger.",
          "Målet vårt er å bidra til et helhetlig og trygt tilbud til brukerne, også når hverdagen er uforutsigbar.",
        ],
      },
    ],
  },
];
