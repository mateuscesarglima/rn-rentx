import React from 'react';

import { Container, Name } from './styles';
import { SvgProps } from 'react-native-svg';

interface AccessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

export const Accessory = ({ icon: Icon, name }: AccessoryProps) => {
  return (
    <Container>
      <Icon />
      <Name>{name}</Name>
    </Container>
  );
};
