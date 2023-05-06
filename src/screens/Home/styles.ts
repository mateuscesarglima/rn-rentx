import styled from 'styled-components/native';
import { FlatList, FlatListProps, StatusBar } from 'react-native';

export interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
  type: string;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 30px;
`;

export const CarList = styled(
  FlatList as new (props: FlatListProps<CarData>) => FlatList<CarData>
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
