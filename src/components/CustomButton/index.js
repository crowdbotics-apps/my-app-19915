import React from 'react';
import {Icon} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';

// components
import {Text} from 'src/components';
import {Layout, Gutters, Global, Colors} from 'src/theme';

const CustomButton = ({text, action}) => {
  const {tertiaryBg} = Global;
  const {buttonWrapper, icon} = styles;
  const {row, alignItemsCenter, justifyContentBetween} = Layout;
  const {largeHMargin, mediumXTMargin, mediumHPadding} = Gutters;

  return (
    <TouchableOpacity
      style={[
        row,
        tertiaryBg,
        largeHMargin,
        buttonWrapper,
        mediumXTMargin,
        mediumHPadding,
        alignItemsCenter,
        justifyContentBetween,
      ]}
      onPress={action}>
      <Text text={text} color="quinary" medium bold />
      <Icon type="MaterialIcons" name="arrow-forward" style={icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    height: 60,
    borderRadius: 80,
  },
  icon: {
    color: Colors.cinnamon,
  },
});

export default CustomButton;
