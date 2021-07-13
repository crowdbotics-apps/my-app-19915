import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bgPrimary: {backgroundColor: '#DDEDFF'},
  bgSecondary: {backgroundColor: '#CBE9E2'},
  bgTertiary: {backgroundColor: '#EAF8D4'},
  bgQuaternary: {backgroundColor: '#F6E8B8'},

  textPrimary: {color: '#6997CB'},
  textSecondary: {color: '#5C9F9A'},
  textTertiary: {color: '#92AB69'},
  textQuaternary: {color: '#FFB156'},

  cardWrapper: {
    borderRadius: 10,
    marginRight: 7,
    paddingHorizontal: 20,
    paddingVertical: 30,
    flex: 1,
  },
  unCompletedStyle: {
    height: 198,
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  CompletedStyle: {
    height: 198,
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#EF9919',
    opacity: 0.5,
  },
});
