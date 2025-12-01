import Layout from "@/components/marketing/layout/Layout";
import SectionHeader from "@/components/marketing/layout/SectionHeader";
import Section1 from "@/components/marketing/sections/blog/Section1";
import Section2 from "@/components/marketing/sections/about/Section3";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader
          title="Our Blogs"
          group_page=""
          current_page="Our Blogs"
          display="d-none"
        />
        <Section1 />
        <Section2 />
      </Layout>
    </>
  );
}
