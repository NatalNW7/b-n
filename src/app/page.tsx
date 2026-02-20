import Hero from "@/components/Hero";
import CeremonySection from "@/components/CeremonySection";
import RsvpSection from "@/components/RsvpSection";
import GiftsSection from "@/components/GiftsSection";
import PhotoHubSection from "@/components/PhotoHubSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <CeremonySection />
      <RsvpSection />
      <GiftsSection />
      <PhotoHubSection />
      <Footer />
    </>
  );
}
