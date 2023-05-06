import React from 'react';
import { Container } from './styles';
import { Backbutton } from '@Components/Backbutton';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const Header = () => {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Container>
      <Backbutton
        onPress={() => {
          navigation.goBack();
        }}
        color={theme.colors.text}
        activeOpacity={0.5}
      />
    </Container>
  );
};
