import React from 'react';

import {View, Image} from 'react-native';
// components
import {Text} from 'src/components';
import {Gutters, Images, Layout, Fonts, Global} from 'src/theme';
const {mediumBPadding, smallVMargin, regularHMargin} = Gutters;
// styles
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {
  row,
  fill,
  center,
  positionA,
  justifyContentEnd,
  alignItemsCenter,
  justifyContentBetween,
} = Layout;
const {border} = Global;
const {titleSmall, textMedium} = Fonts;

const {imageStyle, wrapper, container} = styles;

const MoreResource = ({title, imageUrl, description, count, onPress}) => {
  return (
    <View style={container}>
      <View style={wrapper}>
        <View>
          {title && (
            <TouchableOpacity
              style={[row, alignItemsCenter, justifyContentBetween]}
              onPress={onPress}>
              <Text
                numberOfLines={1}
                color="river"
                text={title}
                style={titleSmall}
              />
              {count && <Text style={titleSmall} text={count} />}

              <Image source={Images.polygon1} />
            </TouchableOpacity>
          )}
        </View>
        <View>
          {description ? (
            <Text
              numberOfLines={2}
              color="river"
              text={description}
              style={[textMedium, smallVMargin]}
            />
          ) : null}
        </View>
      </View>
      <Image
        source={imageUrl ? {uri: imageUrl} : Images.man}
        style={imageStyle}
      />
    </View>
  );
};

export default MoreResource;
