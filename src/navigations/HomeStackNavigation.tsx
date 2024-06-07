import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Perbaikan: Gunakan @react-navigation/stack
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        // Opsional: Konfigurasikan opsi khusus layar di sini
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        // Opsional: Konfigurasikan opsi khusus layar di sini
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
