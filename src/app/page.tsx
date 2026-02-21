import Hero from "@/components/Hero";
import OurStorySection from "@/components/OurStorySection";
import CeremonySection from "@/components/CeremonySection";
import RsvpSection from "@/components/RsvpSection";
import GiftsSection from "@/components/GiftsSection";
import PhotoHubSection from "@/components/PhotoHubSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStorySection />
      <CeremonySection />
      <RsvpSection />
      <GiftsSection />
      {/* <PhotoHubSection /> */}
      <Footer />
    </>
  );
}
