import Layout from "@/components/marketing/layout/Layout";
import PrivacyPolicyAppContent from "@/components/marketing/sections/privacy/PrivacyPolicyAppContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvernseklæring - App",
};

export default function PrivacyPolicyApp() {
  return (
    <Layout>
      <PrivacyPolicyAppContent />
    </Layout>
  );
}
