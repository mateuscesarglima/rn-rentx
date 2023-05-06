import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
