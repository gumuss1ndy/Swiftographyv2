'use client';

import { AlbumId } from '@/types';
import { useTheme } from '@/lib/theme-context';

interface ThemePreviewProps {
  albumId: AlbumId;
  children: React.ReactNode;
  className?: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

/**
 * ThemePreview component that temporarily shows a theme on hover
 * Useful for previewing themes on album cards, buttons, etc.
 */
export default function ThemePreview({ 
  albumId, 
  children, 
  className = '',
  onHoverStart,
  onHoverEnd
}: ThemePreviewProps) {
  const { setTemporaryTheme, restorePreviousTheme } = useTheme();

  const handleMouseEnter = () => {
    setTemporaryTheme(albumId);
    onHoverStart?.();
  };

  const handleMouseLeave = () => {
    restorePreviousTheme();
    onHoverEnd?.();
  };

  return (
    <div 
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
