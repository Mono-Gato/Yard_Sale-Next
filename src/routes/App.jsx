import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@containers/Layout';
import '@styles/global.scss';

import { Login } from '@pages/Login';
import { SendEmail } from '@pages/SendEmail';
import { Home } from '@pages/Home';
import { NotFound } from '@pages/NotFound';
import { NewPassword } from '@pages/NewPassword';
import { CreateAccount } from '@pages/CreateAccount';
import { MyAccount } from '@pages/MyAccount';
import { RecoveryPassword } from '@pages/RecoveryPassword';
import { Checkout } from '@pages/Checkout';
import { Orders } from '@pages/Orders';
import { AppContext } from '@context/AppContext';
import { useInitialState } from '@hooks/useInitialState';

function App() {
  const initalState = useInitialState();
  return (
    <AppContext.Provider value={initalState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/recovery-password" element={<RecoveryPassword />} />
            <Route exact path="/create-account" element={<CreateAccount />} />
            <Route exact path="/my-account" element={<MyAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
