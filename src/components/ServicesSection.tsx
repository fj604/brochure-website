import { View, Heading, Text } from '@aws-amplify/ui-react';

const ServicesSection: React.FC = () => (
  <View as="section" id="services" padding="2rem">
    <Heading level={2} marginBottom="1rem">Our Services</Heading>
    <Text>
      <ul>
        <li>Service 1: Placeholder description</li>
        <li>Service 2: Placeholder description</li>
        <li>Service 3: Placeholder description</li>
      </ul>
    </Text>
  </View>
);

export default ServicesSection;
