import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  SideMenuContainer: {
    position:"absolute",
    flexDirection: 'row',
    width: '100%',
    height:'100%',
    backgroundColor: Colors.riverbed,
  },
  toggleIcon: {
    alignItems:"center",
    justifyContent:"center",
    width:67,
    height:65,
    borderBottomWidth: 2,
    borderColor: Colors.shuttlegray,
  },
  lightgolden: {
    backgroundColor: Colors.shuttlegray,
  },
  leftColumn: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.shuttlegray,
  },
  textWrapper: {
    justifyContent: 'center',
    width: 260,
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
  userWrapper:
    {alignSelf: 'center',
     marginBottom: 10},
  
     topIconWrapper:
    {
      marginTop: 20,
      height: 130,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
  topText: {
    justifyContent: 'center',
    width: 298,
    height: 35,
    marginRight: 20,
    marginTop: 30,
    paddingRight: 30,
    textAlign: 'right',
    borderBottomWidth: 2,
    borderColor: Colors.shuttlegray,
  },
  leftSmallColumn: {width: 67, height: '100%'},
  rightColumn: {
    width: 280,
    height: '100%',
    backgroundColor: Colors.riverbed,
    alignItems: 'center',
  },
  bottomBox: {
    backgroundColor: Colors.riverbed,
    width: 240,
    height: 268,
    marginVertical: 10,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
