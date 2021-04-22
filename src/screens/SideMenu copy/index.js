import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

// components
import {Text, Header, MenuIcon,} from 'src/components';
import {Images,Gutters} from 'src/theme';
import {View, TouchableOpacity, Image} from 'react-native';

// actions
import { logout as logoutAction } from '../App/redux/actions';

// styles
import styles from './styles';

const SideMenu = (props) => {
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

  const logout = () => {
    AsyncStorage.clear();
    props.logout();
}
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
          <TouchableOpacity onPress={logout}>
            <Text
              smallTitle
              color="secondary"
              style={[largeXLPadding, bottomWrapper]}
              text="Logout"
            />
          </TouchableOpacity>
          <View style={bottomBox}>
            <Image source={Images.logos}/>
          </View>
        </View>
      </View>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(
  null,
  mapDispatchToProps,
)(SideMenu);
