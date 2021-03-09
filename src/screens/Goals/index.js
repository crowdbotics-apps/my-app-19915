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

const Goals = () => {
  const [active, setActive] = useState(6)
  const { row, fill, center, wrap, positionA, alignItemsCenter } = Layout;
  const { mediumTMargin, mediumVMargin, mediumHMargin, mediumBPadding } = Gutters;
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
          <View style={[center, row, wrap, mediumHMargin, mediumVMargin]}>
            <Text text='You have smiled  a total of' color='secondary' regularTitle />
            <Text text="180 seconds " color="octonary" regularTitle bold />
            <Text text="today " color="secondary" regularTitle />
          </View>

          <View style={[fill, center]}>
            <View style={[center, mediumTMargin]}>
              <ProgressCircle
                size={264}
                progress={0.6}
                showsText={false}
                color={Colors.secondary}
                unfilledColor={Colors.viking}
              />
              <View style={[center, positionA]}>
                <Text
                  bold
                  text='62%'
                  color='secondary'
                  style={textWrapper}
                />
                <Text
                  bold
                  color="secondary"
                  text="of goals completed today"
                  style={text2Wrapper}
                />
                <Image source={Images.progresicon} />
              </View>
            </View>
          </View>
          <CardHeader text='Smilestones' />

          <SmileCountablity
            loadingWeek
            marginTop
            cameraIcon
            cameraText
            subText="180"
            text='Smile seconds'
            description="Total smile seconds by day"
            iconText="Start smiling"
          />
          <SmileCountablity
            loadingWeek
            cameraIcon
            cameraText
            subText="24"
            text='Smile count'
            description="Number of smiles by day"
            iconText="Start smiling"
          />
          <SmileCountablity
            lineChart
            cameraIcon
            cameraText
            subText="24s"
            text='Length of smile'
            description="Average duration of smiles"
            iconText="Start smiling"
          />
          <SmileCountablity
            lineChart
            cameraIcon
            cameraText
            subText="32s"
            text='Longest smile'
            description="Single longest smile in seconds"
            iconText="Start smiling"
          />

        </Content>
        <Footer />
      </ImageBackground>
    </>
  );
};

export default Goals
