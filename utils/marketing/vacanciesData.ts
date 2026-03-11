export type VacancySection =
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

export type ContactPerson = {
  image: string; // placeholder path (you will replace)
  name: string;
  title: string; // e.g. "HR-konsulent"
  phone: string; // display label e.g. "+47 479 68 163"
  email: string;
};

export type VacancyRegion = "vestlandet" | "oslo" | "akershus" | "rogaland";

/**
 * Subregions / areas (the nested items)
 * Note: you wrote "Sadness" — I assume you meant "Sandnes".
 */
export type VacancyArea =
  | "bergen"
  | "askoy"
  | "oygarden"
  | "oslo"
  | "asker"
  | "lillestrom"
  | "ullensaker"
  | "lorenskog"
  | "ralingen"
  | "baerum"
  | "stavanger"
  | "sandnes";

export type RegionNode =
  | {
      key: VacancyRegion;
      label: string;
      children: { key: VacancyArea; label: string }[];
    }
  | {
      key: VacancyRegion;
      label: string;
      children?: undefined; // no nesting
      selfAreaKey: VacancyArea; // used for "Oslo" single item
    };

export const regionTree: RegionNode[] = [
  {
    key: "vestlandet",
    label: "Vestlandet",
    children: [
      { key: "bergen", label: "Bergen" },
      { key: "askoy", label: "Askøy" },
      { key: "oygarden", label: "Øygarden" },
    ],
  },
  {
    key: "oslo",
    label: "Oslo",
    selfAreaKey: "oslo",
  },
  {
    key: "akershus",
    label: "Akershus",
    children: [
      { key: "asker", label: "Asker" },
      { key: "lillestrom", label: "Lillestrøm" },
      { key: "ullensaker", label: "Ullensaker" },
      { key: "lorenskog", label: "Lørenskog" },
      { key: "ralingen", label: "Rælingen" },
      { key: "baerum", label: "Bærum" },
    ],
  },
  {
    key: "rogaland",
    label: "Rogaland",
    children: [
      { key: "stavanger", label: "Stavanger" },
      { key: "sandnes", label: "Sandnes" },
    ],
  },
];

export const areaLabel: Record<VacancyArea, string> = {
  bergen: "Bergen",
  askoy: "Askøy",
  oygarden: "Øygarden",
  oslo: "Oslo",
  asker: "Asker",
  lillestrom: "Lillestrøm",
  ullensaker: "Ullensaker",
  lorenskog: "Lørenskog",
  ralingen: "Rælingen",
  baerum: "Bærum",
  stavanger: "Stavanger",
  sandnes: "Sandnes",
};

export const regionLabel: Record<VacancyRegion, string> = {
  vestlandet: "Vestlandet",
  oslo: "Oslo",
  akershus: "Akershus",
  rogaland: "Rogaland",
};

export interface Vacancy {
  id: number;
  slug: string;

  // ✅ NEW structure
  region: VacancyRegion;
  areas: VacancyArea[]; // can be multiple subregions but must be within the same region

  title: string;
  shortDescription: string;
  image: string;
  openPositions: number;
  details: VacancySection[];
  contactPerson: ContactPerson;
}

