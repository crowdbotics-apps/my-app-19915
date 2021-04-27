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

//action
import {getSciences} from './redux/actions';

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

const SmileExercisesMaxHeight = props => {
  const {sciences, requesting} = props;

  useEffect(() => {
    props.getSciences();
  }, []);

  return (
    <>
      <ImageBackground source={Images.screenbg} style={fill}>
        <Header left={<MenuIcon action={()=>props.navigation.openDrawer()}/>} right={<Avatar size="regular" />} />
        <DataAvailability
          requesting={requesting}
          hasData={sciences && sciences.length > 0}
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
          <Content contentContainerStyle={[mediumBPadding, regularHPadding]}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {sciences &&
                sciences.map((item, i) => (
                  <View
                    key={i}
                    style={[row, smallRMargin, justifyContentBetween]}>
                    <ArticalCard item={item} />
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
                    size={107}
                    strokeCap="round"
                    progress={0.5}
                    showsText={false}
                    color="white"
                    unfilledColor={Colors.hawkesblue}
                  />
                  <Image style={[positionA]} source={Images.progressimage} />
                </View>
              </View>
              <View>
                <Text
                  color="river"
                  style={[smallLMargin, smallBMargin, textMedium]}
                  text={'Smile to continue\nyour 24 day streak'}
                />
                <Text
                  color="river"
                  style={[smallLMargin, smallBMargin, textMedium]}
                  text={'Your longest smile\nstreak has been 38 days'}
                />
              </View>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {sciences &&
                sciences.map((item, i) => (
                  <View
                    key={i}
                    style={[row, smallRMargin, justifyContentBetween]}>
                    <ArticalCard item={item} />
                  </View>
                ))}
            </ScrollView>
              <View style={[center, mediumVMargin, addSpace]}>
                <Text color="river" style={[titleSmall]} text="Add space" />
              </View>
          </Content>
          <Footer activeRoute='Dashboard' navigation={props.navigation} />
        </DataAvailability>
      </ImageBackground>
    </>
  );
};

const mapStateToProps = state => ({
  sciences: state.sciences.data,
  requesting: state.sciences.requesting,
});

const mapDispatchToProps = dispatch => ({
  getSciences: () => dispatch(getSciences()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SmileExercisesMaxHeight);
