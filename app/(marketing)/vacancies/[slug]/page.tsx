import Layout from "@/components/marketing/layout/Layout";
import VacancyDetailsSection from "@/components/marketing/sections/vacancies/VacancyDetailsSection";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function VacancyDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <Layout>
      <VacancyDetailsSection slug={slug} />
    </Layout>
  );
}
