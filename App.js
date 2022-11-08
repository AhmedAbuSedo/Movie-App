import React from 'react';
import AppContainer from './src/Navigations';
import {FavoirtProvider} from './src/context/FavoritContext';
import Signup from './src/Screens/Signup';
import Login from './src/Screens/Login';
export default function App() {
  return (
    <FavoirtProvider>
      <AppContainer />
      {/* <Login /> */}
    </FavoirtProvider>
  );
}
