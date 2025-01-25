// import { Link } from 'react-router-dom';

// const PRODUCTS = [
//   { id: 'p1', title: 'Product 1' },
//   { id: 'p2', title: 'Product 2' },
//   { id: 'p3', title: 'Product 3' },
// ];

// function EventsPage() {
//   return (
//     <>
//       <p>EventsPage</p>
//       <ul>
//         {PRODUCTS.map((product) => (
//           <li key={product.id}>
//             {/* <Link to={`/events/${product.id}`}>{product.title}</Link> */}
//             {/* 상대경로로 표기가능, 현재 활성화 되어있는 라우터에 첨부 */}
//             <Link to={product.id}>{product.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default EventsPage;

// - - - boilerPlate

// import { useEffect, useState } from 'react';

// import EventsList from '../components/EventsList';

// function EventsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [fetchedEvents, setFetchedEvents] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     async function fetchEvents() {
//       setIsLoading(true);
//       const response = await fetch('http://localhost:8080/events');

//       if (!response.ok) {
//         setError('Fetching events failed.');
//       } else {
//         const resData = await response.json();
//         setFetchedEvents(resData.events);
//       }
//       setIsLoading(false);
//     }

//     fetchEvents();
//   }, []);
//   return (
//     <>
//       <div style={{ textAlign: 'center' }}>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//       </div>
//       {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
//     </>
//   );
// }

// export default EventsPage;

import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {
  const data = useLoaderData();

  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function EventLoader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // ...
    // throw new Response(JSON.stringify({ message: 'Could not fetch events' }), {
    //   status: 500,
    // });
    return { message: 'Could not fetch events', status: 500 };
  } else {
    // const resData = await response.json();
    // return resData.events;
    return response;
  }
}
