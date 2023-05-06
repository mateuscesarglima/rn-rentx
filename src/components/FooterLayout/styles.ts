import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Footer = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 24px;
  padding-bottom: ${getBottomSpace()}px;
`;
