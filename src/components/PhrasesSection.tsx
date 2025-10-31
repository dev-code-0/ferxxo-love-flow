import { Heart, Sparkles, Star } from "lucide-react";

const phrases = [
  {
    text: "Eres mi calma en medio de la noche 💚",
    icon: Heart,
  },
  {
    text: "Ni la luna puede brillar tanto como tú 🕯️",
    icon: Sparkles,
  },
  {
    text: "El amor también puede tener misterio, y tú eres el mío 🎃",
    icon: Star,
  },
];

const PhrasesSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Líneas decorativas vintage de fondo */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-black mb-4 text-glow-mint">
            Lo Que Siento
          </h2>
          <p className="text-xl text-muted-foreground font-quicksand">
            Palabras que brillan en la oscuridad 🕯️💚
          </p>
        </div>

        <div className="space-y-12">
          {phrases.map((phrase, index) => {
            const Icon = phrase.icon;
            return (
              <div
                key={index}
                className="relative group"
                style={{
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <div className="flex items-center gap-6 p-8 rounded-2xl bg-card/40 border-2 border-secondary/25 
                                backdrop-blur-sm hover:border-secondary/50 transition-all duration-500
                                hover:scale-[1.02]"
                     style={{ boxShadow: 'var(--shadow-candle)' }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 
                                    flex items-center justify-center border-2 border-secondary/40
                                    group-hover:scale-110 transition-transform duration-300"
                         style={{ boxShadow: 'var(--shadow-warm)' }}>
                      <Icon className="w-8 h-8 text-secondary group-hover:animate-pulse" />
                    </div>
                  </div>
                  
                  <p className="text-2xl md:text-3xl font-cormorant font-bold text-foreground 
                                group-hover:text-secondary transition-colors duration-300">
                    "{phrase.text}"
                  </p>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/0 via-secondary/5 to-secondary/0 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Decoración adicional - velas */}
        <div className="mt-20 flex justify-center gap-4 animate-float">
          <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ boxShadow: 'var(--shadow-warm)' }}></div>
          <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.3s", boxShadow: 'var(--shadow-wine)' }}></div>
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.6s", boxShadow: 'var(--shadow-mint)' }}></div>
        </div>
      </div>
    </section>
  );
};

export default PhrasesSection;
