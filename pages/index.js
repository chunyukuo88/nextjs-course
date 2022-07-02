import { getAllEvents } from '../data/dummy-data';
import EventList from '../components/events/event-list';
import EventsSearch from '../components/events/events-search';

export default function HomePage(){
 const allEvents = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList events={allEvents} />
    </>
  )
}