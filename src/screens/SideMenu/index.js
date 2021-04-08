import React from 'react';

import {View, TouchableOpacity, Image, ImageStore} from 'react-native';

// components
import {Text, Header, MenuIcon,} from 'src/components';
import {Images,Gutters,Colors} from 'src/theme';

// styles
import styles from './styles';

const SideMenu = () => {
  const {
    SideMenuContainer,
    userWrapper,
    leftColumn,
    topIconWrapper,
    leftSmallColumn,
    topText,
    rightColumn,
    textWrapper,
    bottomWrapper,
    bottomBox,
    toggleIcon,
  } = styles;
  const {largeXLPadding} = Gutters;
  return (
    <>

      <View style={[SideMenuContainer]}>
        <View style={leftSmallColumn}>
          <TouchableOpacity style={[toggleIcon]}>
          <MenuIcon />
          </TouchableOpacity>
          <View style={leftColumn}>
            <View
              style={topIconWrapper}>
              <TouchableOpacity>
                <Image source={require('../../assets/images/setting.png')} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image
                style={userWrapper}
                source={require('../../assets/images/man.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={rightColumn}>
          <Text
            bold
            style={[topText]}
            smallTitle
            color="secondary"
            text="Feedback"
          />
          <Text
            smallTitle
            color="secondary"
            style={[largeXLPadding, textWrapper]}
            text="Message"
          />
          <Text
            smallTitle
            color="secondary"
            style={[largeXLPadding, textWrapper]}
            text="Friends"
          />
          <Text
            smallTitle
            color="secondary"
            style={[largeXLPadding, textWrapper]}
            text="Tutorial"
          />
          <Text
            smallTitle
            color="secondary"
            style={[largeXLPadding, textWrapper]}
            text="Notifications"
          />
          <Text
            smallTitle
            color="secondary"
            style={[largeXLPadding, bottomWrapper]}
            text="Logout"
          />
          <View style={bottomBox}>
            <Image source={Images.logos}/>
          </View>
        </View>
      </View>
    </>
  );
};

export default SideMenu;
