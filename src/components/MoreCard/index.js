import React from 'react';

import {View, Image} from 'react-native';
import {Content} from 'native-base';
// components
import {Text} from 'src/components';
import {Gutters, Images, Layout, Fonts} from 'src/theme';
const {mediumBPadding, smallVMargin, regularHMargin} = Gutters;
// styles
import styles from './styles';

const {border, fill, center, positionA, justifyContentEnd} = Layout;

const {titleSmall, textMedium} = Fonts;

const {image, topCardText, topCardContainer, text} = styles;

const MoreCard = ({title, description, source}) => {
  return (
    <>
        <View style={[fill, center, justifyContentEnd, topCardContainer, regularHMargin]}>
          <Image source={source} style={[image]} />
          <View style={[border, fill, positionA, topCardText]}>
            <Text color="river" text={title} style={[titleSmall,text]} />
            <Text color="river" text={description} style={[textMedium, smallVMargin, text]} />
          </View>
        </View>
       </>
  );
};

export default MoreCard;
