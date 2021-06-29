import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {Content, Item} from 'native-base';

//actions
import {getMoreResources} from './redux/actions';

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

const {row, fill,center} = Layout;

const {titleSmall} = Fonts;

const MoreScreen = props => {

  const {
    navigation: {openDrawer},
    resources,
    requesting,
  } = props;

  useEffect(() => {
    props.getMoreResources();
  }, []);

  const onSelectResource = (item) => {
    //props.selectResource(item);
    console.log('selectedItem',item);
  };

  const cardData = [
    {
      title: 'Smile Science',
      description: 'Articles, videos and ideas to help you smile more',
      image:'smilescience'
    },

    {
      title: 'Community',
      description: 'Connect to people who love smiling',
      image:'community'
    },

    {title: 'Notifictions', count: '2',
  image:'notification'},

    {title: 'Level', count: '53',
  image:'level'},
  ];
console.log('resources',resources);
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Header
          left={<MenuIcon grey action={() => props.navigation.openDrawer()} />}
          right={<Avatar size="regular" />}
        />
        <View style={[row, center, mediumBMargin]}>
          <Text
            text="More Resources"
            color="river"
            style={titleSmall}
          />
        </View>
        <Content contentContainerStyle={mediumHPadding}>
          {
            cardData.map((data,i)=>  <MoreResource key={i} data={data}/>)
          }
        </Content>
        <Footer activeRoute="More" navigation={props.navigation} />
      </ImageBackground>
    </>
  );
};

const mapStateToProps = state => ({
  requesting: state.exercises.requesting,
  resources:state.resources.resources
});

const mapDispatchToProps = dispatch => ({
  getMoreResources: (item) => dispatch(getMoreResources()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoreScreen);
