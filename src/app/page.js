import Hero from "@/components/Hero";
import BenefitsTable from "@/components/Benefits";
import Team from "@/components/Team";
import TalentCarousel from "@/components/TalentGallery";
import Pricing from "@/components/Pricing";
import VideoPlayer from "@/components/VideoPlayer";
import Faq from "@/components/FAQ";

export default function Home() {
  return (
    <main className="bg-[#f5ede5] flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Hero />
      <BenefitsTable />
      <Team />
      <TalentCarousel />
      <Pricing />
      {/* <VideoPlayer /> */}
      <Faq />
    </main>
  );
}
