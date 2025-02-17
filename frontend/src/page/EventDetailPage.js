// import { useLoaderData } from 'react-router-dom';
import { redirect, useRouteLoaderData } from 'react-router-dom';

import EventItem from '../components/EventItem';

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw new Response({
      message: 'Could not fetch details for selected event',
      status: 500,
    });
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const response = await fetch('http://localhost:8080/events/' + params.id, {
    method: request.method,
  });

  if (!response.ok) {
    return new Response({ messgae: 'This is delete error' }, { status: 500 });
  }

  return redirect('/events');
}
