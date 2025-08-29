import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AlbumTheme } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getThemeColors(theme: AlbumTheme, mode: 'light' | 'dark') {
  return theme[mode];
}

export function applyThemeToDocument(theme: AlbumTheme, mode: 'light' | 'dark') {
  const colors = getThemeColors(theme, mode);
  const root = document.documentElement;
  
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value as string);
  });
  
  root.style.setProperty('--theme-gradient', theme.gradient);
}