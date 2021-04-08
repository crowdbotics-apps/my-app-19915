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
  smallVMargin,
  regularHPadding,
  mediumHMargin,
  mediumLMargin,
  mediumBMargin,
  small2xVMargin,
  mediumHPadding,
  smallLMargin,
  smallHMargin,
  largeXTMargin,
} = Gutters;

const { backImage, resource, progressWrapper, midWrapper, addSpace } = styles;

import { ArticalCard } from '../../components';

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

const SmileExercisesMaxHeight = () => {
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
            text="Smile science"
            color="river"
            style={[titleSmall, resource]}
          />
        </View>
        <Content contentContainerStyle={[mediumBPadding, regularHPadding]}>
          <View style={[row, justifyContentBetween]}>
            <ArticalCard
              source={Images.articalimage1}
              title="Artical name"
              description="lorum ipsum dolor sip"
            />
            <ArticalCard
              source={Images.articalimage2}
              title="Artical name"
              description="lorum ipsum dolor sip"
            />
          </View>
          <View
            style={[
              mediumVMargin,
              border,
              row,
              justifyContentCenter,
              alignItemsCenter,
              midWrapper,
            ]}>
            <View style={[progressWrapper]}>
              <View style={[center]}>
                <ProgressCircle
                  size={107}
                  strokeCap="round"
                  progress={0.5}
                  showsText={false}
                  color="white"
                  unfilledColor={Colors.hawkesblue}
                />
                <Image style={[positionA]} source={Images.progressimage} />
              </View>
            </View>
            <View>
              <Text
                color="river"
                style={[smallLMargin, smallBMargin, textMedium]}
                text={'Smile to continue\nyour 24 day streak'}
              />
              <Text
                color="river"
                style={[smallLMargin, smallBMargin, textMedium]}
                text={'Your longest smile\nstreak has been 38 days'}
              />
            </View>
          </View>
          <View style={[row, justifyContentBetween]}>
            <ArticalCard
              source={Images.articalimage3}
              title="Artical name"
              description="lorum ipsum dolor sip"
            />
            <ArticalCard
              source={Images.articalimage4}
              title="Artical name"
              description="lorum ipsum dolor sip"
            />
          </View>
          <View style={[smallVMargin, row, justifyContentBetween]}>
            <ArticalCard
              source={Images.articalimage5}
              title="Artical name"
              description="lorum ipsum dolor sip"
            />
            <ArticalCard
              source={Images.articalimage6}
              title="Artical name"
              description="lorum ipsum dolor sip"
            />
          </View>
          <View style={[center, mediumVMargin, addSpace]}>
            <Text color="river" style={[titleSmall]} text="Add space" />
          </View>
        </Content>
        {/* <Footer /> */}
      </ImageBackground>
    </>
  );
};

export default SmileExercisesMaxHeight;
