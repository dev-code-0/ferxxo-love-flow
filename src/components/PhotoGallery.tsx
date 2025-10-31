import couple1 from "@/assets/halloween-couple-1.jpg";
import couple2 from "@/assets/halloween-couple-2.jpg";
import couple3 from "@/assets/halloween-couple-3.jpg";

const photos = [
  {
    src: couple1,
    caption: "Tú y yo, hasta en noches de miedo 💚",
  },
  {
    src: couple2,
    caption: "Eres mi historia favorita en cualquier estación 🎃",
  },
  {
    src: couple3,
    caption: "Nuestro flow es puro fuego y calma 🕯️💚",
  },
];

const PhotoGallery = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Efecto de resplandor cálido en el fondo */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/40 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/35 rounded-full blur-[120px] animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/25 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-black mb-4 text-glow-mint">
            Nuestros Momentos
          </h2>
          <p className="text-xl text-muted-foreground font-quicksand">
            Cada foto es un recuerdo bajo la luz de la luna 📸🌙
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="polaroid-frame animate-fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="gallery-item rounded-lg overflow-hidden">
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

        <div className="mt-16 text-center">
          <p className="text-lg text-secondary font-semibold animate-pulse font-quicksand">
            🕯️ Pasa el cursor sobre las fotos para descubrir más 🕯️
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
