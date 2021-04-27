import React, {useState} from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

// components
import {Text, MenuIcon} from 'src/components';
import {Images, Gutters} from 'src/theme';
import {View, TouchableOpacity, Image} from 'react-native';

// actions
import {logout as logoutAction} from '../App/redux/actions';

// styles
import styles from './styles';

const SideMenu = props => {
  const {
    SideMenuContainer,
    leftColumn,
    rightColumn,
    textWrapper,
    bottomBox,
    logoWrapper,
    menuWrapper,
    activeMenu,
    menuItem,
    logoutStyle
  } = styles;

  const [menuType, setMenuType] = useState(0);

  const onPressMenu = (type) => {
    if (type === 'Logout') {
      AsyncStorage.clear();
      props.logout();
    }
  }

  const menus = [
    [
      'Feedback',
      'Message',
      'Friends',
      'Tutorial',
      'Notifications',
      'Logout',
    ],
    ['setting2', 'setting3', 'setting4', 'setting5', 'setting6'],
  ];

  return (
    <>
      <View style={SideMenuContainer}>
        <View style={leftColumn}>
          <TouchableOpacity
            style={[menuWrapper, menuType === 0 && activeMenu]}>
            <MenuIcon action={() => setMenuType(0)} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setMenuType(1)}
            style={[menuWrapper, menuType === 1 && activeMenu]}>
            <Image source={require('../../assets/images/setting.png')} />
          </TouchableOpacity>
        </View>
        <View style={rightColumn}>
          {menus[menuType].map((text, i) => (
            <TouchableOpacity
              key={i} style={menus[menuType].length - 1 === i ? logoutStyle : menuItem}
              onPress={()=>onPressMenu(text)}
            >
              <Text
                style={textWrapper}
                smallTitle
                color="secondary"
                text={text}
              />
            </TouchableOpacity>
          ))}
          <View style={bottomBox}>
            <Image style={logoWrapper} source={Images.logos} />
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
