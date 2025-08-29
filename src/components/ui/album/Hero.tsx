'use client';

import { motion } from 'motion/react';

import { albumThemes } from '@/lib/themes';
import { AlbumId } from '@/types';
import Image from 'next/image';

interface AlbumHeroProps {
  albumId: AlbumId;
}

export default function AlbumHero({ albumId }: AlbumHeroProps) {
  const album = albumThemes[albumId];

  if (!album) {
    return null;
  }

  // Check if album is a Taylor's Version
  const isTaylorsVersion = albumId.includes('-tv') || albumId === 'tortured-poets';

  // Function to get album cover filename
  const getAlbumCoverFilename = (albumId: string) => {
    const coverMap: Record<string, string> = {
      'debut': 'debut.webp',
      'fearless': 'fearless.webp',
      'speak-now': 'speaknow.webp',
      'red': 'red.webp',
      '1989': '1989.webp',
      'reputation': 'reputation.webp',
      'lover': 'lover.webp',
      'folklore': 'folklore.webp',
      'evermore': 'evermore.webp',
      'fearless-tv': 'fearless_tv.webp',
      'red-tv': 'red-tv.webp',
      'midnights': 'midnights.webp',
      'speak-now-tv': 'Speak_Now_TV.webp',
      '1989-tv': '1989_tv.webp',
      'tortured-poets': 'ttpd.webp',
      'life-of-showgirl': 'thelifeofashowgirl.webp'
    };
    return coverMap[albumId] || 'midnights.webp';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ background: album.gradient }}
      />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(156, 146, 172, 0.1) 1px, transparent 0)",
            backgroundSize: "60px 60px"
          }} 
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Album Cover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={`/images/ts-albumcover/${getAlbumCoverFilename(albumId)}`}
                  alt={album.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 320px, 384px"
                  priority
                />
              </motion.div>
              
              {/* Taylor's Version Badge */}
              {isTaylorsVersion && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                >
                  Taylor&apos;s Version
                </motion.div>
              )}
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full opacity-60" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary rounded-full opacity-40" />
            </div>
          </motion.div>

          {/* Right Side - Album Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left space-y-6"
          >
            <div>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="theme-gradient-text">{album.name}</span>
              </motion.h1>
              
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-2xl md:text-3xl text-textSecondary">
                  {album.releaseYear}
                </p>
                {isTaylorsVersion && (
                  <span className="text-lg text-purple-400 font-semibold">
                    (Re-recorded)
                  </span>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <p className="text-lg text-textSecondary leading-relaxed max-w-2xl">
                Experience the magic of {album.name}, a defining moment in Taylor Swift&apos;s musical journey. 
                This album showcases her evolution as an artist and storyteller, capturing the essence of her 
                creative vision and emotional depth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  className="px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Listen Now
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 bg-surface border-2 border-primary text-primary rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Tracklist
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}