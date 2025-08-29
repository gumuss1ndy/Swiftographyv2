import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlbumId } from '@/types';
import { getTracklist, getAlbumThemeColor } from '@/components/ui/album/tracklist-data';


interface TracklistProps {
  albumId: AlbumId;
  showHeader?: boolean;
  className?: string;
}

// Play/Pause icon components
const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);



const Tracklist: React.FC<TracklistProps> = ({ 
  albumId, 
  showHeader = true, 
  className = '' 
}) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const tracks = getTracklist(albumId);
  const themeColor = getAlbumThemeColor(albumId);


  const handleTrackClick = (trackNumber: number) => {
    if (currentlyPlaying === trackNumber) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentlyPlaying(trackNumber);
      setIsPlaying(true);
    }
  };



  return (
    <div className={`rounded-2xl overflow-hidden shadow-2xl ${className}`} 
         style={{ background: `linear-gradient(135deg, ${themeColor}20, ${themeColor}40, ${themeColor}60)` }}>
      
      {/* Simple Tracklist Header */}
      {showHeader && (
        <div className="p-4 border-b border-white/10">
          <h3 className="text-white text-lg font-semibold">Tracklist</h3>
        </div>
      )}

      {/* Tracklist */}
      <div className="p-4 space-y-1">
        {tracks.map((track, index) => {
          const isCurrentTrack = currentlyPlaying === track.number;
          const isActiveTrack = isCurrentTrack && isPlaying;
          
          return (
            <motion.div
              key={track.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                isCurrentTrack 
                  ? 'bg-white/20 text-white' 
                  : 'hover:bg-white/10 text-white/90 hover:text-white'
              }`}
              onClick={() => handleTrackClick(track.number)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center space-x-4">
                {/* Track Number / Play Button */}
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {isActiveTrack ? (
                      <motion.div
                        key="playing"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex space-x-1"
                      >
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1 bg-white rounded-full"
                            animate={{
                              height: [4, 12, 4],
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    ) : (
                      <motion.span
                        key="number"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className={`text-sm font-medium transition-opacity ${
                          isCurrentTrack ? 'opacity-0' : 'group-hover:opacity-0'
                        }`}
                      >
                        {track.number}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  
                  {/* Play button on hover */}
                  <motion.div
                    className={`absolute inset-0 flex items-center justify-center ${
                      isCurrentTrack || isActiveTrack ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <PlayIcon className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Track Info */}
                <div className="flex-1">
                  <h3 className={`font-medium transition-colors ${
                    isCurrentTrack ? 'text-white' : 'text-white/90'
                  }`}>
                    {track.title}
                  </h3>
                  <p className="text-white/60 text-sm">Taylor Swift</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Single Badge */}
                {track.isSingle && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-2 py-1 bg-white/20 text-white/80 text-xs rounded-full font-medium"
                  >
                    Single
                  </motion.span>
                )}

                {/* Duration */}
                <span className="text-white/60 text-sm font-mono w-12 text-right">
                  {track.duration}
                </span>

                {/* More Options */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle more options
                  }}
                >
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tracklist;