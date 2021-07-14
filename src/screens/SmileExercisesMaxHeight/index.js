import React, {useEffect} from 'react';

import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {Content} from 'native-base';
import {connect} from 'react-redux';

//actions
import {getSelectedResources} from '../MoreScreen/redux/actions';

//styles
import styles from './styles';

// components
import {
  Text,
  Footer,
  Header,
  Avatar,
  MenuIcon,
  ArticalCard,
  ProgressCircle,
  DataAvailability,
} from 'src/components';

import {Gutters, Global, Images, Layout, Fonts, Colors} from 'src/theme';
const {
  mediumBPadding,
  mediumVMargin,
  smallBMargin,
  regularBMargin,
  regularHPadding,
  smallLMargin,
  smallRMargin,
  smallHPadding,
  smallTMargin,
  regularTMargin,
  mediumTMargin,
} = Gutters;

const {backImage, progressWrapper, midWrapper, addSpace, dataWrapper} = styles;

const {
  row,
  fill,
  fill2x,
  wrap,
  center,
  alignItemsCenter,
  positionA,
  justifyContentCenter,
  justifyContentBetween,
} = Layout;

const {border} = Global;

const {titleSmall, textMedium} = Fonts;

const SmileExercisesMaxHeight = (props) => {
  const {
    profileData,
    requesting,
    selectedResource,
    route: {
      params: {item},
    },
  } = props;

  useEffect(() => {
    props.getSelectedResources(item);
  }, []);
  console.log('item', item);
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
        <DataAvailability
          requesting={!selectedResource.length > 0}
          hasData={selectedResource && selectedResource.length > 0}
          style={dataWrapper}>
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
              <Text
                bold
                text="Smile science"
                color="river"
                style={titleSmall}
              />
            </View>
          </View>
          <View
            style={[
              row,
              justifyContentBetween,
              regularHPadding,
              mediumVMargin,
            ]}>
            <Text color="river" style={[textMedium]} text="All articals" />
            <TouchableOpacity>
              <View style={[row, center]}>
                <Text color="river" style={[textMedium]} text="Filter by" />
                <Image style={[smallLMargin]} source={Images.polygon2} />
              </View>
            </TouchableOpacity>
          </View>
          <Content
            contentContainerStyle={[
              regularHPadding,
              mediumBPadding,
              justifyContentBetween,
            ]}>
            <View style={[row, fill, justifyContentBetween]}>
              {selectedResource.length &&
                selectedResource.slice(0, 2).map((item, i) => (
                  <View key={i} style={[row]}>
                    <ArticalCard
                      name={item.title}
                      imageUrl={item.image}
                      description={item.description}
                    />
                  </View>
                ))}
            </View>
            <View
              style={[
                row,
                border,
                midWrapper,
                mediumVMargin,
                alignItemsCenter,
                justifyContentCenter,
              ]}>
              <View style={[progressWrapper]}>
                <View style={[center]}>
                  <ProgressCircle
                    size={100}
                    strokeCap="round"
                    progress={0.6}
                    thickness={5}
                    showsText={false}
                    color={Colors.golden}
                    unfilledColor={Colors.lightgolden}
                  />
                  <Image
                    style={[positionA]}
                    source={Images.progressimagegolden}
                  />
                </View>
              </View>
              <View>
                <Text
                  color="lightgolden"
                  style={[smallLMargin, smallBMargin, textMedium]}
                  text={'Smile to continue\nyour 24 day streak'}
                />
                <Text
                  color="lightgolden"
                  style={[smallLMargin, smallBMargin, textMedium]}
                  text={'Your longest smile\nstreak has been 38 days'}
                />
              </View>
            </View>
            <View style={[row, fill, wrap, justifyContentBetween]}>
              {selectedResource.length &&
                selectedResource.slice(2).map((item, i) => (
                  <View key={i} style={[row, regularTMargin]}>
                    <ArticalCard
                      name={item.title}
                      imageUrl={item.image}
                      description={item.description}
                    />
                  </View>
                ))}
            </View>
            <View style={[center, mediumVMargin, addSpace]}>
              <Text color="river" style={[titleSmall]} text="Add space" />
            </View>
          </Content>
          <Footer activeRoute="Dashboard" navigation={props.navigation} />
        </DataAvailability>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SmileExercisesMaxHeight);
