import React from 'react';
import {Content} from 'native-base';
import {ScrollView, ImageBackground} from 'react-native';

// components
import {
  Text,
  Header,
  Footer,
  Avatar,
  MenuIcon,
  Card,
  GameCard,
} from 'src/components';
import {Layout, Images, Gutters, Global} from 'src/theme';

// styles
import styles from './styles';

const GameScreen = (props) => {
  const {row, fill} = Layout;
  const {regularHMargin, mediumHMargin, mediumBPadding} = Gutters;
  const {fetureText} = styles;

  return (
    <>
      <ImageBackground source={Images.screenbg} style={fill}>
        <Content contentContainerStyle={mediumBPadding}>
          <Header
            left={<MenuIcon action={() => props.navigation.openDrawer()} />}
            right={<Avatar size="regular" />}
          />
          {/* <SmileCountablity
            cameraText
            moneyIcon
            coloredText
            iconTextSecond="4.850"
            iconDescriptionSecond
            text='Coin balance'
            description="Your current coin balance."
            coloredDesc=" Buy more"
          /> */}
          <Text
            text="Featured games"
            color="secondary"
            style={[mediumHMargin, fetureText]}
          />
          <ScrollView
            contentContainerStyle={[row, regularHMargin]}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <Card nonary card1 />
            <Card denary card2 />
            <Card denary card2 />
          </ScrollView>
          <Text
            text="All Games"
            color="secondary"
            style={[mediumHMargin, fetureText]}
          />
          <GameCard rarely card1 />
          <GameCard tuscany card2 />
        </Content>
        <Footer activeRoute="Games" navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

export default GameScreen;
