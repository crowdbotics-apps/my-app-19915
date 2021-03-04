import React, { useState } from 'react';
import { Content } from 'native-base';
import { View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

// components
import { Text, Header, ProgressCircle, Footer, Avatar, CustomButton, MenuIcon } from 'src/components';
import { Layout, Images, Gutters } from 'src/theme';

// styles
import styles from './styles';

const Goals = () => {
  const [active, setActive] = useState(1)
  const { row, fill, center, wrap } = Layout;
  const { mediumTMargin, mediumVMargin, mediumHMargin, mediumBPadding } = Gutters;
  const { dayWrapper, activeDayWrapper, dayStyle } = styles;

  const weeks = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
  ]
  const days = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[mediumHMargin, center]}>
              <View style={row}>
                {weeks.map((week, i) => (
                  <View key={i} style={[row, fill, center]}>
                    <Text
                      style={dayWrapper}
                      text={week}
                      color='secondary'
                      medium
                      bold
                    />
                  </View>
                ))}
              </View>
              <View style={row}>
                {days.map((day, i) => (
                  <TouchableOpacity
                    onPress={() => setActive(i)}
                    style={dayStyle}
                    key={i}
                  >
                    <Text
                      style={[
                        active === i
                          ?
                          activeDayWrapper
                          :
                          dayWrapper
                      ]}
                      text={day}
                      color='secondary'
                      medium
                      bold
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
          <View style={[center, row, wrap, mediumHMargin, mediumVMargin]}>
            <Text lineHeight text='You have smiled  a total of' color='secondary' regularTitle />
            <Text lineHeight text="180 seconds " color="primary" regularTitle bold />
            <Text lineHeight text="today " color="secondary" regularTitle />
          </View>

          <View style={[fill, center]}>
            <Text text='Smile seconds' color='secondary' medium bold />
            <View style={[center, mediumTMargin]}>
              <ProgressCircle
                size={264}
                progress={0.4}
                formatText={() => ('62%\n' + 'sdfsdfa')}
              />
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

export default Goals
