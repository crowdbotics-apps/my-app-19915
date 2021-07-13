import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    height: 374,
  },
  mainWrapper: {
    paddingHorizontal: 16,
    borderRadius: 30,
    height: 188,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  imageStyle: {
    resizeMode: 'cover',
    borderRadius: 30,
    width: '100%',
  },
  parentImage: {
    borderRadius: 30,
  },
  textWrapper: {
    fontSize: 30,
    lineHeight: 30,
  },
  lastAvatar: {
    left: -30,
    zIndex: 333,
    borderRadius: 30,
    width: 35,
    height: 35,
  },
});
