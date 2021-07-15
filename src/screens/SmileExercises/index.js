import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {Content} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';

//styles
import styles from './styles';

//actions
import {getExercises, markFavourite} from './redux/actions';
import {getExercisesActivities} from '../ActivitiesScreen/redux/actions';

// components
import {Text, Header, MenuIcon, Avatar, DataAvailability} from 'src/components';
import {Gutters, Images, Layout, Fonts} from 'src/theme';
const {
  mediumBPadding,
  mediumVMargin,
  smallBMargin,
  smallTMargin,
  mediumHMargin,
} = Gutters;

const {backImage, star, text, image, dataWrapper} = styles;

const {row, fill, fill2x, alignItemsCenter, justifyContentCenter} = Layout;

const {titleSmall, titleRegular, textMedium} = Fonts;

const SmileExercises = (props) => {
  const {
    route: {
      params: {selectedActivity},
    },
    navigation: {navigate, openDrawer},
    user,
    profileData,
    requesting,
  } = props;

  useEffect(() => {
    props.getExercises();
    props.getExercisesActivities();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      //On Enter
      props.getExercises();
      props.getExercisesActivities();
      console.log('Enter');
      //On Exit
      return () => console.log('Exit');
    }, []),
  );

  const onFavourite = () => {
    const data = {
      user: user.id,
      favorite_exercise: selectedActivity.id,
    };
    console.log('data', data);
    props.markFavourite(data);
  };

  console.log('selectedActivity', selectedActivity);
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Header
          left={<MenuIcon grey action={() => openDrawer()} />}
          right={
            <Avatar
              size="regular"
              imageUrl={profileData.image}
              action={() => navigate('MyAccount')}
            />
          }
        />
        <DataAvailability
          requesting={requesting}
          hasData={Boolean(selectedActivity)}
          style={dataWrapper}>
          <View style={[row, alignItemsCenter, smallBMargin]}>
            <View style={fill}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image source={Images.camarrowback} style={backImage} />
              </TouchableOpacity>
            </View>
            <View style={[fill2x, justifyContentCenter]}>
              <Text
                bold
                text={selectedActivity.exercise_name}
                color="river"
                style={[titleSmall]}
              />
            </View>
          </View>
          <Content contentContainerStyle={mediumBPadding}>
            <View style={[smallTMargin]}>
              <View style={star}>
                <TouchableOpacity onPress={(data) => onFavourite(data)}>
                  <Image
                    source={
                      selectedActivity.is_favorite
                        ? Images.bigstar
                        : Images.star
                    }
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{width: 50, height: 50}}
                  />
                </TouchableOpacity>
              </View>
              <Image
                source={{uri: selectedActivity.image_or_video}}
                style={image}
              />
            </View>
            <View style={[mediumHMargin]}>
              <Text
                color="river"
                text={selectedActivity.title}
                style={[titleRegular, mediumVMargin]}
              />
              <Text
                color="river"
                style={[textMedium, text]}
                text={selectedActivity.description}
              />
            </View>
          </Content>
          {/* <Footer /> */}
        </DataAvailability>
      </ImageBackground>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  requesting: state.exercises.requesting,
  profileData: state.profileData.profileData,
});

const mapDispatchToProps = (dispatch) => ({
  getExercises: () => dispatch(getExercises()),
  getExercisesActivities: () => dispatch(getExercisesActivities()),
  markFavourite: (data) => dispatch(markFavourite(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SmileExercises);
