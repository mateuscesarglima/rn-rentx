import React from 'react';

import { Container } from './styles';
import { CarInfo } from '@Components/CarInfo';
import { Header } from '@Components/Header';
import { FooterLayout } from '@Components/FooterLayout';
import { routeCodes } from '@Constants/routes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

export const SchedulingDetails = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const theme = useTheme();
  const handleConfirmRental = () => {
    navigation.navigate(routeCodes.SCHEDULING_COMPLETE);
  };
  return (
    <Container>
      <Header />
      <CarInfo schedulingDetails={true} />
      <FooterLayout
        buttonTitle="Alugar agora"
        onpress={handleConfirmRental}
        color={theme.colors.success}
      />
    </Container>
  );
};
