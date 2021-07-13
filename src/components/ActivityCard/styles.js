import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  imageWrapper: {
    borderRadius: 10,
    width: 176,
    height: 100,
  },
  card: {
    borderRadius: 5,
    height: 88,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    padding: 20,
    marginBottom: 10,
  },
  textWrapper: {height: 46, justifyContent: 'space-evenly'},
  iconStyle: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  favouriteicon: {
    width: 16,
    height: 15,
    marginRight: 8,
  },
});
