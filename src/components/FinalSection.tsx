import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import neonHeart from "@/assets/neon-heart.jpg";

const FinalSection = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Fondo con efecto de brillo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                        bg-primary/10 rounded-full blur-[120px] animate-glow-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {!showSurprise ? (
          <div className="animate-fade-in">
            {/* Corazón central */}
            <div className="mb-12 flex justify-center animate-float">
              <div className="relative">
                <img 
                  src={neonHeart} 
                  alt="Neon Heart" 
                  className="w-64 h-64 object-cover rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Mensaje principal */}
            <h2 className="text-5xl md:text-7xl font-urbanist font-black mb-8 text-glow-neon leading-tight">
              Gracias por existir 💚
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-2xl md:text-3xl text-foreground font-semibold">
                Esta página es solo un pedacito
              </p>
              <p className="text-2xl md:text-3xl text-primary font-semibold text-glow-neon">
                de lo que siento por ti
              </p>
            </div>

            {/* Línea decorativa */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>

            {/* Botón sorpresa */}
            <Button
              onClick={() => setShowSurprise(true)}
              className="btn-neon-outline px-8 py-6 text-lg rounded-full group"
              size="lg"
            >
              <span className="mr-2">Haz click para sonreír</span>
              <span className="group-hover:scale-125 transition-transform inline-block">😌💚</span>
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

              <div className="relative z-10 p-12 rounded-3xl bg-card/50 backdrop-blur-md border-2 border-primary/30 
                              shadow-2xl shadow-primary/20">
                <div className="mb-8 flex justify-center">
                  <Heart className="w-20 h-20 text-primary animate-glow-pulse" fill="currentColor" />
                </div>

                <h3 className="text-4xl md:text-5xl font-urbanist font-black mb-6 text-glow-pink">
                  ¡Eres increíble! ✨
                </h3>

                <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
                  Cada día contigo es una bendición.
                  <br />
                  Eres mi persona favorita, mi paz, mi todo.
                </p>

                <p className="text-2xl md:text-3xl font-bold text-primary text-glow-neon">
                  Te amo con todo mi ser 💚
                </p>

                <div className="mt-12 flex justify-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
                  <div className="w-4 h-4 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-4 h-4 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.4s" }}></div>
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
        <div className="mt-20 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            Con mucho amor 💚 | Ferxxo Love Story
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
