import React from "react";
import Link from "next/link";
import styles from "@/styles/marketing/privacy/privacyPolicy.module.css";

export default function PrivacyPolicyContent() {
  return (
    <section className={styles.page}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Juridisk</p>
          <h1 className={styles.title}>Personvernerklæring</h1>
          <p className={styles.subtitle}>
            Brobyggere Bemannings- og Rekrutteringstjeneste
          </p>

          <div className={styles.metaRow}>
            <span className={styles.badge}>Sist oppdatert: 03.11.25</span>
            <span className={styles.dot} />
            <Link
              className={styles.contactLink}
              href="mailto:celine@brobyggere.com"
            >
              Kontakt: celine@brobyggere.com
            </Link>
          </div>
        </div>

        {/* Content card */}
        <div className={styles.card}>
          {/* Intro */}
          <div className={styles.block}>
            <h2 className={styles.h2}>1. Innledning</h2>
            <p className={styles.p}>
              Brobyggere Bemannings- og Rekrutteringstjeneste behandler
              personopplysninger som en del av vår daglige drift. Denne
              personvernerklæringen forklarer hvordan vi samler inn, lagrer og
              behandler personopplysninger når du benytter våre tjenester som
              jobbsøker, ansatt eller kunde.
            </p>
            <p className={styles.p}>
              Erklæringen beskriver også dine rettigheter etter
              personopplysningsloven (2018) og EUs personvernforordning (GDPR).
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <p className={styles.infoTitle}>Kvalitetssystemansvarlig</p>
                <p className={styles.pTight}>Celine April Rosnes Ramberg</p>
                <Link
                  className={styles.inlineLink}
                  href="mailto:celine@brobyggere.com"
                >
                  celine@brobyggere.com
                </Link>
              </div>

              <div className={styles.infoCard}>
                <p className={styles.infoTitle}>Systemutvikler</p>
                <p className={styles.pTight}>Moein Sahraei</p>
                <Link
                  className={styles.inlineLink}
                  href="mailto:moien@brobyggere.com"
                >
                  moien@brobyggere.com
                </Link>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className={styles.block}>
            <h2 className={styles.h2}>2. Behandlingsansvar og -grunnlag</h2>
            <p className={styles.p}>
              Brobyggere er behandlingsansvarlig for personopplysninger som
              registreres i våre systemer. Moein Sahraei er databehandler og har
              utviklet og drifter våre systemløsninger der personopplysninger
              lagres.
            </p>

            <div className={styles.sectionNote}>
              Vi behandler personopplysninger for følgende formål og med
              følgende rettslige grunnlag:
            </div>

            <h3 className={styles.h3}>Jobbsøkere</h3>
            <ul className={styles.ul}>
              <li>
                <strong>Formål:</strong> Vurdere søkere i forbindelse med
                rekruttering, samt formidle kandidater til oppdrag hos våre
                kunder.
              </li>
              <li>
                <strong>Behandlingsgrunnlag:</strong> Gjennomføring av tiltak
                før inngåelse av arbeidsavtale (GDPR art. 6 (1) b).
              </li>
              <li>
                <strong>Tilleggsgrunnlag:</strong> Samtykke dersom du ønsker at
                vi lagrer din søknad i inntil ett år for framtidige stillinger.
              </li>
            </ul>

            <h3 className={styles.h3}>Ansatte</h3>
            <ul className={styles.ul}>
              <li>
                <strong>Formål:</strong> Oppfylle våre forpliktelser som
                arbeidsgiver og gjøre det mulig å formidle deg til aktuelle
                oppdrag hos våre kunder.
              </li>
              <li>
                <strong>Behandlingsgrunnlag:</strong> Oppfyllelse av
                arbeidsavtale og lovpålagte plikter (GDPR art. 6 (1) b og c).
              </li>
              <li>
                <strong>Eksempler:</strong> Lønn, feriepenger, sykepenger,
                rapportering til NAV og Skatteetaten.
              </li>
            </ul>

            <div className={styles.callout}>
              <p className={styles.calloutTitle}>Politiattest</p>
              <p className={styles.pTight}>
                Vi innhenter og behandler politiattest i henhold til relevante
                forskrifter:
              </p>
              <ul className={styles.ulCompact}>
                <li>Forskrift til opplæringslova §15-4 (2006)</li>
                <li>Forskrift om politiattest i barnehager §7 (2015)</li>
              </ul>
            </div>

            <h3 className={styles.h3}>Kunder</h3>
            <ul className={styles.ul}>
              <li>
                <strong>Formål:</strong> Behandle og følge opp bestillinger og
                bemanningsbehov.
              </li>
              <li>
                <strong>Behandlingsgrunnlag:</strong> Oppfyllelse av avtale
                (GDPR art. 6 (1) b).
              </li>
            </ul>

            <p className={styles.p}>
              Dersom grunnlaget for behandlingen opphører, vil
              personopplysninger kun behandles dersom vi har lovpålagt plikt
              eller gyldig samtykke fra deg. Opplysninger slettes i tråd med
              lagringsbegrensningsprinsippet når formålet er oppfylt.
            </p>
          </div>

          {/* 3 */}
          <div className={styles.block}>
            <h2 className={styles.h2}>
              3. Når samler vi inn personopplysninger?
            </h2>
            <p className={styles.p}>
              Brobyggere samler inn personopplysninger når:
            </p>
            <ul className={styles.ul}>
              <li>
                Du sender inn CV, søknad eller andre dokumenter via vår
                søknadsportal på brobyggere.com eller via andre kanaler (f.eks.
                FINN.no).
              </li>
              <li>Du oppgis som referanse for en kandidat.</li>
              <li>Du signerer arbeidsavtale hos Brobyggere.</li>
              <li>
                Det registreres et avvik eller en tilbakemelding som inneholder
                opplysninger om deg.
              </li>
              <li>
                Du som kunde sender inn en forespørsel eller avroper behov via
                vår nettside, app, e-post, telefon eller SMS.
              </li>
            </ul>

            <p className={styles.p}>
              Dersom du ikke får tilbud om stilling, vil dine opplysninger
              slettes etter avsluttet rekrutteringsprosess. Dersom du ansettes,
              behandles opplysningene dine så lenge arbeidsforholdet varer, og
              deretter i tråd med lovpålagte oppbevaringskrav.
            </p>
          </div>

          {/* 4 */}
          <div className={styles.block}>
            <h2 className={styles.h2}>4. Hvilke opplysninger lagres?</h2>

            <h3 className={styles.h3}>For ansatte og jobbsøkere (*)</h3>
            <ul className={styles.ul}>
              <li>CV, søknad og vedlegg *</li>
              <li>Personalia (navn, kontaktinfo, fødselsdato, etc.) *</li>
              <li>Referat fra veilednings- og medarbeidersamtaler</li>
              <li>
                Registrerte avvik og kundetilbakemeldinger knyttet til din
                arbeidsprestasjon
              </li>
              <li>
                Nødvendig korrespondanse via e-post og SMS knyttet til
                avvikshåndtering
              </li>
            </ul>

            <h3 className={styles.h3}>For kunder</h3>
            <ul className={styles.ul}>
              <li>Organisasjonens navn og adresse</li>
              <li>Avdelings- eller trinninformasjon og ressursnummer</li>
              <li>Kontaktpersonens navn, telefonnummer og e-postadresse</li>
              <li>Tilbakemeldinger og preferanser tilknyttet vikarer</li>
            </ul>
          </div>

          {/* 5 */}
          <div className={styles.block}>
            <h2 className={styles.h2}>5. Lagring og sletting</h2>
            <p className={styles.p}>
              Personopplysninger lagres så lenge det er nødvendig for å oppfylle
              formålet med behandlingen. Når formålet ikke lenger er aktuelt,
              slettes eller anonymiseres opplysningene i samsvar med våre
              interne retningslinjer og gjeldende lovverk.
            </p>
          </div>

          {/* 6 */}
          <div className={styles.block}>
            <h2 className={styles.h2}>6. Dine rettigheter</h2>
            <p className={styles.p}>Som registrert har du rett til:</p>
            <ul className={styles.ul}>
              <li>Innsyn i hvilke opplysninger vi har om deg</li>
              <li>Retting av uriktige opplysninger</li>
              <li>
                Sletting («retten til å bli glemt») der det er lovlig grunnlag
              </li>
              <li>Begrensning av behandling i visse tilfeller</li>
              <li>
                Dataportabilitet – få utlevert dine opplysninger i et
                strukturert format
              </li>
              <li>
                Å trekke tilbake samtykke når behandlingen bygger på dette
              </li>
            </ul>

            <div className={styles.contactCard}>
              <p className={styles.infoTitle}>
                Forespørsler om innsyn eller sletting
              </p>
              <Link
                className={styles.inlineLink}
                href="mailto:celine@brobyggere.com"
              >
                celine@brobyggere.com
              </Link>
            </div>
          </div>

          {/* 7 */}
          <div className={styles.block}>
            <h2 className={styles.h2}>7. Informasjonssikkerhet</h2>
            <p className={styles.p}>
              Vi har etablert tekniske og organisatoriske tiltak for å sikre at
              dine personopplysninger beskyttes mot uautorisert tilgang,
              endring, tap eller misbruk. Våre systemer driftes på sikre servere
              med tilgangskontroll, kryptering og regelmessig
              sikkerhetsgjennomgang.
            </p>
          </div>

          {/* 8 */}
          <div className={styles.block}>
            <h2 className={styles.h2}>
              8. Deling av opplysninger med tredjeparter
            </h2>
            <p className={styles.p}>
              Vi deler ikke personopplysninger med tredjeparter utover det som
              er nødvendig for å oppfylle våre kontraktsmessige og lovpålagte
              forpliktelser. Dette inkluderer rapportering til offentlige
              myndigheter (f.eks. NAV og Skatteetaten) og drift av IT-systemer.
            </p>
          </div>

          {/* 9 */}
          <div className={styles.block}>
            <h2 className={styles.h2}>
              9. Innsyn for kunder ved vurdering til oppdrag
            </h2>
            <p className={styles.p}>
              Når en ansatt eller kandidat vurderes for et spesifikt oppdrag hos
              en kunde, vil Brobyggere gi kunden begrenset innsyn i nødvendige
              personopplysninger for å vurdere egnethet til stillingen.
            </p>

            <p className={styles.p}>Dette kan omfatte:</p>
            <ul className={styles.ul}>
              <li>Navn, kontaktinformasjon og bilde</li>
              <li>Utdanning, arbeidserfaring og kompetanse</li>
              <li>
                Eventuelle sertifikater, attester eller relevante referanser
              </li>
            </ul>

            <p className={styles.p}>
              Delingen skjer kun dersom det foreligger et faktisk oppdragsbehov
              og et gyldig behandlingsgrunnlag (avtale). Kunden er selv
              ansvarlig for å behandle mottatte opplysninger i samsvar med
              gjeldende personvernlovgivning.
            </p>
          </div>

          {/* 10 */}
          <div className={styles.block}>
            <h2 className={styles.h2}>10. Endringer i personvernerklæringen</h2>
            <p className={styles.p}>
              Brobyggere forbeholder seg retten til å oppdatere denne
              personvernerklæringen ved behov. Den nyeste versjonen vil alltid
              være tilgjengelig på vår nettside.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
