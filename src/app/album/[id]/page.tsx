import { notFound } from 'next/navigation';
import { albumThemes, albumOrder } from '@/lib/themes';
import { AlbumId } from '@/types';
import AlbumPageClient from './AlbumPageClient';

interface AlbumPageProps {
  params: {
    id: string;
  };
}

export default function AlbumPage({ params }: AlbumPageProps) {
  const albumId = params.id as AlbumId;
  
  // Check if the album exists
  if (!albumThemes[albumId]) {
    notFound();
  }

  return <AlbumPageClient albumId={albumId} />;
}

// Generate static params for all albums
export function generateStaticParams() {
  return albumOrder.map((id) => ({
    id: id,
  }));
}

