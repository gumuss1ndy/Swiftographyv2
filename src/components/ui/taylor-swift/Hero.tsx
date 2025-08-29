'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useTheme } from '@/lib/theme-context';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function TaylorSwiftHero() {
  const { currentTheme } = useTheme();
  const ref = useRef(null);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  // Generate sparkles effect
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 8000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Enhanced Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/tsherobg/tsherobg.jpg')",
          backgroundSize: "125% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(1px)",
          y: y,
          opacity: opacity
        }}
      />
      
      {/* Enhanced Gradient Overlay (top → bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      
      {/* Additional theme-aware overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.themeColor}40 0%, transparent 50%, ${currentTheme.themeColor}30 100%)`
        }}
      />

      {/* Animated Sparkles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              delay: sparkle.delay,
              repeat: Infinity,
              repeatDelay: 5
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Enhanced Two-Line Title */}
          <div className="space-y-2">
            <motion.p 
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/80 tracking-wide"
              style={{ 
                fontFamily: '"Bebas Neue", sans-serif',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              All About
            </motion.p>
            
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-white"
              style={{ 
                fontFamily: '"Bebas Neue", sans-serif',
                textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.1)'
              }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "backOut" }}
            >
              Taylor Swift
            </motion.h1>
          </div>
          
          {/* Enhanced Italic Subtitle */}
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl text-white/90 max-w-4xl mx-auto leading-relaxed italic font-light"
            style={{
              textShadow: '0 2px 15px rgba(0,0,0,0.7)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The Evolution of a Global Icon
          </motion.p>

          {/* New CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button
              onClick={() => scrollToSection('biography-section')}
              className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-2xl font-bold text-xl transition-all duration-300 min-w-[220px] hover:bg-white/20"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: '0 20px 40px rgba(255,255,255,0.1)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="inline-flex items-center gap-2"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                Discover Her Story
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.span>
            </motion.button>
            
            <Link href="/taylor-swift">
              <motion.button
                className="group px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 min-w-[220px] text-white"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.themeColor}90, ${currentTheme.themeColor}60)`,
                  boxShadow: `0 10px 30px ${currentTheme.themeColor}30`
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: `0 20px 40px ${currentTheme.themeColor}40`
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Explore Albums
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
          
        </motion.div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors duration-300 backdrop-blur-sm"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}