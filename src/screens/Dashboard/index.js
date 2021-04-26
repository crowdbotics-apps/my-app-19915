import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Content} from 'native-base';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// components
import {Text, Header, ProgressCircle, Avatar, MenuIcon,Footer} from 'src/components';
import {DataAvailability} from 'src/components';
// theme
import {Layout, Images, Gutters, Colors, Fonts,FooterImages} from 'src/theme';

// styles
import styles from './styles';

//actions
import {getDashboard} from './redux/actions';

const Dashboard = props => {
  const {data, requesting} = props;
  useEffect(() => {
    props.getDashboard();
  }, []);
console.log(data);
  const {titleSmall, textLarge} = Fonts;
  const {row, fill, center, justifyContentBetween} = Layout;
  const {
    mediumTMargin,
    mediumBPadding,
    largeHMargin,
    largeXTMargin,
    smallHPadding,
    smallVMargin
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
            left={<MenuIcon action={() => props.navigation.openDrawer()} />}
            right={<Avatar size="regular" />}
          />
          <View style={[fill, center,smallVMargin]}>
            <ProgressCircle
              size={340}
              progress={0.7}
              showsText={true}
              color={Colors.primary}
              formatText={() => ''}
              thickness={2}
              unfilledColor={Colors.viking}
            />
            <ProgressCircle
              size={300}
              progress={0.4}
              showsText={true}
              color={Colors.primary}
              formatText={() => ''}
              unfilledColor={Colors.viking}
              thickness={2}
              style={{position: 'absolute'}}
            />
            <Image source={Images.splash} style={dashboardImg} />
          </View>
          <View style={[fill, row, justifyContentBetween, progressBarWrapper]}>
            <View style={[mediumTMargin,center]}>
              <Text text="Smile seconds" color="primary" medium />
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
                    color={Colors.primary}
                    formatText={() =>
                      `${
                        data && data.dashboard.length>0
                          ? data.dashboard[0].total_second
                          : 0
                      }s`
                    }
                    unfilledColor={Colors.viking}
                  />
                </DataAvailability>
              </View>
            </View>
            <View style={[mediumTMargin,center]}>
              <Text text="Smile count" color="primary" medium />
              <View style={[mediumTMargin,center]}>
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
                        data && data.dashboard.count>0
                          ? data.dashboard[0].total_count
                          : 0
                      }s`
                    }
                    color={Colors.primary}
                    unfilledColor={Colors.viking}
                  />
                </DataAvailability>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#EF9919', '#FFD46F']}
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
              {borderWidth: 1.5, borderColor: Colors.primary},
              fill,
              row,
              center,
              largeHMargin,
              bottomButtonWrapper,
              mediumTMargin,
            ]}>
            <Image source={Images.streak} />
            <Text
              style={[smallHPadding, textLarge]}
              text="You’re on a 5 day smile streak"
              color="primary"
            />
          </TouchableOpacity>
        </Content>
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
