'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useTheme } from '@/lib/theme-context';

export default function HeroSection() {
  const { currentTheme } = useTheme();
  
  // Prevent auto-scroll on page load
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  // Function to get background image filename from theme id
  const getBackgroundImage = (themeId: string) => {
    const backgroundMap: Record<string, string> = {
      'debut': 'debutbghero.svg',
      'fearless': 'fearlessbghero.svg',
      'fearless-tv': 'fearlesstvbghero.svg',
      'speak-now': 'speaknowbghero.svg',
      'speak-now-tv': 'speaknowtvbghero.svg',
      'red': 'redbghero.svg',
      'red-tv': 'redtvbghero.svg',
      '1989': '1989bghero.svg',
      '1989-tv': '1989tvbghero.svg',
      'reputation': 'reputationbghero.svg',
      'lover': 'loverbghero.svg',
      'folklore': 'folklorebghero.svg',
      'evermore': 'evermorebghero.svg',
      'midnights': 'midnightsbghero.svg',
      'tortured-poets': 'ttpdbghero.svg',
      'life-of-showgirl': 'thelifeofashowgirlbghero.svg'
    };
    return backgroundMap[themeId] || 'midnightsbghero.svg';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16">
      {/* Album Gradient Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{ background: currentTheme.gradient }}
      />
      
      {/* Full-Screen Album-Themed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105 opacity-40"
        style={{
          backgroundImage: `url('/images/tsbackgroundhero/${getBackgroundImage(currentTheme.id)}')`
        }}
      />
      
      {/* Enhanced Gradient Overlay for text readability */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ 
          background: `linear-gradient(135deg, ${currentTheme.themeColor}20 0%, rgba(0,0,0,0.4) 50%, ${currentTheme.themeColor}30 100%)`
        }}
      />
      
      {/* Additional dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Swiftography Logo - Large and Styled */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-white">
              Swiftography
            </h1>
            
            {/* Tagline */}
            <motion.p 
              className="text-xl md:text-3xl lg:text-4xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your ultimate guide to Taylor Swift&apos;s musical universe
            </motion.p>
          </motion.div>
          
          {/* Updated CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/taylor-swift">
              <motion.button
                className="group px-10 py-5 bg-white text-black rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 min-w-[200px]"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: `linear-gradient(135deg, white 0%, ${currentTheme.themeColor}10 100%)`,
                  boxShadow: `0 10px 40px ${currentTheme.themeColor}30, 0 0 0 1px ${currentTheme.themeColor}20`
                }}
              >
                <span className="group-hover:scale-105 transition-transform duration-200 inline-block">
                  Explore Albums →
                </span>
              </motion.button>
            </Link>
            
            <Link href="/taylor-swift">
              <motion.button
                className="group px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-black transition-all duration-300 min-w-[200px] backdrop-blur-sm"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                }}
              >
                <span className="group-hover:scale-105 transition-transform duration-200 inline-block">
                  About Taylor
                </span>
              </motion.button>
            </Link>
          </motion.div>
          
        </motion.div>
      </div>
      
      {/* Fixed Scroll Indicator - positioned relative to section, not content */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors duration-300"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}