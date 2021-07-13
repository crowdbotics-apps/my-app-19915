import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

// components
import {Images} from 'src/theme';

const MenuIcon = ({action, grey}) => {
  return (
    <TouchableOpacity style={styles.toggle} onPress={action}>
      <Image source={grey ? Images.toggle : Images.togglewhite} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggle: {
    zIndex: 1,
  },
});

export default MenuIcon;
