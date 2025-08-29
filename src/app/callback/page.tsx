'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SpotifyCallback() {
  const router = useRouter();

  useEffect(() => {
    // Extract access token from URL hash
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token'))?.split('=')[1];
      if (token) {
        // Store token in localStorage
        localStorage.setItem('spotify_access_token', token);
        
        // Get the return URL or default to home
        const returnUrl = localStorage.getItem('spotify_return_url') || '/';
        localStorage.removeItem('spotify_return_url');
        
        // Redirect back to the original page
        router.push(returnUrl);
        return;
      }
    }
    
    // If no token found, redirect to home
    router.push('/');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-text mb-2">Connecting to Spotify...</h2>
        <p className="text-textSecondary">Please wait while we complete the authentication.</p>
      </div>
    </div>
  );
}
