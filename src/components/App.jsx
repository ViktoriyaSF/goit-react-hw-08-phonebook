import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

// import { GlobalStyle } from './BasicStyles/GlobalStyle';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = lazy(() => import('../pages/Register.jsx'));
const LoginPage = lazy(() => import('../pages/Login.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>

    // <Layout>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    //   <ToastContainer position="top-center" />
    //   <GlobalStyle />
    // </Layout>
  );
};
