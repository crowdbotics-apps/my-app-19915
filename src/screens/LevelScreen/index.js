import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, ImageBackground, Image} from 'react-native';
import {Content} from 'native-base';

//actions
import {getSelectedResources} from '../MoreScreen/redux/actions';

//styles
import styles from './styles';

// components
import {Text, Header, MenuIcon, Avatar, Footer} from 'src/components';
import {Gutters, Images, Layout, Fonts} from 'src/theme';
const {mediumBMargin, regularVMargin, largeVMargin, mediumHPadding} = Gutters;

const {image} = styles;

const {row, fill, alignItemsCenter, center} = Layout;

const {titleSmall, titleRegular} = Fonts;

const LevelScreen = (props) => {
  const {
    smileLevel,
    profileData,
    selectedResource,
    route: {
      params: {item},
    },
    navigation: {navigate},
  } = props;
  console.log('selectedResource', selectedResource);

  useEffect(() => {
    props.getSelectedResources(item);
  }, []);

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
          <Text bold text="Level" color="river" style={titleRegular} />
        </View>
        <Content contentContainerStyle={mediumHPadding}>
          <View style={[fill, center]}>
            <Image style={image} source={Images.levels} />
            <View style={[center, regularVMargin]}>
              <Text
                style={[regularVMargin, titleSmall]}
                text="Your current level"
              />
              <Text style={titleRegular} bold text={`${smileLevel.level}`} />
            </View>
            <View>
              <Text
                style={[largeVMargin, titleSmall]}
                text="level page content?"
              />
            </View>
          </View>
        </Content>
        <Footer activeRoute="" navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

const mapStateToProps = (state) => ({
  smileLevel: state.Goals.smileLevel,
  profileData: state.profileData.profileData,
  requesting: state.selectedResource.requesting,
  selectedResource: state.selectedResource.selectedResource,
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedResources: (item) => dispatch(getSelectedResources(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LevelScreen);
