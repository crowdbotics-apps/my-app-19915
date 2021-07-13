import React from 'react';

import {View, Image} from 'react-native';

// components
import {Text} from 'src/components';
import {Fonts, Layout, Gutters, Images} from 'src/theme';

//style
import styles from './styles';

const {smallVMargin} = Gutters;
const {fill, positionA, positionR, justifyContentEnd, justifyContentCenter} = Layout;
const {textMedium, titleRegular} = Fonts;
const {textWrapper, image, cardWrapper, icon} = styles;

const CommunityCard = ({name, members, withUser, imageUrl, description}) => {
  return (
    <>
      {withUser ? <Image style={icon} source={Images.user} /> : null}
      <View style={[justifyContentEnd, positionR, cardWrapper]}>
        <Image
          source={imageUrl ? {uri: imageUrl} : Images.communityimage1}
          style={image}
        />
        <View
          style={[
            textWrapper,
            positionA,
            justifyContentCenter,
            {overflow: 'hidden'},
          ]}>
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
          <Text color="secondary" text={members} style={textMedium} />
        </View>
      </View>
    </>
  );
};

export default CommunityCard;
