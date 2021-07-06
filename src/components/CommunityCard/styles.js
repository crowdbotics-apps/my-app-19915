import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  textWrapper: {
    height: 188,
    width: 374,
    backgroundColor: '#BC6971',
    opacity: 0.5,
    padding: 20,
  },
  image: {
    width: 374,
    height: 374,
    resizeMode: 'contain',
    //borderRadius: 12,
  },
  icon: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 1,
    marginLeft: 300,
    marginTop: 15,
  },
  cardWrapper: {
    overflow: 'hidden',
    marginBottom: 20,
    borderRadius: 12,
  },
});
