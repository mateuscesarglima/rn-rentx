import React, { useEffect } from 'react';

import { Header } from '@Screens/Home/components/Header';
import { CarData, CarList, Container, Title } from './styles';
import { Car } from './components/Car';
import { useNavigation } from '@react-navigation/native';
import { routeCodes } from '@Constants/routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const carData: CarData[] = [
    {
      brand: 'Audi',
      name: 'RS 5 Coupé',
      rent: {
        period: 'AO DIA',
        price: 120,
      },
      thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
      type: 'Carro',
    },
    {
      brand: 'Porsche',
      name: 'Panamera',
      rent: {
        period: 'AO DIA',
        price: 200,
      },
      thumbnail:
        'https://e7.pngegg.com/pngimages/908/724/png-clipart-2018-porsche-panamera-2015-porsche-panamera-porsche-panamera-4-car-porsche-compact-car-car.png',
      type: 'Carro',
    },
  ];

  const handleCarDetails = () => {
    navigation.navigate(routeCodes.CAR_DETAILS);
  };

  return (
    <Container>
      <Header />
      <CarList
        data={carData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Car data={item} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
};

export default Home;
