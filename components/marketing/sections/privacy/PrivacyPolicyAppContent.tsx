import React from "react";
import Link from "next/link";
import styles from "@/styles/marketing/privacy/privacyPolicyApp.module.css";

export default function PrivacyPolicyAppContent() {
  return (
    <section className={styles.page}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Juridisk</p>
          <h1 className={styles.title}>
            Personvernerklæring for Brobyggere-appen
          </h1>
          <p className={styles.subtitle}>
            Denne siden beskriver hvordan appen behandler informasjon for både
            kunder og ansatte.
          </p>

          <div className={styles.metaRow}>
            <span className={styles.badge}>Gjelder: Brobyggere App</span>
            <span className={styles.dot} />
            <Link
              className={styles.contactLink}
              href="mailto:kontakt@brobyggere.com"
            >
              kontakt@brobyggere.com
            </Link>
          </div>
        </div>

        {/* Main */}
        <div className={styles.card}>
          {/* =======================
              KUNDER
              ======================= */}
          <div id="kunder" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Del 1</span>
              <h2 className={styles.h2}>Personvern for Kunder</h2>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>1. Innledning</h3>
              <p className={styles.p}>
                Vi setter stor pris på ditt samarbeid med vår bedrift og ønsker
                å forsikre oss om at du er godt informert og komfortabel med vår
                bruk av informasjon knyttet til din virksomhet. Denne
                erklæringen er laget for å forklare hvordan informasjonen vil
                bli brukt og sikret.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>2. Formål</h3>
              <p className={styles.p}>
                Hensikten med denne samtykkeerklæringen er å innhente ditt
                samtykke til å bruke informasjon om din virksomhet, inkludert
                navn, telefonnummer, adresse, avdeling og bestillingsdetaljer,
                for administrativ bruk og for å forbedre kommunikasjonen med
                våre ansatte og administrasjon.
              </p>

              <div className={styles.split}>
                <div className={styles.splitCard}>
                  <p className={styles.splitTitle}>For våre ansatte</p>
                  <p className={styles.pTight}>
                    Informasjon om din virksomhet (navn, telefonnummer, adresse,
                    avdeling og bestillingsdetaljer) kan deles med våre ansatte
                    for å sikre effektiv kommunikasjon og samarbeid.
                  </p>
                </div>

                <div className={styles.splitCard}>
                  <p className={styles.splitTitle}>For administrasjonen</p>
                  <p className={styles.pTight}>
                    Informasjon om din virksomhet brukes av administrasjonen for
                    å administrere og behandle bestillinger samt forbedre
                    tjenestene vi tilbyr.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>3. Bruk av Firebase-tjenester</h3>

              <div className={styles.callout}>
                <p className={styles.calloutTitle}>
                  Firebase Cloud Messaging (FCM)
                </p>
                <p className={styles.pTight}>
                  Vi bruker FCM for å sende varsler om kontooppdateringer,
                  påminnelser og viktige meldinger. Dette kan inkludere
                  innsamling av enhetsidentifikatorer for korrekt levering av
                  meldinger.
                </p>
              </div>

              <div className={styles.callout}>
                <p className={styles.calloutTitle}>Firebase App Check</p>
                <p className={styles.pTight}>
                  For å beskytte appens sikkerhet bruker vi Firebase App Check,
                  som validerer enhetens legitimitet:
                </p>
                <ul className={styles.ulCompact}>
                  <li>
                    <strong>Device Check (Apple-enheter):</strong> Verifiserer
                    at enheten er legitim og beskytter mot misbruk.
                  </li>
                  <li>
                    <strong>Play Integrity (Android-enheter):</strong> Validerer
                    enheten for å sikre at den oppfyller våre
                    sikkerhetsstandarder.
                  </li>
                </ul>
                <p className={styles.pTight}>
                  Disse tjenestene hjelper oss å beskytte dine data ved å
                  validere enheten som får tilgang til appen.
                </p>
              </div>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>4. Lagring av Data</h3>
              <p className={styles.p}>
                Vi lagrer kundedata i Google Firebase’s Firestore og bilder i
                Firebase Storage for å sikre pålitelig og sikker lagring:
              </p>
              <ul className={styles.ul}>
                <li>
                  <strong>Firestore:</strong> Navn, telefonnummer, adresse og
                  bestillingsdetaljer lagres i Firestore (skybasert database
                  levert av Google Firebase).
                </li>
                <li>
                  <strong>Firebase Storage:</strong> Bilder (f.eks.
                  profilbilder) lagres i Firebase Storage og beskyttes gjennom
                  Firebase sine sikkerhetsprotokoller.
                </li>
              </ul>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>5. Bruk av Informasjon</h3>
              <p className={styles.p}>
                Informasjonen lagres sikkert og brukes kun til formålene
                beskrevet ovenfor. Vi deler ikke informasjonen med tredjeparter
                uten ditt samtykke, med mindre det er påkrevd ved lov.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>6. Rettigheter</h3>
              <p className={styles.p}>
                Du har rett til å trekke tilbake samtykke når som helst ved å
                kontakte vår kundeservice. Tilbaketrekningen påvirker ikke
                lovligheten av bruken av informasjon som allerede er samlet inn
                før tilbaketrekningen.
              </p>
              <div className={styles.contactCard}>
                <p className={styles.contactTitle}>Kontakt kundeservice</p>
                <Link
                  className={styles.inlineLink}
                  href="mailto:kontakt@brobyggere.com"
                >
                  kontakt@brobyggere.com
                </Link>
              </div>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>7. Konfidensialitet</h3>
              <p className={styles.p}>
                Vi forplikter oss til å behandle informasjon om din virksomhet
                med respekt og sørge for at den brukes på en måte som ivaretar
                virksomhetens interesser. Informasjonen vil ikke bli brukt på en
                måte som kan skade virksomhetens omdømme.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>8. Frivillighet</h3>
              <p className={styles.p}>
                Deltakelse er helt frivillig, og du har rett til å si nei til å
                dele informasjonen uten negative konsekvenser for relasjonen til
                vår bedrift.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>9. Gyldighet</h3>
              <p className={styles.p}>
                Dette samtykket gjelder fra den datoen det er signert og vil
                forbli gyldig inntil det skriftlig trekkes tilbake.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>10. Oppbevaring av Data</h3>
              <p className={styles.p}>
                Vi oppbevarer informasjon om din virksomhet og bestillinger så
                lenge forretningsforholdet er aktivt. Når samarbeidet opphører
                slettes informasjonen, med mindre loven krever at vi beholder
                den.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.hr} />

          {/* =======================
              ANSATTE
              ======================= */}
          <div id="ansatte" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Del 2</span>
              <h2 className={styles.h2}>Personvern for Ansatte</h2>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>1. Innledning</h3>
              <p className={styles.p}>
                Vi setter stor pris på din innsats i vår bedrift og ønsker å
                forsikre oss om at du er godt informert og komfortabel med vår
                bruk av din personlige informasjon i appen. Denne erklæringen
                forklarer hvordan informasjonen din vil bli brukt og sikret.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>2. Formål</h3>
              <p className={styles.p}>
                Hensikten med denne samtykkeerklæringen er å innhente ditt
                samtykke til å bruke din personlige informasjon, inkludert fullt
                navn, e-postadresse, telefonnummer, bilde, adresse og
                tilgjengelighet, i vår bedriftsapp.
              </p>

              <div className={styles.split}>
                <div className={styles.splitCard}>
                  <p className={styles.splitTitle}>For kunder</p>
                  <p className={styles.pTight}>
                    Fullt navn, telefonnummer og bilde kan deles for å gjøre det
                    enklere å identifisere og kontakte deg.
                  </p>
                </div>

                <div className={styles.splitCard}>
                  <p className={styles.splitTitle}>Internt bruk</p>
                  <p className={styles.pTight}>
                    Navn, adresse, telefonnummer, bilde og tilgjengelighet
                    brukes internt for administrative formål, inkludert
                    tildeling av arbeid basert på din tilgjengelighet.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>3. Bruk av Firebase-tjenester</h3>

              <div className={styles.callout}>
                <p className={styles.calloutTitle}>
                  Firebase Cloud Messaging (FCM)
                </p>
                <p className={styles.pTight}>
                  Vi bruker FCM for å sende varsler om arbeidsskift,
                  tilgjengelighet og andre relevante oppdateringer.
                  Enhetsidentifikatorer kan samles inn for å sikre korrekt
                  levering av meldinger.
                </p>
              </div>

              <div className={styles.callout}>
                <p className={styles.calloutTitle}>Firebase App Check</p>
                <p className={styles.pTight}>
                  Firebase App Check brukes for å validere enhetens legitimitet
                  via:
                </p>
                <ul className={styles.ulCompact}>
                  <li>Device Check (Apple-enheter)</li>
                  <li>Play Integrity (Android-enheter)</li>
                </ul>
                <p className={styles.pTight}>
                  Disse tjenestene beskytter ansatte og deres data mot misbruk.
                </p>
              </div>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>4. Lagring av Data</h3>
              <p className={styles.p}>
                Vi lagrer ansattdata i Google Firebase’s Firestore og bilder i
                Firebase Storage for sikker og pålitelig lagring:
              </p>
              <ul className={styles.ul}>
                <li>
                  <strong>Firestore:</strong> Navn, e-postadresse,
                  telefonnummer, bilde og tilgjengelighet lagres i Firestore.
                </li>
                <li>
                  <strong>Firebase Storage:</strong> Profilbilder lagres i
                  Firebase Storage og beskyttes gjennom Firebase sine
                  sikkerhetsprotokoller.
                </li>
              </ul>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>5. Bruk av Informasjon</h3>
              <p className={styles.p}>
                Din informasjon lagres sikkert og brukes kun til formålene
                beskrevet ovenfor. Vi deler ikke informasjon med tredjeparter
                uten samtykke, med mindre det er påkrevd ved lov.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>6. Rettigheter</h3>
              <p className={styles.p}>
                Du har rett til å trekke tilbake samtykket når som helst ved å
                kontakte HR-avdelingen. Tilbaketrekningen påvirker ikke
                lovligheten av bruken av informasjon som allerede er samlet inn
                før tilbaketrekningen.
              </p>

              <div className={styles.contactCard}>
                <p className={styles.contactTitle}>Kontakt HR</p>
                <Link
                  className={styles.inlineLink}
                  href="mailto:kontakt@brobyggere.com"
                >
                  kontakt@brobyggere.com
                </Link>
              </div>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>7. Konfidensialitet</h3>
              <p className={styles.p}>
                Vi forplikter oss til å behandle din informasjon med respekt og
                sørge for at den brukes på en måte som ivaretar ditt privatliv.
                Informasjonen vil ikke bli brukt på en måte som kan skade ditt
                omdømme eller personvern.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>8. Frivillighet</h3>
              <p className={styles.p}>
                Din deltakelse er helt frivillig, og du har rett til å si nei
                til å dele din informasjon uten negative konsekvenser for
                ansettelsesforholdet.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>9. Gyldighet</h3>
              <p className={styles.p}>
                Dette samtykket gjelder fra den datoen det er signert og vil
                forbli gyldig inntil det skriftlig trekkes tilbake.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.h3}>10. Oppbevaring av Data</h3>
              <p className={styles.p}>
                Vi oppbevarer din informasjon (inkludert tilgjengelighet) så
                lenge du er aktivt ansatt. Når ansettelsen opphører slettes
                personlig informasjon, med mindre loven krever at vi beholder
                den i en viss periode.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom back link */}
        <div className={styles.bottomBar}>
          <Link className={styles.backLink} href="/">
            ← Tilbake til forsiden
          </Link>
        </div>
      </div>
    </section>
  );
}
