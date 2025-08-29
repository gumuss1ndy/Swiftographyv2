'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { albumThemes, albumOrder } from '@/lib/themes';

export default function Discography() {
  const albums = albumOrder.map(id => albumThemes[id]);

  // Function to get logo filename from album id (matching actual filenames)
  const getLogoFilename = (albumId: string) => {
    const logoMap: Record<string, string> = {
      'debut': 'debut.svg',
      'fearless': 'fearless.svg',
      'speak-now': 'Speak Now.svg',
      'red': 'Red.svg',
      '1989': '1989.svg',
      'reputation': 'reputation.svg',
      'lover': 'Lover.svg',
      'folklore': 'folklore.svg',
      'evermore': 'evermore.svg',
      'fearless-tv': 'Fearless_tv.svg',
      'red-tv': 'red-tv.svg',
      'midnights': 'midnights.svg',
      'speak-now-tv': 'speaknow_tv.svg',
      '1989-tv': '1989_tv.svg',
      'tortured-poets': 'ttpd.svg',
      'life-of-showgirl': 'lifeofashowgirl.svg'
    };
    return logoMap[albumId] || `${albumId}.png`;
  };

  // Function to get album cover filename from album id
  const getAlbumCoverFilename = (albumId: string) => {
    const coverMap: Record<string, string> = {
      'debut': 'debut.webp',
      'fearless': 'fearless.webp',
      'speak-now': 'speaknow.webp',
      'red': 'red.webp',
      '1989': '1989.webp',
      'reputation': 'reputation.webp',
      'lover': 'lover.webp',
      'folklore': 'folklore.webp',
      'evermore': 'evermore.webp',
      'fearless-tv': 'fearless_tv.webp',
      'red-tv': 'red-tv.webp',
      'midnights': 'midnights.webp',
      'speak-now-tv': 'Speak_Now_tv.webp',
      '1989-tv': '1989_tv.webp',
      'tortured-poets': 'ttpd.webp',
      'life-of-showgirl': 'thelifeofashowgirl.webp'
    };
    return coverMap[albumId] || `${albumId}.webp`;
  };

  // Function to check if album should have larger logo
  const shouldHaveLargerLogo = (albumId: string) => {
    const largerLogoAlbums = [
      'debut', 'fearless', 'speak-now', 'red', '1989', 'reputation',
      'lover', 'folklore', 'evermore', 'fearless-tv', 'midnights',
      'speak-now-tv', '1989-tv', 'tortured-poets'
    ];
    return largerLogoAlbums.includes(albumId);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="theme-gradient-text">Discography</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Explore Taylor Swift&apos;s incredible musical journey through her albums,
            from her country roots to pop stardom.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/album/${album.id}`}>
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    boxShadow: `0 10px 25px -5px ${album.themeColor}20, 0 4px 6px -2px ${album.themeColor}10`
                  }}
                >
                  {/* Album Cover Image */}
                  <div className="aspect-square relative overflow-hidden rounded-2xl">
                    <Image
                      src={`/images/ts-albumcover/${getAlbumCoverFilename(album.id)}`}
                      alt={album.name}
                      fill
                      className="object-cover transition-all duration-300 blur-0 group-hover:blur-sm"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      priority={index < 8} // Prioritize first 8 images
                    />

                    {/* Logo Overlay on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                      <div className={`relative opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 ${
                        shouldHaveLargerLogo(album.id)
                          ? 'w-56 h-56 md:w-72 md:h-72'
                          : 'w-48 h-48 md:w-60 md:h-60'
                      }`}>
                        <Image
                          src={`/images/tsalbumlogo/${getLogoFilename(album.id)}`}
                          alt={`${album.name} logo`}
                          fill
                          className="object-contain filter drop-shadow-lg"
                          sizes={shouldHaveLargerLogo(album.id)
                            ? "(max-width: 768px) 224px, 288px"
                            : "(max-width: 768px) 192px, 240px"
                          }
                          onError={() => {
                            console.warn(`Logo not found for ${album.name}: ${getLogoFilename(album.id)}`);
                          }}
                        />
                      </div>
                    </div>

                    {/* Theme Color Border on Hover */}
                    <div
                      className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current transition-colors duration-300"
                      style={{
                        borderColor: `${album.themeColor}60`,
                        boxShadow: `inset 0 0 0 2px ${album.themeColor}20`
                      }}
                    />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}