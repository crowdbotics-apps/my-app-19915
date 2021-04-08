import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  textWrapper: {
    width: 400,
    height: 40,
    backgroundColor: Colors.pelorous,
    borderBottomWidth: 1,
    borderColor: '#4bd8eb',
  },
  camButtonsWrapper: {
    width: 400,
    height: 100,
    backgroundColor: Colors.riverbed,
  },
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topButtonWrapper: {
    zIndex: 1,
    position: 'absolute',
  },
  sliderWrapper: {
    zIndex: -1,
  },
  filtersWrapper:{
    backgroundColor: Colors.pelorous, 
    height: 118,
  },
  camButtonsWrapper: {
    width: '100%',
    height: 100,
    backgroundColor: Colors.pelorous,
  },
  
  subTextWrapper: {
    backgroundColor: Colors.pelorous,
    height: 110,
    
  },
  
});
