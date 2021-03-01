import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import { Container } from 'native-base';

// components
import { Global, Layout, Images, Gutters } from 'src/theme';

const SplashScreen = () => {
  const { border, borderB, borderColor } = Global;
  const {
    fill,
    center,
  } = Layout;
  const {
    smallVPadding,
    regularHMargin,
    regularVPadding,
  } = Gutters;
  return (
    <Container>
      <View style={[center, border, borderColor]}>
        <View
          style={[
            borderB,
            borderColor,
            regularHMargin,
            regularVPadding,
          ]}
        >
          {/* <Image source={Images.logos} /> */}
        </View>
        <Text style={[smallVPadding, { color: '#000' }]}>
          WEDDING'S BEST
        </Text>
      </View>

    </Container>
  );
};

export default SplashScreen;
