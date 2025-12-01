import Layout from "@/components/marketing/layout/Layout";
import SectionHeader from "@/components/marketing/layout/SectionHeader";
import Section1 from "@/components/marketing/sections/team/Section1";
import Section2 from "@/components/marketing/sections/about/Section3";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader
          title="Our Team"
          group_page=""
          current_page="Team"
          display="d-none"
        />
        <Section1 />
        <Section2 />
      </Layout>
    </>
  );
}
