import Layout from "@/components/marketing/layout/Layout";
import SectionHeader from "@/components/marketing/layout/SectionHeader";
import Section1 from "@/components/marketing/sections/blog-details/Section1";
import Section2 from "@/components/marketing/sections/blog-details/Section2";
import Section3 from "@/components/marketing/sections/about/Section3";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader
          title="Talent Chronicles Stories from the Hiring Frontline"
          group_page="Blog"
          current_page="Talent Chronicles Stories from the Hiring Frontline"
          display="d-block"
        />
        <Section1 />
        <Section2 />
        <Section3 />
      </Layout>
    </>
  );
}
