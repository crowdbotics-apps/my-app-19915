import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  icon: {
    color: Colors.secondary,
  },
  heading: {
    fontSize: 50,
    lineHeight: 50,
    marginTop: 20,
    textAlign: 'center',
  },
  backImage: {
    width: 40,
    height: 40,
    right: 70,
  },

  logo: {
    width: 160,
    height: 160,
    right: 15,
  },
  title: {
    fontSize: 18,
    lineHeight: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  fieldWrapper: {
    height: 55,
    fontSize: 14,
    borderRadius: 30,
    color: Colors.nileblue,
    backgroundColor: Colors.white,
  },
  buttonWrapper: {
    height: 55,
    borderRadius: 80,
  },
  activityIndicatorWrapper: {
    paddingTop: 70,
  },
  modalWrapper: {
    backgroundColor: Colors.nileblue,
  },

  social: {width: 40, height: 40, resizeMode: 'contain'},
  backArrowWrapper: {
    width: 44,
    height: 44,
    borderWidth: 2,
    borderRadius: 4,
  },
  topWrapper: {
    marginTop: 20,
    width: 320,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  errorStyle: {paddingTop: 10, paddingLeft: 25,marginBottom:5},
});
