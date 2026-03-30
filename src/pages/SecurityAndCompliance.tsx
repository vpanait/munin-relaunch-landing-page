import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HowWeProtectDocuments } from "@/components/HowWeProtectDocuments";
import { PrivacyDataHandling } from "@/components/PrivacyDataHandling";
import { ComplianceRoadmap } from "@/components/ComplianceRoadmap";

const SecurityAndCompliance = () => {
  return (
    <div className="min-h-screen">
      <Header hideNavLinks={true} />
      <main className="pt-16">
        <HowWeProtectDocuments />
        <PrivacyDataHandling />
        <ComplianceRoadmap />
      </main>
      <Footer />
    </div>
  );
};

export default SecurityAndCompliance;

