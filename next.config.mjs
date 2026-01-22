/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ---- Old Wix -> /service
      {
        source: "/kopi-av-vikar-til-skole",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/s-projects-side-by-side",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/kopi-av-barnevern",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/about-1",
        destination: "/service",
        permanent: true,
      },

      // ---- Old Wix -> /order
      {
        source: "/oslo-bergen-bestill-vikar",
        destination: "/order",
        permanent: true,
      },
      {
        source: "/bestille-vikar-bergen",
        destination: "/order",
        permanent: true,
      },
      // NOTE: This is already URL-decoded (lillestrøm)
      {
        source: "/bestille-vikar-oslo-lillestrøm",
        destination: "/order",
        permanent: true,
      },
      {
        source: "/copy-of-bestill-vikar-oslo-lillestrøm",
        destination: "/order",
        permanent: true,
      },
      {
        source: "/copy-of-bestill-vikar-stavanger-san",
        destination: "/order",
        permanent: true,
      },

      // ---- Old Wix -> /vacancies
      {
        source: "/kopi-av-registrer-din-cv-bergen",
        destination: "/vacancies",
        permanent: true,
      },
      {
        source: "/bli-vikar-bergen",
        destination: "/vacancies",
        permanent: true,
      },
      {
        source: "/copy-of-registrer-din-cv",
        destination: "/vacancies",
        permanent: true,
      },
      {
        source: "/copy-of-register-din-cv-oslo",
        destination: "/vacancies",
        permanent: true,
      },
      {
        source: "/copy-of-register-din-cv-stavanger-s",
        destination: "/vacancies",
        permanent: true,
      },

      // ---- Old Wix -> /contact
      {
        source: "/kopi-av-ledige-stillinger",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/kopi-av-kontakt-oss-bergen",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/copy-of-kontakt-1",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/copy-of-bergen-1",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/copy-of-stavanger-sandnes",
        destination: "/contact",
        permanent: true,
      },

      // ---- Single redirects
      // /vårt-team -> /about
      {
        source: "/vårt-team",
        destination: "/about",
        permanent: true,
      },

      // IMPORTANT (App Store / Google Play link)
      {
        source: "/privacy-policy",
        destination: "/privacy-policy-app",
        permanent: true,
      },

      // copy-of-våre-verdier-visjoner-og-mål -> /blog
      {
        source: "/copy-of-våre-verdier-visjoner-og-mål",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
