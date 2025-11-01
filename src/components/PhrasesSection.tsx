import { Heart, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";

const phrases = [
  {
    text:' Tu voz suena mejor que cualquier canción bajo la luna',
    icon: Heart,
  },
  {
    text: "Entre sombras y luces, siempre tú",
    icon: Sparkles,
  },
  {
    text: "El verdadero hechizo es cómo me miras",
    icon: Star,
  },
];

const PhrasesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    phrases.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 600);
    });
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Partículas flotantes de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400/60 rounded-full animate-float-slow glow-emerald"></div>
        <div className="absolute top-40 right-16 w-1 h-1 bg-orange-400/70 rounded-full animate-float-delayed glow-orange"></div>
        <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-emerald-300/50 rounded-full animate-float-reverse glow-emerald"></div>
        <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-orange-300/60 rounded-full animate-float-slow glow-orange"></div>
        <div className="absolute bottom-60 left-20 w-1 h-1 bg-emerald-500/40 rounded-full animate-float-delayed glow-emerald"></div>
        <div className="absolute top-80 right-32 w-1.5 h-1.5 bg-orange-500/50 rounded-full animate-float-reverse glow-orange"></div>
      </div>

      {/* Capa de neblina suave */}
      <div className="absolute inset-0 bg-gradient-radial from-emerald-500/5 via-transparent to-orange-500/5 animate-pulse-slow"></div>

      {/* Líneas decorativas mejoradas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-glow-shift"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent animate-glow-shift-reverse"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-glow-shift"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-black mb-4 text-glow-mint animate-title-glow relative">
            <span className="inline-block animate-light-sweep">El sentimiento Mor💚</span>
            <div className="absolute inset-0 text-5xl md:text-6xl font-playfair font-black opacity-30 blur-sm text-emerald-400 animate-glow-shift"></div>
          </h2>
          <p className="text-xl text-muted-foreground font-quicksand animate-text-shimmer">
            Palabras que brillan en la oscuridad
          </p>
        </div>

        <div className="space-y-12">
          {phrases.map((phrase, index) => {
            const Icon = phrase.icon;
            const isVisible = visibleCards.includes(index);
            return (
              <div
                key={index}
                className={`relative group transition-all duration-1000 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                {/* Resplandor inicial al aparecer */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 via-orange-400/20 to-emerald-400/20 blur-xl transition-opacity duration-1000 ${
                  isVisible ? 'opacity-60' : 'opacity-0'
                }`}></div>

                <div className="relative flex items-center gap-6 p-8 rounded-2xl bg-card/40 border-2 border-secondary/25 
                                backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-500
                                hover:scale-[1.03] hover:shadow-dual-glow group-hover:bg-card/60">
                  
                  {/* Sombra pulsante en hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shadow-pulse"></div>

                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/30 to-orange-500/30 
                                    flex items-center justify-center border-2 border-emerald-400/40
                                    group-hover:scale-110 transition-all duration-300 relative overflow-hidden
                                    group-hover:border-orange-400/60 animate-icon-glow">
                      
                      {/* Efecto de rotación del glow en el ícono */}
                      <div className="absolute inset-0 rounded-full bg-gradient-conic from-emerald-400/30 via-orange-400/30 to-emerald-400/30 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <Icon className="w-8 h-8 text-emerald-400 group-hover:text-orange-400 transition-colors duration-300 relative z-10 animate-pulse-glow" />
                    </div>
                  </div>
                  
                  <div className="flex-1 relative z-10">
                    <p className="text-2xl md:text-3xl font-cormorant font-bold text-foreground 
                                  group-hover:text-emerald-300 transition-colors duration-300 relative
                                  drop-shadow-lg group-hover:drop-shadow-glow">
                      <span className="relative inline-block animate-text-glow">
                        "{phrase.text}"
                        {/* Light sweep effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                        -skew-x-12 opacity-0 group-hover:animate-light-sweep-text"></div>
                      </span>
                    </p>
                  </div>
                </div>

                {/* Efecto de resplandor dual mejorado */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 via-orange-400/10 to-orange-400/0 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm"></div>
                
                {/* Partículas que aparecen en hover */}
                <div className="absolute -top-2 -left-2 w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 animate-sparkle glow-emerald"></div>
                <div className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 animate-sparkle-delayed glow-orange"></div>
                <div className="absolute -bottom-2 right-8 w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 
                                transition-opacity duration-700 animate-sparkle glow-emerald"></div>
              </div>
            );
          })}
        </div>

        {/* Decoración adicional mejorada - constelación de luces */}
        <div className="mt-20 flex justify-center items-center gap-6 animate-float relative">
          
          {/* Línea conectora animada */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-emerald-400/30 via-orange-400/50 to-emerald-400/30 animate-glow-shift"></div>
          </div>

          {/* Luces principales */}
          <div className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse-glow glow-emerald relative z-10">
            <div className="absolute inset-0 rounded-full bg-emerald-300 animate-ping opacity-75"></div>
          </div>
          
          <div className="w-5 h-5 rounded-full bg-orange-400 animate-pulse-glow glow-orange relative z-10" 
               style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 rounded-full bg-orange-300 animate-ping opacity-75" 
                 style={{ animationDelay: "0.3s" }}></div>
          </div>
          
          <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse-glow glow-emerald relative z-10" 
               style={{ animationDelay: "0.6s" }}>
            <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" 
                 style={{ animationDelay: "0.6s" }}></div>
          </div>

          {/* Luces secundarias flotantes */}
          <div className="absolute -top-4 left-8 w-2 h-2 rounded-full bg-emerald-300/60 animate-float-delayed glow-emerald"></div>
          <div className="absolute -bottom-4 right-8 w-1.5 h-1.5 rounded-full bg-orange-300/60 animate-float-slow glow-orange"></div>
        </div>

        {/* Mensaje final con efecto especial */}
        <div className="mt-16 text-center">
          <p className="text-lg font-quicksand text-muted-foreground/80 animate-fade-in-up relative">
            <span className="inline-block animate-text-shimmer">
              Cada palabra lleva un pedazo de mí
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                            -skew-x-12 opacity-0 animate-light-sweep-slow"></div>
          </p>
        </div>
      </div>

    </section>
  );
};

export default PhrasesSection;
