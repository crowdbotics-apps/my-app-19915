import React, {useState} from 'react';
import {Content} from 'native-base';
import {connect} from 'react-redux';
import {View, Image, TouchableOpacity, ImageBackground} from 'react-native';

// components
import {
  Text,
  Header,
  Footer,
  Avatar,
  MenuIcon,
  DataAvailability,
  ProgressCircle,
  SmileStone,
  GoalsCard,
} from 'src/components';
import {Layout, Images, Gutters, Fonts, Colors} from 'src/theme';

//actions
import {getGoals, getLevels, getStreaks} from './redux/actions';

// styles
import styles from './styles';
import {useEffect} from 'react/cjs/react.development';

const GoalScreen = (props) => {
  const {
    navigation: {navigate},
    streaks,
    smileGoals,
    requesting,
    profileData,
    smileLevel,
  } = props;

  useEffect(() => {
    props.getStreaks();
    props.getGoals();
    props.getLevels();
  }, []);

  const getAverage = () => {
    if (smileGoals && smileGoals.average) {
      return smileGoals.average;
    }
    return 0;
  };

  const goals = [profileData, smileGoals, smileLevel, streaks];

  const [active, setActive] = useState(6);
  const {
    row,
    fill,
    center,
    justifyContentBetween,
    wrap,
    positionA,
    alignItemsCenter,
  } = Layout;

  const {bold, textCenter, titleSmall, titleRegular} = Fonts;

  const {
    mediumTMargin,
    mediumHMargin,
    mediumBPadding,
    smallTMargin,
    mediumVMargin,
    small2xHMargin,
    smallVMargin,
    smallTPadding,
  } = Gutters;
  const {
    dayWrapper,
    activeDayWrapper,
    dayStyle,
    textWrapper,
    text2Wrapper,
    card,
    dataWrapper,
    cardsContainer,
    centerCard,
  } = styles;

  const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const days = ['24', '25', '26', '27', '28', '29', '30'];
  console.log('smileGoals', smileGoals);
  console.log('smileLevel', smileLevel);
  console.log('streaks', streaks);
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Header
          left={<MenuIcon grey action={() => props.navigation.openDrawer()} />}
          right={
            <Avatar
              size="regular"
              imageUrl={profileData.image}
              action={() => navigate('MyAccount')}
            />
          }
        />
        <Content contentContainerStyle={mediumBPadding}>
          <DataAvailability
            requesting={requesting}
            hasData={Boolean(goals)}
            style={dataWrapper}>
            <View style={[mediumHMargin, alignItemsCenter]}>
              <View style={row}>
                {weeks.map((week, i) => (
                  <View key={i} style={[row, fill, center]}>
                    <Text
                      style={dayWrapper}
                      text={week}
                      color="riverbed"
                      smallTextX
                    />
                  </View>
                ))}
              </View>
              <View style={row}>
                {days.map((day, i) => (
                  <TouchableOpacity
                    onPress={() => setActive(i)}
                    style={[row, fill, center, dayStyle]}
                    key={i}>
                    <Text
                      style={[active === i ? activeDayWrapper : dayWrapper]}
                      text={day}
                      color="riverbed"
                      smallTextX
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={[center, row, wrap, mediumVMargin]}>
              <Text text="Smile activity" style={titleRegular} />
              <Text bold text=" today" color="golden" style={titleRegular} />
              <Image source={Images.polygongolden} />
            </View>

            <View style={[fill, center]}>
              <View style={[center, smallTMargin]}>
                <ProgressCircle
                  size={258}
                  progress={smileGoals ? (1 * getAverage()) / 100 : 0}
                  showsText={false}
                  color={Colors.riverbed}
                  unfilledColor={Colors.loblolly}
                />
                <View style={[center, positionA, {top: 30}]}>
                  <Text
                    bold
                    text={`${smileGoals.average} %`}
                    color="riverbed"
                    style={textWrapper}
                  />
                  <Text color="riverbed" text="of goals" style={text2Wrapper} />
                  <Text
                    style={text2Wrapper}
                    color="riverbed"
                    text="completed today"
                  />
                  <Image
                    style={{position: 'absolute', top: 40, zIndex: 1}}
                    source={Images.profilecam}
                  />
                </View>
              </View>
            </View>

            <View
              style={[
                row,
                small2xHMargin,
                mediumVMargin,
                justifyContentBetween,
                alignItemsCenter,
              ]}>
              <Text text="Goals" color="riverbed" style={titleSmall} />
            </View>
            <View style={[smallVMargin, small2xHMargin]}>
              <View style={[row, justifyContentBetween]}>
                <GoalsCard
                  title="Smile seconds"
                  count={`${smileGoals.smile_second}s`}
                  description="Congratulations"
                  otherText={`You completed\nthis goal`}
                  isCompleted={smileGoals.goal_second_complete ? true : false}
                />
                <GoalsCard
                  title="Smile count"
                  count={`${smileGoals.smile_count}`}
                  description={`${smileGoals.remaining_count} more times`}
                  descriptionStyle={{fontWeight: 'bold'}}
                  otherText={`for your smile\ncount goal`}
                />
              </View>
            </View>

            <View style={[small2xHMargin, cardsContainer, mediumTMargin]}>
              <SmileStone
                containerStyle={[center, card]}
                imageSource={Images.levelboxgolden}
                textStyle={[textCenter, smallVMargin, titleSmall]}
                text="Level"
                subText={`${smileLevel.level}`}
                subTextStyle={[smallTPadding, titleRegular, bold]}
              />
              <SmileStone
                containerStyle={[center, card, centerCard]}
                imageSource={Images.lateststreakgolden}
                textStyle={[textCenter, titleSmall, smallVMargin]}
                text="Latest Streak"
                subText={`${
                  streaks.latest_Streak ? streaks.latest_Streak : 0
                }d`}
                subTextStyle={[titleRegular, bold]}
              />

              <SmileStone
                containerStyle={[center, card]}
                imageSource={Images.maxstreakgolden}
                textStyle={[textCenter, titleSmall, smallVMargin]}
                text="Max Streak"
                subText={`${streaks.max_streak ? streaks.max_streak : 0}`}
                subTextStyle={[titleRegular, bold]}
              />
            </View>
          </DataAvailability>
        </Content>
        <Footer activeRoute="Goals" navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

const mapStateToProps = (state) => ({
  requesting: state.Goals.requesting,
  profileData: state.profileData.profileData,
  smileGoals: state.Goals.smileGoals,
  smileLevel: state.Goals.smileLevel,
  streaks: state.Goals.streaks,
});

const mapDispatchToProps = (dispatch) => ({
  getGoals: () => dispatch(getGoals()),
  getLevels: () => dispatch(getLevels()),
  getStreaks: () => dispatch(getStreaks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalScreen);
