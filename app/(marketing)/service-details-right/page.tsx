import Layout from "@/components/marketing/layout/Layout";
import SectionHeader from "@/components/marketing/layout/SectionHeader";
import Section1 from "@/components/marketing/sections/service-details-right/Section1";
import Section2 from "@/components/marketing/sections/service-details/Section2";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader title="HR Consulting & Staffing Support" />
        <Section1 />
        <Section2 />
      </Layout>
    </>
  );
}
