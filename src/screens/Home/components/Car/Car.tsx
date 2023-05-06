import React from 'react';

import {
  About,
  Brand,
  CarImage,
  CarInfo,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type,
} from './styles';

import EnergySvg from '@Assets/energy.svg';
import { useTheme } from 'styled-components/native';
import { RectButtonProps } from 'react-native-gesture-handler';

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
  type: string;
}

interface CarProps extends RectButtonProps {
  data: CarData;
}

export const Car = ({ data, ...rest }: CarProps) => {
  const { brand, name, rent, thumbnail, type } = data;
  return (
    <Container {...rest}>
      <Details>
        <CarInfo>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
        </CarInfo>

        <About>
          <Rent>
            <Period>{rent.period}</Period>
            <Price>R$ {rent.price}</Price>
          </Rent>

          <Type>
            <EnergySvg />
          </Type>
        </About>
      </Details>
      <CarImage source={{ uri: thumbnail }} resizeMode="contain" />
    </Container>
  );
};
