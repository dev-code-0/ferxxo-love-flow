import { Heart, Sparkles, Star } from "lucide-react";

const phrases = [
  {
    text: "Desde que te conocí, todo suena a Ferxxo 💚",
    icon: Heart,
  },
  {
    text: "Nuestro flow es diferente",
    icon: Sparkles,
  },
  {
    text: "Tú y yo somos otro nivel",
    icon: Star,
  },
];

const PhrasesSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Líneas decorativas de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-urbanist font-black mb-4 text-glow-neon">
            Lo Que Siento
          </h2>
          <p className="text-xl text-muted-foreground">
            Palabras que nacen del corazón ❤️‍🔥
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
                <div className="flex items-center gap-6 p-8 rounded-2xl bg-card/30 border-2 border-primary/20 
                                backdrop-blur-sm hover:border-primary/50 transition-all duration-500
                                hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02]">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 
                                    flex items-center justify-center border-2 border-primary/40
                                    group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:animate-pulse" />
                    </div>
                  </div>
                  
                  <p className="text-2xl md:text-3xl font-urbanist font-bold text-foreground 
                                group-hover:text-primary transition-colors duration-300">
                    "{phrase.text}"
                  </p>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Decoración adicional */}
        <div className="mt-20 flex justify-center gap-4 animate-float">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.3s" }}></div>
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.6s" }}></div>
        </div>
      </div>
    </section>
  );
};

export default PhrasesSection;
