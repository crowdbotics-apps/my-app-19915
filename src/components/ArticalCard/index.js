import React from 'react';

import {View, Image, ImageStore} from 'react-native';
import {Content} from 'native-base';
// components
import {Text} from 'src/components';
import {Fonts, Gutters, Images} from 'src/theme';
import styles from './styles';

const {mediumBPadding, smallVMargin, regularHMargin} = Gutters;
const {textMedium} = Fonts;
const {imageWrapper, card, textWrapper} = styles;
const ArticalCard = ({imageUrl, name, description}) => {
  return (
    <>
      <View style={card}>
        <Image
          source={imageUrl ? {uri: imageUrl} : Images.communityimage1}
          style={imageWrapper}
        />

        <View style={textWrapper}>
          <Text
            bold
            color="river"
            text={name}
            style={[textMedium, {marginTop: 8}]}
          />
          <Text
            color="river"
            text={description}
            style={textMedium}
            numberOfLines={1}
          />
        </View>
      </View>
    </>
  );
};

export default ArticalCard;
