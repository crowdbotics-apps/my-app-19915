import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  backImage: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },

  community: {marginHorizontal: 20},

  text: {
    lineHeight: 20,
  },

  progressWrapper: {height: 118},

  midWrapper: {
    borderWidth: 2,
    borderRadius: 50,
    height: 158,
    borderColor: Colors.easternblue,
  },
  addSpace: {backgroundColor: '#fff', height: 174},
  dataWrapper: {
    paddingVertical: 100,
  },
});
