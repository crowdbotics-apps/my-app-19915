import React from 'react';
import { Icon } from 'native-base';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Card = ({
  color = 'primary',
  textColor = 'primary',
  shadow,
  containerProps,
  iconMainProps,
  iconInnerProps,
  orangeColor,
  blueColor,
  buttonWrapper,
  heading = '',
  middleText,
  description = '',
  subText = '',
  textProps,
  subTextMiddle,
  middleTextProps,
  subMiddleText,
  iconType = 'FontAwesome5',
  icon
}) => {
  return (
    <>
      <View style={[styles.wrapper, shadow && styles.shadowStyle, styles[color]]}>

        <View style={styles.textWrapper}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textStyle, styles[`${textColor}Color`]]}>
              {heading}
            </Text>
            <Text style={[styles.subTextStyle, styles[`${textColor}Color`]]}>
              {subText}
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.middleTextStyle, styles[`${textColor}Color`]]}>
              {middleText}
            </Text>
            <Text style={[styles.middleSubTextStyle, styles[`${textColor}Color`]]}>
              {subTextMiddle}
            </Text>
          </View>
          <Text style={[styles.textStyle, styles[`${textColor}Color`]]}>
            {description}
          </Text>

        </View>
        <View style={[styles.iconMainStyle, styles[`${color}Icon`]]}>
          <Icon
            type={iconType}
            name={icon}
            style={[styles.iconInnerStyle, iconInnerProps]}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  primary: { backgroundColor: '#5daffe' },
  secondary: { backgroundColor: '#ff634e' },
  tertiary: { backgroundColor: '#57f548' },
  quaternary: { backgroundColor: '#ffffff' },

  primaryIcon: { backgroundColor: '#55c1ff' },
  secondaryIcon: { backgroundColor: '#ff968d' },

  primaryColor: { color: '#ffffff' },
  secondaryColor: { color: '#000000' },

  wrapper: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 25,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    position: 'relative',
  },
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 6,
  },
  textWrapper: {
    justifyContent: 'space-between',
  },
  middleTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  middleSubTextStyle: {
    lineHeight: 30
  },

  // old
  iconMainStyle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0
  },
  iconInnerStyle: {
    color: 'white',
    fontSize: 20
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 15
  },
  subTextStyle: {
    fontSize: 13,
    fontWeight: 'bold',
  }
})

export default Card
