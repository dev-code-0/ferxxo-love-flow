import { Music, Play } from "lucide-react";

const songs = [
  { title: "FERXXO 151", artist: "Feid" },
  { title: "Normal", artist: "Feid" },
  { title: "Si Te La Encuentras Por Ahí", artist: "Feid" },
  { title: "Hey Mor", artist: "Feid" },
  { title: "Chorrito pa las animas", artist: "Feid" },
];

const MusicPlayer = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Fondo con gradiente vintage */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-6 flex justify-center">
            <Music className="w-16 h-16 text-primary animate-glow-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair font-black mb-4 text-glow-warm">
            Nuestra Playlist
          </h2>
          <p className="text-xl text-muted-foreground font-quicksand">
            Las canciones que suenan bajo nuestra luna 🎵🌙
          </p>
        </div>

        {/* Reproductor de Spotify */}
        <div className="mb-12 rounded-2xl overflow-hidden border-2 border-secondary/30 shadow-2xl animate-fade-in"
             style={{ boxShadow: 'var(--shadow-warm), var(--shadow-candle)' }}>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/6XkjpgcEsYab502Vr0hN1Z?utm_source=generator&theme=0"
            width="100%"
            height="380"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player - Feid"
          ></iframe>
        </div>

        {/* Lista de canciones */}
        <div className="space-y-4">
          {songs.map((song, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl bg-card/40 border-2 border-secondary/20 
                         hover:bg-card/60 hover:border-secondary/40 transition-all duration-300 
                         group cursor-pointer backdrop-blur-sm"
              style={{
                animationDelay: `${index * 0.1}s`,
                boxShadow: 'var(--shadow-candle)'
              }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center 
                              group-hover:bg-secondary/30 transition-colors border border-secondary/30">
                <Play className="w-6 h-6 text-secondary" fill="currentColor" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground group-hover:text-secondary transition-colors font-quicksand">
                  {song.title}
                </p>
                <p className="text-sm text-muted-foreground font-quicksand">{song.artist}</p>
              </div>
              <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                💚🕯️
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-muted-foreground italic font-cormorant">
            "En cada canción encuentro un pedacito de nosotros 💚🌙"
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
