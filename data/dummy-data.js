const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Take a trip down under!',
    description:
      'Experience an interactive and energetic fusion of Australian didgeridoo music, culture, puppetry, comedy, character building, storytelling, and audience movement.',
    location: 'Westerville Library',
    date: '2022-07-09',
    image: 'images/didgeridoo.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'What\'s In Your Water',
    description:
      'Learn key facts about lead in your drinking water. Water pipes can be made of different materials. Learn how to identify pipes in your home and receive a water testing strip.\n' +
      '\n' +
      'Register now to claim your free kit. Available for pickup at the desk on the second floor beginning July 13 at 9am.',
    location: 'Westerville Library',
    date: '2022-07-13',
    image: 'images/introvert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: '4th Friday on the Lawn: Percussion Party',
    description:
      'Take a musical trip with different traditional rhythms, songs, and percussion instruments - from drums to boomwhackers - led by Joanie Calem while in Uptown Westerville for 4th Friday.',
    location: 'Westerville Library',
    date: '2022-07-22',
    image: 'images/guitar.jpg',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'Website Project Launch -- Free Code Camp Columbus',
    description:
      'Meet up with fellow Free Code Campers as we launch an improvement project of our React.js website. We will have a backlog of work and developers with React experience available to get you started. This is the perfect chance to learn while contributing to open source software. Coding newbies welcome and encouraged.',
    location: '1733 W Lane Ave',
    date: '2022-07-10',
    image: 'images/fcc.jpg',
    isFeatured: true,
  },
  {
    id: 'e5',
    title: 'Japanese Festival',
    description:
      'Matsuricon, one of Columbus\' local anime conventions is returning this summer August 12-14 at the down town Hyatt/Greater Columbus Convention center.',
    location: 'Columbus Convention Center',
    date: '2022-08-12',
    image: 'images/fuji.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    const result = eventDate.getFullYear() === +year && eventDate.getMonth() === +month - 1;
    return result;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
