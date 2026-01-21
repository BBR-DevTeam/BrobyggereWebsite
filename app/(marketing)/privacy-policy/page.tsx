import Layout from "@/components/marketing/layout/Layout";
import PrivacyPolicyContent from "@/components/marketing/sections/privacy/PrivacyPolicyContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvernseklæring",
};

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PrivacyPolicyContent />
    </Layout>
  );
}
