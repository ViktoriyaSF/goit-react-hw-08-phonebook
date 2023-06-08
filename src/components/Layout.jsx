// import { ContainerStyl } from 'components/BasicStyles/Container.staled';
// import React from 'react';

// export const Layout = ({ children }) => {
//   return <ContainerStyl>{children}</ContainerStyl>;
// };
import { Outlet } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import { AppBar } from 'AppBar/AppBar';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <ToastContainer position="top-center" /> */}
    </div>
  );
};
