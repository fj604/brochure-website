import React from 'react';
import { View, Heading, Link } from '@aws-amplify/ui-react';

const Header: React.FC = () => (
  <View as="header" backgroundColor="var(--amplify-colors-neutral-90)" padding="1rem">
    <Heading level={1} color="var(--amplify-colors-white)">Company Name</Heading>
    <View as="nav">
      <Link href="#mission" color="var(--amplify-colors-white)" margin="0 1rem">Mission</Link>
      <Link href="#services" color="var(--amplify-colors-white)" margin="0 1rem">Services</Link>
      <Link href="#contact" color="var(--amplify-colors-white)" margin="0 1rem">Contact</Link>
    </View>
  </View>
);
export default Header;
