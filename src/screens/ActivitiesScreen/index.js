import React, {useEffect} from 'react';

import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Content} from 'native-base';
import {connect} from 'react-redux';

//actions
import {getExercisesActivities, selectActivities} from './redux/actions';

//styles
import styles from './styles';

// components
import {
  Text,
  Header,
  MenuIcon,
  Avatar,
  Footer,
  ProgressCircle,
  ActivityCard,
} from 'src/components';
import {Gutters, Images, Layout, Fonts, Colors} from 'src/theme';
const {
  mediumVMargin,
  smallBMargin,
  smallLMargin,
  mediumHPadding,
  largeHMargin,
  largeXTMargin,
} = Gutters;

const {backImage, midWrapper, progressWrapper, buttonWrapper, upgradeNow} =
  styles;

const {
  row,
  center,
  fill,
  border,
  alignItemsCenter,
  justifyContentCenter,
  positionA,
} = Layout;

const {titleSmall, textLarge, textMedium} = Fonts;

const ActivitiesScreen = (props) => {
  const {
    requesting,
    activitiesExercises,
    navigation: {openDrawer},
  } = props;
  const Activities = [
    {title: 'Smile Activity 1', text: 'Recommened for you', favourity: true},
    {title: 'Smile Activity 2', text: 'Recommened for you'},
    {title: 'Smile Activity 3', text: 'Recommened for you'},
    {title: 'Smile Activity 4', text: 'Recommened for you', favourity: true},
  ];

  const Activity = [
    {title: 'Smile Activity 1', text: 'Recommened for you'},
    {title: 'Smile Activity 2', text: 'Recommened for you'},
    {title: 'Smile Activity 3', text: 'Recommened for you'},
    {title: 'Smile Activity 4', text: 'Recommened for you'},
  ];

  useEffect(() => {
    props.getExercisesActivities();
  }, []);
  console.log('activitiesExercises', activitiesExercises);

  const onSelectActivity = (item) => {
    props.selectActivities(item);
    console.log('selectedItem',item);
  };
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Header
          left={<MenuIcon grey action={() => props.navigation.openDrawer()} />}
          right={<Avatar size="regular" />}
        />
        <View style={[row, center, alignItemsCenter, smallBMargin]}>
          <Text text="Activities" color="river" style={titleSmall} />
        </View>
        <Content contentContainerStyle={mediumHPadding}>
          <View
            style={[
              mediumVMargin,
              border,
              row,
              justifyContentCenter,
              alignItemsCenter,
              midWrapper,
            ]}>
            <View style={[progressWrapper]}>
              <View style={[center]}>
                <ProgressCircle
                  size={100}
                  strokeCap="round"
                  progress={0.6}
                  thickness={5}
                  showsText={false}
                  color={Colors.golden}
                  unfilledColor={Colors.lightgolden}
                />
                <Image
                  style={[positionA]}
                  source={Images.progressimagegolden}
                />
              </View>
            </View>
            <View>
              <Text
                color="lightgolden"
                style={[smallLMargin, smallBMargin, textMedium]}
                text={'Smile to continue\nyour 24 day streak'}
              />
              <Text
                color="lightgolden"
                style={[smallLMargin, smallBMargin, textMedium]}
                text={'Your longest smile\nstreak has been 38 days'}
              />
            </View>
          </View>
          <View>
            {activitiesExercises &&
              activitiesExercises.map((item, i) => (
                <TouchableOpacity onPress={() => onSelectActivity(item)}>
                  <ActivityCard
                    key={i}
                    title={item.exercise_name}
                    text={item.title}
                  />
                </TouchableOpacity>
              ))}
          </View>
          {/* <View>
            <TouchableOpacity>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#56D3FB', '#53F4EB']}
                style={[
                  fill,
                  row,
                  center,
                  largeHMargin,
                  buttonWrapper,
                  largeXTMargin,
                ]}>
                <Text
                  style={textLarge}
                  text="Upgrade now to view more exercises"
                  color="riverbed"
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={upgradeNow}>
            {activitiesExercises && activitiesExercises.map((item, i) => (
              <ActivityCard key={i} />
            ))}
          </View> */}
        </Content>
        <Footer activeRoute="Activity" navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

const mapStateToProps = (state) => ({
  requesting: state.activitiesExercises.requesting,
  activitiesExercises: state.activitiesExercises.activitiesExercises,
});

const mapDispatchToProps = (dispatch) => ({
  getExercisesActivities: () => dispatch(getExercisesActivities()),
  selectActivities: (item) => dispatch(selectActivities(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesScreen);
