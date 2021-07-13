import React from 'react';

import {View, Image} from 'react-native';
// components
import Text from '../Text';
import {Gutters, Images, Layout, Fonts} from 'src/theme';
const {mediumBPadding, smallVMargin, regularHMargin} = Gutters;
// styles
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {border, row, fill, center, positionA, justifyContentBetween} = Layout;

const {titleSmall, textMedium} = Fonts;

const {notificationWrapper} = styles;

const NotificationCard = ({text}) => {
  return (
    <>
      <View
        style={[fill, row, center, justifyContentBetween, notificationWrapper]}>
        <Text
          numberOfLines={2}
          color="riverbed"
          text={text}
          style={[textMedium]}
        />
        <TouchableOpacity>
          <Image source={Images.moreoption} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NotificationCard;
