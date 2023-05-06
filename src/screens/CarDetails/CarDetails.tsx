import React from 'react';

import { Container } from './styles';

import { CarInfo } from '@Components/CarInfo';
import { FooterLayout } from '@Components/FooterLayout';
import { Header } from '@Components/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { routeCodes } from '@Constants/routes';

export const CarDetails = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleGoToScheduling = () => {
    navigation.navigate(routeCodes.SCHEDULING);
  };
  return (
    <Container>
      <Header />
      <CarInfo schedulingDetails={false} />
      <FooterLayout
        buttonTitle="Escolher período do aluguel"
        onpress={handleGoToScheduling}
      />
    </Container>
  );
};
