import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import halloweenHeart from "@/assets/halloween-heart.jpg";

const FinalSection = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Fondo con resplandor vintage */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                        bg-secondary/12 rounded-full blur-[140px] animate-glow-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] 
                        bg-primary/8 rounded-full blur-[100px] animate-float"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {!showSurprise ? (
          <div className="animate-fade-in">
            {/* Corazón central */}
            <div className="mb-12 flex justify-center animate-float">
              <div className="relative">
                <img 
                  src={halloweenHeart} 
                  alt="Halloween Heart" 
                  className="w-64 h-64 object-cover rounded-full border-4 border-primary/40"
                  style={{ boxShadow: 'var(--shadow-mint), var(--shadow-candle)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Mensaje principal */}
            <h2 className="text-5xl md:text-7xl font-playfair font-black mb-8 text-glow-mint leading-tight">
              Gracias por existir 💚🕯️
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-2xl md:text-3xl text-foreground font-semibold font-quicksand">
                Incluso en la oscuridad, tú eres mi luz 💚
              </p>
              <p className="text-2xl md:text-3xl text-primary font-semibold text-glow-mint font-cormorant">
                Esta noche y todas las que vengan, contigo siempre
              </p>
            </div>

            {/* Línea decorativa */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            </div>

            {/* Botón sorpresa */}
            <Button
              onClick={() => setShowSurprise(true)}
              className="btn-vintage-outline px-8 py-6 text-lg rounded-full group font-quicksand"
              size="lg"
            >
              <span className="mr-2">Haz click para ver nuestra magia</span>
              <span className="group-hover:scale-125 transition-transform inline-block">💚✨</span>
            </Button>
          </div>
        ) : (
          <div className="animate-fade-in">
            {/* Sorpresa revelada */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(12)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="absolute text-primary animate-float"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`,
                      fontSize: `${Math.random() * 20 + 20}px`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 p-12 rounded-3xl bg-card/60 backdrop-blur-md border-2 border-secondary/30"
                   style={{ boxShadow: 'var(--shadow-warm), var(--shadow-candle)' }}>
                <div className="mb-8 flex justify-center">
                  <Heart className="w-20 h-20 text-primary animate-glow-pulse" fill="currentColor" 
                         style={{ filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.6))' }} />
                </div>

                <h3 className="text-4xl md:text-5xl font-playfair font-black mb-6 text-glow-warm">
                  ¡Eres increíble! ✨🎃
                </h3>

                <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed font-quicksand">
                  Cada día contigo es una bendición.
                  <br />
                  Eres mi persona favorita, mi paz, mi todo.
                </p>

                <p className="text-2xl md:text-3xl font-bold text-primary text-glow-mint font-cormorant">
                  Te amo con todo mi ser 💚🌙
                </p>

                <div className="mt-12 flex justify-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-secondary animate-bounce" style={{ boxShadow: 'var(--shadow-warm)' }}></div>
                  <div className="w-4 h-4 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0.2s", boxShadow: 'var(--shadow-wine)' }}></div>
                  <div className="w-4 h-4 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.4s", boxShadow: 'var(--shadow-mint)' }}></div>
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
            🕯️ Con mucho amor y misterio 💚 | Ferxxo Love Story – Halloween Vintage Edition 🎃
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
