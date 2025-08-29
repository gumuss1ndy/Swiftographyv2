'use client';

import { motion } from 'motion/react';
import { useTheme } from '@/lib/theme-context';
import { albumThemes } from '@/lib/themes';
import { AlbumId } from '@/types';

interface AlbumOverviewProps {
  albumId: AlbumId;
}

export default function AlbumOverview({ albumId }: AlbumOverviewProps) {
  const { currentTheme } = useTheme();
  const album = albumThemes[albumId];

  if (!album) {
    return null;
  }

  // Enhanced album-specific information
  const albumInfo = {
    debut: {
      genre: 'Country',
      releaseDate: 'October 24, 2006',
      producer: 'Nathan Chapman',
      label: 'Big Machine Records',
      awards: ['Country Music Association Horizon Award', 'Academy of Country Music Top New Female Vocalist'],
      chartAchievements: ['#5 on Billboard 200', '#1 on Top Country Albums', 'Platinum certification'],
      singles: ['Tim McGraw', 'Teardrops on My Guitar', 'Our Song'],
      description: 'Taylor Swift\'s self-titled debut album introduced the world to her unique storytelling style and country roots. Released when she was just 16, this album showcased her ability to write relatable songs about love, heartbreak, and growing up.',
      highlights: ['First album to showcase her songwriting talent', 'Established her country music foundation', 'Featured hit singles that resonated with young audiences'],
      vibe: 'A coming-of-age country album that captures the innocence and vulnerability of teenage years, with heartfelt lyrics and acoustic melodies that would become Taylor\'s signature sound.'
    },
    fearless: {
      genre: 'Country Pop',
      releaseDate: 'November 11, 2008',
      producer: 'Nathan Chapman',
      label: 'Big Machine Records',
      awards: ['Grammy Album of the Year', 'Grammy Best Country Album', 'Country Music Association Album of the Year'],
      chartAchievements: ['#1 on Billboard 200', '#1 on Top Country Albums', '7x Platinum certification'],
      singles: ['Love Story', 'You Belong with Me', 'Fifteen'],
      description: 'Fearless marked Taylor\'s breakthrough into mainstream success. This album won Album of the Year at the Grammy Awards, making her the youngest artist to receive this honor. It perfectly blended country storytelling with pop sensibilities.',
      highlights: ['Grammy Album of the Year winner', 'International breakthrough success', 'Defined the country-pop crossover sound'],
      vibe: 'A romantic and optimistic album that captures the magic of first love and teenage dreams, blending country authenticity with pop accessibility to create timeless anthems.'
    },
    'speak-now': {
      genre: 'Country Pop',
      releaseDate: 'October 25, 2010',
      producer: 'Nathan Chapman',
      label: 'Big Machine Records',
      awards: ['Grammy Best Country Song', 'Country Music Association Song of the Year'],
      chartAchievements: ['#1 on Billboard 200', '#1 on Top Country Albums', '6x Platinum certification'],
      singles: ['Mine', 'Back to December', 'Mean'],
      description: 'Speak Now was entirely self-written by Taylor, showcasing her growth as a songwriter. The album explores themes of love, heartbreak, and speaking up for oneself, with each song telling a distinct story.',
      highlights: ['Entirely self-written album', 'Personal storytelling at its finest', 'Continued Grammy success'],
      vibe: 'A deeply personal album where every song tells a specific story from Taylor\'s life, showcasing her growth as both a songwriter and storyteller with emotional depth and maturity.'
    },
    red: {
      genre: 'Country Pop',
      releaseDate: 'October 22, 2012',
      producer: 'Jeff Bhasker, Dan Wilson, Butch Walker',
      label: 'Big Machine Records',
      awards: ['Grammy nominations for Album of the Year', 'Country Music Association nominations'],
      chartAchievements: ['#1 on Billboard 200', '#1 on Top Country Albums', '7x Platinum certification'],
      singles: ['We Are Never Ever Getting Back Together', 'Begin Again', 'I Knew You Were Trouble'],
      description: 'Red represents Taylor\'s transition period, blending country with pop and rock influences. The album explores the complexity of relationships and emotions, with its title representing the intense feelings of love and heartbreak.',
      highlights: ['Transitional album showing artistic growth', 'Explored new musical directions', 'Critical and commercial success'],
      vibe: 'An emotional rollercoaster of an album that captures the intensity of love and heartbreak, blending country roots with pop experimentation to create a sound that\'s both familiar and innovative.'
    },
    '1989': {
      genre: 'Pop',
      releaseDate: 'October 27, 2014',
      producer: 'Max Martin, Shellback, Jack Antonoff',
      label: 'Big Machine Records',
      awards: ['Grammy Album of the Year', 'Grammy Best Pop Vocal Album', 'American Music Award Album of the Year'],
      chartAchievements: ['#1 on Billboard 200', '9x Platinum certification', 'Record-breaking first week sales'],
      singles: ['Shake It Off', 'Blank Space', 'Style'],
      description: '1989 marked Taylor\'s complete transition to pop music. Inspired by 1980s synth-pop, this album became a cultural phenomenon and solidified her status as a global pop superstar.',
      highlights: ['Complete pop transformation', 'Cultural phenomenon', 'Multiple Grammy wins'],
      vibe: 'A bold reinvention that captures the energy and optimism of 1980s pop while maintaining Taylor\'s signature storytelling, creating an album that\'s both nostalgic and forward-thinking.'
    },
    reputation: {
      genre: 'Pop',
      releaseDate: 'November 10, 2017',
      producer: 'Max Martin, Shellback, Jack Antonoff',
      label: 'Big Machine Records',
      awards: ['American Music Award Favorite Pop/Rock Album', 'Billboard Music Award Top Album'],
      chartAchievements: ['#1 on Billboard 200', '3x Platinum certification', 'Largest first week sales for a female artist'],
      singles: ['Look What You Made Me Do', '...Ready for It?', 'End Game'],
      description: 'Reputation explores themes of media scrutiny, love, and self-discovery. The album features a darker, more electronic sound and addresses the public perception of Taylor during this period.',
      highlights: ['Dark, electronic-influenced sound', 'Addressed media scrutiny', 'Commercial success despite controversy'],
      vibe: 'A dark and defiant album that addresses public perception and media scrutiny while exploring themes of love and redemption, featuring electronic production and bold lyrical statements.'
    },
    lover: {
      genre: 'Pop',
      releaseDate: 'August 23, 2019',
      producer: 'Jack Antonoff, Joel Little, Louis Bell',
      label: 'Republic Records',
      awards: ['American Music Award nominations', 'Billboard Music Award nominations'],
      chartAchievements: ['#1 on Billboard 200', '2x Platinum certification', 'Global chart success'],
      singles: ['Me!', 'You Need to Calm Down', 'Lover'],
      description: 'Lover represents a return to romantic themes and a more colorful, optimistic sound. The album celebrates love in all its forms and showcases Taylor\'s happiness and personal growth.',
      highlights: ['Return to romantic themes', 'Colorful, optimistic sound', 'Celebration of love and happiness'],
      vibe: 'A vibrant and romantic album that celebrates love in all its forms, featuring bright colors, optimistic themes, and a return to the emotional storytelling that made Taylor famous.'
    },
    folklore: {
      genre: 'Indie Folk',
      releaseDate: 'July 24, 2020',
      producer: 'Aaron Dessner, Jack Antonoff',
      label: 'Republic Records',
      awards: ['Grammy Album of the Year', 'Grammy Best Folk Album', 'American Music Award Favorite Pop/Rock Album'],
      chartAchievements: ['#1 on Billboard 200', '2x Platinum certification', 'Surprise release success'],
      singles: ['Cardigan', 'Exile', 'The 1'],
      description: 'Folklore was a surprise release written and recorded during the COVID-19 pandemic. This indie folk album showcases Taylor\'s storytelling abilities and represents a departure from her usual pop sound.',
      highlights: ['Surprise pandemic release', 'Indie folk departure', 'Grammy Album of the Year winner'],
      vibe: 'A dreamy and introspective album that weaves together fictional stories and personal reflections, featuring atmospheric production and rich storytelling that transports listeners to another world.'
    },
    evermore: {
      genre: 'Indie Folk',
      releaseDate: 'December 11, 2020',
      producer: 'Aaron Dessner, Jack Antonoff',
      label: 'Republic Records',
      awards: ['Grammy nominations', 'Critical acclaim'],
      chartAchievements: ['#1 on Billboard 200', 'Platinum certification', 'Sister album success'],
      singles: ['Willow', 'No Body, No Crime', 'Coney Island'],
      description: 'Evermore serves as a sister album to Folklore, continuing the indie folk sound and storytelling approach. The album explores themes of love, loss, and the passage of time.',
      highlights: ['Sister album to Folklore', 'Continued indie folk exploration', 'Rich storytelling and character development'],
      vibe: 'A continuation of the Folklore universe with deeper storytelling and more complex character development, featuring the same atmospheric sound but with even richer narratives and emotional depth.'
    },
    'fearless-tv': {
      genre: 'Country Pop',
      releaseDate: 'April 9, 2021',
      producer: 'Christopher Rowe',
      label: 'Republic Records',
      awards: ['Grammy nominations', 'Critical acclaim for re-recording'],
      chartAchievements: ['#1 on Billboard 200', 'Platinum certification', 'Re-recording success'],
      singles: ['Love Story (Taylor\'s Version)', 'You Belong with Me (Taylor\'s Version)', 'Mr. Perfectly Fine'],
      description: 'Fearless (Taylor\'s Version) marks the beginning of Taylor\'s journey to re-record her first six albums. This re-recording includes all the original songs plus six new "From the Vault" tracks.',
      highlights: ['First re-recorded album', 'Six new "From the Vault" tracks', 'Maintained original magic while improving production'],
      vibe: 'A faithful reimagining of the beloved original that maintains the magic and nostalgia while adding new layers of maturity and six previously unreleased tracks that enhance the album\'s legacy.'
    },
    'red-tv': {
      genre: 'Country Pop',
      releaseDate: 'November 12, 2021',
      producer: 'Christopher Rowe, Aaron Dessner, Jack Antonoff',
      label: 'Republic Records',
      awards: ['Grammy nominations', 'Critical acclaim'],
      chartAchievements: ['#1 on Billboard 200', 'Platinum certification', 'Enhanced re-recording'],
      singles: ['All Too Well (10 Minute Version)', 'I Bet You Think About Me', 'Message in a Bottle'],
      description: 'Red (Taylor\'s Version) expands the original album with nine new "From the Vault" tracks, including the highly anticipated 10-minute version of "All Too Well."',
      highlights: ['Nine new "From the Vault" tracks', '10-minute version of "All Too Well"', 'Enhanced production and vocals'],
      vibe: 'An expanded version of the emotional masterpiece that adds nine new tracks and the legendary 10-minute version of "All Too Well," deepening the album\'s emotional impact and storytelling.'
    },
    midnights: {
      genre: 'Pop',
      releaseDate: 'October 21, 2022',
      producer: 'Jack Antonoff',
      label: 'Republic Records',
      awards: ['Grammy nominations', 'American Music Awards', 'Billboard Music Awards'],
      chartAchievements: ['#1 on Billboard 200', 'Record-breaking first week sales', 'Global chart domination'],
      singles: ['Anti-Hero', 'Lavender Haze', 'Karma'],
      description: 'Midnights explores the thoughts and feelings that keep us awake at night. The album features a return to pop with electronic elements and showcases Taylor\'s introspective songwriting.',
      highlights: ['Conceptual album about sleepless nights', 'Return to pop with electronic elements', 'Record-breaking commercial success'],
      vibe: 'A conceptual album that captures the intimate thoughts and feelings of sleepless nights, featuring dreamy production and introspective lyrics that explore the complexities of modern life and relationships.'
    },
    'speak-now-tv': {
      genre: 'Country Pop',
      releaseDate: 'July 7, 2023',
      producer: 'Christopher Rowe, Aaron Dessner, Jack Antonoff',
      label: 'Republic Records',
      awards: ['Critical acclaim', 'Fan appreciation'],
      chartAchievements: ['#1 on Billboard 200', 'Re-recording success', 'Enhanced production'],
      singles: ['I Can See You', 'Castles Crumbling', 'When Emma Falls in Love'],
      description: 'Speak Now (Taylor\'s Version) includes six new "From the Vault" tracks, expanding on the original album\'s themes of love, heartbreak, and speaking up.',
      highlights: ['Six new "From the Vault" tracks', 'Enhanced production quality', 'Maintained original emotional impact'],
      vibe: 'A reimagined version of the deeply personal album that maintains the emotional intensity and storytelling while adding six new tracks that enhance the album\'s narrative and emotional depth.'
    },
    '1989-tv': {
      genre: 'Pop',
      releaseDate: 'October 27, 2023',
      producer: 'Christopher Rowe, Jack Antonoff',
      label: 'Republic Records',
      awards: ['Critical acclaim', 'Commercial success'],
      chartAchievements: ['#1 on Billboard 200', 'Re-recording success', 'Enhanced pop production'],
      singles: ['Is It Over Now?', 'Now That We Don\'t Talk', 'Say Don\'t Go'],
      description: '1989 (Taylor\'s Version) includes five new "From the Vault" tracks, expanding the pop masterpiece that defined an era of Taylor\'s career.',
      highlights: ['Five new "From the Vault" tracks', 'Enhanced pop production', 'Continued re-recording success'],
      vibe: 'A reimagined version of the pop masterpiece that maintains the energy and optimism of the original while adding five new tracks that enhance the album\'s legacy and showcase Taylor\'s continued growth as an artist.'
    },
    'tortured-poets': {
      genre: 'Pop',
      releaseDate: 'April 19, 2024',
      producer: 'Jack Antonoff, Aaron Dessner',
      label: 'Republic Records',
      awards: ['Critical acclaim', 'Commercial success'],
      chartAchievements: ['#1 on Billboard 200', 'Record-breaking success', 'Global chart domination'],
      singles: ['Fortnight', 'Down Bad', 'I Can Do It With a Broken Heart'],
      description: 'The Tortured Poets Department explores themes of heartbreak, healing, and the complexities of modern relationships. This album showcases Taylor\'s most vulnerable and introspective songwriting yet.',
      highlights: ['Deeply personal songwriting', 'Exploration of modern relationships', 'Collaboration with Post Malone'],
      vibe: 'A deeply personal and introspective album that explores the complexities of modern relationships, heartbreak, and healing with some of Taylor\'s most vulnerable and poetic lyrics yet.'
    },
    'life-of-showgirl': {
      genre: 'Pop',
      releaseDate: 'October 3, 2025',
      producer: 'TBD',
      label: 'Republic Records',
      awards: ['Upcoming'],
      chartAchievements: ['Anticipated'],
      singles: ['TBD'],
      description: 'The Life of a Showgirl is Taylor\'s upcoming album, set to be released on October 3, 2025. Details about this album are still emerging.',
      highlights: ['Upcoming release', 'New era of Taylor\'s music', 'Anticipated by fans worldwide'],
      vibe: 'An upcoming album that promises to explore new themes and sounds, continuing Taylor\'s evolution as an artist and storyteller.'
    }
  };

  const info = albumInfo[albumId] || albumInfo.midnights;

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
            <span className="theme-gradient-text">Album Overview</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Discover the story behind {album.name} and its impact on Taylor Swift&apos;s musical journey.
          </p>
        </motion.div>

        {/* Stats Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {/* Genre Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Genre</h3>
              <p className="text-textSecondary">{info.genre}</p>
            </div>
          </motion.div>

          {/* Release Date Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Release Date</h3>
              <p className="text-textSecondary">{info.releaseDate}</p>
            </div>
          </motion.div>

          {/* Awards Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Awards</h3>
              <p className="text-textSecondary">{info.awards.length} Major Awards</p>
            </div>
          </motion.div>

          {/* Producers Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Producers</h3>
              <p className="text-textSecondary">{info.producer}</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Album Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-text">
              About {album.name}
            </h3>
            
            <div className="space-y-4 text-textSecondary leading-relaxed">
              <p>{info.description}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text">Key Highlights</h4>
              <ul className="space-y-2">
                {info.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ background: currentTheme.light.primary }}
                    />
                    <span className="text-textSecondary">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Album Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-text">
              Album Details
            </h3>
            
            <div className="bg-background rounded-xl p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-text mb-2">Chart Achievements</h4>
                <div className="space-y-2">
                  {info.chartAchievements.map((achievement, index) => (
                    <p key={index} className="text-textSecondary text-sm">• {achievement}</p>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-text mb-2">Singles</h4>
                <div className="flex flex-wrap gap-2">
                  {info.singles.map((single, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {single}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-text mb-2">The Vibe</h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {info.vibe}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}