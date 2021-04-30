import React from 'react';

import {View, Image} from 'react-native';
import {Content} from 'native-base';
// components
import {Text} from 'src/components';
import {Gutters, Images, Layout, Fonts} from 'src/theme';
const {mediumBPadding, smallVMargin, regularHMargin} = Gutters;
// styles
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {border, fill, center, positionA, justifyContentEnd} = Layout;

const {titleSmall, textMedium} = Fonts;

const {imageStyle, wrapper, titleWrapper, container, text} = styles;

const MoreResource = ({data,source}) => {
  const {title,description,count,image}= data;
  
  return (
    <View style={container}>
      {image && <Image source={Images[image]} style={imageStyle} />}
      <View style={wrapper}>
        {title && (
          <View style={titleWrapper}>
            <Text
              numberOfLines={1}
              color="river"
              text={title}
              style={titleSmall}
            />
            {count && <Text style={titleSmall} text={count} />}
            <TouchableOpacity>
              <Image source={Images.polygon} />
            </TouchableOpacity>
          </View>
        )}
        {description && (
          <Text
            numberOfLines={2}
            color="river"
            text={description}
            style={[textMedium, smallVMargin]}
          />
        )}
      </View>
    </View>
  );
};

export default MoreResource;
