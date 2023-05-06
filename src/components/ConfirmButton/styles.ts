import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 80px;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.shape_dark};

  align-items: center;
  justify-content: center;

  margin-top: 80px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
`;
