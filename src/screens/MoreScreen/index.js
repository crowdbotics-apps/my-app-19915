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
  smallBMargin,
  mediumLMargin,
  mediumBMargin,
  mediumVPadding,
  small2xVMargin,
  largeXTMargin,
} = Gutters;

const { backImage } = styles;

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

const { titleSmall, textMedium } = Fonts;

const MoreScreen = () => {
  return (
    <>
      <ImageBackground source={Images.screenbg} style={fill}>
        <Header left={<MenuIcon />} right={<Avatar size="regular" />} />
        <View style={[row, alignItemsCenter, mediumBMargin]}>
          <TouchableOpacity>
            <Image source={Images.camarrowback} style={backImage} />
          </TouchableOpacity>
          <Text text="Resources" color="river" style={[titleSmall, { marginLeft: 60 }]} />
        </View>
        <Content contentContainerStyle={mediumVPadding}>
          <MoreCard
            source={Images.more1}
            title="Smile Exercises"
            description="Excercises designed to help you..."
          />
          <View style={small2xVMargin}>
            <MoreCard
              source={Images.more2}
              title="Smile Science"
              description="Articles, videos and educational videos"
            />
          </View>
          <MoreCard
            source={Images.more3}
            title="Community"
            description="Connect to other people who love smiling"
          />
        </Content>
        {/* <Footer /> */}
      </ImageBackground>
    </>
  );
};

export default MoreScreen;
