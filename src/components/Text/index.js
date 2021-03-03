import React from 'react'
import { Text as UIKText } from 'react-native-ui-kitten'

// styles
import styles from './styles'
import { Fonts } from 'src/theme'

const Text = ({
  text,
  center,
  end,
  start,
  style,
  color,
  bold,
  underlined,
  category,
  numberOfLines,
  onPress,
  children,
  small, regular, medium, large, smallTitle, regularTitle, largeTitle
}) => {
  const {
    textCenter,
    textLeft,
    textRight,
    textRegular,
    textSmall,
    textMedium,
    textLarge,
    titleLarge,
    titleSmall,
    titleRegular,
    textUnderline,
  } = Fonts

  return (
    <UIKText
      category={category ? category : 'p1'}
      onPress={onPress}
      style={[
        !category && textRegular,
        underlined && textUnderline,
        start && textLeft,
        center && textCenter,
        end && textRight,
        bold && styles.boldFont,
        color && styles[color],
        small && textSmall,
        regular && textRegular,
        medium && textMedium,
        large && textLarge,
        smallTitle && titleSmall,
        regularTitle && titleRegular,
        largeTitle && titleLarge,
        style,
      ]}
      numberOfLines={numberOfLines && numberOfLines}
    >
      {text ? text : children}
    </UIKText>
  )
}

export default Text
