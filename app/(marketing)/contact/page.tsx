import Layout from "@/components/marketing/layout/Layout";

import Section1 from "@/components/marketing/sections/contact/Section1";
import Section2 from "@/components/marketing/sections/contact/Section2";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function Home() {
  return (
    <>
      <Layout>
        <Section1 />
        <Section2 />
      </Layout>
    </>
  );
}
