import React from 'react';
import Favariate from '../Screens/Favorite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Icon from '../Utils/Icons';
import {SvgXml} from 'react-native-svg';
const BottomTap = createBottomTabNavigator();
export default function BottomTapNavigation() {
  return (
    <BottomTap.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <BottomTap.Screen
        name="Home"
        component={Home}
        // options={{headerShown: false}}
        options={{
          tabBarIcon: ({color, focused, size}) =>
            focused ? (
              <SvgXml xml={Icon.focausHome} />
            ) : (
              <SvgXml xml={Icon.home} />
            ),
        }}
      />
      <BottomTap.Screen
        name="Favariate"
        component={Favariate}
        options={{
          tabBarIcon: ({color, focused, size}) =>
            focused ? (
              <SvgXml xml={Icon.focauslove} />
            ) : (
              <SvgXml xml={Icon.love} />
            ),
        }}
      />
    </BottomTap.Navigator>
  );
}
