import React from 'react';

import { Container, HeaderContent, TotalCars } from './styles';
import { StatusBar } from 'react-native';
import Logo from '@Assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';

export const Header = () => {
  return (
    <Container>
      <HeaderContent>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          translucent
        />
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <TotalCars>Total de 12 carros</TotalCars>
      </HeaderContent>
    </Container>
  );
};
