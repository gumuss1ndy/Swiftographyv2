'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { AlbumId } from '@/types';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  src: string;
  width: number;
  height: number;
}

interface AlbumGalleryProps {
  albumId: AlbumId;
}

export default function AlbumGallery({ albumId }: AlbumGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | undefined>(undefined);

  // Album-specific gallery images with realistic dimensions
  const albumGalleries = useMemo<Record<AlbumId, GalleryImage[]>>(() => ({
    debut: [
      { id: 1, title: 'Album Cover', description: 'The iconic debut album cover', src: '/images/ts-gallery/debut-cover.jpg', width: 400, height: 400 },
      { id: 2, title: 'Tim McGraw Single', description: 'First single release', src: '/images/ts-gallery/tim-mcgraw.jpg', width: 600, height: 400 },
      { id: 3, title: 'Teardrops on My Guitar', description: 'Breakthrough single', src: '/images/ts-gallery/teardrops.jpg', width: 400, height: 600 },
      { id: 4, title: 'Our Song', description: 'Fan favorite track', src: '/images/ts-gallery/our-song.jpg', width: 500, height: 350 },
      { id: 5, title: 'Live Performance', description: 'Early live shows', src: '/images/ts-gallery/debut-live.jpg', width: 450, height: 300 },
      { id: 6, title: 'Behind the Scenes', description: 'Recording process', src: '/images/ts-gallery/debut-bts.jpg', width: 350, height: 500 }
    ],
    fearless: [
      { id: 7, title: 'Fearless Cover', description: 'Grammy-winning album cover', src: '/images/ts-gallery/fearless-cover.jpg', width: 400, height: 400 },
      { id: 8, title: 'Love Story', description: 'Iconic music video', src: '/images/ts-gallery/love-story.jpg', width: 600, height: 400 },
      { id: 9, title: 'You Belong with Me', description: 'High school romance', src: '/images/ts-gallery/you-belong.jpg', width: 400, height: 600 },
      { id: 10, title: 'Fifteen', description: 'Coming of age story', src: '/images/ts-gallery/fifteen.jpg', width: 500, height: 350 },
      { id: 11, title: 'Grammy Performance', description: 'Historic Grammy moment', src: '/images/ts-gallery/fearless-grammy.jpg', width: 450, height: 300 },
      { id: 12, title: 'Fearless Tour', description: 'World tour highlights', src: '/images/ts-gallery/fearless-tour.jpg', width: 350, height: 500 }
    ],
    'speak-now': [
      { id: 13, title: 'Speak Now Cover', description: 'Purple-themed album art', src: '/images/ts-gallery/speak-now-cover.jpg', width: 400, height: 400 },
      { id: 14, title: 'Mine', description: 'Romantic storytelling', src: '/images/ts-gallery/mine.jpg', width: 600, height: 400 },
      { id: 15, title: 'Back to December', description: 'Apology song', src: '/images/ts-gallery/back-to-december.jpg', width: 400, height: 600 },
      { id: 16, title: 'Mean', description: 'Anti-bullying anthem', src: '/images/ts-gallery/mean.jpg', width: 500, height: 350 },
      { id: 17, title: 'Speak Now Tour', description: 'Magical tour moments', src: '/images/ts-gallery/speak-now-tour.jpg', width: 450, height: 300 },
      { id: 18, title: 'Self-Written', description: '100% Taylor-written album', src: '/images/ts-gallery/speak-now-bts.jpg', width: 350, height: 500 }
    ],
    red: [
      { id: 19, title: 'Red Cover', description: 'Red-themed album artwork', src: '/images/ts-gallery/red-cover.jpg', width: 400, height: 400 },
      { id: 20, title: 'We Are Never Ever Getting Back Together', description: 'Pop breakthrough', src: '/images/ts-gallery/wanegbt.jpg', width: 600, height: 400 },
      { id: 21, title: 'I Knew You Were Trouble', description: 'Dubstep influence', src: '/images/ts-gallery/ikyt.jpg', width: 400, height: 600 },
      { id: 22, title: 'Begin Again', description: 'New beginnings', src: '/images/ts-gallery/begin-again.jpg', width: 500, height: 350 },
      { id: 23, title: 'Red Tour', description: 'Spectacular tour production', src: '/images/ts-gallery/red-tour.jpg', width: 450, height: 300 },
      { id: 24, title: 'All Too Well', description: 'Fan favorite track', src: '/images/ts-gallery/all-too-well.jpg', width: 350, height: 500 }
    ],
    '1989': [
      { id: 25, title: '1989 Cover', description: 'Polaroid-inspired design', src: '/images/ts-gallery/1989-cover.jpg', width: 400, height: 400 },
      { id: 26, title: 'Shake It Off', description: 'Global hit single', src: '/images/ts-gallery/shake-it-off.jpg', width: 600, height: 400 },
      { id: 27, title: 'Blank Space', description: 'Satirical masterpiece', src: '/images/ts-gallery/blank-space.jpg', width: 400, height: 600 },
      { id: 28, title: 'Style', description: '80s synth-pop', src: '/images/ts-gallery/style.jpg', width: 500, height: 350 },
      { id: 29, title: '1989 World Tour', description: 'Massive stadium tour', src: '/images/ts-gallery/1989-tour.jpg', width: 450, height: 300 },
      { id: 30, title: 'Pop Transformation', description: 'Complete genre shift', src: '/images/ts-gallery/1989-bts.jpg', width: 350, height: 500 }
    ],
    reputation: [
      { id: 31, title: 'Reputation Cover', description: 'Dark, mysterious artwork', src: '/images/ts-gallery/reputation-cover.jpg', width: 400, height: 400 },
      { id: 32, title: 'Look What You Made Me Do', description: 'Controversial lead single', src: '/images/ts-gallery/lwymmd.jpg', width: 600, height: 400 },
      { id: 33, title: '...Ready for It?', description: 'Electro-pop sound', src: '/images/ts-gallery/ready-for-it.jpg', width: 400, height: 600 },
      { id: 34, title: 'Reputation Stadium Tour', description: 'Record-breaking tour', src: '/images/ts-gallery/reputation-tour.jpg', width: 500, height: 350 },
      { id: 35, title: 'Delicate', description: 'Vulnerable ballad', src: '/images/ts-gallery/delicate.jpg', width: 450, height: 300 },
      { id: 36, title: 'Media Scrutiny', description: 'Addressing public perception', src: '/images/ts-gallery/reputation-bts.jpg', width: 350, height: 500 }
    ],
    lover: [
      { id: 37, title: 'Lover Cover', description: 'Pastel-colored artwork', src: '/images/ts-gallery/lover-cover.jpg', width: 400, height: 400 },
      { id: 38, title: 'Me!', description: 'Colorful lead single', src: '/images/ts-gallery/me.jpg', width: 600, height: 400 },
      { id: 39, title: 'You Need to Calm Down', description: 'LGBTQ+ anthem', src: '/images/ts-gallery/yntcd.jpg', width: 400, height: 600 },
      { id: 40, title: 'Lover', description: 'Romantic title track', src: '/images/ts-gallery/lover-single.jpg', width: 500, height: 350 },
      { id: 41, title: 'Lover Fest', description: 'Cancelled festival tour', src: '/images/ts-gallery/lover-fest.jpg', width: 450, height: 300 },
      { id: 42, title: 'Happiness Theme', description: 'Celebration of love', src: '/images/ts-gallery/lover-bts.jpg', width: 350, height: 500 }
    ],
    folklore: [
      { id: 43, title: 'Folklore Cover', description: 'Indie folk aesthetic', src: '/images/ts-gallery/folklore-cover.jpg', width: 400, height: 400 },
      { id: 44, title: 'Cardigan', description: 'Surprise single', src: '/images/ts-gallery/cardigan.jpg', width: 600, height: 400 },
      { id: 45, title: 'Exile', description: 'Bon Iver collaboration', src: '/images/ts-gallery/exile.jpg', width: 400, height: 600 },
      { id: 46, title: 'Pandemic Creation', description: 'Quarantine album', src: '/images/ts-gallery/folklore-bts.jpg', width: 500, height: 350 },
      { id: 47, title: 'Grammy Winner', description: 'Album of the Year', src: '/images/ts-gallery/folklore-grammy.jpg', width: 450, height: 300 },
      { id: 48, title: 'Indie Departure', description: 'Genre exploration', src: '/images/ts-gallery/folklore-studio.jpg', width: 350, height: 500 }
    ],
    evermore: [
      { id: 49, title: 'Evermore Cover', description: 'Sister album to Folklore', src: '/images/ts-gallery/evermore-cover.jpg', width: 400, height: 400 },
      { id: 50, title: 'Willow', description: 'Magical lead single', src: '/images/ts-gallery/willow.jpg', width: 600, height: 400 },
      { id: 51, title: 'No Body, No Crime', description: 'Murder ballad', src: '/images/ts-gallery/nbnc.jpg', width: 400, height: 600 },
      { id: 52, title: 'Coney Island', description: 'The National collaboration', src: '/images/ts-gallery/coney-island.jpg', width: 500, height: 350 },
      { id: 53, title: 'Indie Folk', description: 'Continued genre exploration', src: '/images/ts-gallery/evermore-bts.jpg', width: 450, height: 300 },
      { id: 54, title: 'Storytelling', description: 'Rich character development', src: '/images/ts-gallery/evermore-studio.jpg', width: 350, height: 500 }
    ],
    midnights: [
      { id: 55, title: 'Midnights Cover', description: 'Sleepless nights theme', src: '/images/ts-gallery/midnights-cover.jpg', width: 400, height: 400 },
      { id: 56, title: 'Anti-Hero', description: 'Self-deprecating anthem', src: '/images/ts-gallery/anti-hero.jpg', width: 600, height: 400 },
      { id: 57, title: 'Lavender Haze', description: 'Dreamy lead single', src: '/images/ts-gallery/lavender-haze.jpg', width: 400, height: 600 },
      { id: 58, title: 'Karma', description: 'Karma is a cat', src: '/images/ts-gallery/karma.jpg', width: 500, height: 350 },
      { id: 59, title: 'Record Breaking', description: 'Commercial success', src: '/images/ts-gallery/midnights-success.jpg', width: 450, height: 300 },
      { id: 60, title: 'Conceptual Album', description: 'Sleepless nights concept', src: '/images/ts-gallery/midnights-bts.jpg', width: 350, height: 500 }
    ],
    'fearless-tv': [
      { id: 61, title: 'Fearless (TV) Cover', description: 'Re-recorded album cover', src: '/images/ts-gallery/fearless-tv-cover.jpg', width: 400, height: 400 },
      { id: 62, title: 'Love Story (TV)', description: 'Remastered classic', src: '/images/ts-gallery/love-story-tv.jpg', width: 600, height: 400 },
      { id: 63, title: 'Mr. Perfectly Fine', description: 'From the vault track', src: '/images/ts-gallery/mr-perfectly-fine.jpg', width: 400, height: 600 },
      { id: 64, title: 'You All Over Me', description: 'Previously unreleased', src: '/images/ts-gallery/you-all-over-me.jpg', width: 500, height: 350 },
      { id: 65, title: 'Re-recording Process', description: 'Behind the scenes', src: '/images/ts-gallery/fearless-tv-bts.jpg', width: 450, height: 300 },
      { id: 66, title: 'Enhanced Production', description: 'Improved sound quality', src: '/images/ts-gallery/fearless-tv-studio.jpg', width: 350, height: 500 }
    ],
    'red-tv': [
      { id: 67, title: 'Red (TV) Cover', description: 'Enhanced re-recording', src: '/images/ts-gallery/red-tv-cover.jpg', width: 400, height: 400 },
      { id: 68, title: 'All Too Well (10 Minute Version)', description: 'Legendary extended track', src: '/images/ts-gallery/atw-10min.jpg', width: 600, height: 400 },
      { id: 69, title: 'I Bet You Think About Me', description: 'From the vault', src: '/images/ts-gallery/ibytam.jpg', width: 400, height: 600 },
      { id: 70, title: 'Message in a Bottle', description: 'New vault track', src: '/images/ts-gallery/message-in-bottle.jpg', width: 500, height: 350 },
      { id: 71, title: 'Enhanced Production', description: 'Improved vocals and sound', src: '/images/ts-gallery/red-tv-bts.jpg', width: 450, height: 300 },
      { id: 72, title: 'Vault Tracks', description: 'Nine new songs', src: '/images/ts-gallery/red-tv-vault.jpg', width: 350, height: 500 }
    ],
    'speak-now-tv': [
      { id: 73, title: 'Speak Now (TV) Cover', description: 'Reimagined album art', src: '/images/ts-gallery/speak-now-tv-cover.jpg', width: 400, height: 400 },
      { id: 74, title: 'I Can See You', description: 'From the vault', src: '/images/ts-gallery/i-can-see-you.jpg', width: 600, height: 400 },
      { id: 75, title: 'Castles Crumbling', description: 'Vault collaboration', src: '/images/ts-gallery/castles-crumbling.jpg', width: 400, height: 600 },
      { id: 76, title: 'When Emma Falls in Love', description: 'New vault track', src: '/images/ts-gallery/when-emma-falls.jpg', width: 500, height: 350 },
      { id: 77, title: 'Enhanced Quality', description: 'Improved production', src: '/images/ts-gallery/speak-now-tv-bts.jpg', width: 450, height: 300 },
      { id: 78, title: 'Vault Expansion', description: 'Six new tracks', src: '/images/ts-gallery/speak-now-tv-vault.jpg', width: 350, height: 500 }
    ],
    '1989-tv': [
      { id: 79, title: '1989 (TV) Cover', description: 'Re-recorded pop masterpiece', src: '/images/ts-gallery/1989-tv-cover.jpg', width: 400, height: 400 },
      { id: 80, title: 'Is It Over Now?', description: 'From the vault', src: '/images/ts-gallery/is-it-over-now.jpg', width: 600, height: 400 },
      { id: 81, title: 'Now That We Don\'t Talk', description: 'Vault track', src: '/images/ts-gallery/now-that-we-dont-talk.jpg', width: 400, height: 600 },
      { id: 82, title: 'Say Don\'t Go', description: 'New vault song', src: '/images/ts-gallery/say-dont-go.jpg', width: 500, height: 350 },
      { id: 83, title: 'Enhanced Pop', description: 'Improved production', src: '/images/ts-gallery/1989-tv-bts.jpg', width: 450, height: 300 },
      { id: 84, title: 'Vault Tracks', description: 'Five new songs', src: '/images/ts-gallery/1989-tv-vault.jpg', width: 350, height: 500 }
    ],
    'tortured-poets': [
      { id: 85, title: 'TTPD Cover', description: 'Latest album artwork', src: '/images/ts-gallery/ttpd-cover.jpg', width: 400, height: 400 },
      { id: 86, title: 'Fortnight', description: 'Post Malone collaboration', src: '/images/ts-gallery/fortnight.jpg', width: 600, height: 400 },
      { id: 87, title: 'Down Bad', description: 'Lead single', src: '/images/ts-gallery/down-bad.jpg', width: 400, height: 600 },
      { id: 88, title: 'I Can Do It With a Broken Heart', description: 'Fan favorite', src: '/images/ts-gallery/icdiwabh.jpg', width: 500, height: 350 },
      { id: 89, title: 'Personal Songwriting', description: 'Deeply introspective', src: '/images/ts-gallery/ttpd-bts.jpg', width: 450, height: 300 },
      { id: 90, title: 'Modern Relationships', description: 'Complex themes', src: '/images/ts-gallery/ttpd-studio.jpg', width: 350, height: 500 }
    ],
    'life-of-showgirl': [
      { id: 91, title: 'Upcoming Album', description: 'Anticipated release', src: '/images/ts-gallery/showgirl-teaser.jpg', width: 400, height: 400 },
      { id: 92, title: 'New Era', description: 'Fresh musical direction', src: '/images/ts-gallery/showgirl-concept.jpg', width: 600, height: 400 },
      { id: 93, title: 'Behind the Scenes', description: 'Recording process', src: '/images/ts-gallery/showgirl-bts.jpg', width: 400, height: 600 },
      { id: 94, title: 'Studio Sessions', description: 'Creative process', src: '/images/ts-gallery/showgirl-studio.jpg', width: 500, height: 350 },
      { id: 95, title: 'Anticipation', description: 'Fan excitement', src: '/images/ts-gallery/showgirl-hype.jpg', width: 450, height: 300 },
      { id: 96, title: 'Future Plans', description: 'What\'s to come', src: '/images/ts-gallery/showgirl-future.jpg', width: 350, height: 500 }
    ]
  }), []);

  // Load initial images
  useEffect(() => {
    const initialImages = albumGalleries[albumId] || albumGalleries.midnights;
    setImages(initialImages.slice(0, 16)); // Start with 16 images for 4 columns
  }, [albumId, albumGalleries]);

  const loadMoreImages = useCallback(async () => {
    setLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const allImages = albumGalleries[albumId] || albumGalleries.midnights;
    const currentCount = images.length;
    const nextBatch = allImages.slice(currentCount, currentCount + 8); // Load more images for horizontal scroll
    
    if (nextBatch.length > 0) {
      setImages(prev => [...prev, ...nextBatch]);
    } else {
      setHasMore(false);
    }
    setLoading(false);
  }, [albumId, albumGalleries, images.length]);

  // Intersection Observer for infinite loading (horizontal)
  const lastImageRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreImages();
      }
    }, {
      root: null,
      rootMargin: '0px 100px 0px 0px', // Trigger when 100px from the right edge
      threshold: 0.1
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore, loadMoreImages]);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="theme-gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Visual moments from the {albumId.replace('-', ' ')} era. Photos, music videos, and behind-the-scenes glimpses.
          </p>
        </motion.div>


        {/* Horizontal Masonry Gallery with Infinite Scroll */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory" style={{ 
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}>
            {/* Create masonry columns for horizontal layout */}
            {Array.from({ length: 4 }, (_, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4 min-w-0 snap-start">
                {images
                  .filter((_, index) => index % 4 === columnIndex)
                  .map((image, index) => {
                    const globalIndex = images.findIndex(img => img.id === image.id);
                    return (
                      <motion.div
                        key={image.id}
                        ref={globalIndex === images.length - 1 ? lastImageRef : null}
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: columnIndex * 0.1 + index * 0.05,
                          type: "spring",
                          stiffness: 100
                        }}
                        viewport={{ once: true }}
                        className="group cursor-pointer flex-shrink-0"
                        onClick={() => setSelectedImage(image.id)}
                        style={{ width: '280px' }}
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                          <Image
                            src={image.src}
                            alt={image.title}
                            width={image.width}
                            height={image.height}
                            className="w-full h-auto object-cover"
                            sizes="280px"
                            style={{
                              height: `${Math.floor(Math.random() * 150) + 200}px`,
                              objectFit: 'cover'
                            }}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                            <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                              <p className="text-xs text-gray-200">{image.description}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            ))}
            
            {/* Loading indicator column */}
            {loading && (
              <div className="flex flex-col justify-center items-center min-w-[100px] px-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <p className="text-textSecondary mt-2 text-sm whitespace-nowrap">Loading...</p>
              </div>
            )}
          </div>
          
          {/* Scroll indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface to-transparent pointer-events-none"></div>
          
          {/* Scroll hint */}
          <div className="text-center mt-4">
            <p className="text-textSecondary text-sm">
              Scroll horizontally to explore more images
              <svg className="inline w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </p>
          </div>
        </div>



        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedImage && (
                  <Image
                    src={images.find(img => img.id === selectedImage)?.src || ''}
                    alt={images.find(img => img.id === selectedImage)?.title || ''}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 90vw, 80vw"
                  />
                )}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
