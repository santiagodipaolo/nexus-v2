import Image from "next/image";
import Hero from "@/components/Hero";
import TalentGallery from "@/components/TalentGallery";
import KnowHow from "@/components/KnowHow";
import Faq from "@/components/FAQ";
import BenefitsTable from "@/components/Benefits";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Hero />
      <BenefitsTable />
      <TalentGallery />
      <KnowHow />
      <Faq />
    </main>
  );
}
