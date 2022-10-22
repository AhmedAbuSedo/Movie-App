import React from 'react';
import AppContainer from './src/Navigations';
import {FavoirtProvider} from './src/context/FavoritContext';
export default function App() {
  return (
    <FavoirtProvider>
      <AppContainer />
    </FavoirtProvider>
  );
}
