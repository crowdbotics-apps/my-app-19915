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
    iconWrapper,
    rightColumn,
    textWrapper,
    bottomWrapper,
    bottomBox,
    logoWrapper,
    menuWrapper,
    activeMenu,
    settingWrapper,
    activeMenuWrapper,
    activeSettingWrapper,
  } = styles;
  const {largeXLPadding} = Gutters;

  const [menuType, setMenuType] = useState('menu');

  const logout = () => {
    AsyncStorage.clear();
    props.logout();
  };

  const menus = {
    menu: ['Feedback', 'Message', 'Friends', 'Tutorial', 'Notifications'],
    setting: ['setting2', 'setting3', 'setting4', 'setting5', 'setting6'],
  };

  return (
    <>
      <View style={[SideMenuContainer]}>
        <View style={leftColumn}>
          <TouchableOpacity
            style={[menuWrapper, menuType === 'menu' && activeMenu]}>
            <MenuIcon action={() => setMenuType('menu')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setMenuType('setting')}
            style={[menuWrapper, menuType === 'setting' && activeMenu]}>
            <Image source={require('../../assets/images/setting.png')} />
          </TouchableOpacity>
        </View>
        <View style={rightColumn}>
          {menus[menuType].map((text, i) => (
            <TouchableOpacity>
              <Text
                style={textWrapper}
                smallTitle
                color="secondary"
                text={text}
              />
            </TouchableOpacity>
          ))}

          <TouchableOpacity onPress={logout}>
            <Text
              smallTitle
              color="secondary"
              style={[largeXLPadding, bottomWrapper]}
              text="Logout"
            />
          </TouchableOpacity>
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
