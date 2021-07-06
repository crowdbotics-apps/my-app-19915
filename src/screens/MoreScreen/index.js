import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {Content, Item} from 'native-base';

//actions
import {getMoreResources, getSelectedResources} from './redux/actions';

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

const {row, fill, center} = Layout;

const {titleSmall} = Fonts;

const MoreScreen = (props) => {
  const {
    navigation: {navigate},
    profileData,
    resources,
    selectedResource,
    requesting,
  } = props;

  useEffect(() => {
    props.getMoreResources();
  }, []);

  const onSelectResource = (item) => {
    console.log('SelectedResource', item);
    if (item.resource_type === 'Community') {
      navigate('Community', {item});
    } else if (item.resource_type === 'Smile Science') {
      navigate('SmileExercisesMaxHeight', {item});
    } else if (item.resource_type === 'Notification') {
      navigate('NotificationScreen', {item});
    } else if (item.resource_type === 'Level') {
      navigate('LevelScreen', {item});
    }
  };

  console.log('resources', resources);
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
        <View style={[row, center, mediumBMargin]}>
          <Text text="More Resources" color="river" style={titleSmall} />
        </View>
        <Content contentContainerStyle={mediumHPadding}>
          {resources &&
            resources.map((item, i) => (
              <MoreResource
                key={i}
                title={item.title}
                imageUrl={item.image}
                description={item.description}
                onPress={() => onSelectResource(item)}
              />
            ))}
        </Content>
        <Footer activeRoute="More" navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

const mapStateToProps = (state) => ({
  profileData: state.profileData.profileData,
  requesting: state.exercises.requesting,
  resources: state.resources.resources,
});

const mapDispatchToProps = (dispatch) => ({
  getMoreResources: (item) => dispatch(getMoreResources()),
  //getSelectedResources: (item) => dispatch(getSelectedResources(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoreScreen);
