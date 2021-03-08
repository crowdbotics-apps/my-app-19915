import React, { useState } from 'react';
import { Content } from 'native-base';
import { View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

// components
import {
  Text,
  Header,
  Footer,
  Avatar,
  MenuIcon,
  Progress,
  CardHeader,
  ProgressCircle,
  SmileCountablity,
} from 'src/components';
import { Layout, Images, Gutters, Fonts, Colors } from 'src/theme';

// styles
import styles from './styles';

const Stats = () => {
  const [active, setActive] = useState(6)
  const { row, fill, center, wrap, positionA, alignItemsCenter } = Layout;
  const { mediumTMargin, mediumVMargin, regularVMargin, mediumHMargin, mediumBPadding } = Gutters;
  const { dayWrapper, activeDayWrapper, dayStyle, textWrapper, text2Wrapper } = styles;

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
            left={<MenuIcon />}
            right={<Avatar size='small' />}
          />
          <View style={[
            row,
            wrap,
            mediumHMargin,
            regularVMargin,
            alignItemsCenter,
          ]}
          >
            <Text text='Statistics for ' color='secondary' regularTitle />
            <Text text="week ..." color="octonary" regularTitle bold />
          </View>
          <View style={[mediumHMargin, alignItemsCenter]}>
            <View style={row}>
              {weeks.map((week, i) => (
                <View key={i}
                  style={[row, fill, center]}>
                  <Text
                    style={dayWrapper}
                    text={week}
                    color='secondary'
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
                    color='secondary'
                    smallTextX
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <SmileCountablity
            marginTop
            dateText
            date="Saturday, 29.01"
            text='Best smile day'
            description="Day with highest number of smiles"
          />
          <SmileCountablity
            barChart
            subText="5 days"
            text='Recent smile streak'
            description="Days in a row with at least one smile"
          />
          <SmileCountablity
            dateText
            date="Saturday, 29.01"
            text='Best smile streak'
            description="Days with at least one smile"
          />
          <SmileCountablity
            barChart
            subText="5 days"
            text='Recent smile streak'
            description="Days in a row with at least one smile"
          />

        </Content>
        <Footer />
      </ImageBackground>
    </>
  );
};

export default Stats
