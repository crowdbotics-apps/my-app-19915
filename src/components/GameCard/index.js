import React from 'react';
import { View, Image } from 'react-native';
// components
import { Text, Avatar } from 'src/components';
import { Gutters, Fonts, Layout, Global, Images } from 'src/theme';
// styles
import styles from './styles';

const GameCard = ({
  nonary,
  denary,
  card1,
  card2,
  rarely,
  tuscany
}) => {
  const {
    card,
    parentImage,
    imageStyle,
    mainWrapper,
    textWrapper,
    lastAvatar
  } = styles;
  const { regularVPadding, mediumHMargin, mediumVMargin, smallHPadding } = Gutters;
  const { primaryBg, secondaryBg, nonaryBg, denaryBg, rarelyBg, tuscanyBg } = Global;
  const {
    row,
    center,
    alignItemsCenter,
    justifyContentBetween,
  } = Layout;
  return (
    <View style={[card, mediumHMargin, mediumVMargin]}>
      <View style={[primaryBg, parentImage]}>
        {card1 && <Image source={Images.game1} style={imageStyle} />}
        {card2 && <Image source={Images.game2} style={imageStyle} />}
      </View>
      <View
        style={[
          mainWrapper,
          nonary && nonaryBg,
          denary && denaryBg,
          rarely && rarelyBg,
          tuscany && tuscanyBg,
          regularVPadding,
          justifyContentBetween
        ]}>
        <Text
          text='Smileometer'
          bold
          color="secondary"
          numberOfLines={1}
          style={textWrapper}
        />
        <Text
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed congue purus, ac blandit risus'
          color="secondary"
          numberOfLines={3}
          medium
        />
        <View style={[row, alignItemsCenter]}>
          <Text
            text='485 players'
            bold
            color="secondary"
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
export default GameCard;
