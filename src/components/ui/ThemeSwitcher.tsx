'use client';

import { motion } from 'motion/react';
import { useTheme } from '@/lib/theme-context';
import { albumThemes, albumOrder } from '@/lib/themes';
import { AlbumId } from '@/types';

export function ThemeSwitcher() {
  const { currentTheme, setTheme } = useTheme();

  return (
    <div className="relative group">
      <motion.button
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-surface border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div 
          className="w-4 h-4 rounded-full"
          style={{ background: currentTheme.gradient }}
        />
        <span className="text-sm font-medium text-text">
          {currentTheme.name}
        </span>
        <svg
          className="w-4 h-4 text-textSecondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-2 w-48 bg-surface border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          {albumOrder.map((albumId) => (
            <button
              key={albumId}
              onClick={() => setTheme(albumId as AlbumId)}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-3 ${
                currentTheme.id === albumId ? 'bg-primary/10 text-primary' : 'text-text'
              }`}
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ background: albumThemes[albumId].gradient }}
              />
              <span className="text-sm">{albumThemes[albumId].name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}