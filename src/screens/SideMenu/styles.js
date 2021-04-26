import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  SideMenuContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.riverbed,
  },

  lightgolden: {
    backgroundColor: Colors.shuttlegray,
  },

  leftColumn: {
    backgroundColor: Colors.shuttlegray,
    width: 67,
    height: '100%',
  },

  textWrapper: {
    justifyContent: 'center',
    width: 263,
    height: 75,
    paddingRight: 30,
    paddingTop: 30,
    borderBottomWidth: 2,
    borderColor: Colors.shuttlegray,
    textAlign: 'right',
  },
  bottomWrapper: {
    justifyContent: 'center',
    width: 280,
    height: 75,
    paddingRight: 30,
    paddingTop: 30,
    textAlign: 'right',
  },
  
  menuWrapper: {
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  activeMenu: {
    backgroundColor: Colors.riverbed,
  },

  rightColumn: {
    width: 250,
    backgroundColor: Colors.riverbed,
    alignItems: 'center',
  },

  bottomBox: {
    backgroundColor: Colors.riverbed,
    width: 240,
    height: 240,
    marginVertical: 10,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoWrapper: {width: 190, height: 190},
});
