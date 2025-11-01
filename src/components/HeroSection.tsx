import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroBg from "@/assets/halloween-hero-bg.webp";

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationState, setAnimationState] = useState({
    heart: false,
    title: false,
    subtitle: false,
    description: false,
    button: false,
    background: false,
  });

  useEffect(() => {
    // Secuencia de animaciones estilo intro de videoclip
    const animationSequence = async () => {
      // Fondo con glow sutil
      setAnimationState(prev => ({ ...prev, background: true }));
      
      // Corazón aparece primero con efecto dramático
      setTimeout(() => {
        setAnimationState(prev => ({ ...prev, heart: true }));
      }, 300);

      // Título principal aparece
      setTimeout(() => {
        setAnimationState(prev => ({ ...prev, title: true }));
      }, 800);

      // Subtítulo Halloween
      setTimeout(() => {
        setAnimationState(prev => ({ ...prev, subtitle: true }));
      }, 1200);

      // Descripción
      setTimeout(() => {
        setAnimationState(prev => ({ ...prev, description: true }));
      }, 1600);

      // Botón final con efecto especial
      setTimeout(() => {
        setAnimationState(prev => ({ ...prev, button: true }));
      }, 2000);
    };

    animationSequence();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-container gpu-accelerated">
      {/* Fondo con imagen y neblina mejorada */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ${
          animationState.background ? 'animate-background-glow-entrance' : ''
        }`}
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background"></div>
        <div className="absolute inset-0" style={{ 
          background: 'radial-gradient(circle at 50% 50%, transparent 20%, hsl(25 15% 8% / 0.4) 100%)'
        }}></div>
        
        {/* Neblina mágica sutil */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 animate-mist opacity-10" style={{
            background: 'radial-gradient(ellipse at 30% 70%, rgba(0, 255, 136, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(255, 140, 0, 0.1) 0%, transparent 50%)'
          }}></div>
        </div>
      </div>

      {/* Partículas mágicas mejoradas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Partículas principales con brillo */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`main-${i}`}
            className="absolute rounded-full animate-magical-particles"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 100}%`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, #00FF88, transparent)' 
                : i % 3 === 1 
                  ? 'radial-gradient(circle, #FF8C00, transparent)'
                  : 'radial-gradient(circle, #00FF88, #FF8C00, transparent)',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
              filter: 'blur(0.5px)',
              boxShadow: i % 2 === 0 
                ? '0 0 8px rgba(0, 255, 136, 0.6)' 
                : '0 0 6px rgba(255, 140, 0, 0.5)'
            }}
          />
        ))}
        
        {/* Partículas de fondo sutiles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`bg-${i}`}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'hsl(var(--primary) / 0.4)' : 'hsl(var(--secondary) / 0.3)',
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto gpu-accelerated">
        {/* Corazón con efectos mágicos */}
        <div className={`mb-8 ${animationState.heart ? 'animate-heart-glow-entrance' : ''}`}>
          <Heart 
            className={`w-24 h-24 mx-auto text-primary fill-current ${
              animationState.heart ? 'animate-heart-glow-pulse' : ''
            }`} 
            style={{
              filter: animationState.heart 
                ? 'drop-shadow(0 0 12px #00FF88) drop-shadow(0 0 24px rgba(0, 255, 136, 0.3))' 
                : 'none'
            }}
          />
        </div>

        {/* Título principal con entrada secuencial */}
        <div className={`${animationState.title ? 'animate-hero-fade-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-8xl font-playfair font-black mb-6 text-glow-mint">
            Ferxxo Love Story
          </h1>
        </div>

        {/* Subtítulo Halloween con entrada separada */}
        <div className={`${animationState.subtitle ? 'animate-hero-fade-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
          <span className="block text-4xl md:text-5xl mb-6 text-secondary text-glow-warm font-playfair font-black">
            Halloween💚
          </span>
        </div>

        {/* Descripción con entrada fluida */}
        <div className={`${animationState.description ? 'animate-hero-fade-slide-up' : ''}`} style={{ animationDelay: '0.6s' }}>
          <p className="text-2xl md:text-4xl mb-4 text-primary font-semibold text-glow-mint">
            Ey mor, que hubo pue 💚
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-quicksand">
            Las fotos que nos pudimos tomar:)
          </p>
        </div>

        {/* Botón con entrada especial y efectos hover */}
        <div className={`${animationState.button ? 'animate-button-pulse-entrance' : ''}`} style={{ animationDelay: '0.8s' }}>
          <Button
            onClick={onEnter}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`btn-vintage px-8 py-6 text-lg rounded-full font-quicksand transition-all duration-300 ${
              isHovered && animationState.button ? 'animate-button-glow-hover' : ''
            }`}
            size="lg"
            style={{
              boxShadow: animationState.button 
                ? '0 4px 15px rgba(0, 255, 136, 0.2)' 
                : 'none'
            }}
          >
            {isHovered ? "Dale play 🔥🕯️" : "Dale Click"}
          </Button>
        </div>

        <div className="mt-16 flex gap-8 justify-center items-center opacity-50">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <p className="text-sm uppercase tracking-widest text-primary"></p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
