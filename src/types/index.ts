export interface AlbumTheme {
  id: string;
  name: string;
  releaseYear: string;
  type: 'original' | 'taylors-version' | 'upcoming';
  light: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  dark: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  gradient: string;
  coverImage: string;
  themeColor: string;
}

export type ThemeMode = 'light' | 'dark';
export type AlbumId = 
  | 'debut' 
  | 'fearless' 
  | 'speak-now' 
  | 'red' 
  | '1989' 
  | 'reputation' 
  | 'lover' 
  | 'folklore' 
  | 'evermore' 
  | 'fearless-tv' 
  | 'red-tv' 
  | 'midnights' 
  | 'speak-now-tv' 
  | '1989-tv' 
  | 'tortured-poets' 
  | 'life-of-showgirl';