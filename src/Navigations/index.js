import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTapNavigation from './BottomTapNavigation';
export default function AppContainer() {
  return (
    <NavigationContainer>
      <BottomTapNavigation />
    </NavigationContainer>
  );
}
