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
    color:'#495A66'
  },
  backImage: {
    width: 40,
    height: 40,
    right: 70,
  },

  logo: {
    width: 180,
    height: 180,
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
    marginBottom:20,
    color: Colors.nileblue,
    backgroundColor: Colors.white,
  },
  buttonWrapper: {
    height: 55,
    borderRadius: 80,
    marginTop:50
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
  topWrapper: {
    marginTop: 20,
    width: 320,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  errorBoxStyle: {marginTop:-10, paddingLeft: 25,marginBottom:8},
  errorStyle:{borderColor:'red',borderWidth:1}
});
