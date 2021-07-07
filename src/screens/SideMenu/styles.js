import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  SideMenuContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: Colors.riverbed,
  },

  lightgolden: {
    backgroundColor: Colors.shuttlegray,
  },

  leftColumn: {
    backgroundColor: Colors.shuttlegray,
    width: 67,
  },

  rightColumn: {
    flex: 1,
    backgroundColor: Colors.riverbed,
  },

  menuItem: {
    height: 75,
    borderBottomWidth: 2,
    borderColor: Colors.shuttlegray,
  },

  textWrapper: {
    justifyContent: 'center',
    paddingRight: 30,
    paddingTop: 30,
    textAlign: 'right',
  },

  menuWrapper: {
    height: 74.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.shuttlegray,
  },

  activeMenu: {
    backgroundColor: Colors.riverbed,
  },

  logoutStyle: {
    borderBottomWidth: 0,
  },

  bottomBox: {
    backgroundColor: Colors.riverbed,
    height: 240,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoWrapper: {width: 190, height: 190},
});
