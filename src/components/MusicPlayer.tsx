import { Music, Play, Pause, SkipForward, SkipBack, Shuffle, Repeat, Volume2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const songs = [
  { 
    title: "California", 
    artist: "Ferxxo",
    src: "/src/assets/California.mp3"
  },
  { 
    title: "Hypnotixx", 
    artist: "Ferxxo",
    src: "/src/assets/Hypnotixx.mp3"
  },
  { 
    title: "Le pido a Dios", 
    artist: "Ferxxo",
    src: "/src/assets/Le_pido_a_Dios.mp3"
  },
  { 
    title: "Si supieras", 
    artist: "Ferxxo",
    src: "/src/assets/Si_supieras.mp3"
  },
  { 
    title: "Yo AK", 
    artist: "Ferxxo",
    src: "/src/assets/Yo_AK.mp3"
  },
];



const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off');
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [visualizerBars, setVisualizerBars] = useState<number[]>(Array(20).fill(0));
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Configurar volumen inicial
    audio.volume = volume;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
      setIsAudioLoaded(true);
    };

    const handleEnded = () => {
      if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play();
      } else if (repeatMode === 'all' || isShuffle) {
        handleNext();
      } else {
        const nextIndex = currentSong + 1;
        if (nextIndex < songs.length) {
          handleNext();
        } else {
          setIsPlaying(false);
        }
      }
    };

    const handleError = () => {
      console.error('Error loading audio');
      setIsAudioLoaded(false);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong, repeatMode, isShuffle]);

  // Efecto para actualizar el volumen
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Efecto para el visualizador de audio
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying) {
      intervalId = setInterval(() => {
        // Generar alturas aleatorias para las barras del ecualizador
        const newBars = Array.from({ length: 20 }, () => 
          Math.random() * 80 + 20 // Altura entre 20% y 100%
        );
        setVisualizerBars(newBars);
      }, 150); // Actualizar cada 150ms
    } else {
      // Cuando está pausado, las barras bajan gradualmente
      setVisualizerBars(Array(20).fill(20));
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    let nextIndex;
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * songs.length);
    } else {
      nextIndex = (currentSong + 1) % songs.length;
    }
    setCurrentSong(nextIndex);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  const handlePrevious = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Si la canción lleva más de 3 segundos, reiniciarla
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
    } else {
      // Ir a la canción anterior
      const prevIndex = currentSong === 0 ? songs.length - 1 : currentSong - 1;
      setCurrentSong(prevIndex);
      setIsPlaying(true);
      setTimeout(() => {
        audioRef.current?.play();
      }, 100);
    }
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const toggleRepeat = () => {
    if (repeatMode === 'off') {
      setRepeatMode('all');
    } else if (repeatMode === 'all') {
      setRepeatMode('one');
    } else {
      setRepeatMode('off');
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const progressBar = progressBarRef.current;
    if (!audio || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    audio.currentTime = percentage * audio.duration;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleSongClick = (index: number) => {
    setCurrentSong(index);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Fondo con gradiente atmosférico mejorado */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background"></div>
      
      {/* Neblina animada de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-radial from-orange-500/20 via-orange-400/10 to-transparent rounded-full animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-radial from-green-500/15 via-green-400/8 to-transparent rounded-full animate-float-slow-reverse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-orange-400/15 via-green-400/10 to-transparent rounded-full animate-pulse-glow"></div>
        </div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float-particle-${i % 3 + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? '#f97316' : '#10b981',
              boxShadow: `0 0 ${4 + Math.random() * 4}px currentColor`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Líneas de gradiente vintage mejoradas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-pulse-line"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse-line-reverse"></div>
      </div>



      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-6 flex justify-center">
            <Music className="w-16 h-16 text-primary animate-glow-pulse animate-heartbeat" />
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair font-black mb-4 animate-title-glow">
            Una Playlist
          </h2>
          <p className="text-xl text-muted-foreground font-quicksand">
            Ferxxo Mor💚
          </p>
        </div>

        {/* Reproductor Principal */}
        <div className="mb-12 rounded-2xl overflow-hidden border-2 border-secondary/30 shadow-2xl animate-fade-in bg-card/60 backdrop-blur-sm music-player-main relative"
             style={{ boxShadow: 'var(--shadow-warm), var(--shadow-candle)' }}>
          {/* Aura atmosférica del reproductor */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-green-500/40 to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-orange-400/30 to-transparent animate-pulse"></div>
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-transparent via-green-400/30 to-transparent animate-pulse"></div>
          </div>
          
          <div className="p-8 relative z-10">
            {/* Audio Element */}
            <audio
              ref={audioRef}
              src={songs[currentSong].src}
              preload="auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Información de la canción actual */}
            <div className="text-center mb-6">
              <h3 className="text-3xl font-playfair font-bold text-secondary mb-2">
                {songs[currentSong].title}
              </h3>
              <p className="text-lg text-muted-foreground font-quicksand">
                {songs[currentSong].artist}
              </p>
              
              {/* Indicador de carga */}
              {!isAudioLoaded && (
                <div className="mt-4 text-sm text-muted-foreground font-quicksand">
                  Cargando... ⏳
                </div>
              )}
              
              {/* Visualizador de Audio Mejorado */}
              {isAudioLoaded && (
                <div className="mt-4 px-4 py-3 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg border border-secondary/30 backdrop-blur-sm relative overflow-hidden">
                  {/* Resplandor de fondo del visualizador */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-green-500/10 to-orange-500/5 animate-pulse-glow"></div>
                  
                  {/* Ecualizador de barras mejorado */}
                  <div className="flex items-end justify-center gap-0.5 h-8 relative z-10">
                    {visualizerBars.map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-secondary/60 via-green-400/50 to-secondary rounded-t-sm transition-all duration-150 ease-out"
                        style={{
                          width: '3px',
                          height: `${height}%`,
                          animationDelay: `${index * 50}ms`,
                          opacity: isPlaying ? 1 : 0.3,
                          boxShadow: isPlaying ? `0 0 ${height/10}px rgba(249, 115, 22, 0.6)` : 'none'
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Ondas decorativas de fondo */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
                </div>
              )}
            </div>

            {/* Barra de progreso mejorada */}
            <div className="mb-6">
              <div 
                ref={progressBarRef}
                onClick={handleProgressClick}
                className="h-2 bg-secondary/20 rounded-full overflow-hidden cursor-pointer hover:h-3 transition-all relative"
              >
                {/* Resplandor de fondo de la barra */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-green-500/10 animate-pulse"></div>
                <div 
                  className="h-full bg-gradient-to-r from-secondary to-green-400 transition-all duration-300 relative z-10"
                  style={{ 
                    width: `${progress}%`,
                    boxShadow: progress > 0 ? '0 0 10px rgba(249, 115, 22, 0.5)' : 'none'
                  }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-muted-foreground font-quicksand">
                <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controles */}
            <div className="flex flex-col gap-4">
              {/* Controles principales */}
              <div className="flex justify-center items-center gap-4">
                {/* Shuffle */}
                <button
                  onClick={toggleShuffle}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
                           border ${isShuffle 
                             ? 'bg-secondary/30 border-secondary/50 text-secondary' 
                             : 'bg-secondary/10 border-secondary/20 text-secondary/50 hover:bg-secondary/20'}`}
                  title="Aleatorio"
                >
                  <Shuffle className="w-4 h-4" />
                </button>

                {/* Previous */}
                <button
                  onClick={handlePrevious}
                  className="w-12 h-12 rounded-full bg-secondary/20 hover:bg-secondary/30 
                           flex items-center justify-center transition-all duration-300 
                           border-2 border-secondary/30 hover:scale-105"
                  title="Anterior"
                >
                  <SkipBack className="w-5 h-5 text-secondary" fill="currentColor" />
                </button>

                {/* Play/Pause */}
                <button
                  onClick={handlePlayPause}
                  className="w-16 h-16 rounded-full bg-secondary/20 hover:bg-secondary/30 
                           flex items-center justify-center transition-all duration-300 
                           border-2 border-secondary/30 hover:scale-110 music-player-play-btn relative"
                  title={isPlaying ? "Pausar" : "Reproducir"}
                  style={{
                    boxShadow: isPlaying 
                      ? '0 0 20px rgba(249, 115, 22, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)' 
                      : '0 0 10px rgba(249, 115, 22, 0.2)'
                  }}
                >
                  {/* Anillo de pulso cuando está reproduciendo */}
                  {isPlaying && (
                    <div className="absolute inset-0 rounded-full border-2 border-secondary/50 animate-ping"></div>
                  )}
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-secondary relative z-10" fill="currentColor" />
                  ) : (
                    <Play className="w-8 h-8 text-secondary relative z-10" fill="currentColor" />
                  )}
                </button>

                {/* Next */}
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-secondary/20 hover:bg-secondary/30 
                           flex items-center justify-center transition-all duration-300 
                           border-2 border-secondary/30 hover:scale-105"
                  title="Siguiente"
                >
                  <SkipForward className="w-5 h-5 text-secondary" fill="currentColor" />
                </button>

                {/* Repeat */}
                <button
                  onClick={toggleRepeat}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
                           border relative ${repeatMode !== 'off' 
                             ? 'bg-secondary/30 border-secondary/50 text-secondary' 
                             : 'bg-secondary/10 border-secondary/20 text-secondary/50 hover:bg-secondary/20'}`}
                  title={repeatMode === 'off' ? 'Repetir' : repeatMode === 'all' ? 'Repetir todo' : 'Repetir una'}
                >
                  <Repeat className="w-4 h-4" />
                  {repeatMode === 'one' && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full text-xs flex items-center justify-center text-background font-bold">
                      1
                    </span>
                  )}
                </button>
              </div>

              {/* Control de volumen */}
              <div className="flex items-center gap-3 justify-center">
                <Volume2 className="w-5 h-5 text-secondary/70" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-32 h-2 bg-secondary/20 rounded-full appearance-none cursor-pointer 
                           [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                           [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                           [&::-webkit-slider-thumb]:bg-secondary [&::-webkit-slider-thumb]:cursor-pointer
                           [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-secondary/30
                           hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                />
                <span className="text-xs text-muted-foreground font-quicksand w-10">
                  {Math.round(volume * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de canciones */}
        <div className="space-y-4">
          {songs.map((song, index) => (
            <div
              key={index}
              onClick={() => handleSongClick(index)}
              className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-300 
                         group cursor-pointer backdrop-blur-sm music-player-song relative overflow-hidden
                         ${currentSong === index 
                           ? 'bg-secondary/20 border-secondary/60' 
                           : 'bg-card/40 border-secondary/20 hover:bg-card/60 hover:border-secondary/40'
                         }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                boxShadow: currentSong === index ? 'var(--shadow-warm)' : 'var(--shadow-candle)'
              }}
            >
              {/* Efecto de resplandor en hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center 
                              transition-all duration-300 border relative z-10
                              ${currentSong === index
                                ? 'bg-secondary/30 border-secondary/50 animate-heartbeat'
                                : 'bg-secondary/20 border-secondary/30 group-hover:bg-secondary/30'
                              }`}
                   style={{
                     boxShadow: currentSong === index && isPlaying 
                       ? '0 0 15px rgba(249, 115, 22, 0.4)' 
                       : 'none'
                   }}>
                {/* Anillo de pulso para la canción actual */}
                {currentSong === index && isPlaying && (
                  <div className="absolute inset-0 rounded-full border border-secondary/30 animate-ping"></div>
                )}
                {currentSong === index && isPlaying ? (
                  <Pause className="w-6 h-6 text-secondary relative z-10" fill="currentColor" />
                ) : (
                  <Play className="w-6 h-6 text-secondary relative z-10" fill="currentColor" />
                )}
              </div>
              <div className="flex-1">
                <p className={`font-semibold transition-colors font-quicksand
                              ${currentSong === index 
                                ? 'text-secondary' 
                                : 'text-foreground group-hover:text-secondary'
                              }`}>
                  {song.title}
                </p>
                <p className="text-sm text-muted-foreground font-quicksand">{song.artist}</p>
              </div>
              <div className={`text-xl transition-opacity
                              ${currentSong === index 
                                ? 'opacity-100' 
                                : 'opacity-0 group-hover:opacity-100'
                              }`}>
                💚
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-muted-foreground italic font-cormorant">
            En cada canción encuentro un pedacito de nosotros...
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
