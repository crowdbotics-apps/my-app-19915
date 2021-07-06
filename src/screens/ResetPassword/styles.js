import { StyleSheet } from 'react-native';
import { Colors } from 'src/theme';

export default StyleSheet.create({
  icon: {
    color: Colors.secondary
  },
  heading: {
    fontSize: 60,
    lineHeight: 60
  },
  title: {
    fontSize: 20,
    lineHeight: 20
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
    marginTop: 30,
    borderRadius: 80
  },
  backArrowWrapper: {
    width: 44,
    height: 44,
    borderRadius: 4,
    borderWidth: 2,
  },
  topWrapper:{
    marginTop:40,
    width:320,
    flexDirection:"row"
  }
});