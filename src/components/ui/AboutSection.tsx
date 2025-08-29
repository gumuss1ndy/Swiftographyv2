'use client';

import { motion } from 'motion/react';
import { useTheme } from '@/lib/theme-context';

export default function AboutSection() {
  const { currentTheme } = useTheme();

  const stats = [
    { label: 'Albums Released', value: '16' },
    { label: 'Grammy Awards', value: '14' },
    { label: 'Billboard #1s', value: '12' },
    { label: 'Years Active', value: '18+' }
  ];

  const eras = [
    {
      name: 'Country Era',
      releaseYear: '2006-2012',
      description: 'From her debut to Red, Taylor established herself as a country music star with crossover appeal.'
    },
    {
      name: 'Pop Era',
      releaseYear: '2014-2019',
      description: '1989 marked her full transition to pop, followed by Reputation and Lover.'
    },
    {
      name: 'Indie Era',
      releaseYear: '2020-2021',
      description: 'Folklore and Evermore showcased her storytelling abilities in indie folk.'
    },
    {
      name: 'Re-recording Era',
      releaseYear: '2021-Present',
      description: 'Taylor\'s Versions and new albums like Midnights and The Tortured Poets Department.'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="theme-gradient-text">About Taylor Swift</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            A global superstar who has redefined the music industry with her authentic storytelling, 
            innovative approach to business, and unwavering connection with fans.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: currentTheme.light.primary }}
              >
                {stat.value}
              </div>
              <div className="text-textSecondary font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Musical Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Musical Journey</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eras.map((era, index) => (
              <motion.div
                key={era.releaseYear}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-text mb-3">
                  {era.name}
                </h4>
                <div 
                  className="text-lg font-bold mb-3"
                  style={{ color: currentTheme.light.primary }}
                >
                  {era.releaseYear}
                </div>
                <p className="text-textSecondary leading-relaxed">
                  {era.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text">
              The Taylor Swift Story
            </h3>
            
            <div className="space-y-4 text-textSecondary leading-relaxed">
              <p>
                Taylor Swift&apos;s journey from a small-town girl with big dreams to a global 
                superstar is nothing short of remarkable. Born in Reading, Pennsylvania, she 
                moved to Nashville at 14 to pursue her country music dreams.
              </p>
              
              <p>
                Her self-titled debut album in 2006 introduced the world to her unique 
                storytelling style. By 2008, &ldquo;Fearless&rdquo; had catapulted her to 
                international stardom and won Album of the Year at the Grammy Awards.
              </p>
              
              <p>
                Over the years, Taylor has evolved from country sweetheart to pop sensation, 
                constantly pushing boundaries and reinventing herself while staying true to 
                her core values of authenticity and artistic integrity.
              </p>
              
              <p>
                Today, she stands as one of the most successful and influential artists of 
                all time, with a legacy that extends far beyond music into business, 
                philanthropy, and cultural impact.
              </p>
            </div>
          </div>

          <div className="relative">
            <div 
              className="aspect-square rounded-2xl relative overflow-hidden"
              style={{ background: currentTheme.gradient }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-32 h-32 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <p className="text-2xl font-semibold mb-2">Global Superstar</p>
                  <p className="text-lg opacity-80">Music • Business • Culture</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}