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
    borderRadius: 80
  },
  modalWrapper: {
    backgroundColor: Colors.nileblue
  },
  backArrowWrapper: {
    width: 44,
    height: 44,
    borderWidth: 2,
    borderRadius: 4,
  }
});