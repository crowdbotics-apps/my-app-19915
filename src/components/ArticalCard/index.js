import React from 'react';

import {View, Image} from 'react-native';
import {Content} from 'native-base';
// components
import {Text} from 'src/components';
import {Fonts, Gutters} from 'src/theme';
import styles from './styles';

const {mediumBPadding, smallVMargin, regularHMargin} = Gutters;
const {textMedium} = Fonts;
const {imageWrapper, card, textWrapper} = styles;
const ArticalCard = ({item, items}) => {
  const {image, article_name, description} = item;
  return (
    <>
      <View style={card}>
        <Image source={{uri: image}} style={imageWrapper} />

        <View style={textWrapper}>
          <Text
            bold
            color="river"
            text={article_name}
            style={[textMedium, smallVMargin]}
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
