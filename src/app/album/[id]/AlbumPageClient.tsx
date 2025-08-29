'use client';

import { AlbumId } from '@/types';
import { useAlbumTheme } from '@/lib/useAlbumTheme';
import AlbumHero from '@/components/ui/album/Hero';
import AlbumOverview from '@/components/ui/album/Overview';
import Tracklist from '@/components/ui/album/Tracklist';
import AlbumGallery from '@/components/ui/album/Gallery';

interface AlbumPageClientProps {
  albumId: AlbumId;
}

export default function AlbumPageClient({ albumId }: AlbumPageClientProps) {
  // Automatically switch to album theme when entering/leaving the page
  useAlbumTheme(albumId);

  return (
    <>
      <AlbumHero albumId={albumId} />
      <AlbumOverview albumId={albumId} />
      <Tracklist albumId={albumId} />
      <AlbumGallery albumId={albumId} />
    </>
  );
}
