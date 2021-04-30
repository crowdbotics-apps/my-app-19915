import React from 'react';

import {View, ImageBackground, Image} from 'react-native';
import {Content} from 'native-base';

//styles
import styles from './styles';

// components
import {Text, Header, MenuIcon, Avatar, Footer} from 'src/components';
import {Gutters, Images, Layout, Fonts} from 'src/theme';
const {
  mediumBMargin,
  regularVMargin,
  largeVMargin,
  mediumHPadding,
} = Gutters;

const {image} = styles;

const {row, fill, alignItemsCenter, center} = Layout;

const {titleSmall,titleRegular} = Fonts;

const LevelScreen = props => {
  return (
    <>
      <ImageBackground source={Images.screenbg} style={fill}>
        <Header
          left={<MenuIcon action={() => props.navigation.openDrawer()} />}
          right={<Avatar size="regular" />}
        />
        <View style={[center, row, alignItemsCenter, mediumBMargin]}>
          <Text bold text="Level" color="river" style={titleRegular} />
        </View>
        <Content contentContainerStyle={mediumHPadding}>
          <View style={[fill, center]}>
            <Image style={image} source={Images.levels} />
            <View style={[center, regularVMargin]}>
              <Text style={[regularVMargin,titleSmall]} text="Your current level" />
              <Text style={titleRegular} bold text="53" />
            </View>
            <View>
              <Text style={[largeVMargin,titleSmall]} text="level page content?" />
            </View>
          </View>
        </Content>
        <Footer activeRoute="" navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

export default LevelScreen;
