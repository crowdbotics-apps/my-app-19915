import {View} from 'native-base';
import React from 'react';
import {ImageBackground, Image} from 'react-native';
// components
import {Layout, Gutters, Images} from 'src/theme';

const SplashScreen = () => {
  const {fill, center} = Layout;
  const {largeXTMargin} = Gutters;
  return (
    <ImageBackground source={Images.loginbg} style={[fill, center]}>
      <View style={[fill, largeXTMargin]}>
        <Image source={Images.splash} />
      </View>
      <View style={fill}>
        <Image source={Images.smile} />
      </View>
    </ImageBackground>
  );
};
export default SplashScreen;
