import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface HeroVideoProps {
  isPlaying: boolean;
  isMuted: boolean;
  togglePlay: () => void;
  toggleMute: () => void;
}

export default function HeroVideo({
  isPlaying,
  isMuted,
  togglePlay,
  toggleMute,
}: HeroVideoProps) {
  return (
    <div className="hero-card mb-16">
      <div className="video-container mb-4 relative">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-between">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-rose-500/70 hover:bg-rose-500/60 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-rose-500/70 hover:bg-rose-500/60 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
