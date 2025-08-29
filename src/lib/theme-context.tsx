'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AlbumTheme, ThemeMode, AlbumId } from '@/types';
import { albumThemes, defaultTheme } from './themes';

interface ThemeContextType {
  currentTheme: AlbumTheme;
  themeMode: ThemeMode;
  setTheme: (albumId: AlbumId) => void;
  toggleThemeMode: () => void;
  setTemporaryTheme: (albumId: AlbumId) => void;
  restorePreviousTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<AlbumTheme>(defaultTheme);
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [previousTheme, setPreviousTheme] = useState<AlbumTheme | null>(null);

  // Apply theme to document
  const applyTheme = (theme: AlbumTheme, mode: ThemeMode) => {
    const colors = theme[mode];
    const root = document.documentElement;
    
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value as string);
    });
    
    root.style.setProperty('--theme-gradient', theme.gradient);
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('swiftography-theme');
    const savedMode = localStorage.getItem('swiftography-mode') as ThemeMode;
    
    if (savedTheme && albumThemes[savedTheme]) {
      setCurrentTheme(albumThemes[savedTheme]);
    }
    
    if (savedMode) {
      setThemeMode(savedMode);
    }
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    applyTheme(currentTheme, themeMode);
  }, [currentTheme, themeMode]);

  const setTheme = (albumId: AlbumId) => {
    const theme = albumThemes[albumId];
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem('swiftography-theme', albumId);
      // Clear any previous theme when setting a permanent theme
      setPreviousTheme(null);
    }
  };

  const setTemporaryTheme = (albumId: AlbumId) => {
    const theme = albumThemes[albumId];
    if (theme && theme.id !== currentTheme.id) {
      // Store current theme as previous before switching
      if (!previousTheme) {
        setPreviousTheme(currentTheme);
      }
      setCurrentTheme(theme);
      // Don't save to localStorage for temporary themes
    }
  };

  const restorePreviousTheme = () => {
    if (previousTheme) {
      setCurrentTheme(previousTheme);
      setPreviousTheme(null);
    }
  };

  const toggleThemeMode = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
    localStorage.setItem('swiftography-mode', newMode);
  };

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      themeMode,
      setTheme,
      toggleThemeMode,
      setTemporaryTheme,
      restorePreviousTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}