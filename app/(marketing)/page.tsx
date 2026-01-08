import Layout from "@/components/marketing/layout/Layout";
import Section1 from "@/components/marketing/sections/home/Section1";
import Section2 from "@/components/marketing/sections/home/Section2";
import Section4 from "@/components/marketing/sections/home/Section4";
import Section5 from "@/components/marketing/sections/home/Section5";
import Section6 from "@/components/marketing/sections/home/Section7";
import Section7 from "@/components/marketing/sections/home/Section9";

export default function Home() {
  return (
    <>
      <Layout>
        <Section1 />
        <Section2 />
        <Section4 backgroundColor="" />

        <Section5 />

        <Section6 />

        <Section7 />
      </Layout>
    </>
  );
}
