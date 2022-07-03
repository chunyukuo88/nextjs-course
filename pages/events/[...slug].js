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

  return (
    <div>
      <h1>Events for {monthStrings[+filteredMonth]} {filteredYear}:</h1>
      <div>Here they be:</div>
    </div>
  );
}
