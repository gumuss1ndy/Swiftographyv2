'use client';

import { useTheme } from '@/lib/theme-context';
import { albumThemes, albumOrder } from '@/lib/themes';
import { motion } from 'motion/react';
import { AlbumId } from '@/types';

export default function ThemeTest() {
  const { currentTheme, themeMode, setTheme, toggleThemeMode } = useTheme();

  return (
    <div className="min-h-screen p-8 space-y-6 bg-background">
      <motion.h1 
        className="text-4xl font-bold theme-gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Swiftography Theme Test
      </motion.h1>
      
      <div className="flex gap-3 flex-wrap">
        {albumOrder.map((albumId, index) => (
          <motion.button
            key={albumId}
            onClick={() => setTheme(albumId as AlbumId)}
            className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
              currentTheme.id === albumId
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-surface border border-gray-200 hover:bg-gray-50 hover:scale-105'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {albumThemes[albumId].name}
          </motion.button>
        ))}
      </div>
      
      <motion.button
        onClick={toggleThemeMode}
        className="px-6 py-3 bg-accent text-primary rounded-xl hover:opacity-80 transition-opacity font-medium shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Toggle {themeMode === 'light' ? 'Dark' : 'Light'} Mode
      </motion.button>
      
      <motion.div 
        className="p-6 bg-surface rounded-xl border shadow-lg max-w-md"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-text font-medium">Current Theme: {currentTheme.name}</p>
        <p className="text-textSecondary">Mode: {themeMode}</p>
        <p className="text-textSecondary">Year: {currentTheme.releaseYear}</p>
      </motion.div>
    </div>
  );
}