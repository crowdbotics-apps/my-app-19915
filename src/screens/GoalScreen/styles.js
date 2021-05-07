import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    height: 170,
    padding: 20,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.riverbed,
  },
  centerCard: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: Colors.riverbed,
  },

  goalsBottomCard: {
    height: 68,
    borderRadius: 10,
    backgroundColor: '#50ADBA',
  },
  textWrapper: {fontSize: 60, lineHeight: 60},
  text2Wrapper: {fontSize: 16, lineHeight: 30},
  bottomCardContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    height: 175,
    padding: 10,
    justifyContent: 'space-between',
  },
  checkedStyle:{
    backgroundColor:Colors.carrotorange,
    opacity:0.9
  }
});
