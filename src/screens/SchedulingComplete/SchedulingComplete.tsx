import React from 'react';

import { Container, Content, Footer, Message, Title } from './styles';
// Dimension usar em styled component porque é usado em qualquer lugar onde não se pode usar HOOKS

//Use dimensio é um hook e tem o mesmo efeito do dimension

import DoneSvg from '@Assets/done.svg';
import LogoSvg from '@Assets/logo_background_gray.svg';
import { ConfirmButton } from '@Components/ConfirmButton';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { routeCodes } from '@Constants/routes';

export const SchedulingComplete = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handleOnConfirm = () => {
    navigation.navigate(routeCodes.HOME);
  };
  return (
    <Container>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel
        </Message>
      </Content>
      <Footer>
        <ConfirmButton onPress={handleOnConfirm} />
      </Footer>
    </Container>
  );
};
