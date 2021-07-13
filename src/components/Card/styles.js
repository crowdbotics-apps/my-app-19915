import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    width: 269,
  },
  mainWrapper: {
    width: 269,
    paddingHorizontal: 16,
    borderRadius: 10,
    height: 111,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  imageStyle: {
    width: 269,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  parentImage: {
    borderRadius: 10,
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
