import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

// components
import { Images } from 'src/theme';

const MenuIcon = ({ action }) => {
  return (
    <TouchableOpacity style={styles.toggle} onPress={action}>
      <Image source={Images.togglewhite} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggle: {
    zIndex: 1
  }
});

export default MenuIcon;
