'use client';

import { motion } from 'motion/react';
import { useTheme } from '@/lib/theme-context';


export default function Biography() {
  const { currentTheme } = useTheme();


  const achievements = [
    {
      icon: '🏆',
      title: '12 Grammy Awards',
      description: 'Including 3 Album of the Year wins'
    },
    {
      icon: '💿',
      title: '200M+ Albums Sold',
      description: 'One of best-selling music artists'
    },
    {
      icon: '📈',
      title: '50+ Billboard #1s',
      description: 'Most #1 albums by a female artist'
    },
    {
      icon: '🎤',
      title: 'The Eras Tour',
      description: 'Highest-grossing tour of all time'
    },
    {
      icon: '📝',
      title: 'Songwriter of the Decade',
      description: 'Named by Nashville Songwriters Association'
    },
    {
      icon: '👑',
      title: 'Artist of the Decade',
      description: 'AMAs Artist of the Decade (2010s)'
    }
  ];

  const funFacts = [
    {
      fact: 'Lucky Number 13',
      description: 'Born on the 13th, often writes it on her hand before shows'
    },
    {
      fact: '3 Cats',
      description: 'Meredith Grey, Olivia Benson, and Benjamin Button'
    },
    {
      fact: 'Easter Eggs Queen',
      description: 'Hidden clues in lyrics, music videos, and social media'
    },
    {
      fact: 'Re-recording Master',
      description: 'Reclaiming her masters through Taylor&apos;s Versions'
    },
    {
      fact: 'Baking Enthusiast',
      description: 'Famous for bringing homemade cookies to award shows'
    },
    {
      fact: 'Snake Symbolism',
      description: 'Reclaimed the snake as a symbol of rebirth and power'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="theme-gradient-text">Taylor Swift</span>
          </h1>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            From a small-town dreamer to global superstar, discover the extraordinary journey 
            of one of music&apos;s most influential artists.
          </p>
        </motion.div>

        {/* Intro Section - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              The Voice of a Generation
            </h2>
            
            <div className="space-y-4 text-lg text-textSecondary leading-relaxed">
              <p>
                Taylor Alison Swift has redefined what it means to be a modern artist. 
                With over 200 million records sold worldwide and a career spanning nearly 
                two decades, she has become one of the most influential musicians of our time.
              </p>
              
              <p>
                From her humble beginnings in Pennsylvania to becoming a global icon, 
                Taylor&apos;s journey is marked by artistic evolution, business acumen, and 
                an unwavering connection with her fans. Her ability to reinvent herself 
                while maintaining authenticity has set her apart in the entertainment industry.
              </p>
              
              <p>
                Beyond music, she&apos;s a storyteller, activist, and entrepreneur who has 
                challenged industry norms and paved the way for artist ownership and creative control.
              </p>
            </div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="aspect-[3/4] bg-gradient-to-br relative"
                style={{ background: `linear-gradient(135deg, ${currentTheme.light.primary}20 0%, ${currentTheme.light.primary}40 100%)` }}
              >
                {/* Placeholder for Taylor&apos;s portrait */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-600 dark:text-gray-300">
                    <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-2xl font-semibold">Taylor Swift</p>
                    <p className="text-lg opacity-70">Artist Portrait</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"></div>
            </div>
          </motion.div>
        </div>

        {/* Early Life Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-text">Early Life & Beginnings</h3>
            <p className="text-lg text-textSecondary leading-relaxed">
              Born on December 13, 1989, in Reading, Pennsylvania, Taylor showed an early passion for music. 
              She wrote her first song at age 12 and convinced her family to move to Nashville at 14 to 
              pursue her country music dreams. Her determination and talent quickly caught the attention 
              of record labels, leading to her first record deal with Big Machine Records.
            </p>
          </div>
          
          {/* Polaroid Photo */}
          <motion.div
            whileHover={{ rotate: 2, scale: 1.05 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="mx-auto"
          >
            <div className="bg-white p-4 shadow-lg transform rotate-3 max-w-xs">
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-sm mb-3 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm font-medium">Young Taylor</p>
                  <p className="text-xs opacity-70">Nashville 2003</p>
                </div>
              </div>
              <p className="text-center text-gray-700 text-sm font-handwriting">
                &ldquo;I want to be a country music star!&rdquo;
              </p>
            </div>
          </motion.div>
        </motion.div>



        {/* Achievements Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-text"
          >
            Awards & Achievements
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-lg font-bold text-text mb-2">{achievement.title}</h4>
                <p className="text-sm text-textSecondary">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-text"
          >
            Fun Facts & Trivia
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.fact}
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-6 shadow-lg transform border-l-4 border-yellow-400 sticky-note"
                style={{
                  transform: `rotate(${Math.random() * 6 - 3}deg)`
                }}
              >
                <h4 className="text-lg font-bold text-text mb-3 flex items-center">
                  <span className="text-yellow-500 mr-2">✨</span>
                  {fact.fact}
                </h4>
                <p className="text-sm text-textSecondary leading-relaxed">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


