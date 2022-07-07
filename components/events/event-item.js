import classes from './event-item.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

export default function EventItem(props){
  const { title, image, date, location, id } = props;

  const humanReadableDate = getHumanReadableDate(date);
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt='Preview image of the event.' />
      <div className={classes.content}>
          <section>
            <h2>{title}></h2>
            <div className={classes.date}>
              <DateIcon></DateIcon>
              <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
              <AddressIcon></AddressIcon>
              <address>{formattedAddress}</address>
            </div>
          </section>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span>Explore Event</span>
              <span className={classes.icon}><ArrowRightIcon/></span>
            </Button>
          </div>
      </div>
    </li>
  );
}

const getHumanReadableDate = (date) => {
  const adjustedDate = new Date(date);
  adjustedDate.setDate(adjustedDate.getDate() + 1);
  const humanReadableDate = new Date(adjustedDate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return humanReadableDate;
}
