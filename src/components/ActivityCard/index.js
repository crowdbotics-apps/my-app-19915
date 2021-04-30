import React from 'react';

import {View, Image} from 'react-native';
import {Content} from 'native-base';
// components
import {Text} from 'src/components';
import {Fonts, Gutters, Images} from 'src/theme';
import styles from './styles';

const {mediumBPadding, smallLMargin, regularHMargin} = Gutters;
const {textMedium,titleSmall} = Fonts;
const {imageWrapper, card, textWrapper, icon, favouriteicon} = styles;
const ActivityCard = ({data}) => {
  const {title, text, favourity} = data;
  return (
    <>
      <View style={card}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={icon} source={Images.activityicon} />
          <View style={[smallLMargin, textWrapper]}>
            <View
              style={{
                width: 156,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {favourity && (
                <Image style={favouriteicon} source={Images.starfav} />
              )}
              <Text style={titleSmall} text={title} />
            </View>
            <Text style={textMedium} text={text} />
          </View>
        </View>
      </View>
    </>
  );
};

export default ActivityCard;
