import React from 'react';

import {View, Image} from 'react-native';
import {Content} from 'native-base';
// components
import {Text} from 'src/components';
import {Fonts, Layout, Gutters, Images} from 'src/theme';

//style
import styles from './styles';

const {mediumBPadding, smallVMargin, mediumVMargin, regularHMargin} = Gutters;
const {positionA, positionR, justifyContentEnd, justifyContentCenter} = Layout;
const {textMedium, titleRegular} = Fonts;
const {textWrapper, image, icon} = styles;

const CommunityCard = ({withUser, title, description, text, source}) => {
  return (
    <>
      {withUser && <Image style={icon} source={Images.user} />}
      <View style={[justifyContentEnd, positionR,{overflow:"hidden"}]}>
        <Image source={source} style={image} />
        <View style={[textWrapper, positionA, justifyContentCenter]}>
          <Text
            bold
            color="secondary"
            text={title}
            style={[titleRegular, smallVMargin]}
          />
          <Text
            color="secondary"
            text={description}
            style={[textMedium, smallVMargin]}
          />
          <Text color="secondary" text={text} style={[textMedium]} />
        </View>
      </View>
    </>
  );
};

export default CommunityCard;
