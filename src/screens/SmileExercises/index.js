import React from 'react';

import { View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Content } from 'native-base';

//styles
import styles from './styles';

// components
import { Text, Header, MenuIcon, Avatar, Footer } from 'src/components';
import { Gutters, Images, Layout, Fonts } from 'src/theme';
const {
  mediumTMargin,
  mediumBPadding,
  largeHMargin,
  mediumVMargin,
  smallBMargin,
  smallTMargin,
  mediumHMargin,
  mediumLMargin,
  mediumBMargin,
  small2xVMargin,
  smallHMargin,
  largeXTMargin,
} = Gutters;

const { backImage, resource, star, text } = styles;

import { MoreCard } from '../../components';

const {
  border,
  row,
  fill,
  center,
  selfCenter,
  alignItemsCenter,
  positionA,
  justifyContentCenter,
  justifyContentBetween,
  justifyContentEnd,
} = Layout;

const { titleSmall, titleRegular, textMedium } = Fonts;

const SmileExercises = () => {
  return (
    <>
      <ImageBackground source={Images.screenbg} style={fill}>
        <Header left={<MenuIcon />} right={<Avatar size="regular" />} />
        <View style={[row, alignItemsCenter, smallBMargin]}>
          <TouchableOpacity>
            <Image source={Images.camarrowback} style={backImage} />
          </TouchableOpacity>
          <Text
            bold
            text="Smile exercise name"
            color="river"
            style={[titleSmall, resource]}
          />
        </View>
        <Content contentContainerStyle={mediumBPadding}>
          <View style={smallTMargin}>
            <Image source={Images.smilingrest} style={[{ marginTop: 15 }]} />
            <Image source={Images.star} style={[positionA, star]} />
          </View>
          <View style={[mediumHMargin]}>
            <Text
              color="river"
              text="Lorem ipsum dolor sit amet"
              style={[titleRegular, mediumVMargin]}
            />
            <Text color="river" style={[textMedium, text]} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor, ligula fringilla volutpat luctus, nisl leo auctor nibh, non commodo metus magna eget nulla. In quis diam eu nunc tristique varius non vitae dui. Suspendisse ut sodales enim. Suspendisse et felis porttitor nisi luctus scelerisque. Morbi quam mauris, ornare ut venenatis sit amet, laoreet a dolor. Suspendisse eget risus ornare, ullamcorper lectus quis, efficitur urna. Donec eleifend tincidunt lacus eu hendrerit. Nulla vitae libero mattis, mollis nunc vitae, facilisis mauris. Morbi at vestibulum mi. Nam viverra condimentum volutpat. Maecenas ultricies, magna ac eleifend venenatis, magna est ultrices leo, imperdiet luctus nisi sem quis purus. Sed euismod eros a lectus malesuada, id sagittis justo faucibus. Sed sit amet odio lacinia mauris tempor consectetur sed a tortor. Integer sed erat quam. Mauris lobortis tortor non dui pellentesque aliquet. Fusce urna tortor, lobortis hendrerit nisl at, pretium feugiat magna." />
          </View>
        </Content>
        {/* <Footer /> */}
      </ImageBackground>
    </>
  );
};

export default SmileExercises;
