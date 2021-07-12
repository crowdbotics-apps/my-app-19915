import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Content} from 'native-base';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// components
import {Text, ProgressCircle, Avatar, MenuIcon, Footer} from 'src/components';
import {DataAvailability} from 'src/components';
// theme
import {Layout, Images, Gutters, Colors, Fonts} from 'src/theme';

// styles
import styles from './styles';

//actions
import {getDashboard} from './redux/actions';
import {getProfile} from '../MyAccount/redux/actions';

const Dashboard = (props) => {
  const {
    user,
    data,
    stepThreeData,
    profileData,
    requesting,
    navigation: {navigate},
  } = props;

  useEffect(() => {
    props.getDashboard();
    props.getProfile();
  }, []);
  const getTotalSeconds = () => {
    if (
      data &&
      data.dashboard &&
      data.dashboard &&
      data.dashboard.total_second
    ) {
      return data.dashboard.total_second;
    }
    return 0;
  };

  const getTotalCount = () => {
    if (
      data &&
      data.dashboard &&
      data.dashboard &&
      data.dashboard.total_count
    ) {
      return data.dashboard.total_count;
    }
    return 0;
  };

  const {titleSmall, textMedium} = Fonts;
  const {row, fill, center, justifyContentBetween} = Layout;
  const {mediumTMargin, smallTMargin, largeHMargin, smallBPadding} = Gutters;
  const {
    dashboardImg,
    progressWrapper,
    progressBarWrapper,
    buttonWrapper,
    dataWrapper,
    headerWrapper,
    smallCircleWrapper,
    bottomButtonWrapper,
  } = styles;
  console.log('stepThreeData', stepThreeData);
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <SafeAreaView style={[row, justifyContentBetween, headerWrapper]}>
          <MenuIcon grey action={() => props.navigation.openDrawer()} />
          <Avatar
            size="regular"
            imageUrl={profileData.image}
            action={() => navigate('MyAccount')}
          />
        </SafeAreaView>
        <Content contentContainerStyle={smallBPadding}>
          <View style={[center, progressWrapper]}>
            <ProgressCircle
              outerStrokeLinecap="round"
              size={295}
              progress={0.7}
              showsText={true}
              color={Colors.riverbed}
              formatText={() => ''}
              thickness={2}
              unfilledColor={Colors.loblolly}
            />
            <ProgressCircle
              size={260}
              progress={0.4}
              showsText={true}
              color={Colors.riverbed}
              formatText={() => ''}
              unfilledColor={Colors.loblolly}
              thickness={2}
              style={{position: 'absolute'}}
            />
            <Image source={Images.splash} style={dashboardImg} />
          </View>
          <View style={[fill, row, justifyContentBetween, progressBarWrapper]}>
            <View style={[smallCircleWrapper, center]}>
              <Text text="Smile seconds" color="riverbed" medium />
              <View style={smallTMargin}>
                <DataAvailability
                  requesting={requesting}
                  hasData={Boolean(data)}
                  style={dataWrapper}>
                  <ProgressCircle
                    size={90}
                    progress={getTotalSeconds() / 500}
                    thickness={3}
                    showsText={true}
                    color={Colors.riverbed}
                    formatText={() => `${getTotalSeconds()}s`}
                    unfilledColor={Colors.loblolly}
                  />
                </DataAvailability>
              </View>
            </View>
            <View style={[smallCircleWrapper, center]}>
              <Text text="Smile count" color="riverbed" medium />
              <View style={[smallTMargin, center]}>
                <DataAvailability
                  requesting={requesting}
                  hasData={Boolean(data)}
                  style={dataWrapper}>
                  <ProgressCircle
                    size={90}
                    progress={getTotalCount() / 500}
                    showsText={true}
                    thickness={3}
                    formatText={() => `${getTotalCount()}`}
                    color={Colors.riverbed}
                    unfilledColor={Colors.loblolly}
                  />
                </DataAvailability>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigate('CameraScreen')}>
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
                mediumTMargin,
              ]}>
              <Text style={titleSmall} text="Start smiling" color="river" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              {borderWidth: 1, borderColor: Colors.lightgolden},
              fill,
              row,
              center,
              largeHMargin,
              bottomButtonWrapper,
            ]}>
            <Image style={{marginHorizontal: 5}} source={Images.streak} />
            <Text
              style={textMedium}
              text="You’re on a 5 day smile streak"
              color="golden"
            />
          </TouchableOpacity>
        </Content>

        <Footer activeRoute="Home" navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.dashboard.data,
  user: state.app.user,
  requesting: state.dashboard.requesting,
  stepThreeData: state.stepThreeData.stepThreeData,
  profileData: state.profileData.profileData,
});

const mapDispatchToProps = (dispatch) => ({
  getDashboard: () => dispatch(getDashboard()),
  getProfile: () => dispatch(getProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
