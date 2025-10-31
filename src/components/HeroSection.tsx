import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroBg from "@/assets/halloween-hero-bg.jpg";

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con imagen y neblina */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background"></div>
        <div className="absolute inset-0" style={{ 
          background: 'radial-gradient(circle at 50% 50%, transparent 20%, hsl(25 15% 8% / 0.4) 100%)'
        }}></div>
      </div>

      {/* Hojas flotantes y partículas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'hsl(var(--secondary) / 0.4)' 
                : i % 3 === 1 
                  ? 'hsl(var(--accent) / 0.3)'
                  : 'hsl(var(--primary) / 0.3)',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8 animate-float">
          <Heart className="w-24 h-24 mx-auto text-primary animate-glow-pulse" fill="currentColor" />
        </div>

        <h1 className="text-6xl md:text-8xl font-playfair font-black mb-6 text-glow-mint">
          Ferxxo Love Story
          <span className="block text-4xl md:text-5xl mt-4 text-secondary text-glow-warm">
            Halloween Vintage 💚🎃
          </span>
        </h1>

        <p className="text-2xl md:text-4xl mb-4 text-primary font-semibold text-glow-mint">
          Nuestra historia bajo la luna y el flow 💚🕯️
        </p>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-quicksand">
          Un álbum romántico vintage lleno de misterio y amor
        </p>

        <Button
          onClick={onEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="btn-vintage px-8 py-6 text-lg rounded-full font-quicksand"
          size="lg"
        >
          {isHovered ? "Dale play 🔥🕯️" : "Abrir el álbum encantado 💚"}
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
