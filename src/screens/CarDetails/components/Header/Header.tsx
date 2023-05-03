import React from 'react';
import { Container } from './styles';
import { Backbutton } from '@Components/Backbutton';
import { useTheme } from 'styled-components/native';

export const Header = () => {
  const theme = useTheme();
  return (
    <Container>
      <Backbutton
        onPress={() => {}}
        color={theme.colors.text}
        activeOpacity={0.5}
      />
    </Container>
  );
};
