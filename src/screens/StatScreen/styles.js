import { StyleSheet } from 'react-native';
import { Colors } from 'src/theme';

export default StyleSheet.create({
  dayWrapper: {
    width: 50,
    height: 30,
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  activeDayWrapper: {
    width: 40,
    height: 40,
    paddingTop: 14,
    borderRadius: 40,
    textAlign: 'center',
    backgroundColor: Colors.goldenrod
  },
  progressBarWrapper: {
    marginHorizontal: 49
  },
  dayStyle: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  textWrapper: { fontSize: 60, lineHeight: 60 },
  text2Wrapper: { fontSize: 16, lineHeight: 50 }
});