import EventItem from './event-item';

export default function EventList(props) {
   const { events } = props;

   return (
        <ul>
          {events.map(event =>
            (
              <EventItem
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                image={event.image}
                location={event.location}
              />
            )
          )}
        </ul>
   ); 
}
