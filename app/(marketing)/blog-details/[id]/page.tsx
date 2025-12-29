import Layout from "@/components/marketing/layout/Layout";
import Section1 from "@/components/marketing/sections/blog-details/Section1";
import Section2 from "@/components/marketing/sections/blog-details/Section2";

interface BlogDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { id } = await params;
  const blogId = Number(id);

  return (
    <Layout>
      <Section1 blogId={blogId} />
      <Section2 blogId={blogId} />
    </Layout>
  );
}
