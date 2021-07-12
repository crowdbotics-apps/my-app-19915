import React, {useEffect} from 'react';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {Content} from 'native-base';
import {connect} from 'react-redux';

//actions
import {getSelectedResources} from '../MoreScreen/redux/actions';

// components
import {Text, Header, MenuIcon, Avatar, DataAvailability} from 'src/components';

//styles
import styles from './styles';
import {Gutters, Images, Layout, Fonts} from 'src/theme';

const {
  mediumBPadding,
  mediumVMargin,
  smallBMargin,
  regularBMargin,
  regularHPadding,
  small2xHPadding,
  smallLMargin,
} = Gutters;

const {backImage, community, dataWrapper} = styles;

import {CommunityCard} from '../../components';

const {row, fill, fill2x, center, alignItemsCenter, justifyContentBetween} =
  Layout;

const {titleSmall, textMedium} = Fonts;

const Community = (props) => {
  const {
    selectedResource,
    profileData,
    route: {
      params: {item},
    },
    navigation: {navigate},
  } = props;

  useEffect(() => {
    props.getSelectedResources(item);
  }, []);
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
        <View
          style={[
            row,
            alignItemsCenter,
            justifyContentBetween,
            regularBMargin,
          ]}>
          <View style={fill}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image source={Images.camarrowback} style={backImage} />
            </TouchableOpacity>
          </View>
          <View style={fill2x}>
            <Text bold text="Community" color="river" style={titleSmall} />
          </View>
        </View>
        <View style={[row, justifyContentBetween, mediumVMargin, community]}>
          <Text color="river" style={[textMedium]} text="All communities" />
          <TouchableOpacity>
            <View style={[row, center]}>
              <Text color="river" style={[textMedium]} text="Filter by" />
              <Image style={[smallLMargin]} source={Images.polygon2} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[fill, small2xHPadding]}>
          <Content contentContainerStyle={[mediumBPadding]}>
            <DataAvailability
              requesting={!selectedResource.length > 0}
              hasData={selectedResource.length && selectedResource.length > 0}
              style={dataWrapper}>
              {selectedResource.length &&
                selectedResource.map((item, i) => (
                  <CommunityCard
                    key={i}
                    name={item.title}
                    description={item.description}
                    imageUrl={item.image}
                    members="489 members"
                  />
                ))}
            </DataAvailability>
          </Content>
        </View>
      </ImageBackground>
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedResource: state.selectedResource.selectedResource,
  requesting: state.selectedResource.requesting,
  profileData: state.profileData.profileData,
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedResources: (item) => dispatch(getSelectedResources(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Community);
