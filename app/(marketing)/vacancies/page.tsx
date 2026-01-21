import Layout from "@/components/marketing/layout/Layout";
import Section1 from "@/components/marketing/sections/vacancies/Section1";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ledige stillinger",
};

export default function VacanciesPage() {
  return (
    <Layout>
      <Section1 />
    </Layout>
  );
}
