import React, { useState } from 'react';
import { Content } from 'native-base';
import { View, TouchableOpacity, ImageBackground,Image } from 'react-native';

// components
import {
  Text,
  Header,
  Footer,
  Avatar,
  MenuIcon,
  SmileCountablity,
} from 'src/components';
import { Layout, Images, Gutters, Fonts, Colors } from 'src/theme';

// styles
import styles from './styles';

const StatScreen = (props) => {
  const [active, setActive] = useState(6)
  const { row, fill, center, wrap, positionA, alignItemsCenter } = Layout;
  const { regularVMargin, mediumHMargin, mediumBPadding } = Gutters;
  const { dayWrapper, activeDayWrapper, dayStyle } = styles;

  const weeks = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ]
  const days = [
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30'
  ]

  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Content contentContainerStyle={mediumBPadding}>
          <Header
            left={<MenuIcon grey action={() => props.navigation.openDrawer()} />}
            right={<Avatar size='regular' />}
          />
          <View style={[mediumHMargin, alignItemsCenter]}>
            <View style={row}>
              {weeks.map((week, i) => (
                <View key={i}
                  style={[row, fill, center]}>
                  <Text
                    style={dayWrapper}
                    text={week}
                    color='riverbed'
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
                  key={i}
                >
                  <Text
                    style={[active === i ? activeDayWrapper : dayWrapper]}
                    text={day}
                    color='riverbed'
                    smallTextX
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={[
            center,
            row,
            wrap,
            mediumHMargin,
            regularVMargin,
            alignItemsCenter,
          ]}
          >
            <Text text='Statistics for ' color='riverbed' regularTitle />
            <Text text="today" color="golden" regularTitle bold />
            <Image source={Images.polygongolden} />
          </View>
          

          <SmileCountablity
            marginTop
            dateText
            date="Saturday, 29.01"
            text='Best smile day'
            description="Day with highest number of smiles"
          />
          <SmileCountablity
            subText="5 days"
            text='Recent smile streak'
            description="Days in a row with at least one smile"
          />
          <SmileCountablity
            lineChart
            subText="24s"
            text='Length of smile'
            description="Average duration of smiles"
          />
          <SmileCountablity
            lineChart
            subText="32s"
            text='Longest smile'
            description="Average duration of smiles"
          />
          <SmileCountablity
            barChart
            subText="25 days"
            text='Best smile streak'
            description="Days in a row with at least one smile"
          />
          <SmileCountablity
            barChart
            subText="25 days"
            text='Best smile streak'
            description="Days in a row with at least one smile"
          />

        </Content>
        <Footer activeRoute='Stats' navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

export default StatScreen
