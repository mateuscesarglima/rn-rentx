import React from 'react';

import { Container, Title } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

interface ConfirmButtonProps extends RectButtonProps {}

export const ConfirmButton = ({ ...rest }: ConfirmButtonProps) => {
  return (
    <Container {...rest}>
      <Title>Ok</Title>
    </Container>
  );
};
