import { useRouter } from 'next/router';
import { monthStrings } from '../../common/constants';
import ResultsTitle from '../../components/events/results-title';
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../data/dummy-data';


export default function SpecificEvent(){
  const route = useRouter();
  const filterData = route.query.slug;
  return (filterData)
    ? WithFilterData(filterData)
    : WithoutFilterData();
}


const WithoutFilterData = () => (
  <div className='center'>Loading...</div>
);

const WithFilterData = (filterData) => {
  const [filteredYear, filteredMonth] = [filterData[0], filterData[1]];
  return (queryParamsAreInvalid(filteredMonth, filteredYear))
    ? InvalidUrlResponse()
    : EventsForTheMonth(filteredMonth, filteredYear);
};

const queryParamsAreInvalid = (month, year) => {
  const currentYear = new Date().getFullYear();
  const queryParamsAreNotNumbers = (isNaN(month) || isNaN(year));
  const monthOrYearOutOfRange = (month < 1 || month > 12 || year < currentYear || year > currentYear + 1);
  return (queryParamsAreNotNumbers || monthOrYearOutOfRange);
};

const InvalidUrlResponse = () => (
  <h1>Invalid URL. Check URL query parameters</h1>
);

const EventsForTheMonth = (filteredMonth, filteredYear) => {
  const date = new Date(filteredYear, (+filteredMonth - 1).toString());
  const events = getFilteredEvents({ year: filteredYear, month: filteredMonth});
  return (
    <div>
      <ResultsTitle date={date} />
      <h1>Events for {monthStrings[+filteredMonth - 1]} {filteredYear}:</h1>
      <div>Here they be:</div>
      <EventList events={events} />
    </div>
  );
}
