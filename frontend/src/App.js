// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage

// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage

// 3. Add a root layout that adds the <MainNavigation> component above all page components

// 4. Add properly working links to the MainNavigation

// 5. Ensure that the links in MainNavigation receive an "active" class when active

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage

// 7. Output the ID of the selected event on the EventDetailPage (x)

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component (x)
// above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './page/Root';

import HomePage from './page/HomePage';
import EventsPage, { EventLoader as Loader } from './page/EventsPage';
import EventDetailPage, {
  loader as eventDetailLoader,
} from './page/EventDetailPage';
import NewEventPage, { action as newEventAction } from './page/NewEventPage';
import EditEventPage from './page/EditEventPage';
import EventRoot from './page/EventRoot';
import ErrorPage from './page/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: Loader,
          },
          {
            path: ':id',
            id: 'event-detail', // 부모 라우터의 로더 함수 데이터를 사용하기 위함
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              { path: 'edit', element: <EditEventPage /> },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div></div>;
    </RouterProvider>
  );
}

export default App;
