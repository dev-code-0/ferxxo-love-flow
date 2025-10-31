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
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-6 flex justify-center">
            <Music className="w-16 h-16 text-primary animate-glow-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-urbanist font-black mb-4 text-glow-pink">
            Nuestra Playlist
          </h2>
          <p className="text-xl text-muted-foreground">
            Las canciones que nos recuerdan a nosotros 🎵
          </p>
        </div>

        {/* Reproductor de Spotify */}
        <div className="mb-12 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 animate-fade-in">
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
              className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-primary/20 
                         hover:bg-card hover:border-primary/40 transition-all duration-300 
                         hover:shadow-lg hover:shadow-primary/20 group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center 
                              group-hover:bg-primary/30 transition-colors">
                <Play className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {song.title}
                </p>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
              </div>
              <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                💚
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            "Desde que te conocí, todo suena a Ferxxo 💚"
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
