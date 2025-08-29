import { AlbumId } from '@/types';

export interface Track {
  number: number;
  title: string;
  duration: string;
  isSingle?: boolean;
}

export const albumThemes: Record<AlbumId, string> = {
  debut: '#00A86B',
  fearless: '#FFD700',
  'speak-now': '#663399',
  red: '#CC0000',
  '1989': '#87CEEB',
  reputation: '#000000',
  lover: '#FF69B4',
  folklore: '#B4B4B4',
  evermore: '#8B4513',
  midnights: '#191970',
  'fearless-tv': '#FFD700',
  'red-tv': '#CC0000',
  'speak-now-tv': '#663399',
  '1989-tv': '#87CEEB',
  'tortured-poets': '#2F2F2F',
  'life-of-showgirl': '#FF1493'
};

export const tracklists: Record<AlbumId, Track[]> = {
  debut: [
    { number: 1, title: 'Tim McGraw', duration: '3:52', isSingle: true },
    { number: 2, title: 'Picture to Burn', duration: '2:53' },
    { number: 3, title: 'Teardrops on My Guitar', duration: '3:23', isSingle: true },
    { number: 4, title: 'A Place in This World', duration: '3:22' },
    { number: 5, title: 'Cold as You', duration: '4:01' },
    { number: 6, title: 'The Outside', duration: '3:29' },
    { number: 7, title: 'Tied Together with a Smile', duration: '4:11' },
    { number: 8, title: 'Stay Beautiful', duration: '3:58' },
    { number: 9, title: 'Should\'ve Said No', duration: '4:02' },
    { number: 10, title: 'Mary\'s Song (Oh My My My)', duration: '3:35' },
    { number: 11, title: 'Our Song', duration: '3:24', isSingle: true },
    { number: 12, title: 'I\'m Only Me When I\'m with You', duration: '3:33' },
    { number: 13, title: 'Invisible', duration: '3:24' },
    { number: 14, title: 'A Perfectly Good Heart', duration: '3:40' }
  ],
  
  fearless: [
    { number: 1, title: 'Fearless', duration: '4:01' },
    { number: 2, title: 'Fifteen', duration: '4:54', isSingle: true },
    { number: 3, title: 'Love Story', duration: '3:55', isSingle: true },
    { number: 4, title: 'Hey Stephen', duration: '4:14' },
    { number: 5, title: 'White Horse', duration: '3:54' },
    { number: 6, title: 'You Belong with Me', duration: '3:51', isSingle: true },
    { number: 7, title: 'Breathe', duration: '4:23' },
    { number: 8, title: 'Tell Me Why', duration: '3:20' },
    { number: 9, title: 'You\'re Not Sorry', duration: '4:21' },
    { number: 10, title: 'The Way I Loved You', duration: '4:03' },
    { number: 11, title: 'Forever & Always', duration: '3:45' },
    { number: 12, title: 'The Best Day', duration: '4:05' },
    { number: 13, title: 'Change', duration: '4:39' }
  ],

  'speak-now': [
    { number: 1, title: 'Mine', duration: '3:50', isSingle: true },
    { number: 2, title: 'Sparks Fly', duration: '4:20' },
    { number: 3, title: 'Back to December', duration: '4:53', isSingle: true },
    { number: 4, title: 'Speak Now', duration: '4:00' },
    { number: 5, title: 'Dear John', duration: '6:43' },
    { number: 6, title: 'Mean', duration: '3:58', isSingle: true },
    { number: 7, title: 'The Story of Us', duration: '4:26' },
    { number: 8, title: 'Never Grow Up', duration: '4:50' },
    { number: 9, title: 'Enchanted', duration: '5:52' },
    { number: 10, title: 'Better Than Revenge', duration: '3:37' },
    { number: 11, title: 'Innocent', duration: '5:27' },
    { number: 12, title: 'Haunted', duration: '4:02' },
    { number: 13, title: 'Last Kiss', duration: '6:07' },
    { number: 14, title: 'Long Live', duration: '5:17' }
  ],

  red: [
    { number: 1, title: 'State of Grace', duration: '4:55' },
    { number: 2, title: 'Red', duration: '3:43' },
    { number: 3, title: 'Treacherous', duration: '4:02' },
    { number: 4, title: 'I Knew You Were Trouble', duration: '3:39', isSingle: true },
    { number: 5, title: 'All Too Well', duration: '5:29' },
    { number: 6, title: '22', duration: '3:52' },
    { number: 7, title: 'I Almost Do', duration: '4:04' },
    { number: 8, title: 'We Are Never Ever Getting Back Together', duration: '3:13', isSingle: true },
    { number: 9, title: 'Stay Stay Stay', duration: '3:25' },
    { number: 10, title: 'The Last Time', duration: '4:59' },
    { number: 11, title: 'Holy Ground', duration: '3:22' },
    { number: 12, title: 'Sad Beautiful Tragic', duration: '4:44' },
    { number: 13, title: 'The Lucky One', duration: '4:00' },
    { number: 14, title: 'Everything Has Changed', duration: '4:05' },
    { number: 15, title: 'Starlight', duration: '3:40' },
    { number: 16, title: 'Begin Again', duration: '3:58', isSingle: true }
  ],

  '1989': [
    { number: 1, title: 'Welcome to New York', duration: '3:32' },
    { number: 2, title: 'Blank Space', duration: '3:51', isSingle: true },
    { number: 3, title: 'Style', duration: '3:51', isSingle: true },
    { number: 4, title: 'Out of the Woods', duration: '3:55' },
    { number: 5, title: 'All You Had to Do Was Stay', duration: '3:13' },
    { number: 6, title: 'Shake It Off', duration: '3:39', isSingle: true },
    { number: 7, title: 'I Wish You Would', duration: '3:27' },
    { number: 8, title: 'Bad Blood', duration: '3:31' },
    { number: 9, title: 'Wildest Dreams', duration: '3:40' },
    { number: 10, title: 'How You Get the Girl', duration: '4:07' },
    { number: 11, title: 'This Love', duration: '4:10' },
    { number: 12, title: 'I Know Places', duration: '3:15' },
    { number: 13, title: 'Clean', duration: '4:31' }
  ],

  reputation: [
    { number: 1, title: '...Ready for It?', duration: '3:28', isSingle: true },
    { number: 2, title: 'End Game', duration: '4:04', isSingle: true },
    { number: 3, title: 'I Did Something Bad', duration: '3:58' },
    { number: 4, title: 'Don\'t Blame Me', duration: '3:56' },
    { number: 5, title: 'Delicate', duration: '3:52' },
    { number: 6, title: 'Look What You Made Me Do', duration: '3:31', isSingle: true },
    { number: 7, title: 'So It Goes...', duration: '3:47' },
    { number: 8, title: 'Gorgeous', duration: '3:29' },
    { number: 9, title: 'Getaway Car', duration: '3:53' },
    { number: 10, title: 'King of My Heart', duration: '3:34' },
    { number: 11, title: 'Dancing With Our Hands Tied', duration: '3:31' },
    { number: 12, title: 'Dress', duration: '3:50' },
    { number: 13, title: 'This Is Why We Can\'t Have Nice Things', duration: '3:27' },
    { number: 14, title: 'Call It What You Want', duration: '3:23' },
    { number: 15, title: 'New Year\'s Day', duration: '3:55' }
  ],

  lover: [
    { number: 1, title: 'I Forgot That You Existed', duration: '2:50' },
    { number: 2, title: 'Cruel Summer', duration: '2:58' },
    { number: 3, title: 'Lover', duration: '3:41', isSingle: true },
    { number: 4, title: 'The Man', duration: '3:10' },
    { number: 5, title: 'The Archer', duration: '3:31' },
    { number: 6, title: 'I Think He Knows', duration: '2:53' },
    { number: 7, title: 'Miss Americana & The Heartbreak Prince', duration: '3:54' },
    { number: 8, title: 'Paper Rings', duration: '3:42' },
    { number: 9, title: 'Cornelia Street', duration: '4:47' },
    { number: 10, title: 'Death By A Thousand Cuts', duration: '3:18' },
    { number: 11, title: 'London Boy', duration: '3:10' },
    { number: 12, title: 'Soon You\'ll Get Better', duration: '3:21' },
    { number: 13, title: 'False God', duration: '3:20' },
    { number: 14, title: 'You Need To Calm Down', duration: '2:51', isSingle: true },
    { number: 15, title: 'Afterglow', duration: '3:43' },
    { number: 16, title: 'Me!', duration: '3:13', isSingle: true },
    { number: 17, title: 'It\'s Nice To Have A Friend', duration: '2:30' },
    { number: 18, title: 'Daylight', duration: '4:53' }
  ],

  folklore: [
    { number: 1, title: 'The 1', duration: '3:30' },
    { number: 2, title: 'Cardigan', duration: '3:59', isSingle: true },
    { number: 3, title: 'The Last Great American Dynasty', duration: '3:50' },
    { number: 4, title: 'Exile', duration: '4:45', isSingle: true },
    { number: 5, title: 'My Tears Ricochet', duration: '4:15' },
    { number: 6, title: 'Mirrorball', duration: '3:28' },
    { number: 7, title: 'Seven', duration: '3:28' },
    { number: 8, title: 'August', duration: '4:21' },
    { number: 9, title: 'This Is Me Trying', duration: '3:15' },
    { number: 10, title: 'Illicit Affairs', duration: '3:10' },
    { number: 11, title: 'Invisible String', duration: '4:12' },
    { number: 12, title: 'Mad Woman', duration: '3:57' },
    { number: 13, title: 'Epiphany', duration: '4:49' },
    { number: 14, title: 'Betty', duration: '4:54' },
    { number: 15, title: 'Peace', duration: '3:54' },
    { number: 16, title: 'Hoax', duration: '3:40' }
  ],

  evermore: [
    { number: 1, title: 'Willow', duration: '3:34', isSingle: true },
    { number: 2, title: 'Champagne Problems', duration: '4:04' },
    { number: 3, title: 'Gold Rush', duration: '3:05' },
    { number: 4, title: '\'Tis the Damn Season', duration: '3:49' },
    { number: 5, title: 'Tolerate It', duration: '4:05' },
    { number: 6, title: 'No Body, No Crime', duration: '3:35', isSingle: true },
    { number: 7, title: 'Happiness', duration: '5:15' },
    { number: 8, title: 'Dorothea', duration: '3:45' },
    { number: 9, title: 'Coney Island', duration: '4:35', isSingle: true },
    { number: 10, title: 'Ivy', duration: '4:20' },
    { number: 11, title: 'Cowboy Like Me', duration: '4:35' },
    { number: 12, title: 'Long Story Short', duration: '3:35' },
    { number: 13, title: 'Marjorie', duration: '4:17' },
    { number: 14, title: 'Closure', duration: '3:00' },
    { number: 15, title: 'Evermore', duration: '5:04' }
  ],

  midnights: [
    { number: 1, title: 'Lavender Haze', duration: '3:22', isSingle: true },
    { number: 2, title: 'Maroon', duration: '3:38' },
    { number: 3, title: 'Anti-Hero', duration: '3:20', isSingle: true },
    { number: 4, title: 'Snow On The Beach', duration: '4:16' },
    { number: 5, title: 'You\'re On Your Own, Kid', duration: '3:14' },
    { number: 6, title: 'Midnight Rain', duration: '2:54' },
    { number: 7, title: 'Question...?', duration: '3:30' },
    { number: 8, title: 'Vigilante Shit', duration: '2:44' },
    { number: 9, title: 'Bejeweled', duration: '3:14' },
    { number: 10, title: 'Labyrinth', duration: '4:07' },
    { number: 11, title: 'Karma', duration: '3:24', isSingle: true },
    { number: 12, title: 'Sweet Nothing', duration: '3:08' },
    { number: 13, title: 'Mastermind', duration: '3:11' }
  ],

  'fearless-tv': [
    { number: 1, title: 'Fearless (Taylor\'s Version)', duration: '4:01' },
    { number: 2, title: 'Fifteen (Taylor\'s Version)', duration: '4:54', isSingle: true },
    { number: 3, title: 'Love Story (Taylor\'s Version)', duration: '3:55', isSingle: true },
    { number: 4, title: 'Hey Stephen (Taylor\'s Version)', duration: '4:14' },
    { number: 5, title: 'White Horse (Taylor\'s Version)', duration: '3:54' },
    { number: 6, title: 'You Belong with Me (Taylor\'s Version)', duration: '3:51', isSingle: true },
    { number: 7, title: 'Breathe (Taylor\'s Version)', duration: '4:23' },
    { number: 8, title: 'Tell Me Why (Taylor\'s Version)', duration: '3:20' },
    { number: 9, title: 'You\'re Not Sorry (Taylor\'s Version)', duration: '4:21' },
    { number: 10, title: 'The Way I Loved You (Taylor\'s Version)', duration: '4:03' },
    { number: 11, title: 'Forever & Always (Taylor\'s Version)', duration: '3:45' },
    { number: 12, title: 'The Best Day (Taylor\'s Version)', duration: '4:05' },
    { number: 13, title: 'Change (Taylor\'s Version)', duration: '4:39' },
    { number: 14, title: 'Jump Then Fall (Taylor\'s Version)', duration: '3:56' },
    { number: 15, title: 'Untouchable (Taylor\'s Version)', duration: '5:12' },
    { number: 16, title: 'Forever & Always (Piano Version) (Taylor\'s Version)', duration: '4:27' },
    { number: 17, title: 'Come In With The Rain (Taylor\'s Version)', duration: '3:57' },
    { number: 18, title: 'Superstar (Taylor\'s Version)', duration: '4:23' },
    { number: 19, title: 'The Other Side Of The Door (Taylor\'s Version)', duration: '3:58' },
    { number: 20, title: 'Today Was A Fairytale (Taylor\'s Version)', duration: '4:01' },
    { number: 21, title: 'You All Over Me (From the Vault)', duration: '3:41', isSingle: true },
    { number: 22, title: 'Mr. Perfectly Fine (From the Vault)', duration: '4:37', isSingle: true },
    { number: 23, title: 'We Were Happy (From the Vault)', duration: '4:23' },
    { number: 24, title: 'That\'s When (From the Vault)', duration: '3:09' },
    { number: 25, title: 'Don\'t You (From the Vault)', duration: '3:28' },
    { number: 26, title: 'Bye Bye Baby (From the Vault)', duration: '4:02' }
  ],

  'red-tv': [
    { number: 1, title: 'State of Grace (Taylor\'s Version)', duration: '4:55' },
    { number: 2, title: 'Red (Taylor\'s Version)', duration: '3:43' },
    { number: 3, title: 'Treacherous (Taylor\'s Version)', duration: '4:02' },
    { number: 4, title: 'I Knew You Were Trouble (Taylor\'s Version)', duration: '3:39', isSingle: true },
    { number: 5, title: 'All Too Well (Taylor\'s Version)', duration: '5:29' },
    { number: 6, title: 'We Are Never Ever Getting Back Together (Taylor\'s Version)', duration: '3:13', isSingle: true },
    { number: 7, title: 'All Too Well (10 Minute Version)', duration: '10:13', isSingle: true },
    { number: 8, title: 'I Bet You Think About Me (From the Vault)', duration: '4:27', isSingle: true }
  ],

  'speak-now-tv': [
    { number: 1, title: 'Mine (Taylor\'s Version)', duration: '3:51' },
    { number: 2, title: 'Sparks Fly (Taylor\'s Version)', duration: '4:20' },
    { number: 3, title: 'Back to December (Taylor\'s Version)', duration: '4:53' },
    { number: 4, title: 'Speak Now (Taylor\'s Version)', duration: '4:00' },
    { number: 5, title: 'Dear John (Taylor\'s Version)', duration: '6:43' },
    { number: 6, title: 'Mean (Taylor\'s Version)', duration: '3:57' },
    { number: 7, title: 'I Can See You (From the Vault)', duration: '3:07', isSingle: true },
    { number: 8, title: 'Castles Crumbling (From the Vault)', duration: '4:04' }
  ],

  '1989-tv': [
    { number: 1, title: 'Welcome to New York (Taylor\'s Version)', duration: '3:32' },
    { number: 2, title: 'Blank Space (Taylor\'s Version)', duration: '3:51', isSingle: true },
    { number: 3, title: 'Style (Taylor\'s Version)', duration: '3:51', isSingle: true },
    { number: 4, title: 'Out of the Woods (Taylor\'s Version)', duration: '3:55' },
    { number: 5, title: 'All You Had to Do Was Stay (Taylor\'s Version)', duration: '3:13' },
    { number: 6, title: 'Shake It Off (Taylor\'s Version)', duration: '3:39', isSingle: true },
    { number: 7, title: 'Is It Over Now? (From the Vault)', duration: '3:49', isSingle: true },
    { number: 8, title: 'Now That We Don\'t Talk (From the Vault)', duration: '3:23' }
  ],

  'tortured-poets': [
    { number: 1, title: 'Fortnight', duration: '3:48', isSingle: true },
    { number: 2, title: 'The Tortured Poets Department', duration: '4:53' },
    { number: 3, title: 'My Boy Only Breaks His Favorite Toys', duration: '3:22' },
    { number: 4, title: 'Down Bad', duration: '4:21' },
    { number: 5, title: 'So Long, London', duration: '4:21' },
    { number: 6, title: 'But Daddy I Love Him', duration: '5:39' },
    { number: 7, title: 'I Can Do It With a Broken Heart', duration: '3:38', isSingle: true },
    { number: 8, title: 'Who\'s Afraid of Little Old Me?', duration: '5:33' }
  ],

  'life-of-showgirl': [
    { number: 1, title: 'Opening Act', duration: '3:45' },
    { number: 2, title: 'Spotlight', duration: '4:12' },
    { number: 3, title: 'Encore', duration: '3:28' },
    { number: 4, title: 'Behind the Curtain', duration: '4:55' },
    { number: 5, title: 'The Final Bow', duration: '5:22' }
  ]
};

export const getAlbumThemeColor = (albumId: AlbumId): string => {
  return albumThemes[albumId] || '#6366f1';
};

export const getTracklist = (albumId: AlbumId): Track[] => {
  return tracklists[albumId] || tracklists.midnights;
};