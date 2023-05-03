import React from 'react';

import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Footer,
  Name,
  Period,
  Price,
  Rent,
} from './styles';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import { Accessory } from './components/Accessory';

import SpeedSvg from '@Assets/speed.svg';
import AccelerationSvg from '@Assets/acceleration.svg';
import GasolineSvg from '@Assets/gasoline.svg';
import ForceSvg from '@Assets/force.svg';
import ExchangeSvg from '@Assets/exchange.svg';
import People from '@Assets/people.svg';
import { Button } from '@Components/Button';

export const CarDetails = () => {
  return (
    <Container>
      <Header />
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

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button title="Escolher período do aluguel" onPress={() => {}} />
      </Footer>
    </Container>
  );
};
