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
  regularTMargin,
  smallTMargin,
  mediumHMargin,
  smallVMargin,
  largeTMargin,
  mediumLMargin,
  mediumBMargin,
  smallLMargin,
  small2xVMargin,
  smallHMargin,
  largeLMargin,
} = Gutters;

const { backImage, resource, star, text } = styles;

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

const SocialSection = () => {
  return (
    <>
      <ImageBackground source={Images.screenbg} style={fill}>
        <Header left={<MenuIcon />} right={<Avatar size="regular" />} />
        <View style={[fill, justifyContentCenter,]}>
          <View style={[alignItemsCenter]}>
            <Text color="river" style={[titleRegular, smallVMargin]} text="Social interaction" />
            <Text color="river" style={[titleRegular]} text="between platform members?" />
          </View>
          <View style={[largeTMargin, largeLMargin]}>
            <Text style={titleSmall} color="river" text="- view friend feed?" />
            <Text style={titleSmall} color="river" text="- messaging" />
            <Text style={titleSmall} color="river" text="- ignore messages " />
            <Text style={titleSmall} color="river" text="- add/remove friends" />
          </View>
        </View>
        {/* <Footer /> */}
      </ImageBackground>
    </>
  );
};

export default SocialSection;
