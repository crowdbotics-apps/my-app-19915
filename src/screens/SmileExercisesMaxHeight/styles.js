import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  backImage: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },

  resource: {marginLeft: 45},

  text: {
    lineHeight: 20,
  },

  progressWrapper: {height: 110},

  midWrapper: {
    paddingTop: 8,
    borderWidth: 2,
    borderRadius: 70,
    height: 150,
    borderColor: Colors.lightgolden,
    alignItems: 'center',
  },
  addSpace: {backgroundColor: '#fff', height: 174},
  dataWrapper: {
    paddingVertical: 230,
  },
});
