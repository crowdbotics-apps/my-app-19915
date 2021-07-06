import React, {useEffect} from 'react';

import {
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
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

import {Gutters, Images, Layout, Fonts, Colors} from 'src/theme';
const {
  mediumBPadding,
  mediumVMargin,
  smallBMargin,
  regularHPadding,
  smallLMargin,
  smallRMargin,
} = Gutters;

const {
  backImage,
  resource,
  progressWrapper,
  midWrapper,
  addSpace,
  dataWrapper,
} = styles;

const {
  border,
  row,
  fill,
  center,
  alignItemsCenter,
  positionA,
  justifyContentCenter,
  justifyContentBetween,
} = Layout;

const {titleSmall, textMedium} = Fonts;

const SmileExercisesMaxHeight = (props) => {
  const {
    selectedResource,
    requesting,
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
          left={<MenuIcon action={() => props.navigation.openDrawer()} />}
          right={<Avatar size="regular" />}
        />
        <DataAvailability
          requesting={requesting}
          hasData={selectedResource && selectedResource.length > 0}
          style={dataWrapper}>
          <View style={[row, alignItemsCenter, smallBMargin]}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image source={Images.camarrowback} style={backImage} />
            </TouchableOpacity>
            <Text
              bold
              text="Smile science"
              color="river"
              style={[titleSmall, resource]}
            />
          </View>
          <Content contentContainerStyle={[regularHPadding, mediumBPadding]}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {selectedResource.length &&
                selectedResource.map((item, i) => (
                  <View
                    key={i}
                    style={[row, smallRMargin, justifyContentBetween]}>
                    <ArticalCard
                      name={item.title}
                      imageUrl={item.image}
                      description={item.description}
                    />
                  </View>
                ))}
            </ScrollView>
            <View
              style={[
                mediumVMargin,
                border,
                row,
                justifyContentCenter,
                alignItemsCenter,
                midWrapper,
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
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {selectedResource.length &&
                selectedResource.map((item, i) => (
                  <View
                    key={i}
                    style={[row, smallRMargin, justifyContentBetween]}>
                    <ArticalCard
                      name={item.title}
                      imageUrl={item.image}
                      description={item.description}
                    />
                  </View>
                ))}
            </ScrollView>
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
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedResources: (item) => dispatch(getSelectedResources(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SmileExercisesMaxHeight);
