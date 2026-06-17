import Layout from "@/components/marketing/layout/Layout";

import Section1 from "@/components/marketing/sections/about/Section1";
import Section2 from "@/components/marketing/sections/about/Section2";
import Section3 from "@/components/marketing/sections/about/Section3";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss",
};

export default function Home() {
  return (
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 />
    </Layout>
  );
}
