import Layout from "@/components/marketing/layout/Layout";
import SectionHeader from "@/components/marketing/layout/SectionHeader";
import Section1 from "@/components/marketing/sections/service/Section1";

export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader
          title="Våre tjenester"
          subtitle="Bemanning til skole, barnehage, renhold og helse – tilpasset deres behov."
          align="left"
        />
        <Section1 />
      </Layout>
    </>
  );
}
