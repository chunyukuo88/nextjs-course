import { useRouter } from 'next/router';
import { monthStrings } from '../../common/constants';

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

  return (queryParamsNotValidMonthAndYear(filteredMonth, filteredYear))
    ? InvalidUrlResponse()
    : EventsForTheMonth(filteredMonth, filteredYear);
};

const queryParamsNotValidMonthAndYear = (month, year) => {
  const currentYear = new Date().getFullYear();
  const queryParamsAreNotNumbers = (isNaN(month) || isNaN(year));
  const monthOrYearOutOfRange = (month < 1 || month > 12 || year < currentYear || year > currentYear + 1);
  return (queryParamsAreNotNumbers || monthOrYearOutOfRange);
};

const InvalidUrlResponse = () => (
  <h1>Invalid URL. Check URL query parameters</h1>
);

const EventsForTheMonth = (filteredMonth, filteredYear) => (
  <div>
    <h1>Events for {monthStrings[+filteredMonth]} {filteredYear}:</h1>
    <div>Here they be:</div>
  </div>
);