export const vacanciesData: Vacancy[] = [
  {
    id: 1,
    slug: "barnehageassistent-bergen",
    region: "vestlandet",
    areas: ["bergen", "askoy", "oygarden"],
    title: "Barnehagemedarbeider (Assistent)",
    shortDescription:
      "Vi søker barnehagemedarbeidere og assistenter til Bergen, Askøy og Øygarden. For deg som ønsker en givende og fleksibel jobb.",
    image: "/assets/img/vacancies/bergen1.webp",
    openPositions: 14,
    details: [
      {
        type: "text",
        title:
          "Vi søker barnehagemedarbeidere (assistenter) i Bergen og omegn.",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til vikaroppdrag i barnehage! Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem.",
          "Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer. Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },

      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt",
          "Du er ansvarsfull, pålitelig og selvdrevet ",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn ",
          "Du ser hvert barn og tilrettelegger etter deres behov",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider ",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },

      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Bergen, Askøy, Øygarden",
        ],
      },

      {
        type: "text",
        title: "Arbeidsoppgaver:",
        paragraphs: [""],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Barnehageassistent/Barnehagelærer:"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Bidra til et trygt, inkluderende og positivt læringsmiljø for barna",
          "Delta aktivt i barnas hverdag og bistå dem i deres utvikling",
          "Planlegge og gjennomføre aktiviteter som fremmer både læring og lek",
          "Være en imøtekommende og behjelpelig kollega for personalet i barnehagen",
          "Bidra til et godt foreldresamarbeid ved å introdusere deg selv når foreldre leverer barna og fortelle dem om barnas dag når de henter på slutten av dagen.",
        ],
      },

      {
        type: "list",
        title: "Vi tilbyr:",
        items: [
          "Grundig opplæring i forventninger til rollen som pedagogisk personell",
          "Konkurransedyktig lønn etter tariffavtale",
          "Et godt arbeidsmiljø med fokus på inkludering, anerkjennelse og trivsel",
          "Månedlige sosiale treff for ansatte i Brobyggere",
          "Du får mulighet til å bli kjent med andre vikarer og utveksle erfaringer",
          "Fleksibilitet i arbeidstid og varighet på oppdrag",
          "Gode utviklingsmuligheter",
          "Tilbud om kurs, oppfølging og veiledning ved behov",
        ],
      },
    ],

    // ✅ NEW
    contactPerson: {
      image: "/assets/img/team/rachel.jpeg",
      name: "Rachel Bårdsen",
      title: "HR-konsulent",
      phone: "+47 479 68 163",
      email: "rachel@brobyggere.com",
    },
  },

  {
    id: 2,
    slug: "skole-assistent-bergen",
    region: "vestlandet",
    areas: ["bergen", "askoy", "oygarden"],
    title: "Skole-assistent og SFO personell",
    shortDescription:
      "Vi søker deg som ønsker å jobbe som assistent i skole og på SFO.",
    image: "/assets/img/vacancies/bergen2.webp",
    openPositions: 8,
    details: [
      {
        type: "text",
        title:
          "Vi søker skoleassistenter og SFO-medarbeidere til Bergen og omegn.",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til vikaroppdrag i grunnskole som assistent og SFO-medarbeider!",
          "Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem. Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer.",
          "Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },

      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt",
          "Du er ansvarsfull, pålitelig og selvdrevet ",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn ",
          "Du ser hvert barn og tilrettelegger etter deres behov",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider ",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },

      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Bergen, Askøy, Øygarden",
        ],
      },

      {
        type: "list",
        title: "Arbeidsoppgaver:",
        items: [
          "Bistå læreren aktivt med å holde ro og orden i klasserommet",
          "Samarbeide tett med lærere og andre ansatte",
          "Gi individuell støtte til elever med spesielle behov. Herunder å ta i bruk tilpassede undervisningsmetoder og læringsstiler for å fremme mestring",
          "Arbeid i skolefritidsordningen (SFO)",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "list",
        title: "Vi tilbyr:",
        items: [
          "Grundig opplæring i forventninger til rollen som pedagogisk personell",
          "Konkurransedyktig lønn etter tariffavtale",
          "Et godt arbeidsmiljø med fokus på inkludering, anerkjennelse og trivsel",
          "Månedlige sosiale treff for ansatte i Brobyggere",
          "Du får mulighet til å bli kjent med andre vikarer og utveksle erfaringer",
          "Fleksibilitet i arbeidstid og varighet på oppdrag",
          "Gode utviklingsmuligheter",
          "Tilbud om kurs, oppfølging og veiledning ved behov",
        ],
      },
    ],

    // ✅ NEW
    contactPerson: {
      image: "/assets/img/team/rachel.jpeg",
      name: "Rachel Bårdsen",
      title: "HR-konsulent",
      phone: "+47 479 68 163",
      email: "rachel@brobyggere.com",
    },
  },

  {
    id: 3,
    slug: "larervikar-bergen",
    region: "vestlandet",
    areas: ["bergen", "askoy", "oygarden"],
    title: "Lærervikar",
    shortDescription:
      "Utdanner du deg til å bli lærer, eller er du ferdig studert? Vi søker lærervikarer (1-6 trinn)",
    image: "/assets/img/vacancies/bergen3.webp",
    openPositions: 7,
    details: [
      {
        type: "text",
        title: "Vi søker lærervikarer til Bergen og omegn",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til oppdrag som lærervikar i grunnskolen.",
          "Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem. Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer.",
          "Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },

      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt",
          "Du er ansvarsfull, pålitelig og selvdrevet ",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn ",
          "Du ser hvert barn og tilrettelegger etter deres behov",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider ",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },

      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Bergen, Askøy, Øygarden",
        ],
      },

      {
        type: "list",
        title: "Arbeidsoppgaver:",
        items: [
          "Undervise klasser, grupper eller enkeltelever i ulike fag",
          "Skape stabilitet, engasjement og trygge rammer for læring i klasserommet",
          "Utøve god klasseledelse",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "list",
        title: "Vi tilbyr:",
        items: [
          "Grundig opplæring i forventninger til rollen som pedagogisk personell",
          "Konkurransedyktig lønn etter tariffavtale",
          "Et godt arbeidsmiljø med fokus på inkludering, anerkjennelse og trivsel",
          "Månedlige sosiale treff for ansatte i Brobyggere",
          "Du får mulighet til å bli kjent med andre vikarer og utveksle erfaringer",
          "Fleksibilitet i arbeidstid og varighet på oppdrag",
          "Gode utviklingsmuligheter",
          "Tilbud om kurs, oppfølging og veiledning ved behov",
        ],
      },
    ],

    // ✅ NEW
    contactPerson: {
      image: "/assets/img/team/rachel.jpeg",
      name: "Rachel Bårdsen",
      title: "HR-konsulent",
      phone: "+47 479 68 163",
      email: "rachel@brobyggere.com",
    },
  },

  {
    id: 4,
    slug: "barnehageassistent-oslo",
    region: "akershus",
    areas: [
      "asker",
      "lillestrom",
      "ullensaker",
      "lorenskog",
      "ralingen",
      "baerum",
    ],
    title: "Barnehagemedarbeider (Assistent)",
    shortDescription:
      "Vi søker barnehagemedarbeidere og assistenter til Oslo og Akershus. For deg som ønsker en givende og fleksibel jobb.",
    image: "/assets/img/vacancies/oslo1.webp",
    openPositions: 27,
    details: [
      {
        type: "text",
        title:
          "Vi søker barnehagemedarbeidere (assistenter) i Oslo og Akershus.",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til vikaroppdrag i barnehage! Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem.",
          "Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer. Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },

      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt",
          "Du er ansvarsfull, pålitelig og selvdrevet ",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn ",
          "Du ser hvert barn og tilrettelegger etter deres behov",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider ",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },

      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Oslo, Akershus, Jessheim",
        ],
      },

      {
        type: "text",
        title: "Arbeidsoppgaver:",
        paragraphs: [""],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Barnehageassistent/Barnehagelærer:"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Bidra til et trygt, inkluderende og positivt læringsmiljø for barna",
          "Delta aktivt i barnas hverdag og bistå dem i deres utvikling",
          "Planlegge og gjennomføre aktiviteter som fremmer både læring og lek",
          "Være en imøtekommende og behjelpelig kollega for personalet i barnehagen",
          "Bidra til et godt foreldresamarbeid ved å introdusere deg selv når foreldre leverer barna og fortelle dem om barnas dag når de henter på slutten av dagen.",
        ],
      },

      {
        type: "list",
        title: "Vi tilbyr:",
        items: [
          "Grundig opplæring i forventninger til rollen som pedagogisk personell",
          "Konkurransedyktig lønn etter tariffavtale",
          "Et godt arbeidsmiljø med fokus på inkludering, anerkjennelse og trivsel",
          "Månedlige sosiale treff for ansatte i Brobyggere",
          "Du får mulighet til å bli kjent med andre vikarer og utveksle erfaringer",
          "Fleksibilitet i arbeidstid og varighet på oppdrag",
          "Gode utviklingsmuligheter",
          "Tilbud om kurs, oppfølging og veiledning ved behov",
        ],
      },
    ],

    // ✅ NEW
    contactPerson: {
      image: "/assets/img/team/Thea.JPG",
      name: "Thea Gunnarskog",
      title: "HR-konsulent",
      phone: "+47 479 68 163",
      email: "thea@brobyggere.com",
    },
  },

  {
    id: 5,
    slug: "skoleassistenter-oslo",
    region: "oslo",
    areas: ["oslo"],
    title: "Skoleassistenter og AKS - personell",
    shortDescription:
      "Vi søker deg som ønsker å jobbe som assistent i skole og på SFO.",
    image: "/assets/img/vacancies/oslo2.webp",
    openPositions: 10,
    details: [
      {
        type: "text",
        title: "Vi søker skoleassistenter og AKS-medarbeidere til Oslo",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til vikaroppdrag i grunnskole som assistent og AKS-medarbeider!",
          "Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem. Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer.",
          "Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },

      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt",
          "Du er ansvarsfull, pålitelig og selvdrevet ",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn ",
          "Du ser hvert barn og tilrettelegger etter deres behov",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider ",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },

      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Oslo",
        ],
      },

      {
        type: "list",
        title: "Arbeidsoppgaver:",
        items: [
          "Bistå læreren aktivt med å holde ro og orden i klasserommet",
          "Samarbeide tett med lærere og andre ansatte",
          "Gi individuell støtte til elever med spesielle behov. Herunder å ta i bruk tilpassede undervisningsmetoder og læringsstiler for å fremme mestring",
          "Arbeid i skolefritidsordningen (SFO)",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "list",
        title: "Vi tilbyr:",
        items: [
          "Grundig opplæring i forventninger til rollen som pedagogisk personell",
          "Konkurransedyktig lønn etter tariffavtale",
          "Et godt arbeidsmiljø med fokus på inkludering, anerkjennelse og trivsel",
          "Månedlige sosiale treff for ansatte i Brobyggere",
          "Du får mulighet til å bli kjent med andre vikarer og utveksle erfaringer",
          "Fleksibilitet i arbeidstid og varighet på oppdrag",
          "Gode utviklingsmuligheter",
          "Tilbud om kurs, oppfølging og veiledning ved behov",
        ],
      },
    ],

    // ✅ NEW
    contactPerson: {
      image: "/assets/img/team/Thea.JPG",
      name: "Thea Gunnarskog",
      title: "HR-konsulent",
      phone: "+47 479 68 163",
      email: "thea@brobyggere.com",
    },
  },

  {
    id: 6,
    slug: "larervikar-oslo",
    region: "oslo",
    areas: ["oslo"],
    title: "Lærervikar",
    shortDescription: "Vi søker lærervikarer i Oslo (1-6 trinn)",
    image: "/assets/img/vacancies/oslo3.webp",
    openPositions: 4,
    details: [
      {
        type: "text",
        title: "Vi søker lærervikarer til Oslo",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til oppdrag som lærervikar i grunnskolen.",
          "Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem. Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer.",
          "Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },

      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt",
          "Du er ansvarsfull, pålitelig og selvdrevet ",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn ",
          "Du ser hvert barn og tilrettelegger etter deres behov",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider ",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },

      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Oslo",
        ],
      },

      {
        type: "list",
        title: "Arbeidsoppgaver:",
        items: [
          "Undervise klasser, grupper eller enkeltelever i ulike fag",
          "Skape stabilitet, engasjement og trygge rammer for læring i klasserommet",
          "Utøve god klasseledelse",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "list",
        title: "Vi tilbyr:",
        items: [
          "Grundig opplæring i forventninger til rollen som pedagogisk personell",
          "Konkurransedyktig lønn etter tariffavtale",
          "Et godt arbeidsmiljø med fokus på inkludering, anerkjennelse og trivsel",
          "Månedlige sosiale treff for ansatte i Brobyggere",
          "Du får mulighet til å bli kjent med andre vikarer og utveksle erfaringer",
          "Fleksibilitet i arbeidstid og varighet på oppdrag",
          "Gode utviklingsmuligheter",
          "Tilbud om kurs, oppfølging og veiledning ved behov",
        ],
      },
    ],

    // ✅ NEW
    contactPerson: {
      image: "/assets/img/team/Thea.JPG",
      name: "Thea Gunnarskog",
      title: "HR-konsulent",
      phone: "+47 479 68 163",
      email: "thea@brobyggere.com",
    },
  },

  {
    id: 7,
    slug: "barnehageassistent-stavanger",
    region: "rogaland",
    areas: ["stavanger", "sandnes"],
    title: "Barnehagemedarbeider (assistent)",
    shortDescription:
      "Vi søker barnehagemedarbeidere til Sandnes og Stavanger. For deg som ønsker en fleksibel og givende jobb.",
    image: "/assets/img/vacancies/stavanger1.webp",
    openPositions: 15,
    details: [
      {
        type: "text",
        title:
          "Vi søker barnehagemedarbeidere (assistenter) i Stavanger og Sandnes",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til vikaroppdrag i barnehage! Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem.",
          "Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer. Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },

      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt",
          "Du er ansvarsfull, pålitelig og selvdrevet ",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn ",
          "Du ser hvert barn og tilrettelegger etter deres behov",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider ",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },

      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Stavanger, Sandnes",
        ],
      },

      {
        type: "text",
        title: "Arbeidsoppgaver:",
        paragraphs: [""],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Barnehageassistent/Barnehagelærer:"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Bidra til et trygt, inkluderende og positivt læringsmiljø for barna",
          "Delta aktivt i barnas hverdag og bistå dem i deres utvikling",
          "Planlegge og gjennomføre aktiviteter som fremmer både læring og lek",
          "Være en imøtekommende og behjelpelig kollega for personalet i barnehagen",
          "Bidra til et godt foreldresamarbeid ved å introdusere deg selv når foreldre leverer barna og fortelle dem om barnas dag når de henter på slutten av dagen.",
        ],
      },

      {
        type: "list",
        title: "Vi tilbyr:",
        items: [
          "Grundig opplæring i forventninger til rollen som pedagogisk personell",
          "Konkurransedyktig lønn etter tariffavtale",
          "Et godt arbeidsmiljø med fokus på inkludering, anerkjennelse og trivsel",
          "Månedlige sosiale treff for ansatte i Brobyggere",
          "Du får mulighet til å bli kjent med andre vikarer og utveksle erfaringer",
          "Fleksibilitet i arbeidstid og varighet på oppdrag",
          "Gode utviklingsmuligheter",
          "Tilbud om kurs, oppfølging og veiledning ved behov",
        ],
      },
    ],

    // ✅ NEW
    contactPerson: {
      image: "/assets/img/team/eline.jpeg",
      name: "Eline Håstø Borgenvik",
      title: "HR-konsulent",
      phone: "+47 479 68 163",
      email: "eline@brobyggere.com",
    },
  },

  {
    id: 8,
    slug: "skole-assistent-stavanger",
    region: "rogaland",
    areas: ["sandnes"],
    title: "Skole-assistent og SFO personell",
    shortDescription:
      "Vi søker deg som ønsker å jobbe som assistent i skole og på SFO.",
    image: "/assets/img/vacancies/stavanger2.webp",
    openPositions: 10,
    details: [
      {
        type: "text",
        title: "Vi søker skoleassistenter og SFO-medarbeidere til Sandnes",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til vikaroppdrag i grunnskole som assistent og SFO-medarbeider!",
          "Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem. Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer.",
          "Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },

      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt",
          "Du er ansvarsfull, pålitelig og selvdrevet ",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn ",
          "Du ser hvert barn og tilrettelegger etter deres behov",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider ",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },

      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Sandnes",
        ],
      },

      {
        type: "list",
        title: "Arbeidsoppgaver:",
        items: [
          "Bistå læreren aktivt med å holde ro og orden i klasserommet",
          "Samarbeide tett med lærere og andre ansatte",
          "Gi individuell støtte til elever med spesielle behov. Herunder å ta i bruk tilpassede undervisningsmetoder og læringsstiler for å fremme mestring",
          "Arbeid i skolefritidsordningen (SFO)",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "list",
        title: "Vi tilbyr:",
        items: [
          "Grundig opplæring i forventninger til rollen som pedagogisk personell",
          "Konkurransedyktig lønn etter tariffavtale",
          "Et godt arbeidsmiljø med fokus på inkludering, anerkjennelse og trivsel",
          "Månedlige sosiale treff for ansatte i Brobyggere",
          "Du får mulighet til å bli kjent med andre vikarer og utveksle erfaringer",
          "Fleksibilitet i arbeidstid og varighet på oppdrag",
          "Gode utviklingsmuligheter",
          "Tilbud om kurs, oppfølging og veiledning ved behov",
        ],
      },
    ],

    // ✅ NEW
    contactPerson: {
      image: "/assets/img/team/eline.jpeg",
      name: "Eline Håstø Borgenvik",
      title: "HR-konsulent",
      phone: "+47 479 68 163",
      email: "eline@brobyggere.com",
    },
  },

  {
    id: 9,
    slug: "larervikar-stavanger",
    region: "rogaland",
    areas: ["sandnes"],
    title: "Lærervikar",
    shortDescription: "Vi søker deg som ønsker å jobbe som lærervikar.",
    image: "/assets/img/vacancies/stavanger3.webp",
    openPositions: 5,
    details: [
      {
        type: "text",
        title: "Vi søker lærervikarer til Sandnes",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til oppdrag som lærervikar i grunnskolen.",
          "Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem. Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer.",
          "Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },

      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt",
          "Du er ansvarsfull, pålitelig og selvdrevet ",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn ",
          "Du ser hvert barn og tilrettelegger etter deres behov",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider ",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },

      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Oslo",
        ],
      },

      {
        type: "list",
        title: "Arbeidsoppgaver:",
        items: [
          "Undervise klasser, grupper eller enkeltelever i ulike fag",
          "Skape stabilitet, engasjement og trygge rammer for læring i klasserommet",
          "Utøve god klasseledelse",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "list",
        title: "Vi tilbyr:",
        items: [
          "Grundig opplæring i forventninger til rollen som pedagogisk personell",
          "Konkurransedyktig lønn etter tariffavtale",
          "Et godt arbeidsmiljø med fokus på inkludering, anerkjennelse og trivsel",
          "Månedlige sosiale treff for ansatte i Brobyggere",
          "Du får mulighet til å bli kjent med andre vikarer og utveksle erfaringer",
          "Fleksibilitet i arbeidstid og varighet på oppdrag",
          "Gode utviklingsmuligheter",
          "Tilbud om kurs, oppfølging og veiledning ved behov",
        ],
      },
    ],

    // ✅ NEW
    contactPerson: {
      image: "/assets/img/team/eline.jpeg",
      name: "Eline Håstø Borgenvik",
      title: "HR-konsulent",
      phone: "+47 479 68 163",
      email: "eline@brobyggere.com",
    },
  },

  {
    id: 10,
    slug: "praktisk-stavanger",
    region: "rogaland",
    areas: ["sandnes"],
    title: "Praktisk bistand",
    shortDescription:
      "Vi søker etter medarbeidere for praktisk bistand i Sandnes.",
    image: "/assets/img/vacancies/stavanger4.webp",
    openPositions: 16,
    details: [
      {
        type: "text",
        title: "Brobyggere søker medarbeider til praktisk bistand",
        paragraphs: [],
      },

      {
        type: "text",
        title: "Vil du gjøre en forskjell i menneskers hverdag?",
        paragraphs: [
          "Brobyggere søker engasjerte og pålitelige medarbeidere til praktisk bistand. Vi leverer tjenester til mennesker som trenger hjelp for å mestre hverdagen hjemme, og vårt mål er å skape trygghet, verdighet og trivsel for hver enkelt bruker.",
          "Hos oss blir du en del av et inkluderende og støttende arbeidsmiljø, der relasjonsbygging, respekt og kvalitet i tjenestene står i sentrum.",
        ],
      },

      {
        type: "text",
        title: "Arbeidsted:",
        paragraphs: ["Sandnes kommune"],
      },

      {
        type: "list",
        title: "Arbeidsoppgaver:",
        items: [
          "Praktisk hjelp i hjemmet etter vedtak/avtale, som rengjøring, klesvask, sengetøyskift og enkle måltider",
          "Bidra til orden, struktur og trivsel i brukernes hjem",
          "Skape gode relasjoner og trygge rammer for brukerne",
          "Samarbeid med kolleger, fagansvarlige og eventuelt pårørende",
          "Rapportering og enkel dokumentasjon i henhold til interne rutiner",
        ],
      },

      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Gode norskkunnskaper, både muntlig og skriftlig",
          "Evne til å arbeide selvstendig og strukturert",
          "Grunnleggende digitale ferdigheter (for enkel rapportering/dokumentasjon)",
          "Gyldig politiattest (må fremlegges ved ansettelse)",
        ],
      },

      {
        type: "list",
        title: "Personlig egenskaper",
        items: [
          "Har et genuint ønske om å hjelpe andre",
          "Er ansvarsbevisst, pålitelig og serviceinnstilt",
          "Er selvstendig, men også trives med samarbeid",
          "Har gode norskkunnskaper, både muntlig og skriftlig",
          "Har førerkort klasse B (en fordel, men ikke et krav)",
          "Har erfaring fra praktisk bistand, renhold, hjemmetjeneste eller lignende arbeid (en fordel, men ikke et krav)",
          "Formell helse- og sosialfaglig utdanning er ikke et krav – personlig egnethet og motivasjon vil bli vektlagt.",
        ],
      },

      {
        type: "list",
        title: "Vi tilbyr:",
        items: [
          "Grundig opplæring i forventninger til rollen som pedagogisk personell",
          "Konkurransedyktig lønn etter tariffavtale",
          "Et godt arbeidsmiljø med fokus på inkludering, anerkjennelse og trivsel",
          "Månedlige sosiale treff for ansatte i Brobyggere",
          "Du får mulighet til å bli kjent med andre vikarer og utveksle erfaringer",
          "Fleksibilitet i arbeidstid og varighet på oppdrag",
          "Gode utviklingsmuligheter",
          "Tilbud om kurs, oppfølging og veiledning ved behov",
        ],
      },
    ],

    // ✅ NEW
    contactPerson: {
      image: "/assets/img/team/eline.jpeg",
      name: "Eline Håstø Borgenvik",
      title: "HR-konsulent",
      phone: "+47 479 68 163",
      email: "eline@brobyggere.com",
    },
  },
];
