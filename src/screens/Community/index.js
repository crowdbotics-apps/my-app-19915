import React,{useEffect} from 'react';

import { View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Content } from 'native-base';
import {connect} from 'react-redux';
//styles
import styles from './styles';

//actions
import {getCommunity} from './redux/actions';

// components
import {
  Text,
  Header,
  MenuIcon,
  Avatar,
} from 'src/components';
import { Gutters, Images, Layout, Fonts } from 'src/theme';
const {
  mediumBPadding,
  mediumVMargin,
  smallBMargin,
  regularHPadding,
  regularVMargin,
  small2xHPadding,
  smallLMargin,
} = Gutters;

const { backImage, resource } = styles;

import { CommunityCard } from '../../components';

const {
  row,
  fill,
  center,
  alignItemsCenter,
  justifyContentBetween,
} = Layout;

const { titleSmall, textMedium } = Fonts;

const Community = () => {
  
  useEffect(() => {
    props.getCommunity();
  }, []);

  return (
    <>
      <ImageBackground source={Images.screenbg} style={fill}>
        <Header left={<MenuIcon />} right={<Avatar size="regular" />} />
        <View style={[row, alignItemsCenter, smallBMargin]}>
          <TouchableOpacity>
            <Image source={Images.camarrowback} style={backImage} />
          </TouchableOpacity>
          <Text
            bold
            text="Community"
            color="river"
            style={[titleSmall, resource]}
          />
        </View>
        <View
          style={[row, justifyContentBetween, regularHPadding, mediumVMargin]}>
          <Text color="river" style={[textMedium]} text="All communities" />
          <TouchableOpacity>
            <View style={[row, center]}>
              <Text color="river" style={[textMedium]} text="Filter by" />
              <Image style={[smallLMargin]} source={Images.polygon} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[fill, small2xHPadding]}>
          <Content contentContainerStyle={[mediumBPadding]}>
            <CommunityCard
              withUser
              source={Images.communityimage1}
              title="Community name"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed congue purus, ac blandit risus"
              text="485 members"
            />
            <View style={[regularVMargin]}>
              <CommunityCard
                withUser
                source={Images.communityimage2}
                title="Community name"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed congue purus, ac blandit risus"
                text="485 members"
              />
            </View>
            <CommunityCard
              source={Images.communityimage3}
              title="Community name"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed congue purus, ac blandit risus"
              text="485 members"
            />
          </Content>
        </View>
        {/* <Footer /> */}
      </ImageBackground>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  getCommunity: () => dispatch(getCommunity()),
});

export default connect(
  null,
  mapDispatchToProps
)(Community);
