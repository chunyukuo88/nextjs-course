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
