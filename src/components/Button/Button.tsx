import React from 'react';

import { Container, Title } from './styles';

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}

export const Button = ({ title, onPress, color }: ButtonProps) => {
  return (
    <Container onPress={onPress} color={color}>
      <Title>{title}</Title>
    </Container>
  );
};
