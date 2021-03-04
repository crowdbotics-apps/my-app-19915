import React from 'react';
import { Content } from 'native-base';
import { View, ImageBackground, Image } from 'react-native';

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
import { Layout, Images, Gutters } from 'src/theme';

// styles
import styles from './styles';

const Dashboard = () => {
  const { row, fill, center, justifyContentBetween } = Layout;
  const { mediumTMargin, mediumBPadding } = Gutters;
  const { dashboardImg, progressBarWrapper } = styles;

  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Content contentContainerStyle={mediumBPadding}>
          <Header
            left={<MenuIcon />}
            right={<Avatar size='small' />}
          />
          <View style={[fill, center]}>
            <Image source={Images.dashboard} style={dashboardImg} />
          </View>
          <View style={[fill, row, justifyContentBetween, progressBarWrapper]}>
            <View>
              <Text text='Smile seconds' color='secondary' medium bold />
              <View style={mediumTMargin}>
                <ProgressCircle
                  size={100}
                  progress={0.4}
                  formatText={() => '180s'}
                />
              </View>
            </View>
            <View>
              <Text text='Smile count' color='secondary' medium bold />
              <View style={mediumTMargin}>
                <ProgressCircle
                  size={100}
                  progress={0.4}
                  formatText={() => '24'}
                />
              </View>
            </View>
          </View>
          <CustomButton text='Start smiling' />
          <CustomButton text='Check your goals' />
        </Content>
        <Footer />
      </ImageBackground>
    </>
  );
};

export default Dashboard
