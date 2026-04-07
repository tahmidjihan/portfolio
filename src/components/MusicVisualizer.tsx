'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import tracksData from '@/data/tracks.json';

interface Track {
  id: number;
  name: string;
  src: string;
  duration: number;
}

const TRACKS: Track[] = tracksData as Track[];

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function MusicVisualizer({ compact = false }: { compact?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const isSeekingRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  // Initialize audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.crossOrigin = 'anonymous';
    audioRef.current = audio;

    // Event listeners
    const handleTimeUpdate = () => {
      if (!isSeekingRef.current && audio.duration) {
        setCurrentTime(audio.currentTime);
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = (e: ErrorEvent) => {
      console.error('Audio error:', e);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const handlePlayPause = useCallback(async (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    // If clicking the same track
    if (index === currentTrackIndex) {
      if (isPlaying) {
        audio.pause();
      } else {
        try {
          await audio.play();
        } catch (err) {
          console.error('Play failed:', err);
        }
      }
      return;
    }

    // Switching to a different track
    setCurrentTrackIndex(index);
    setCurrentTime(0);

    // Load new track
    audio.src = TRACKS[index].src;
    audio.load();

    // Play once loaded
    try {
      await audio.play();
    } catch (err) {
      console.error('Failed to load/play track:', err);
    }
  }, [currentTrackIndex, isPlaying]);

  const handleSeek = useCallback((clientX: number) => {
    const audio = audioRef.current;
    const bar = progressBarRef.current;
    if (!audio || !bar || currentTrackIndex === null) return;

    const trackDuration = TRACKS[currentTrackIndex].duration;
    if (trackDuration <= 0) return;

    const rect = bar.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const newTime = percentage * trackDuration;

    isSeekingRef.current = true;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  }, [currentTrackIndex]);

  const handleProgressBarMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    handleSeek(e.clientX);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      handleSeek(moveEvent.clientX);
    };

    const handleMouseUp = () => {
      isSeekingRef.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [handleSeek]);

  const currentDuration = currentTrackIndex !== null ? TRACKS[currentTrackIndex].duration : 0;
  const progress = currentDuration > 0 ? (currentTime / currentDuration) * 100 : 0;

  if (compact) {
    return (
      <div className="w-full">
        <div className="divide-y divide-neutral-900">
          {TRACKS.map((track, index) => {
            const isActive = index === currentTrackIndex;
            const isThisPlaying = isActive && isPlaying;
            const trackProgress = track.duration > 0 ? (currentTime / track.duration) * 100 : 0;

            return (
              <div
                key={track.name}
                className={`group px-4 py-4 transition-colors duration-300 ${
                  isThisPlaying ? 'bg-[#914110]/5' : 'hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-technical text-xs tabular-nums min-w-[1.5rem] ${
                    isThisPlaying ? 'text-[#914110]' : 'text-neutral-600'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <button
                    onClick={() => handlePlayPause(index)}
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isThisPlaying
                        ? 'border-[#914110] bg-[#914110]/10'
                        : 'border-neutral-700 hover:border-[#914110]/60 bg-transparent'
                    }`}
                  >
                    <motion.svg
                      key={isThisPlaying ? 'pause' : 'play'}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`w-3 h-3 ml-0.5 ${
                        isThisPlaying ? 'text-[#914110]' : 'text-neutral-400'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {isThisPlaying ? (
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      ) : (
                        <path d="M8 5v14l11-7z" />
                      )}
                    </motion.svg>
                  </button>

                  <span className={`font-serif text-sm flex-1 ${
                    isThisPlaying ? 'text-[#914110]' : 'text-white'
                  }`}>
                    {track.name}
                  </span>

                  <div className="flex items-center gap-2 flex-1 max-w-[200px]">
                    <span className="font-technical text-[10px] text-neutral-500 tabular-nums min-w-[2rem] text-right">
                      {isActive ? formatTime(currentTime) : '0:00'}
                    </span>
                    <div className="relative flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#914110]"
                        style={{ width: `${isActive ? trackProgress : 0}%` }}
                      />
                    </div>
                    <span className="font-technical text-[10px] text-neutral-600 tabular-nums min-w-[2rem]">
                      {formatTime(track.duration)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="space-y-0">
        {TRACKS.map((track, index) => {
          const isActive = index === currentTrackIndex;
          const isThisPlaying = isActive && isPlaying;

          return (
            <motion.div
              key={track.name}
              className={`group relative py-8 border-b border-neutral-900 transition-colors duration-500 ${
                isThisPlaying ? 'bg-neutral-900/30' : 'hover:bg-neutral-900/20'
              } ${index === 0 ? 'border-t border-neutral-900' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-6 px-2">
                {/* Play/Pause Button */}
                <motion.button
                  className={`flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                    isThisPlaying
                      ? 'border-[#914110] bg-[#914110]/10'
                      : 'border-neutral-700 hover:border-[#914110]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePlayPause(index)}
                  aria-label={isThisPlaying ? `Pause ${track.name}` : `Play ${track.name}`}
                >
                  <motion.svg
                    key={isThisPlaying ? 'pause' : 'play'}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className={`w-5 h-5 ml-0.5 transition-colors duration-300 ${
                      isThisPlaying ? 'text-[#914110]' : 'text-neutral-400 group-hover:text-[#914110]'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isThisPlaying ? (
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    ) : (
                      <path d="M8 5v14l11-7z" />
                    )}
                  </motion.svg>
                </motion.button>

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className={`font-serif text-2xl md:text-3xl transition-colors duration-300 ${
                      isThisPlaying ? 'text-[#914110]' : 'text-white group-hover:text-[#914110]'
                    }`}>
                      {track.name}
                    </h4>
                    <span className={`font-technical text-xs tabular-nums ${
                      isThisPlaying ? 'text-[#914110]' : 'text-neutral-600'
                    }`}>
                      {isActive ? formatTime(currentTime) : '0:00'}
                      <span className="text-neutral-700 mx-1">/</span>
                      {formatTime(track.duration)}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  {isActive ? (
                    <div
                      ref={progressBarRef}
                      onMouseDown={handleProgressBarMouseDown}
                      className="relative h-8 flex items-center cursor-pointer group/seek"
                    >
                      <div className="w-full h-1 bg-neutral-800 overflow-hidden">
                        <div
                          className={`h-full transition-colors duration-150 ${
                            isThisPlaying ? 'bg-[#914110]' : 'bg-neutral-700'
                          }`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      {/* Thumb handle */}
                      {(isThisPlaying || progress > 0) && (
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#914110] rounded-full shadow-lg shadow-[#914110]/50 opacity-0 group-hover/seek:opacity-100 transition-opacity"
                          style={{ left: `${progress}%` }}
                          animate={{ x: '-50%' }}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="relative h-8 flex items-center">
                      <div className="w-full h-1 bg-neutral-800" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
