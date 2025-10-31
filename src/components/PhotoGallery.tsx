import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";

const photos = [
  {
    src: couple1,
    caption: "Mi lugar favorito 💚",
  },
  {
    src: couple2,
    caption: "Momentos con flow",
  },
  {
    src: couple3,
    caption: "La baby del Ferxxo",
  },
];

const PhotoGallery = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Efecto de glow en el fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-urbanist font-black mb-4 text-glow-neon">
            Nuestros Momentos
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada foto cuenta nuestra historia 📸
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="gallery-item rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-80 object-cover"
              />
              <div className="gallery-overlay">
                <p className="text-xl font-semibold text-white text-glow-neon">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-primary font-semibold animate-pulse">
            ✨ Pasa el cursor sobre las fotos ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
