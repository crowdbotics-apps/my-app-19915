import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';
export default StyleSheet.create({
  quoteBox: {
    width: 316,
    height: 354,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginVertical: 30,
  },
  topDoubleQuotesWrapper: {
    height: 20,
  },
  topDoubleQuotes: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 120,
    lineHeight: 120,
  },
  centerTextWrapper: {
    justifyContent: 'center',
    marginTop: 60,
    height: 200,
  },
  centerText: {
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  bottomDoubleQuotesWrapper: {
    height: 20,
    lineHeight: 20,
    marginRight: 20,
  },
  bottomDoubleQuotes: {
    fontSize: 120,
    lineHeight: 120,
    width: 60,
    height: 50,
  },
  dataWrapper: {
    paddingVertical: 300,
  },
  buttonWrapper: {
    width: '100%',
    height: 60,
    borderRadius: 80,
    alignSelf: 'center',
    padding: 5,
    top: -30,
  },
  backImage: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },
  midWrapper: {
    borderWidth: 2,
    borderRadius: 65,
    height: 145,
    borderColor: Colors.lightgolden,
  },
  progressWrapper: {height: 110},
  textWrapper:{height:72,alignSelf:'center'}
});
