import Layout from "@/components/marketing/layout/Layout";
import SectionHeader from "@/components/marketing/layout/SectionHeader";
import Section1 from "@/components/marketing/sections/service-details-left/Section1";
import Section2 from "@/components/marketing/sections/service-details/Section2";
import Section3 from "@/components/marketing/sections/about/Section3";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader
          title="HR Consulting & Staffing Support"
          group_page=""
          current_page="HR Consulting & Staffing Support"
          display="d-none"
        />
        <Section1 />
        <Section2 />
        <Section3 />
      </Layout>
    </>
  );
}
