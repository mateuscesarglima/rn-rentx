import { CarDetails } from '@Screens/CarDetails';
import { Home } from '@Screens/Home';
import { Scheduling } from '@Screens/Scheduling';
import { SchedulingComplete } from '@Screens/SchedulingComplete';
import { SchedulingDetails } from '@Screens/SchedulingDetails';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const { Navigator, Screen } = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  );
};
