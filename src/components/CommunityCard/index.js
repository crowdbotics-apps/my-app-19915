import React from 'react';

import {View, Image} from 'react-native';

// components
import {Text} from 'src/components';
import {Fonts, Layout, Gutters, Images} from 'src/theme';

//style
import styles from './styles';

const {smallVMargin} = Gutters;
const {positionA, positionR, justifyContentEnd, justifyContentCenter} = Layout;
const {textMedium, titleRegular} = Fonts;
const {textWrapper, image, icon} = styles;

const CommunityCard = ({withUser, card}) => {
  const {name, description} = card;

  return (
    <>
      {withUser && <Image style={icon} source={Images.user} />}
      <View
        style={[
          justifyContentEnd,
          positionR,
          {overflow: 'hidden', marginBottom: 20},
        ]}>
        <Image source={ card.image ? {uri: card.image} : Images.communityimage1} style={image} />
        <View style={[textWrapper, positionA, justifyContentCenter]}>
          <Text
            bold
            color="secondary"
            text={name}
            style={[titleRegular, smallVMargin]}
          />
          <Text
            color="secondary"
            text={description}
            style={[textMedium, smallVMargin]}
          />
          <Text color="secondary" text={'485 members'} style={textMedium} />
        </View>
      </View>
    </>
  );
};

export default CommunityCard;
