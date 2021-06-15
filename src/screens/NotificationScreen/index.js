import React, {useState} from 'react';

import {View, ImageBackground, Image, Switch} from 'react-native';
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
  NotificationCard,
} from 'src/components';
import {Gutters, Images, Layout, Fonts} from 'src/theme';
const {
  mediumBMargin,
  regularVMargin,
  mediumTMargin,
  largeVMargin,
  mediumHPadding,
} = Gutters;

const {image} = styles;

const {row, fill, alignItemsCenter, center, justifyContentBetween} = Layout;

const {titleSmall, titleRegular} = Fonts;

const NotificationScreen = props => {
  const [toggleSwitchOne, setSwitchOne] = useState(false);
  const [toggleSwitchTwo, setSwitchTwo] = useState(false);
  
  return (
    <>
      <ImageBackground source={Images.screenbg} style={fill}>
        <Header
          left={<MenuIcon action={() => props.navigation.openDrawer()} />}
          right={<Avatar size="regular" />}
        />
        <View style={[center, row, alignItemsCenter, mediumBMargin]}>
          <Text bold text="Notifications" color="river" style={titleRegular} />
        </View>
        <Content contentContainerStyle={mediumHPadding}>
          <View style={[fill, center, row, justifyContentBetween]}>
            <Text style={titleSmall} text="Notification Type" />
            <Switch
              value={toggleSwitchOne}
              onValueChange={val => setSwitchOne(val)}
              trackColor={{true: 'green'}}
            />
          </View>
          <View
            style={[fill, center, row, justifyContentBetween, mediumTMargin]}>
            <Text style={titleSmall} text="Notification Type" />
            <Switch
              value={toggleSwitchTwo}
              onValueChange={val => setSwitchTwo(val)}
              trackColor={{true: 'green'}}
            />
          </View>
          <View style={mediumTMargin}>
            <NotificationCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <NotificationCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <NotificationCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <NotificationCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </View>
        </Content>
        <Footer activeRoute="" navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

export default NotificationScreen;
