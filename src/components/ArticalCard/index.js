import React from 'react';

import {View, Image} from 'react-native';
import {Content} from 'native-base';
// components
import {Text} from 'src/components';
import {Fonts, Gutters} from 'src/theme';

const {mediumBPadding, smallVMargin, regularHMargin} = Gutters;
const {textMedium} = Fonts;

const ArticalCard = ({
  title,
  description,
  source,
  imageStyle,
  containerStyle,
  textWrapperStyle,
}) => {
  return (
    <>
      <View style={containerStyle}>
        <Image source={source} style={imageStyle} />

        <View style={textWrapperStyle}>
          <Text
            bold
            color="river"
            text={title}
            style={[textMedium, smallVMargin]}
          />
          <Text color="river" text={description} style={[textMedium]} />
        </View>
      </View>
    </>
  );
};

export default ArticalCard;
