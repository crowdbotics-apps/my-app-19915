import React from 'react';

import {View, Image} from 'react-native';
import {Content} from 'native-base';
// components
import {Text} from 'src/components';
import {Fonts, Gutters, Images} from 'src/theme';
import styles from './styles';

const {mediumBPadding, smallLMargin, regularHMargin} = Gutters;
const {textMedium, titleSmall} = Fonts;
const {imageWrapper, card, textWrapper, iconStyle, favouriteicon} = styles;
const ActivityCard = ({title, text, icon, source, isFavourite}) => {
  return (
    <>
      <View style={card}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={iconStyle}
            source={source ? source : Images.activityicon}
          />
          <View style={[smallLMargin, textWrapper]}>
            <View
              style={{
                width: 156,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {isFavourite && (
                <Image
                  style={favouriteicon}
                  source={icon ? icon : Images.smallstar}
                />
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
