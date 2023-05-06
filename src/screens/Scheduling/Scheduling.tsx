import React from 'react';

import ArrowLeftSvg from '@Assets/arrow.svg';
import { Backbutton } from '@Components/Backbutton';
import { StatusBar } from 'react-native';

import { FooterLayout } from '@Components/FooterLayout';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Calendar } from './Calendar';
import {
  BorderView,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Header,
  RentalPeriod,
  Title,
} from './styles';
import { routeCodes } from '@Constants/routes';

export const Scheduling = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handleConfirmRental = () => {
    navigation.navigate(routeCodes.SCHEDULING_DETAILS);
  };
  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      <Header>
        <Backbutton onPress={() => navigation.goBack()} color="#FFF" />
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <BorderView selected={false}>
              <DateValue>19/02/2023</DateValue>
            </BorderView>
          </DateInfo>

          <ArrowLeftSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <BorderView selected={false}>
              <DateValue></DateValue>
            </BorderView>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>
      <FooterLayout buttonTitle="Confirmar" onpress={handleConfirmRental} />
    </Container>
  );
};
