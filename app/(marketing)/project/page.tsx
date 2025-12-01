import Layout from "@/components/marketing/layout/Layout";
import SectionHeader from "@/components/marketing/layout/SectionHeader";
import Section1 from "@/components/marketing/sections/project/Section1";
import Section2 from "@/components/marketing/sections/about/Section3";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader
          title="Our Projects"
          group_page=""
          current_page="Our Projects"
          display="d-none"
        />
        <Section1 />
        <Section2 />
      </Layout>
    </>
  );
}
