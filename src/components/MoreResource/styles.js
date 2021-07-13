import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  imageStyle: {
    width: 220,
    height: 140,
    position: 'absolute',
    right: 0,
    borderRadius: 10,
  },
  wrapper: {
    width: 180,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.secondary,
    zIndex: 1,
    borderRadius: 10,
  },

  container: {
    width: '100%',
    position: 'relative',
    height: 140,
    marginBottom: 20,
    justifyContent: 'center',
  },
});
