import React from 'react';
import { ImageBackground, Image } from 'react-native';
// components
import { Layout, Images } from 'src/theme';

const SplashScreen = () => {
  const { fill, center } = Layout;
  return (
    <ImageBackground source={Images.loginbg} style={[fill, center]}>
      <Image source={Images.logos} />
    </ImageBackground>
  )
}
export default SplashScreen;
