import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Content} from 'native-base';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';

// components
import {
  Text,
  Header,
  Footer,
  Avatar,
  MenuIcon,
  SmileCountablity,
} from 'src/components';
import {Layout, Images, Gutters} from 'src/theme';

// styles
import styles from './styles';

const StatScreen = (props) => {
  const {
    navigation: {navigate},
    profileData,
    stats,
  } = props;

  console.log('stats', stats);

  const [active, setActive] = useState(6);
  const {row, fill, center, wrap, alignItemsCenter} = Layout;
  const {regularVMargin, mediumHMargin, mediumBPadding} = Gutters;
  const {dayWrapper, activeDayWrapper, dayStyle} = styles;

  const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const days = ['24', '25', '26', '27', '28', '29', '30'];

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
          <View
            style={[
              center,
              row,
              wrap,
              mediumHMargin,
              regularVMargin,
              alignItemsCenter,
            ]}>
            <Text text="Statistics for " color="riverbed" regularTitle />
            <Text text="today" color="golden" regularTitle bold />
            <Image source={Images.polygongolden} />
          </View>

          <SmileCountablity
            marginTop
            dateText
            date={`${
              stats && stats.best_day ? stats.best_day.created__date : 0
            }`}
            text="Best smile day"
            description="Day with highest number of smiles"
          />
          <SmileCountablity
            subText={`${
              stats
                ? stats && stats.latest_Streak <= 1
                  ? `${stats.latest_Streak}day`
                  : `${stats.latest_Streak}days`
                : '0'
            }`}
            text="Recent smile streak"
            description="Days in a row with at least one smile"
          />
          <SmileCountablity
            lineChart
            subText={`${stats ? stats.dashboard.total_second : 0}s`}
            text="Length of smile"
            description="Average duration of smiles"
          />
          <SmileCountablity
            lineChart
            subText={`${stats ? stats.dashboard.max_smile : 0}s`}
            text="Longest smile"
            description="Average duration of smiles"
          />
          <SmileCountablity
            barChart
            subText={`${
              stats
                ? stats && stats.max_streak <= 1
                  ? `${stats.max_streak}day`
                  : `${stats.max_streak}days`
                : '0'
            }`}
            text="Best smile streak"
            description="Days in a row with at least one smile"
          />
        </Content>
        <Footer activeRoute="Stats" navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

const mapStateToProps = (state) => ({
  stats: state.Goals.streaks,
  profileData: state.profileData.profileData,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, null)(StatScreen);
