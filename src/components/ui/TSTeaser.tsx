'use client';

import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import Link from 'next/link';
import { useTheme } from '@/lib/theme-context';
import { useRef } from 'react';

export default function TSTeaser() {
  const { currentTheme, themeMode } = useTheme();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  
  // Use spring physics for smoother animations
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  
  // Get the current theme colors based on theme mode
  const themeColors = themeMode === 'dark' ? currentTheme.dark : currentTheme.light;

  // Get album-era portrait based on current theme (currently unused)
  // const getPortraitImage = (themeId: string) => {
  //   const portraitMap: Record<string, string> = {
  //     'debut': '/images/tsportraits/debut-portrait.jpg',
  //     'fearless': '/images/tsportraits/fearless-portrait.jpg',
  //     'speak-now': '/images/tsportraits/speaknow-portrait.jpg',
  //     'red': '/images/tsportraits/red-portrait.jpg',
  //     '1989': '/images/tsportraits/1989-portrait.jpg',
  //     'reputation': '/images/tsportraits/reputation-portrait.jpg',
  //     'lover': '/images/tsportraits/lover-portrait.jpg',
  //     'folklore': '/images/tsportraits/folklore-portrait.jpg',
  //     'evermore': '/images/tsportraits/evermore-portrait.jpg',
  //     'fearless-tv': '/images/tsportraits/fearless-tv-portrait.jpg',
  //     'red-tv': '/images/tsportraits/red-tv-portrait.jpg',
  //     'midnights': '/images/tsportraits/midnights-portrait.jpg',
  //     'speak-now-tv': '/images/tsportraits/speaknow-tv-portrait.jpg',
  //     '1989-tv': '/images/tsportraits/1989-tv-portrait.jpg',
  //     'tortured-poets': '/images/tsportraits/ttpd-portrait.jpg',
  //     'life-of-showgirl': '/images/tsportraits/showgirl-portrait.jpg'
  //   };
  //   return portraitMap[themeId] || '/images/tsportraits/midnights-portrait.jpg';
  // };

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Album-Era Portrait */}
          <motion.div
            style={{ y: springY, opacity, scale }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateY: 15 }}
              whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Portrait Container */}
              <div className="relative overflow-hidden rounded-3xl max-w-sm mx-auto shadow-2xl">
                <motion.div
                  className="aspect-[3/4] relative"
                  whileHover={{ scale: 1.02, rotateY: -5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Enhanced Background Gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${currentTheme.themeColor}90, ${currentTheme.themeColor}60, ${currentTheme.themeColor}90)`
                    }}
                  />
                  
                  {/* Portrait Placeholder with Enhanced Theme Styling */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="text-center text-white"
                      initial={{ y: 30, opacity: 0, scale: 0.8 }}
                      whileInView={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                    >
                      <motion.div 
                        className="w-36 h-36 mx-auto mb-6 rounded-full bg-white/25 backdrop-blur-lg flex items-center justify-center border border-white/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-18 h-18 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </motion.div>
                      <motion.p 
                        className="text-2xl font-bold mb-2 drop-shadow-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        {currentTheme.name}
                      </motion.p>
                      <p className="text-lg opacity-90 font-medium">Era Portrait</p>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
                </motion.div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full opacity-70 shadow-lg"
                style={{ backgroundColor: themeColors.secondary }}
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, 120, 240, 360],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full opacity-60 shadow-md"
                style={{ backgroundColor: themeColors.accent }}
                animate={{ 
                  scale: [1, 1.4, 1],
                  y: [0, -8, 0],
                  x: [0, 4, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div 
                className="absolute top-1/2 -left-8 w-4 h-4 rounded-full opacity-50"
                style={{ backgroundColor: themeColors.primary }}
                animate={{ 
                  scale: [0.8, 1.2, 0.8],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Snippet Teaser */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Meet{' '}
                <span 
                  className="bg-gradient-to-r bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: currentTheme.gradient 
                  }}
                >
                  Taylor Swift
                </span>
              </h2>
            </motion.div>

            {/* Short 2-3 Line Teaser Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl text-textSecondary leading-relaxed">
                From a small-town dreamer to global icon, Taylor Swift has redefined modern artistry 
                through fearless reinvention and authentic storytelling.
              </p>
              <p className="text-lg text-textSecondary/80 leading-relaxed">
                Experience her musical evolution across {currentTheme.name} and beyond.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "backOut" }}
              viewport={{ once: true }}
            >
              <Link href="/taylor-swift">
                <motion.button
                  className="group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 min-w-[180px] shadow-lg"
                  style={{
                    background: currentTheme.gradient,
                    color: 'white'
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -4,
                    boxShadow: `0 20px 40px ${currentTheme.themeColor}30`
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <motion.span 
                    className="inline-block"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read Full Story →
                  </motion.span>
                </motion.button>
              </Link>
              
              <Link href="/taylor-swift">
                <motion.button
                  className="group px-8 py-4 bg-transparent border-2 rounded-2xl font-bold text-lg transition-all duration-300 min-w-[180px] backdrop-blur-sm"
                  style={{ 
                    borderColor: themeColors.primary,
                    color: themeColors.primary,
                    backgroundColor: 'rgba(255,255,255,0.05)'
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -4,
                    backgroundColor: themeColors.primary,
                    color: 'white',
                    borderColor: themeColors.primary,
                    boxShadow: `0 15px 30px ${themeColors.primary}20`
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <motion.span 
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Explore Albums
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}