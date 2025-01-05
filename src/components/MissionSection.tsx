import { View, Heading, Text } from '@aws-amplify/ui-react';

const MissionSection: React.FC = () => (
  <View as="section" id="mission" padding="2rem">
    <Heading level={2}>Our Mission</Heading>
    <Text>
      Placeholder text describing the company's mission. This should inspire confidence and convey the company's values.
    </Text>
  </View>
);

export default MissionSection;
