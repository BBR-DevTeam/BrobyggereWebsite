import Layout from "@/components/marketing/layout/Layout";
import SectionHeader from "@/components/marketing/layout/SectionHeader";
import Section1 from "@/components/marketing/sections/contact/Section1";
import Section2 from "@/components/marketing/sections/contact/Section2";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader
          title="Contact Us"
          group_page=""
          current_page="Contact Us"
          display="d-none"
        />
        <Section1 />
        <Section2 />
      </Layout>
    </>
  );
}
