import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ApolloContextProvider from './context/ApolloContextProvider';
import { AuthContextProvider } from './context/AuthContext';
import { CartContextProvider } from './context/CartContext';
import { ThemeController } from './context/ThemeContext';
import { Navigation } from './modules/Navigation/Navigation';


function App() {
  return (
    <ApolloContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <ThemeController>
            <ToastContainer position="top-right" autoClose={5000} />
            <BrowserRouter>
              <Navigation />
            </BrowserRouter>
          </ThemeController>
        </CartContextProvider>
      </AuthContextProvider>
    </ApolloContextProvider>
  );
}

export default App;
