'use client';

import { useEffect } from 'react';
import { useTheme } from './theme-context';
import { AlbumId } from '@/types';

/**
 * Custom hook for automatically switching to an album's theme
 * and restoring the previous theme when the component unmounts
 * 
 * @param albumId - The album ID to switch the theme to
 * @param enabled - Whether to enable automatic theme switching (default: true)
 */
export function useAlbumTheme(albumId: AlbumId, enabled: boolean = true) {
  const { setTemporaryTheme, restorePreviousTheme } = useTheme();

  useEffect(() => {
    if (!enabled) return;

    // Switch to album theme when entering
    setTemporaryTheme(albumId);
    
    // Restore previous theme when leaving
    return () => {
      restorePreviousTheme();
    };
  }, [albumId, setTemporaryTheme, restorePreviousTheme, enabled]);
}
