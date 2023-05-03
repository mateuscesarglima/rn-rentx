import React from 'react';

import { Header } from '@Screens/Home/components/Header';
import { CarList, Container, Title } from './styles';
import { Car } from './components/Car';

const Home = () => {
  const carData = [
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

  return (
    <Container>
      <Header />
      <CarList
        data={carData}
        keyExtractor={({ item }) => String(item)}
        renderItem={({ item }) => <Car data={item} />}
      />
    </Container>
  );
};

export default Home;
