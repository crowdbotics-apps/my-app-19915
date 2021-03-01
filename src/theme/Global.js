/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { Colors } from './Variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  primary: {
    color: Colors.white
  },
  primaryBg: {
    backgroundColor: Colors.primary
  },
  secondaryBg: {
    backgroundColor: Colors.white
  },
  wildSandBg: {
    backgroundColor: Colors.wildsand
  },
  galleryBg: {
    backgroundColor: Colors.gallery
  },
  altoBg: {
    backgroundColor: Colors.alto
  },
  border: {
    borderWidth: 1,
  },
  borderColor: {
    borderColor: Colors.white
  },
  borderDustyGray: {
    borderColor: Colors.dustygray
  },
  borderB: {
    borderBottomWidth: 1
  },
  borderT: {
    borderTopWidth: 1
  },
  transparentBg: {
    backgroundColor: 'transparent'
  },
  borderR4: {
    borderRadius: 4
  },
  bottomShadow: {
    ...Platform.select({
      ios: {
        borderBottomWidth: 2,
        borderColor: Colors.shadyLady,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 8,
        shadowOpacity: 0.5,
      },
      android: {
        borderBottomWidth: 1,
        borderColor: Colors.shadyLady,
        shadowOffset: {
          width: 0,
          height: 30,
        },
        shadowRadius: 1,
        shadowOpacity: 0.3,
        elevation: 50,
      },
    }),
  },
  boxShadowStyle: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
      },
      android: {
        shadowRadius: 1,
        shadowOpacity: 1,
        elevation: 3,
      },
    }),
  },
  buttonWrapper: {
    width: 68,
    height: 33
  }
});
