import Image from "next/image";
import Hero from "@/components/Hero";
import TalentGallery from "@/components/TalentGallery";
import Pricing from "@/components/Pricing";
import Faq from "@/components/FAQ";
import BenefitsTable from "@/components/Benefits";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <main className="bg-[#f5ede5] flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Hero />
      <BenefitsTable />
      <TalentGallery />
      <Pricing />
      <VideoPlayer />
      <Faq />
    </main>
  );
}
