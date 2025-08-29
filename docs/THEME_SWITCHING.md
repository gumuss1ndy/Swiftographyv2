# Automatic Theme Switching System

This documentation explains how the automatic theme switching system works in Swiftography and how to use it.

## Overview

The theme switching system automatically changes the website's theme when users navigate to specific album pages and restores the previous theme when they leave. This creates an immersive experience where each album page uses its own visual identity.

## How It Works

### 1. Theme Context Updates

The `ThemeProvider` now supports:
- **Temporary themes**: Applied when visiting album pages
- **Previous theme storage**: Remembers the theme before switching
- **Automatic restoration**: Restores the previous theme when leaving

### 2. Key Functions

- `setTemporaryTheme(albumId)`: Switches to an album's theme temporarily
- `restorePreviousTheme()`: Restores the theme that was active before the temporary switch
- `setTheme(albumId)`: Permanently sets a theme (saves to localStorage)

### 3. Album Pages

Album pages (e.g., `/album/1989`) automatically:
1. Switch to the album's theme when the page loads
2. Restore the previous theme when the user navigates away

## Usage Examples

### For Album Pages

Album pages automatically use the `useAlbumTheme` hook:

```tsx
// src/app/album/[id]/page.tsx
import { useAlbumTheme } from '@/lib/useAlbumTheme';

export default function AlbumPage({ params }: AlbumPageProps) {
  const albumId = params.id as AlbumId;
  
  // Automatically switch to album theme
  useAlbumTheme(albumId);
  
  return (
    // Page content
  );
}
```

### For Custom Components

You can use the theme switching in any component:

```tsx
import { useTheme } from '@/lib/theme-context';

function MyComponent() {
  const { setTemporaryTheme, restorePreviousTheme } = useTheme();
  
  const handleMouseEnter = () => {
    setTemporaryTheme('1989'); // Switch to 1989 theme
  };
  
  const handleMouseLeave = () => {
    restorePreviousTheme(); // Restore previous theme
  };
  
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      Hover to preview 1989 theme
    </div>
  );
}
```

### Theme Preview Component

Use the `ThemePreview` component for hover previews:

```tsx
import ThemePreview from '@/components/ui/ThemePreview';

function AlbumCard({ albumId }) {
  return (
    <ThemePreview albumId={albumId}>
      <div>
        Hover this card to preview the {albumId} theme
      </div>
    </ThemePreview>
  );
}
```

## User Experience Flow

1. **User starts on home page** with their preferred theme (e.g., "Midnights")
2. **User clicks "1989" album** → Theme instantly switches to 1989 colors
3. **User explores the 1989 album page** → Theme remains 1989 throughout
4. **User navigates back to home** → Theme restores to "Midnights"
5. **User clicks theme switcher** → Permanently changes theme and clears temporary state

## Technical Details

### Theme Storage

- **Permanent themes**: Saved to `localStorage` and persist across sessions
- **Temporary themes**: Stored in React state, cleared on navigation
- **Previous theme**: Stored in context, used for restoration

### Navigation Handling

The system uses React's `useEffect` cleanup function to detect when users leave album pages:

```tsx
useEffect(() => {
  setTemporaryTheme(albumId);
  
  // Cleanup function runs when component unmounts
  return () => {
    restorePreviousTheme();
  };
}, [albumId]);
```

### Edge Cases Handled

- **Same theme**: Won't store previous theme if switching to the same theme
- **Multiple navigations**: Properly handles rapid navigation between album pages
- **Manual theme changes**: Clears temporary state when user manually selects a theme
- **Page refresh**: Restores saved theme from localStorage

## Adding New Album Pages

To add automatic theme switching to a new album page:

1. Make sure your page is a client component (`'use client'`)
2. Import and use the `useAlbumTheme` hook:

```tsx
'use client';

import { useAlbumTheme } from '@/lib/useAlbumTheme';
import { AlbumId } from '@/types';

export default function NewAlbumPage({ params }) {
  const albumId = params.id as AlbumId;
  
  // Add this line for automatic theme switching
  useAlbumTheme(albumId);
  
  return (
    // Your page content
  );
}
```

That's it! The theme will automatically switch when users enter and leave your page.

## Customization

### Disable Theme Switching

You can disable automatic theme switching by passing `false` to `useAlbumTheme`:

```tsx
useAlbumTheme(albumId, false); // Disabled
```

### Custom Theme Logic

For custom theme switching logic, use the context directly:

```tsx
const { setTemporaryTheme, restorePreviousTheme, currentTheme } = useTheme();

// Your custom logic here
```

## Performance Considerations

- Theme switching is instant (no loading states needed)
- Previous themes are stored in memory, not localStorage
- CSS variables are updated directly on the document root
- No unnecessary re-renders or theme recalculations
