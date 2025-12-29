import Layout from "@/components/marketing/layout/Layout";

import Section1 from "@/components/marketing/sections/blog/Section1";

import SectionHeader from "@/components/marketing/layout/SectionHeader";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader
          title="Nyheter"
          subtitle="Artikler, innsikt og nyttige tips om bemanning, rekruttering og arbeidsliv."
          align="left"
        />
        <Section1 />
      </Layout>
    </>
  );
}
