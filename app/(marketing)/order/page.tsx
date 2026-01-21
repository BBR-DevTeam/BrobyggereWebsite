import Layout from "@/components/marketing/layout/Layout";

import Section1 from "@/components/marketing/sections/order/Section1";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bestill Vikar",
};

export default function Home() {
  return (
    <>
      <Layout>
        <Section1 />
      </Layout>
    </>
  );
}
