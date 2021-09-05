// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Theo',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '37.774929',
  weatherLongitude: '-122.419418',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      id: '3',
      name: 'Twitch',
      icon: 'trello',
      link: 'https://twitch.tv',
    },
    {
      id: '4',
      name: 'Firefly',
      icon: 'briefcase',
      link: 'https://kingsmead.fireflycloud.net',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Scoresaber',
        link: 'https://scoresaber.com/u/76561198846717696',
      },
      {
        name: 'Beat Saviour',
        link: 'https://www.beatsavior.io/#/scorescomparator',
      },
      {
        name: 'Map Finder',
        link: 'https://scoresaber.balibalo.xyz/peepee',
      },
      {
        name: 'Scoresaber Reloaded',
        link: 'https://ssr.motzel.dev/u/76561198846717696/',
      },
    ],
    secondList: [
      {
        name: 'Rain',
        link: 'http://rain.thecomicseries.com/',
      },
      {
        name: 'Goodbyetohalos',
        link: 'https://goodbyetohalos.com',
      },
      {
        name: 'Webtoon',
        link: 'https://www.webtoons.com/en/favorite',
      },
      {
        name: 'Library',
        link: 'https://somersetuk.borrowbox.com/home/my-loans',
      },
    ],
  },
};
