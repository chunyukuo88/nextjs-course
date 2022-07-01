import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../data/dummy-data';

export default function HomePage(){
 const featuredEvents = getFeaturedEvents();

  return (
    <h1>
      <EventList events={featuredEvents}/>
    </h1>
  )
}