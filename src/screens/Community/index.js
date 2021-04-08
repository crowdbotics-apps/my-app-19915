import React from 'react';

import { View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Content } from 'native-base';

//styles
import styles from './styles';

// components
import {
  Text,
  Header,
  MenuIcon,
  Avatar,
  Footer,
  ProgressCircle,
} from 'src/components';
import { Gutters, Images, Layout, Fonts, Colors } from 'src/theme';
const {
  mediumTMargin,
  mediumBPadding,
  largeHMargin,
  mediumVMargin,
  smallBMargin,
  smallTMargin,
  smallHPadding,
  smallVMargin,
  regularHPadding,
  mediumHMargin,
  regularVMargin,
  mediumLMargin,
  small2xHPadding,
  mediumBMargin,
  small2xVMargin,
  mediumHPadding,
  smallLMargin,
  smallHMargin,
  largeXTMargin,
} = Gutters;

const { backImage, resource, progressWrapper, midWrapper, addSpace } = styles;

import { CommunityCard } from '../../components';

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

const Community = () => {
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
            text="Community"
            color="river"
            style={[titleSmall, resource]}
          />
        </View>
        <View
          style={[row, justifyContentBetween, regularHPadding, mediumVMargin]}>
          <Text color="river" style={[textMedium]} text="All communities" />
          <TouchableOpacity>
            <View style={[row, center]}>
              <Text color="river" style={[textMedium]} text="Filter by" />
              <Image style={[smallLMargin]} source={Images.polygon} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[fill, small2xHPadding]}>
          <Content contentContainerStyle={[mediumBPadding]}>
            <CommunityCard
              withUser
              source={Images.communityimage1}
              title="Community name"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed congue purus, ac blandit risus"
              text="485 members"
            />
            <View style={[regularVMargin]}>
              <CommunityCard
                withUser
                source={Images.communityimage2}
                title="Community name"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed congue purus, ac blandit risus"
                text="485 members"
              />
            </View>
            <CommunityCard
              source={Images.communityimage3}
              title="Community name"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed congue purus, ac blandit risus"
              text="485 members"
            />
          </Content>
        </View>
        {/* <Footer /> */}
      </ImageBackground>
    </>
  );
};

export default Community;
