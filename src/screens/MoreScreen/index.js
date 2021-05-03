import React from 'react';

import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {Content, Item} from 'native-base';

//styles
import styles from './styles';

// components
import {Text, Header, MenuIcon, Avatar, Footer} from 'src/components';
import {Gutters, Images, Layout, Fonts} from 'src/theme';
const {
  mediumBMargin,
  mediumVPadding,
  mediumHPadding,
  smallHPadding,
  small2xBMargin,
} = Gutters;

const {backImage} = styles;

import {MoreResource} from 'src/components';

const {row, fill, alignItemsCenter} = Layout;

const {titleSmall} = Fonts;

const MoreScreen = props => {
  const cardData = [
    {
      title: 'Smile Science',
      description: 'Articles, videos and ideas to help you smile more',
      image:'smilescience'
    },

    {
      title: 'Community',
      description: 'Connect to people who love smiling',
      image:'community'
    },

    {title: 'Notifictions', count: '2',
  image:'notification'},

    {title: 'Level', count: '53',
  image:'level'},
  ];

  return (
    <>
      <ImageBackground source={Images.screenbg} style={fill}>
        <Header
          left={<MenuIcon action={() => props.navigation.openDrawer()} />}
          right={<Avatar size="regular" />}
        />
        <View style={[row, alignItemsCenter, mediumBMargin]}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image source={Images.camarrowback} style={backImage} />
          </TouchableOpacity>
          <Text
            text="More Resources"
            color="river"
            style={[titleSmall, {marginLeft: 60}]}
          />
        </View>
        <Content contentContainerStyle={mediumHPadding}>
          {
            cardData.map((data,i)=>  <MoreResource key={i} data={data}/>)
          }
        </Content>
        <Footer activeRoute="More" navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

export default MoreScreen;
