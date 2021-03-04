/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  white: '#ffffff',
  black: '#000000',
  primary: '#07808F',
  secondary: '#ffffff',
  deepsapphire: '#093766',
  cinnamon: '#795401',
  nileblue: '#184653',
  goldenrod: '#FFD46F',
  viking: '#6ECFDC',

  error: '#dc3545',
}

/**
 * FontSize
 */
export const FontSize = {
  small: 10,
  regular: 12,
  medium: 16,
  large: 18,
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 5
const small = tiny * 2 // 10
const small2x = small * 2 // 20
const regular = tiny * 3 // 15
const medium = regular * 2 // 30
const mediumX = small2x * 2 // 40
const large = regular * 3 // 45
const largeX = mediumX + regular // 55
export const MetricsSizes = {
  tiny,
  small,
  small2x,
  regular,
  medium,
  mediumX,
  large,
  largeX
}
