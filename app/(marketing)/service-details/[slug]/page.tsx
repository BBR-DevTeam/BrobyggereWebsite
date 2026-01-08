// app/service-details/[slug]/page.tsx
import Layout from "@/components/marketing/layout/Layout";
import Section1 from "@/components/marketing/sections/service-details/Section1";
import Section2 from "@/components/marketing/sections/service-details/Section2";

import { services } from "@/utils/marketing/service";
import { notFound } from "next/navigation";

interface ServiceDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailsPage({
  params,
}: ServiceDetailsPageProps) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <Layout>
      <Section1 service={service} />
      <Section2 currentSlug={service.slug} />
    </Layout>
  );
}
