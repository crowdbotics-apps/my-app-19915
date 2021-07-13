import React from 'react';
import {Icon, View} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';

// components
import {Text} from 'src/components';
import {Layout, Gutters, Global, Colors} from 'src/theme';

const CardHeader = ({text, action}) => {
  const {transparentBg, tertiaryBg} = Global;
  const {mediumHMargin, mediumXTMargin} = Gutters;
  const {textWrapper, icon, iconButtonWrapper} = styles;
  const {row, center, alignItemsCenter, justifyContentBetween} = Layout;

  return (
    <View
      style={[
        row,
        transparentBg,
        mediumHMargin,
        mediumXTMargin,
        alignItemsCenter,
        justifyContentBetween,
      ]}>
      <Text text={text} color="secondary" style={textWrapper} bold />
      <TouchableOpacity
        style={[center, tertiaryBg, iconButtonWrapper]}
        onPress={action}>
        <Icon type="MaterialIcons" name="add" style={icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    fontSize: 28,
    lineHeight: 28,
  },
  icon: {
    color: Colors.cinnamon,
  },
  iconButtonWrapper: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
});

export default CardHeader;
