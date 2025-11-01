import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import halloweenHeart from "@/assets/halloween-heart.webp";

const FinalSection = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden atmospheric-particles">
      {/* Fondo con resplandor vintage y efectos de niebla */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background"></div>
        {/* Niebla en movimiento */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
                        bg-secondary/8 rounded-full blur-[160px] animate-smoke-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                        bg-primary/10 rounded-full blur-[140px] animate-mist"></div>
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] 
                        bg-secondary/6 rounded-full blur-[100px] animate-float"></div>
        {/* Resplandor cálido tipo vela */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] 
                        bg-gradient-radial from-secondary/15 to-transparent rounded-full blur-[80px] animate-candle-flicker"></div>
        <div className="absolute bottom-1/4 left-1/5 w-[250px] h-[250px] 
                        bg-gradient-radial from-primary/12 to-transparent rounded-full blur-[60px] animate-heart-glow-expand"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {!showSurprise ? (
          <div className="animate-fade-in">
            {/* Corazón central con efectos mejorados */}
            <div className="mb-12 flex justify-center animate-float">
              <div className="relative heart-smoke-effect">
                {/* Sombra circular que respira */}
                <div className="absolute inset-0 rounded-full animate-heart-shadow-breathe -z-10"></div>
                {/* Resplandor que se expande y contrae */}
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-heart-glow-expand -z-20"></div>
                <img 
                  src={halloweenHeart} 
                  alt="Halloween Heart" 
                  className="w-64 h-64 object-cover rounded-full border-4 border-primary/40 relative z-10"
                  loading="lazy"
                  decoding="async"
                  style={{ boxShadow: 'var(--shadow-mint), var(--shadow-candle)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-full z-20"></div>
              </div>
            </div>

            {/* Mensaje principal con brillo dinámico */}
            <h2 className="text-5xl md:text-7xl font-playfair font-black mb-8 text-glow-mint leading-tight animate-light-sweep animate-color-transition relative">
              Gracias por existir
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-2xl md:text-3xl text-foreground font-semibold font-quicksand animate-candle-flicker">
                Incluso en la oscuridad, tú eres mi luz <span className="animate-emoji-float inline-block">💚</span>
              </p>
              <p className="text-2xl md:text-3xl text-primary font-semibold text-glow-mint font-cormorant animate-color-cycle">
                Si la vida es una canción, que todas las noches sean contigo
              </p>
            </div>

            {/* Línea decorativa */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            </div>

            {/* Botón sorpresa con efectos mejorados */}
            <Button
              onClick={() => setShowSurprise(true)}
              className="btn-vintage-outline px-8 py-6 text-lg rounded-full group font-quicksand animate-button-glow hover:scale-105 transition-all duration-300"
              size="lg"
            >
              <span className="mr-2">Haz click</span>
              <span className="group-hover:scale-125 transition-transform inline-block">
              </span>
            </Button>
          </div>
        ) : (
          <div className="animate-fade-scale-in">
            {/* Sorpresa revelada con efectos mejorados */}
            <div className="relative">
              {/* Estrellas flotantes con colores Ferxxo */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(12)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="absolute animate-neon-particles-ferxxo"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.3}s`,
                      fontSize: `${Math.random() * 20 + 20}px`,
                      color: i % 3 === 0 ? '#00ff88' : i % 3 === 1 ? '#9933ff' : '#ff914d',
                      filter: `drop-shadow(0 0 8px ${i % 3 === 0 ? '#00ff88' : i % 3 === 1 ? '#9933ff' : '#ff914d'})`,
                    }}
                  />
                ))}
              </div>

              {/* Fondo con estilo neón Ferxxo */}
              <div className="relative z-10 p-12 rounded-3xl ferxxo-neon-bg backdrop-blur-md ferxxo-particles">
                {/* Reflejo neón en el suelo */}
                <div className="neon-reflect"></div>
                
                <div className="mb-8 flex justify-center">
                  <Heart className="w-20 h-20 text-[#00ff88] animate-glow-pulse" fill="currentColor" 
                         style={{ filter: 'drop-shadow(0 0 20px #00ff88) drop-shadow(0 0 40px rgba(0,255,136,0.4))' }} />
                </div>

                <h3 className="text-4xl md:text-5xl font-playfair font-black mb-6 ferxxo-neon-title">
                  Eres increíble...
                </h3>

                <p className="text-xl md:text-2xl ferxxo-secondary-text mb-6 leading-relaxed font-quicksand animate-soft-blink">
                  No hace falta verte para saber que me encantas
                  <br />
                  Aunque haya kilómetros, tu voz suena cerca
                </p>

                <p className="text-2xl md:text-3xl font-bold font-cormorant ferxxo-neon-final relative">
                  Ey mor, cuidese mucho, le quiero <span className="animate-emoji-float inline-block">💚</span>
                </p>

                <div className="mt-12 flex justify-center gap-3">
                  <div className="w-4 h-4 rounded-full ferxxo-nav-dot inactive animate-bounce"></div>
                  <div className="w-4 h-4 rounded-full ferxxo-nav-dot active animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-4 h-4 rounded-full ferxxo-nav-dot inactive animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button
                onClick={() => setShowSurprise(false)}
                variant="ghost"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ← Volver
              </Button>
            </div>
          </div>
        )}

        {/* Firma */}
        <div className="mt-20 pt-8 border-t border-secondary/20">
          <p className="text-sm text-muted-foreground font-quicksand">
           <span className="animate-emoji-float inline-block">💚</span> Ferxxo Love Story <span className="animate-emoji-float inline-block">💚</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
