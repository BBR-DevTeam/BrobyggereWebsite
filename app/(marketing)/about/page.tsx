import Layout from "@/components/marketing/layout/Layout";
import SectionHeader from "@/components/marketing/layout/SectionHeader";
import Section1 from "@/components/marketing/sections/about/Section1";
import Section2 from "@/components/marketing/sections/home/Section4";
import Section3 from "@/components/marketing/sections/about/Section2";
import Section4 from "@/components/marketing/sections/home/Section3";
import Section5 from "@/components/marketing/sections/home/Section8";
import Section6 from "@/components/marketing/sections/home/Section10";
import Section7 from "@/components/marketing/sections/about/Section3";
export default function Home() {
  return (
    <>
      <Layout>
        <SectionHeader
          title="About Us"
          group_page=""
          current_page="About Us"
          display="d-none"
        />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 classList="about-page-testimonial" />
        <Section6 classList="about-page-team" />
        <Section7 />
      </Layout>
    </>
  );
}
