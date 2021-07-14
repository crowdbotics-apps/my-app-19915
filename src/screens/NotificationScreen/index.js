import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, ImageBackground, Switch} from 'react-native';
import {Content} from 'native-base';

//actions
import {getSelectedResources} from '../MoreScreen/redux/actions';

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

const NotificationScreen = (props) => {
  const {
    selectedResource,
    requesting,
    profileData,
    route: {
      params: {item},
    },
    navigation: {navigate},
  } = props;

  useEffect(() => {
    props.getSelectedResources(item);
  }, []);

  const [toggleSwitchOne, setSwitchOne] = useState(false);
  const [toggleSwitchTwo, setSwitchTwo] = useState(false);
  console.log('selectedResource', selectedResource);
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Header
          left={<MenuIcon grey action={() => props.navigation.openDrawer()} />}
          right={
            <Avatar
              size="regular"
              imageUrl={profileData.image}
              action={() => navigate('MyAccount')}
            />
          }
        />
        <View style={[center, row, alignItemsCenter, mediumBMargin]}>
          <Text bold text="Notifications" color="river" style={titleRegular} />
        </View>
        <Content contentContainerStyle={mediumHPadding}>
          <View style={[fill, center, row, justifyContentBetween]}>
            <Text style={titleSmall} text="Notification Type" />
            <Switch
              value={toggleSwitchOne}
              onValueChange={(val) => setSwitchOne(val)}
              trackColor={{true: 'green'}}
            />
          </View>
          <View
            style={[fill, center, row, justifyContentBetween, mediumTMargin]}>
            <Text style={titleSmall} text="Notification Type" />
            <Switch
              value={toggleSwitchTwo}
              onValueChange={(val) => setSwitchTwo(val)}
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

const mapStateToProps = (state) => ({
  requesting: state.selectedResource.requesting,
  profileData: state.profileData.profileData,
  selectedResource: state.selectedResource.selectedResource,
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedResources: (item) => dispatch(getSelectedResources(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreen);
