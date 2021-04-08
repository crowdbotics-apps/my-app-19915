/**
 * This file contains all application's style relative to fonts
 */
import {StyleSheet} from 'react-native';
import {FontSize} from './Variables';

export default StyleSheet.create({
  textSmall: {
    fontSize: FontSize.small, // 10
    lineHeight: 10,
  },
  textRegular: {
    fontSize: FontSize.regular, // 12
    lineHeight: 12,
  },
  textSmallX: {
    fontSize: FontSize.regular + 2, // 14
    lineHeight: 14,
  },
  textMedium: {
    fontSize: FontSize.medium, // 16
    lineHeight: 16,
  },
  textLarge: {
    fontSize: FontSize.large, // 18
    lineHeight: 18,
  },
  titleSmall: {
    fontSize: FontSize.small * 2, // 20
    lineHeight: 20,
  },
  titleRegular: {
    fontSize: FontSize.regular * 2, // 24
    lineHeight: 24,
  },
  titleLarge: {
    fontSize: FontSize.large * 2, // 36
    lineHeight: 36,
  },
  titleXLarge: {
    fontSize: FontSize.small * 4, // 40
    lineHeight: 40,
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textMediumX: {fontSize: 30, lineHeight: 30},
  bold: {
    fontWeight: 'bold',
  },
});
