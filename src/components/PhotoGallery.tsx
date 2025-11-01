import { useState, useEffect } from "react";
import { useCarousel } from "@/hooks/use-carousel";
import FloatingParticles from "./FloatingParticles";
import couple1 from "@/assets/couple-1.jpeg";
import couple2 from "@/assets/couple-2.jpeg";
import couple3 from "@/assets/couple-3.jpeg";

const photos = [
  {
    src: couple1,
    caption: "Así de cerquita suena mejor 🔥",
    phrase: "Tu cintura es mi lugar favorito 💚😏"
  },
  {
    src: couple2,
    caption: "Peligroso lo bien que encajamos 😏",
    phrase: "No sé si es amor o locura, pero me encanta 💚🔥"
  },
  {
    src: couple3,
    caption: "El Ferxxo y su musa 💚🎧",
    phrase: "Contigo hasta el silencio suena bien 💚🎶"
  },
];

const PhotoGallery = () => {
  const [showPhrase, setShowPhrase] = useState(false);
  const [touchedPhoto, setTouchedPhoto] = useState<number | null>(null);
  
  const {
    currentIndex: currentPhoto,
    touchHandlers,
    mouseHandlers,
    goToIndex,
    pauseAutoPlay
  } = useCarousel({
    totalItems: photos.length,
    autoPlayInterval: 4000,
    swipeThreshold: 50
  });

  // Auto-show phrase effect
  useEffect(() => {
    setShowPhrase(true);
    const timer = setTimeout(() => setShowPhrase(false), 2500);
    return () => clearTimeout(timer);
  }, [currentPhoto]);

  // Handle photo tap
  const handlePhotoTap = (index: number) => {
    setTouchedPhoto(index);
    setShowPhrase(true);
    pauseAutoPlay();
    
    setTimeout(() => {
      setShowPhrase(false);
      setTouchedPhoto(null);
    }, 2500);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Efecto de resplandor cálido en el fondo mejorado */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary/50 to-primary/30 rounded-full blur-[140px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/40 to-secondary/25 rounded-full blur-[140px] animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Niebla animada sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-mist"></div>
        
        {/* Partículas flotantes románticas */}
        <FloatingParticles count={6} className="opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-playfair font-black mb-4 text-glow-mint">
            Nuestros Momentos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-quicksand px-4">
            Hasta ahora solo tenemos unas pocas fotos, pero nos vamos a tomar más...💚
          </p>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="polaroid-frame animate-fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="gallery-item rounded-2xl overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-80 object-cover"
                />
                <div className="gallery-overlay">
                  <p className="text-lg font-semibold text-white font-cormorant text-glow-warm">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div 
            className="mobile-carousel overflow-hidden rounded-3xl"
            {...touchHandlers}
            {...mouseHandlers}
          >
            <div 
              className="carousel-track flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentPhoto * 100}%)` }}
            >
              {photos.map((photo, index) => (
                <div key={index} className="carousel-slide flex-shrink-0 w-full relative">
                  <div 
                    className={`mobile-photo-container relative ${touchedPhoto === index ? 'touched' : ''}`}
                    onClick={() => handlePhotoTap(index)}
                  >
                    <div className="mobile-photo-frame">
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-[70vh] object-cover rounded-2xl"
                      />
                      <div className="mobile-photo-glow"></div>
                    </div>

                    {/* Frase animada que aparece al tocar o automáticamente */}
                    <div 
                      className={`mobile-phrase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        transition-all duration-700 z-20 pointer-events-none 
                        ${(showPhrase && currentPhoto === index) || touchedPhoto === index 
                          ? 'opacity-100 scale-100 translate-y-0' 
                          : 'opacity-0 scale-75 translate-y-4'}`}
                    >
                      <div className="bg-black/80 backdrop-blur-md rounded-2xl px-6 py-4 border border-primary/30">
                        <p className="text-white text-lg font-semibold font-cormorant text-glow-mint text-center">
                          {photo.phrase}
                        </p>
                      </div>
                    </div>

                    {/* Caption fijo en la parte inferior */}
                    <div className="mobile-caption absolute bottom-4 left-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm rounded-xl px-4 py-3">
                        <p className="text-white text-base font-medium font-quicksand text-glow-warm">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de carousel */}
          <div className="flex justify-center mt-8 space-x-3">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`carousel-indicator transition-all duration-300 ${
                  currentPhoto === index 
                    ? 'w-8 h-2 bg-primary shadow-neon-mint' 
                    : 'w-2 h-2 bg-muted-foreground/40 hover:bg-primary/70'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base md:text-lg text-secondary font-semibold animate-pulse font-quicksand">
            <span className="hidden md:inline">Toca las fotos</span>
            <span className="md:hidden">Desliza las fotos</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
