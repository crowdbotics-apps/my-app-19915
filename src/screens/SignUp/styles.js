import { StyleSheet } from 'react-native';
import { Colors } from 'src/theme';

export default StyleSheet.create({
  icon: {
    color: Colors.secondary
  },
  heading: {
    fontSize: 60,
    lineHeight: 60,
    marginTop:39
  },
  title: {
    fontSize: 20,
    lineHeight: 20,
    marginBottom:40
  },
  fieldWrapper: {
    height: 60,
    fontSize: 14,
    borderRadius: 30,
    color: Colors.nileblue,
    backgroundColor: Colors.white
  },
  buttonWrapper: {
    height: 60,
    borderRadius: 80
  },
  activityIndicatorWrapper:{
    paddingTop:70
  },
  modalWrapper: {
    backgroundColor: Colors.nileblue
  },
  backArrowWrapper: {
    width: 44,
    height: 44,
    borderWidth: 2,
    borderRadius: 4,
  },
  topWrapper:{
    marginTop:40,
    width:320,
    flexDirection:"row"
  }

});