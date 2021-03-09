import React from 'react';
import { View, Image } from 'react-native';
// components
import { Text, Avatar } from 'src/components';
import { Gutters, Layout, Global, Images } from 'src/theme';
// styles
import styles from './styles';

const Card = ({ nonary, denary, card1, card2 }) => {
  const {
    card,
    parentImage,
    imageStyle,
    mainWrapper,
    textWrapper,
    lastAvatar
  } = styles;
  const { regularVPadding, regularHMargin, smallHPadding } = Gutters;
  const { primaryBg, secondaryBg, nonaryBg, denaryBg } = Global;
  const {
    row,
    center,
    alignItemsCenter,
    justifyContentBetween,
  } = Layout;
  return (
    <View style={[card, regularHMargin]}>
      <View style={[primaryBg, parentImage]}>
        {card1 && <Image source={Images.slider1} style={imageStyle} />}
        {card2 && <Image source={Images.slider2} style={imageStyle} />}
      </View>
      <View
        style={[
          mainWrapper,
          nonary && nonaryBg,
          denary && denaryBg,
          regularVPadding,
          justifyContentBetween
        ]}>
        <Text
          text='Smileometer'
          bold
          color={denary ? "denary" : "primary"}
          numberOfLines={1}
          style={textWrapper}
        />
        <View style={[row, alignItemsCenter]}>
          <Text
            text='485 players'
            bold
            color={denary ? "denary" : "primary"}
            numberOfLines={1}
            medium
          />
          <View style={[row, smallHPadding]}>
            <Avatar size="small" round />
            <Avatar size="small" style={{ left: -15, zIndex: 22 }} round />
            <View style={[
              center,
              secondaryBg,
              lastAvatar
            ]}
            >
              <Text
                text='+2'
                bold
                color="senary"
                numberOfLines={1}
                medium
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Card;
