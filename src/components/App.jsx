import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import { GlobalStyle } from './BasicStyles/GlobalStyle';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage=lazy(()=> import('../pages/Home'))
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts-pages'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
      <GlobalStyle />
    </>

    // <Layout>
    // <h1>Phonebook</h1>
    // <ContactForm />
    // <h2>Contacts</h2>
    // <Filter />
    // <ContactList />
    // </Layout>
  );
};
