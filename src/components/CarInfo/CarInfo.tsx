import React from 'react';

import AccelerationSvg from '@Assets/acceleration.svg';
import ExchangeSvg from '@Assets/exchange.svg';
import ForceSvg from '@Assets/force.svg';
import GasolineSvg from '@Assets/gasoline.svg';
import People from '@Assets/people.svg';
import SpeedSvg from '@Assets/speed.svg';
import { Accessory } from '@Components/Accessory';
import { FooterLayout } from '@Components/FooterLayout';
import { Slider } from '@Screens/CarDetails/components/Slider';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {
  About,
  // About,
  Accessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import { View } from 'react-native';

interface CarInfoProps {
  schedulingDetails?: boolean;
}

export const CarInfo = ({ schedulingDetails }: CarInfoProps) => {
  const theme = useTheme();
  return (
    <Container>
      <CarImages>
        <Slider
          imagesUrl={[
            'https://e7.pngegg.com/pngimages/498/756/png-clipart-2017-lamborghini-huracan-car-2017-lamborghini-aventador-audi-r8-2017-lamborghini-huracan-car-performance-car.png',
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={People} />
        </Accessories>

        {!schedulingDetails ? (
          <About>
            Este é automóvel desportivo. Surgiu do lendário touro de lide
            indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
            para quem gosta de acelerar.
          </About>
        ) : (
          <View style={{ width: '100%' }}>
            <RentalPeriod>
              <CalendarIcon>
                <Feather
                  name="calendar"
                  size={20}
                  color={theme.colors.background_primary}
                />
              </CalendarIcon>
              <DateInfo>
                <DateTitle>DE</DateTitle>
                <DateValue>18/06/2023</DateValue>
              </DateInfo>
              <MaterialIcons
                name="chevron-right"
                size={24}
                color={theme.colors.title}
              />
              <DateInfo>
                <DateTitle>ATÉ</DateTitle>
                <DateValue>18/06/2023</DateValue>
              </DateInfo>
            </RentalPeriod>
            <RentalPrice>
              <RentalPriceLabel>Total</RentalPriceLabel>
              <RentalPriceDetails>
                <RentalPriceQuota>380 x3 diárias</RentalPriceQuota>
                <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
              </RentalPriceDetails>
            </RentalPrice>
          </View>
        )}
      </Content>
    </Container>
  );
};
