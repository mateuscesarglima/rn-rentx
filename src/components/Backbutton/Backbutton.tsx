import React from 'react';
import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

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
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};
