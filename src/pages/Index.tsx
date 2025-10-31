import { useState, useRef, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import MusicPlayer from "@/components/MusicPlayer";
import PhrasesSection from "@/components/PhrasesSection";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    setShowContent(true);
  };

  useEffect(() => {
    if (showContent && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showContent]);

  return (
    <main className="min-h-screen">
      <HeroSection onEnter={handleEnter} />
      
      {showContent && (
        <div ref={contentRef} className="animate-fade-in">
          <PhotoGallery />
          <MusicPlayer />
          <PhrasesSection />
          <FinalSection />
        </div>
      )}
    </main>
  );
};

export default Index;
