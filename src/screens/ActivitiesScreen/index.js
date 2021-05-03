import React from 'react';

import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Content} from 'native-base';

//styles
import styles from './styles';

// components
import {
  Text,
  Header,
  MenuIcon,
  Avatar,
  Footer,
  ProgressCircle,
  ActivityCard,
} from 'src/components';
import {Gutters, Images, Layout, Fonts, Colors} from 'src/theme';
const {
  mediumVMargin,
  smallBMargin,
  smallLMargin,
  mediumHPadding,
  largeHMargin,
  largeXTMargin,
} = Gutters;

const {
  backImage,
  midWrapper,
  progressWrapper,
  buttonWrapper,
  upgradeNow,
} = styles;

const {
  row,
  center,
  fill,
  border,
  alignItemsCenter,
  justifyContentCenter,
  positionA,
} = Layout;

const {titleSmall, textLarge, textMedium} = Fonts;

const ActivitiesScreen = props => {
  const Activities = [
    {title: 'Smile Activity 1', text: 'Recommened for you', favourity: true},
    {title: 'Smile Activity 2', text: 'Recommened for you'},
    {title: 'Smile Activity 3', text: 'Recommened for you'},
    {title: 'Smile Activity 4', text: 'Recommened for you', favourity: true},
  ];

  const Activity = [
    {title: 'Smile Activity 1', text: 'Recommened for you'},
    {title: 'Smile Activity 2', text: 'Recommened for you'},
    {title: 'Smile Activity 3', text: 'Recommened for you'},
    {title: 'Smile Activity 4', text: 'Recommened for you'},
  ];
  return (
    <>
      <ImageBackground source={Images.screenbg} style={fill}>
        <Header
          left={<MenuIcon action={() => props.navigation.openDrawer()} />}
          right={<Avatar size="regular" />}
        />
        <View style={[row, alignItemsCenter, smallBMargin]}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image source={Images.camarrowback} style={backImage} />
          </TouchableOpacity>
          <Text
            text="Activities"
            color="river"
            style={[titleSmall, {marginLeft: 60}]}
          />
        </View>
        <Content contentContainerStyle={mediumHPadding}>
          <View
            style={[
              mediumVMargin,
              border,
              row,
              justifyContentCenter,
              alignItemsCenter,
              midWrapper,
            ]}>
            <View style={[progressWrapper]}>
              <View style={[center]}>
                <ProgressCircle
                  size={107}
                  strokeCap="round"
                  progress={0.5}
                  showsText={false}
                  color={Colors.golden}
                  unfilledColor={Colors.lightgolden}
                />
                <Image
                  style={[positionA]}
                  source={Images.progressimagegolden}
                />
              </View>
            </View>
            <View>
              <Text
                color="lightgolden"
                style={[smallLMargin, smallBMargin, textMedium]}
                text={'Smile to continue\nyour 24 day streak'}
              />
              <Text
                color="lightgolden"
                style={[smallLMargin, smallBMargin, textMedium]}
                text={'Your longest smile\nstreak has been 38 days'}
              />
            </View>
          </View>
          <View>
            {Activities.map((data, i) => (
              <ActivityCard key={i} data={data} />
            ))}
          </View>
          <View>
            <TouchableOpacity>
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
                <Text
                  style={textLarge}
                  text="Upgrade now to view more exercises"
                  color="riverbed"
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={upgradeNow}>
            {Activity.map((data, i) => (
              <ActivityCard key={i} data={data} />
            ))}
          </View>
        </Content>
        <Footer activeRoute="Activity" navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

export default ActivitiesScreen;
