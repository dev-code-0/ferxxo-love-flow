import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-primary/30"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8 animate-float">
          <Heart className="w-24 h-24 mx-auto text-primary animate-glow-pulse" fill="currentColor" />
        </div>

        <h1 className="text-6xl md:text-8xl font-urbanist font-black mb-6 text-glow-neon">
          Ferxxo Love Story
        </h1>

        <p className="text-2xl md:text-4xl mb-4 text-primary font-semibold text-glow-neon">
          Nuestra historia con flow 💚
        </p>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Esto es pa' ti mami 😎💚
        </p>

        <Button
          onClick={onEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="btn-neon px-8 py-6 text-lg rounded-full"
          size="lg"
        >
          {isHovered ? "Dale play 🔥" : "Entrar al álbum"}
        </Button>

        <div className="mt-16 flex gap-8 justify-center items-center opacity-50">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <p className="text-sm uppercase tracking-widest text-primary">Scroll para explorar</p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
