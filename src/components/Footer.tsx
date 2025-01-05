import { View, Text } from '@aws-amplify/ui-react';

const Footer: React.FC = () => (
  <View as="footer" backgroundColor="var(--amplify-colors-neutral-90)" padding="1rem">
    <Text color="var(--amplify-colors-white)">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</Text>
  </View>
);

export default Footer;