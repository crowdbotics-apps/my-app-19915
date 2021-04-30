import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  backImage: {
    width: 45,
    height: 45,
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 60,
    lineHeight: 60},
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
  image: {width: 210, height: 210},
  userProfile: {
    alignSelf: 'center',
    flex: 1,
    borderRadius: 110,
    width: 210,
    height: 210,
    marginBottom: 40,
  },
  buttonWrapper: {
    height: 60,
    borderRadius: 80,
  },
  profilecam: {position: 'absolute', top: 70, right: 30},
  resource: {marginLeft: 60},
});
