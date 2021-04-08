import React from 'react';
import { Content } from 'native-base';
import { View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


// components
import {
  Text,
  Header,
  ProgressCircle,
  Footer,
  Avatar,
  MenuIcon,
  CustomButton
} from 'src/components';
import { Layout, Images, Gutters, Colors, Fonts } from 'src/theme';

// styles
import styles from './styles';

const Dashboard = () => {
  const { titleSmall } = Fonts;
  const { row, fill, center, justifyContentBetween } = Layout;
  const { mediumTMargin, mediumBPadding, largeHMargin, largeXTMargin } = Gutters;
  const { dashboardImg, progressBarWrapper, buttonWrapper } = styles;

  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Content contentContainerStyle={mediumBPadding}>
          <Header
            left={<MenuIcon />}
            right={<Avatar size="regular" />}
          />
          <View style={[fill, center, { top: -50 }]}>
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
              style={{ position: 'absolute' }}
            />
            <Image source={Images.splash} style={dashboardImg} />
          </View>
          <View style={[fill, row, justifyContentBetween, progressBarWrapper]}>
            <View>
              <Text text='Smile seconds' color='primary' medium />
              <View style={mediumTMargin}>
                <ProgressCircle
                  size={100}
                  progress={0.4}
                  thickness={5}
                  showsText={true}
                  color={Colors.primary}
                  formatText={() => '180s'}
                  unfilledColor={Colors.viking}
                />
              </View>
            </View>
            <View>
              <Text text='Smile count' color='primary' medium />
              <View style={mediumTMargin}>
                <ProgressCircle
                  size={100}
                  progress={0.4}
                  showsText={true}
                  thickness={5}
                  formatText={() => '24'}
                  color={Colors.primary}
                  unfilledColor={Colors.viking}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
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

          <TouchableOpacity style={[{ borderWidth: 1.5, borderColor: Colors.primary },
            fill,
            row,
            center,
            largeHMargin,
            buttonWrapper,
            mediumTMargin,]}>

            <Text style={titleSmall} text="You’re on a 5 day smile streak" color="primary" />

          </TouchableOpacity>
        </Content>
        {/* <Footer light /> */}
      </ImageBackground>
    </>
  );
};

export default Dashboard
