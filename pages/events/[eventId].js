import { useRouter } from 'next/router';
import { getEventById } from '../../data/dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

export default function SpecificEvent(){
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  return (event)
    ? Event(event)
    : NoEventsFound()
}

const Event = (event) => (
  <>
    <EventSummary title={event.title}/>
    <EventLogistics
      date={event.date}
      location={event.location}
      image={event.image}
      imageAlt={event.title}
    />
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
  </>
);

const NoEventsFound = () => (
  <>
    <ErrorAlert>No event found for this particular query.</ErrorAlert>
    <div className='center'>
      <Button link='/events' >Back to All Events</Button>
    </div>
  </>
);