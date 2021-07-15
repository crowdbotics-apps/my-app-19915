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
    color: '#495A66',
  },
  backImage: {
    width: 40,
    height: 40,
  },

  logo: {
    width: 180,
    height: 180,
    right: 10,
    top: 20,
    resizeMode: 'contain',
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
    marginBottom: 20,
    color: Colors.nileblue,
    backgroundColor: Colors.white,
  },
  buttonWrapper: {
    height: 55,
    borderRadius: 80,
    marginTop: 50,
  },
  activityIndicatorWrapper: {
    paddingTop: 65,
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
  topWrapper: {position: 'absolute', top: 30, left: 30, zIndex: 2},

  errorBoxStyle: {marginTop: -10, paddingLeft: 25, marginBottom: 8},
  errorStyle: {borderColor: 'red', borderWidth: 1},
});
