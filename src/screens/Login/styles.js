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

  logo: {
    width: 160,
    height: 160,
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
  checkBoxWrapper: {
    borderRadius: 5,
    marginRight: 25,
    backgroundColor: Colors.white,
  },
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
  bgColor: {
    backgroundColor: Colors.nileblue
  },

  errorBoxStyle: {paddingTop: 13, paddingLeft: 25,marginBottom:8},
  errorStyle:{borderColor:'red',borderWidth:1}
  
});
