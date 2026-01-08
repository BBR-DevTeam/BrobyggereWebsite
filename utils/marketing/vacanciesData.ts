export type VacancyCity = "bergen" | "oslo" | "stavanger";
export type VacancyTag = "fast" | "midlertidig";

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
  phone: string;
  email: string;
};

export interface Vacancy {
  id: number;
  slug: string;
  city: VacancyCity;
  title: string;
  shortDescription: string;
  image: string;
  tags: VacancyTag[];
  details: VacancySection[];

  // ✅ NEW
  contactPerson: ContactPerson;
}

export const vacanciesData: Vacancy[] = [
  {
    id: 1,
    slug: "barnehageassistent-bergen",
    city: "bergen",
    title: "Pedagogisk medarbeider (assistent)",
    shortDescription:
      "Vi søker pedagogiske medarbeidere til Bergen, Stavanger, Oslo og Akershus",
    image: "/assets/img/vacancies/bergen.png",
    tags: ["midlertidig"],
    details: [
      {
        type: "text",
        title: "Om stillingen",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til vikaroppdrag i barnehage og grunnskole! Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem. Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer. Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },
      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt 🤾",
          "Du er ansvarsfull, pålitelig og selvdrevet ⏰",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn 🛝",
          "Du ser hvert barn og tilrettelegger etter deres behov 🫴",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge⭐",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider 📚",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },
      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Bergen og omegn, Stavanger og Sandnes, Oslo og Akershus",
        ],
      },

      {
        type: "text",
        title: "Hvilke roller kan jeg ha som vikar i Brobyggere?",
        paragraphs: [
          "I avdeling Bergen kan du arbeide som barnehageassistent, barnehagelærer, lærervikar, skoleassistent og miljøarbeider. Hvilke(n) rolle du får tildelt avhenger av dine kvalifikasjoner.",
          "I de øvrige avdelingene (Stavanger og Sandnes, Oslo og Akershus) er det kun mulig å arbeide som barnehageassistent og barnehagelærer.",
        ],
      },

      {
        type: "text",
        title: "Arbeidsoppgaver:",
        paragraphs: [""],
      },

      {
        type: "text",
        title: "I barnehage:",
        paragraphs: ["Barnehageassistent/Barnehagelærer"],
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
        type: "text",
        title: "I skole (kun avdeling Bergen):",
        paragraphs: ["Lærervikar"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Undervise klasser, grupper eller enkeltelever i ulike fag",
          "Skape stabilitet, engasjement og trygge rammer for læring i klasserommet",
          "Utøve god klasseledelse",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Skoleassistent"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Bistå læreren aktivt med å holde ro og orden i klasserommet",
          "Samarbeide tett med lærere og andre ansatte",
          "Gi individuell støtte til elever med spesielle behov. Herunder å ta i bruk tilpassede undervisningsmetoder og læringsstiler for å fremme mestring",
          "Arbeid i skolefritidsordningen (SFO)",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Miljøarbeider"],
      },

      {
        type: "list",
        title: "",
        items: [
          "1 til 1 arbeid med elever med tilretteleggingsbehov",
          "Relasjonsbygging, støtte og motivere elever",
          "Delta i planlegging og oppfølging med arbeidsstedets personell samt samarbeide med hjemmet",
          "Mulighet til å arbeide tilsvarende en fulltidsstilling for å sikre forutsigbarhet for eleven",
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
    slug: "skoleassistent-oslo",
    city: "oslo",
    title: "Skoleassistent – tilkalling og lengre oppdrag",
    shortDescription:
      "Jobb i skolemiljø med varierte oppgaver. Passer for deg som ønsker erfaring og en meningsfull hverdag.",
    image: "/assets/img/vacancies/oslo.png",
    tags: ["midlertidig"],
    details: [
      {
        type: "text",
        title: "Om stillingen",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til vikaroppdrag i barnehage og grunnskole! Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem. Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer. Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },
      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt 🤾",
          "Du er ansvarsfull, pålitelig og selvdrevet ⏰",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn 🛝",
          "Du ser hvert barn og tilrettelegger etter deres behov 🫴",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge⭐",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider 📚",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },
      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Bergen og omegn, Stavanger og Sandnes, Oslo og Akershus",
        ],
      },

      {
        type: "text",
        title: "Hvilke roller kan jeg ha som vikar i Brobyggere?",
        paragraphs: [
          "I avdeling Bergen kan du arbeide som barnehageassistent, barnehagelærer, lærervikar, skoleassistent og miljøarbeider. Hvilke(n) rolle du får tildelt avhenger av dine kvalifikasjoner.",
          "I de øvrige avdelingene (Stavanger og Sandnes, Oslo og Akershus) er det kun mulig å arbeide som barnehageassistent og barnehagelærer.",
        ],
      },

      {
        type: "text",
        title: "Arbeidsoppgaver:",
        paragraphs: [""],
      },

      {
        type: "text",
        title: "I barnehage:",
        paragraphs: ["Barnehageassistent/Barnehagelærer"],
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
        type: "text",
        title: "I skole (kun avdeling Bergen):",
        paragraphs: ["Lærervikar"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Undervise klasser, grupper eller enkeltelever i ulike fag",
          "Skape stabilitet, engasjement og trygge rammer for læring i klasserommet",
          "Utøve god klasseledelse",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Skoleassistent"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Bistå læreren aktivt med å holde ro og orden i klasserommet",
          "Samarbeide tett med lærere og andre ansatte",
          "Gi individuell støtte til elever med spesielle behov. Herunder å ta i bruk tilpassede undervisningsmetoder og læringsstiler for å fremme mestring",
          "Arbeid i skolefritidsordningen (SFO)",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Miljøarbeider"],
      },

      {
        type: "list",
        title: "",
        items: [
          "1 til 1 arbeid med elever med tilretteleggingsbehov",
          "Relasjonsbygging, støtte og motivere elever",
          "Delta i planlegging og oppfølging med arbeidsstedets personell samt samarbeide med hjemmet",
          "Mulighet til å arbeide tilsvarende en fulltidsstilling for å sikre forutsigbarhet for eleven",
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
    slug: "sfo-medarbeider-oslo",
    city: "oslo",
    title: "SFO-medarbeider – fast stilling",
    shortDescription:
      "Vi søker en positiv og strukturert medarbeider til SFO. Du blir en del av et inkluderende team.",
    image: "/assets/img/vacancies/sfo.png",
    tags: ["fast"],
    details: [
      {
        type: "text",
        title: "Om stillingen",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til vikaroppdrag i barnehage og grunnskole! Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem. Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer. Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },
      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt 🤾",
          "Du er ansvarsfull, pålitelig og selvdrevet ⏰",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn 🛝",
          "Du ser hvert barn og tilrettelegger etter deres behov 🫴",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge⭐",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider 📚",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },
      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Bergen og omegn, Stavanger og Sandnes, Oslo og Akershus",
        ],
      },

      {
        type: "text",
        title: "Hvilke roller kan jeg ha som vikar i Brobyggere?",
        paragraphs: [
          "I avdeling Bergen kan du arbeide som barnehageassistent, barnehagelærer, lærervikar, skoleassistent og miljøarbeider. Hvilke(n) rolle du får tildelt avhenger av dine kvalifikasjoner.",
          "I de øvrige avdelingene (Stavanger og Sandnes, Oslo og Akershus) er det kun mulig å arbeide som barnehageassistent og barnehagelærer.",
        ],
      },

      {
        type: "text",
        title: "Arbeidsoppgaver:",
        paragraphs: [""],
      },

      {
        type: "text",
        title: "I barnehage:",
        paragraphs: ["Barnehageassistent/Barnehagelærer"],
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
        type: "text",
        title: "I skole (kun avdeling Bergen):",
        paragraphs: ["Lærervikar"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Undervise klasser, grupper eller enkeltelever i ulike fag",
          "Skape stabilitet, engasjement og trygge rammer for læring i klasserommet",
          "Utøve god klasseledelse",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Skoleassistent"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Bistå læreren aktivt med å holde ro og orden i klasserommet",
          "Samarbeide tett med lærere og andre ansatte",
          "Gi individuell støtte til elever med spesielle behov. Herunder å ta i bruk tilpassede undervisningsmetoder og læringsstiler for å fremme mestring",
          "Arbeid i skolefritidsordningen (SFO)",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Miljøarbeider"],
      },

      {
        type: "list",
        title: "",
        items: [
          "1 til 1 arbeid med elever med tilretteleggingsbehov",
          "Relasjonsbygging, støtte og motivere elever",
          "Delta i planlegging og oppfølging med arbeidsstedets personell samt samarbeide med hjemmet",
          "Mulighet til å arbeide tilsvarende en fulltidsstilling for å sikre forutsigbarhet for eleven",
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
    slug: "spesialassistent-stavanger",
    city: "stavanger",
    title: "Spesialassistent – skole/barnehage",
    shortDescription:
      "Har du erfaring med tilrettelegging? Vi har behov for spesialassistenter til både korte og lengre oppdrag.",
    image: "/assets/img/vacancies/stavanger.png",
    tags: ["fast", "midlertidig"],
    details: [
      {
        type: "text",
        title: "Om stillingen",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til vikaroppdrag i barnehage og grunnskole! Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem. Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer. Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },
      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt 🤾",
          "Du er ansvarsfull, pålitelig og selvdrevet ⏰",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn 🛝",
          "Du ser hvert barn og tilrettelegger etter deres behov 🫴",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge⭐",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider 📚",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },
      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Bergen og omegn, Stavanger og Sandnes, Oslo og Akershus",
        ],
      },

      {
        type: "text",
        title: "Hvilke roller kan jeg ha som vikar i Brobyggere?",
        paragraphs: [
          "I avdeling Bergen kan du arbeide som barnehageassistent, barnehagelærer, lærervikar, skoleassistent og miljøarbeider. Hvilke(n) rolle du får tildelt avhenger av dine kvalifikasjoner.",
          "I de øvrige avdelingene (Stavanger og Sandnes, Oslo og Akershus) er det kun mulig å arbeide som barnehageassistent og barnehagelærer.",
        ],
      },

      {
        type: "text",
        title: "Arbeidsoppgaver:",
        paragraphs: [""],
      },

      {
        type: "text",
        title: "I barnehage:",
        paragraphs: ["Barnehageassistent/Barnehagelærer"],
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
        type: "text",
        title: "I skole (kun avdeling Bergen):",
        paragraphs: ["Lærervikar"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Undervise klasser, grupper eller enkeltelever i ulike fag",
          "Skape stabilitet, engasjement og trygge rammer for læring i klasserommet",
          "Utøve god klasseledelse",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Skoleassistent"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Bistå læreren aktivt med å holde ro og orden i klasserommet",
          "Samarbeide tett med lærere og andre ansatte",
          "Gi individuell støtte til elever med spesielle behov. Herunder å ta i bruk tilpassede undervisningsmetoder og læringsstiler for å fremme mestring",
          "Arbeid i skolefritidsordningen (SFO)",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Miljøarbeider"],
      },

      {
        type: "list",
        title: "",
        items: [
          "1 til 1 arbeid med elever med tilretteleggingsbehov",
          "Relasjonsbygging, støtte og motivere elever",
          "Delta i planlegging og oppfølging med arbeidsstedets personell samt samarbeide med hjemmet",
          "Mulighet til å arbeide tilsvarende en fulltidsstilling for å sikre forutsigbarhet for eleven",
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
    id: 5,
    slug: "barnehagevikar-stavanger",
    city: "stavanger",
    title: "Barnehagevikar – fleksibel arbeidshverdag",
    shortDescription:
      "Perfekt for deg som ønsker fleksibilitet. Du velger selv når du kan jobbe, og vi matcher deg med oppdrag.",
    image: "/assets/img/vacancies/kids.png",
    tags: ["midlertidig"],
    details: [
      {
        type: "text",
        title: "Om stillingen",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til vikaroppdrag i barnehage og grunnskole! Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem. Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer. Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },
      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt 🤾",
          "Du er ansvarsfull, pålitelig og selvdrevet ⏰",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn 🛝",
          "Du ser hvert barn og tilrettelegger etter deres behov 🫴",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge⭐",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider 📚",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },
      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Bergen og omegn, Stavanger og Sandnes, Oslo og Akershus",
        ],
      },

      {
        type: "text",
        title: "Hvilke roller kan jeg ha som vikar i Brobyggere?",
        paragraphs: [
          "I avdeling Bergen kan du arbeide som barnehageassistent, barnehagelærer, lærervikar, skoleassistent og miljøarbeider. Hvilke(n) rolle du får tildelt avhenger av dine kvalifikasjoner.",
          "I de øvrige avdelingene (Stavanger og Sandnes, Oslo og Akershus) er det kun mulig å arbeide som barnehageassistent og barnehagelærer.",
        ],
      },

      {
        type: "text",
        title: "Arbeidsoppgaver:",
        paragraphs: [""],
      },

      {
        type: "text",
        title: "I barnehage:",
        paragraphs: ["Barnehageassistent/Barnehagelærer"],
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
        type: "text",
        title: "I skole (kun avdeling Bergen):",
        paragraphs: ["Lærervikar"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Undervise klasser, grupper eller enkeltelever i ulike fag",
          "Skape stabilitet, engasjement og trygge rammer for læring i klasserommet",
          "Utøve god klasseledelse",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Skoleassistent"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Bistå læreren aktivt med å holde ro og orden i klasserommet",
          "Samarbeide tett med lærere og andre ansatte",
          "Gi individuell støtte til elever med spesielle behov. Herunder å ta i bruk tilpassede undervisningsmetoder og læringsstiler for å fremme mestring",
          "Arbeid i skolefritidsordningen (SFO)",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Miljøarbeider"],
      },

      {
        type: "list",
        title: "",
        items: [
          "1 til 1 arbeid med elever med tilretteleggingsbehov",
          "Relasjonsbygging, støtte og motivere elever",
          "Delta i planlegging og oppfølging med arbeidsstedets personell samt samarbeide med hjemmet",
          "Mulighet til å arbeide tilsvarende en fulltidsstilling for å sikre forutsigbarhet for eleven",
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
    id: 6,
    slug: "miljoarbeider-bergen",
    city: "bergen",
    title: "Miljøarbeider – fast eller midlertidig",
    shortDescription:
      "Bidra til et trygt og godt læringsmiljø. Vi ser etter deg som er tydelig, varm og samarbeidsorientert.",
    image: "/assets/img/vacancies/school.png",
    tags: ["fast", "midlertidig"],
    details: [
      {
        type: "text",
        title: "Om stillingen",
        paragraphs: [
          "Vi søker nå etter engasjerte og omsorgsfulle medarbeidere til vikaroppdrag i barnehage og grunnskole! Som vikar i Brobyggere kan du få tildelt både korte og langvarige oppdrag etter din tilgjengelighet. Du velger selv hvor ofte du ønsker å jobbe, fra en dag i uken til fem. Som vikar vil du få muligheten til å jobbe med barn i ulike aldersgrupper og miljøer. Stillingen passer for deg som er student, ønsker en fleksibel hverdag eller er på jakt etter verdifull erfaring. En bonus er at våre medarbeidere ofte får tilbud om faste eller deltidsstillinger direkte hos oppdragsgivere etter en periode som vikar hos oss.",
        ],
      },
      {
        type: "list",
        title:
          "Om du kjenner deg igjen i følgende beskrivelse, kan dette være jobben for deg:",
        items: [
          "Du har fortrinnsvis erfaring med å jobbe med barn, eksempelvis som barnehage/skole-assistent, trener i barneidretten, ansvarlig i korps/teater eller barnevakt 🤾",
          "Du er ansvarsfull, pålitelig og selvdrevet ⏰",
          "Du trives med å være kreativ, delta i lek og være i aktivitet ute med barn 🛝",
          "Du ser hvert barn og tilrettelegger etter deres behov 🫴",
          "Du er god til å bygge relasjoner og ønsker å være en positiv rollemodell for barn og unge⭐",
          "Du studerer eller er ferdig utdannet barnehagelærer, grunnskolelærer, psykologi, pedagogikk, sosiologi, barnevern eller barne-og ungdomsarbeider 📚",
          "Relevant utdanning er ikke et krav, men en fordel.",
        ],
      },
      {
        type: "list",
        title: "Kvalifikasjonskrav:",
        items: [
          "Norsk språknivå på minimum B1 (dokumentasjon i form av avlagt norskprøve)",
          "Du er bosatt og kan arbeide innen følgende områder: Bergen og omegn, Stavanger og Sandnes, Oslo og Akershus",
        ],
      },

      {
        type: "text",
        title: "Hvilke roller kan jeg ha som vikar i Brobyggere?",
        paragraphs: [
          "I avdeling Bergen kan du arbeide som barnehageassistent, barnehagelærer, lærervikar, skoleassistent og miljøarbeider. Hvilke(n) rolle du får tildelt avhenger av dine kvalifikasjoner.",
          "I de øvrige avdelingene (Stavanger og Sandnes, Oslo og Akershus) er det kun mulig å arbeide som barnehageassistent og barnehagelærer.",
        ],
      },

      {
        type: "text",
        title: "Arbeidsoppgaver:",
        paragraphs: [""],
      },

      {
        type: "text",
        title: "I barnehage:",
        paragraphs: ["Barnehageassistent/Barnehagelærer"],
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
        type: "text",
        title: "I skole (kun avdeling Bergen):",
        paragraphs: ["Lærervikar"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Undervise klasser, grupper eller enkeltelever i ulike fag",
          "Skape stabilitet, engasjement og trygge rammer for læring i klasserommet",
          "Utøve god klasseledelse",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Skoleassistent"],
      },

      {
        type: "list",
        title: "",
        items: [
          "Bistå læreren aktivt med å holde ro og orden i klasserommet",
          "Samarbeide tett med lærere og andre ansatte",
          "Gi individuell støtte til elever med spesielle behov. Herunder å ta i bruk tilpassede undervisningsmetoder og læringsstiler for å fremme mestring",
          "Arbeid i skolefritidsordningen (SFO)",
          "Bidra til et trygt, inkluderende og positivt skolemiljø",
        ],
      },

      {
        type: "text",
        title: "",
        paragraphs: ["Miljøarbeider"],
      },

      {
        type: "list",
        title: "",
        items: [
          "1 til 1 arbeid med elever med tilretteleggingsbehov",
          "Relasjonsbygging, støtte og motivere elever",
          "Delta i planlegging og oppfølging med arbeidsstedets personell samt samarbeide med hjemmet",
          "Mulighet til å arbeide tilsvarende en fulltidsstilling for å sikre forutsigbarhet for eleven",
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
];
