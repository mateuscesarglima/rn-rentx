import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  /* position: absolute; */
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;
