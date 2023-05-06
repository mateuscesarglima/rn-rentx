import React from 'react';

import { Button } from '@Components/Button';
import { Footer } from './styles';

interface FooterLayoutProps {
  buttonTitle: string;
  onpress: () => void;
  color?: string;
}

export const FooterLayout = ({
  buttonTitle,
  onpress,
  color,
}: FooterLayoutProps) => {
  return (
    <Footer>
      <Button title={buttonTitle} onPress={onpress} color={color} />
    </Footer>
  );
};
