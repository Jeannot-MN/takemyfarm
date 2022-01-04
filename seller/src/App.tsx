import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ApolloContextProvider from './context/ApolloContextProvider';
import { AuthContextProvider } from './context/AuthContext';
import { SellerContextProvider } from './context/SellerContext';
import { ThemeController } from './context/ThemeContext';
import { Navigation } from './modules/Navigation/Navigation';


function App() {
  return (
    <SellerContextProvider>
      <ApolloContextProvider>
        <AuthContextProvider>
          <ThemeController>
            <ToastContainer position="bottom-right" autoClose={7000} />
            <BrowserRouter>
              <Navigation />
            </BrowserRouter>
          </ThemeController>
        </AuthContextProvider>
      </ApolloContextProvider>
    </SellerContextProvider>
  );
}

export default App;
