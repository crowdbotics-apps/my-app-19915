import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {Content} from 'native-base';

//styles
import styles from './styles';

//actions
import {getExercises} from './redux/actions';

// components
import {Text, Header, MenuIcon, Avatar, DataAvailability} from 'src/components';
import {Gutters, Images, Layout, Fonts} from 'src/theme';
const {
  mediumBPadding,
  mediumVMargin,
  smallBMargin,
  smallTMargin,
  mediumHMargin,
} = Gutters;

const {backImage, resource, star, text, image,dataWrapper} = styles;

const {row, fill, alignItemsCenter, positionA} = Layout;

const {titleSmall, titleRegular, textMedium} = Fonts;

const SmileExercises = props => {
  const {
    route: {
      params: {selectedActivity},
    },
    navigation: {openDrawer},
    exercises,
    requesting,
  } = props;
  
  useEffect(() => {
    
    props.getExercises();
  }, []);

  console.log('selectedActivity',selectedActivity);
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Header
          left={<MenuIcon action={() => openDrawer()} />}
          right={<Avatar size="regular" />}
        />
        <DataAvailability
          requesting={requesting}
          hasData={selectedActivity}
          style={dataWrapper}>
          <View style={[row, alignItemsCenter, smallBMargin]}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image source={Images.camarrowback} style={backImage} />
            </TouchableOpacity>
            <Text
              bold
              text={selectedActivity.exercise_name}
              color="river"
              style={[titleSmall, resource]}
            />
          </View>
          <Content contentContainerStyle={mediumBPadding}>
            <View style={smallTMargin}>
              <Image source={{uri: selectedActivity.image_or_video}} style={image} />
              <Image source={Images.star} style={[positionA, star]} />
            </View>
            <View style={[mediumHMargin]}>
              <Text
                color="river"
                text={selectedActivity.title}
                style={[titleRegular, mediumVMargin]}
              />
              <Text
                color="river"
                style={[textMedium, text]}
                text={selectedActivity.description}
              />
            </View>
          </Content>
          {/* <Footer /> */}
        </DataAvailability>
      </ImageBackground>
    </>
  );
};

const mapStateToProps = state => ({
  requesting: state.exercises.requesting,
});

const mapDispatchToProps = dispatch => ({
  getExercises: () => dispatch(getExercises()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SmileExercises);
