# 🎵 Spotify Integration Setup

Your Spotify client ID has been configured: `76266d68396d478abdab123afd55118c`

## Setup Instructions

### 1. Configure Your Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Find your app with client ID: `76266d68396d478abdab123afd55118c`
3. Click "Edit Settings"
4. Add these **EXACT** Redirect URIs (case-sensitive):
   - `http://localhost:3000/callback` (for local development)
   - `http://192.168.137.1:3000/callback` (for network access)
   - `https://yourdomain.com/callback` (for production)

⚠️ **IMPORTANT**: The redirect URI must match EXACTLY (including http/https, port, trailing slashes)

📱 **For Network Access**: If you're accessing the app via IP address (like `192.168.137.1:3000`), you need to add that specific URI to your Spotify app settings.

### 2. How the Integration Works

The Tracklist component now includes:
- **Automatic OAuth Flow**: Click "Login to Spotify" to authenticate
- **Token Management**: Tokens are stored in localStorage and auto-refreshed
- **Player Integration**: Full Spotify Web Playback SDK integration
- **Album Theming**: Each album uses its unique color theme

### 3. User Flow

1. User clicks "Login to Spotify" button
2. Redirected to Spotify OAuth page
3. After authorization, returned to `/callback` page
4. Token is extracted and stored
5. User is redirected back to the original album page
6. Spotify player initializes automatically
7. User can now play tracks directly in the browser

### 4. Features

- ✅ **Real Spotify Playback**: Plays actual tracks from Spotify
- ✅ **Album-Specific Theming**: Each album has its own color scheme
- ✅ **Play/Pause Toggle**: Click same track to toggle playback
- ✅ **Visual Feedback**: Animated indicators for currently playing tracks
- ✅ **Responsive Design**: Works on desktop and mobile
- ✅ **Error Handling**: Graceful fallbacks when Spotify is unavailable

### 5. Required Spotify Premium

Note: The Spotify Web Playback SDK requires users to have Spotify Premium for full functionality.

### 6. Testing

1. Start your development server: `npm run dev`
2. Navigate to any album page (e.g., `/album/midnights`)
3. Click "Login to Spotify"
4. Authorize the app
5. Try playing tracks!

### 7. Troubleshooting

**INVALID_CLIENT: Invalid redirect URI**
- Check that your redirect URI in Spotify Dashboard exactly matches:
  - Local: `http://localhost:3000/callback`
  - Network: `http://192.168.137.1:3000/callback`
  - Production: `https://yourdomain.com/callback`
- Ensure no trailing slashes or extra characters
- Make sure the protocol (http/https) matches exactly
- If accessing via IP address, make sure that exact IP is in your Spotify settings

**Player Not Loading**
- Ensure you have Spotify Premium
- Check browser console for errors
- Try refreshing the page after authentication

**Authentication Fails**
- Clear localStorage: `localStorage.clear()`
- Try the authentication flow again
- Check that your app is not in development mode restrictions

### 8. Current Configuration

The app is currently configured to redirect to:
- **Local Development**: `http://localhost:3000/callback`
- **Network Access**: `http://192.168.137.1:3000/callback`
- **Production**: `https://[your-domain]/callback`

The app automatically detects the current host and uses the appropriate redirect URI.

**For your current setup (`192.168.137.1:3000`), add this exact URI to Spotify:**
```
http://192.168.137.1:3000/callback
```

### 9. Security Notes

- Tokens are stored in localStorage (client-side only)
- No server-side storage of user credentials
- Tokens automatically expire for security
- Users need to re-authenticate when tokens expire

The integration is now ready to use! 🎉
