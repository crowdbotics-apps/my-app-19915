import React, { useState } from 'react';
import { Content } from 'native-base';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

// components
import {
  Text,
  Header,
  Footer,
  Avatar,
  MenuIcon,
  ProgressCircle,
  SmileStone,
  GoalsCard,
} from 'src/components';
import { Layout, Images, Gutters, Fonts, Colors } from 'src/theme';

// styles
import styles from './styles';

const GoalScreen = (props) => {
  const [active, setActive] = useState(6);
  const {
    row,
    fill,
    center,
    justifyContentBetween,
    wrap,
    positionA,
    alignItemsCenter,
  } = Layout;

  const {
    textCenter,
    bold,
    titleSmall,
    textLarge,
    textMediumX,
    titleRegular,
  } = Fonts;

  const {
    mediumTMargin,
    mediumHMargin,
    mediumBPadding,
    smallTMargin,
    small2xRMargin,
    mediumVMargin,
    small2xHMargin,
    smallVMargin,
    mediumTPadding,
    smallTPadding,
    smallVPadding
  } = Gutters;
  const {
    dayWrapper,
    activeDayWrapper,
    dayStyle,
    textWrapper,
    text2Wrapper,
    card,
    cardsContainer,
    centerCard,
    bottomCardContainer,
  } = styles;

  const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const days = ['24', '25', '26', '27', '28', '29', '30'];

  return (
    <>
      <ImageBackground source={Images.screenbg} style={fill}>
        <Content contentContainerStyle={mediumBPadding}>
          <Header left={<MenuIcon action={() => props.navigation.openDrawer()} />} right={<Avatar size="regular" />} />
          <View style={[mediumHMargin, alignItemsCenter]}>
            <View style={row}>
              {weeks.map((week, i) => (
                <View key={i} style={[row, fill, center]}>
                  <Text
                    style={dayWrapper}
                    text={week}
                    color="secondary"
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
                  key={i}>
                  <Text
                    style={[active === i ? activeDayWrapper : dayWrapper]}
                    text={day}
                    color="secondary"
                    smallTextX
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={[center, row, wrap, mediumVMargin]}>
            <Text text="Smile activity" style={textMediumX} />
            <Text bold text="Today . " color="golden" style={textMediumX} />
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
                <Text bold text="62%" color="secondary" style={textWrapper} />
                <Text
                  bold
                  color="secondary"
                  text="of goals"
                  style={text2Wrapper}
                />
                <Text
                  bold
                  style={text2Wrapper}
                  color="secondary"
                  text="completed today"
                />
                <Image source={Images.progresicon} />
              </View>
            </View>
          </View>
          <View style={[small2xHMargin, cardsContainer, mediumTMargin]}>
            <SmileStone
              containerStyle={[center, card]}
              imageSource={Images.levelbox}
              textStyle={[textCenter, smallVMargin, titleSmall]}
              text="Level"
              subText="53"
              subTextStyle={[smallTPadding,titleRegular, bold]}
            />
            <SmileStone
              containerStyle={[center, card, centerCard]}
              imageSource={Images.lateststreak}
              textStyle={[textCenter, titleSmall, smallVMargin]}
              text="Latest Streak"
              subText="18d"
              subTextStyle={[titleRegular, bold]}
            />
            <SmileStone
              containerStyle={[center, card]}
              imageSource={Images.maxstreak}
              textStyle={[textCenter, titleSmall, smallVMargin]}
              text="Max Streak"
              subText="38d"
              subTextStyle={[titleRegular, bold]}
            />
          </View>

          <View
            style={[
              row,
              small2xHMargin,
              mediumVMargin,
              justifyContentBetween,
              alignItemsCenter,
            ]}>
            <Text text="Smilestone" style={titleSmall} />
            <Image source={Images.dots} />
          </View>
          <View style={smallVMargin}>
            <View style={row}>
              <GoalsCard
                containerStyle={[fill, bottomCardContainer, small2xHMargin]}
                text1="smile seconds"
                text1Style={titleSmall}
                text2="180s"
                text2Style={[smallVPadding,bold, smallVMargin, textMediumX]}
                text2Color="atlantis"
                text3="Congratulations You completed this smilestone"
                text3Style={[textLarge,smallTMargin]}
              />
              <GoalsCard
                containerStyle={[fill, bottomCardContainer, small2xRMargin]}
                text1="smile count"
                text1Style={titleSmall}
                text2="24"
                text2Style={[bold, smallVMargin, textMediumX]}
                text2Color="atlantis"
                text3="2 more times"
                text3Style={[textLarge, bold]}
                text4="for your smile count goal"
                text4Style={textLarge}
              />
            </View>

            <View style={[row, smallTMargin]}>
              <GoalsCard
                containerStyle={[fill, bottomCardContainer, small2xHMargin]}
                text1="longest smile"
                text1Style={titleSmall}
                text2="18s"
                text2Style={[bold, smallVMargin, textMediumX]}
                text2Color="atlantis"
                text3="12 seconds"
                text3Style={[textLarge, bold]}
                text4="to beat your longest smile"
                text4Style={textLarge}
              />
              <GoalsCard
                containerStyle={[fill, bottomCardContainer, small2xRMargin]}
                text1="smile count"
                text1Style={titleSmall}
                text2="4 days"
                text2Style={[bold, smallVMargin, textMediumX]}
                text2Color="atlantis"
                text3="18 days"
                text3Style={[textLarge, bold]}
                text4="longest best smile streak"
                text4Style={textLarge}
              />
            </View>
          </View>
        </Content>
        <Footer activeRoute='Goals' navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

export default GoalScreen;
