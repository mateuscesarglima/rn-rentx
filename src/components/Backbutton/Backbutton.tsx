import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { Container } from './styles';

import { TouchableOpacityProps } from 'react-native';

interface BackButtonProps extends TouchableOpacityProps {
  color?: string;
}

export const Backbutton = ({ color, ...rest }: BackButtonProps) => {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={30}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};
