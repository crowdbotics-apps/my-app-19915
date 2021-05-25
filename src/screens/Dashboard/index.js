import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Content} from 'native-base';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// components
import {
  Text,
  Header,
  ProgressCircle,
  Avatar,
  MenuIcon,
  Footer,
} from 'src/components';
import {DataAvailability} from 'src/components';
// theme
import {Layout, Images, Gutters, Colors, Fonts} from 'src/theme';

// styles
import styles from './styles';

//actions
import {getDashboard} from './redux/actions';

const Dashboard = props => {
  const {
    data,
    requesting,
    navigation: {navigate},
  } = props;

  useEffect(() => {
    props.getDashboard();
  }, []);
  const {titleSmall, textMedium} = Fonts;
  const {row, fill, center, justifyContentBetween} = Layout;
  const {
    mediumTMargin,
    mediumBPadding,
    largeHMargin,
    largeXTMargin,
    smallVMargin,
  } = Gutters;
  const {
    dashboardImg,
    progressBarWrapper,
    buttonWrapper,
    dataWrapper,
    bottomButtonWrapper,
  } = styles;

  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Content contentContainerStyle={mediumBPadding}>
          <Header
            left={
              <MenuIcon grey action={() => props.navigation.openDrawer()} />
            }
            right={<Avatar size="regular" />}
          />
          <View style={[fill, center, smallVMargin]}>
            <ProgressCircle
              outerStrokeLinecap="round"
              size={325}
              progress={0.7}
              showsText={true}
              color={Colors.riverbed}
              formatText={() => ''}
              thickness={2}
              unfilledColor={Colors.loblolly}
            />
            <ProgressCircle
              size={285}
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
            <View style={[mediumTMargin, center]}>
              <Text text="Smile seconds" color="riverbed" medium />
              <View style={mediumTMargin}>
                <DataAvailability
                  requesting={requesting}
                  hasData={Boolean(data)}
                  style={dataWrapper}>
                  <ProgressCircle
                    size={100}
                    progress={0.4}
                    thickness={5}
                    showsText={true}
                    color={Colors.riverbed}
                    formatText={() =>
                      `${
                        data
                          ? data.dashboard.total_second
                          : 0
                      }s`
                    }
                    unfilledColor={Colors.loblolly}
                  />
                </DataAvailability>
              </View>
            </View>
            <View style={[mediumTMargin, center]}>
              <Text text="Smile count" color="riverbed" medium />
              <View style={[mediumTMargin, center]}>
                <DataAvailability
                  requesting={requesting}
                  hasData={Boolean(data)}
                  style={dataWrapper}>
                  <ProgressCircle
                    size={100}
                    progress={0.4}
                    showsText={true}
                    thickness={5}
                    formatText={() =>
                      `${
                        data
                          ? data.dashboard.total_count
                          : 0
                      }s`
                    }
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
                largeXTMargin,
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
              mediumTMargin,
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

const mapStateToProps = state => ({
  data: state.dashboard.data,
  requesting: state.dashboard.requesting,
});

const mapDispatchToProps = dispatch => ({
  getDashboard: () => dispatch(getDashboard()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
