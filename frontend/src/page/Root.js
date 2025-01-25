import { Outlet } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
// import EventsNavigation from '../components/EventsNavigation';

function Root() {
  // const location = useLocation();

  // const renderNav = () => {
  //   if (location.pathname.startsWith('/events')) {
  //     return <EventsNavigation />;
  //   }
  //   return <MainNavigation />;
  // };
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Root;
