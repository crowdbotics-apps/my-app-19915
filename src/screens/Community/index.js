import React, {useEffect} from 'react';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {Content} from 'native-base';
import {connect} from 'react-redux';

//actions
import {getCommunity} from './redux/actions';

// components
import {Text, Header, MenuIcon, Avatar, DataAvailability} from 'src/components';

//styles
import styles from './styles';
import {Gutters, Images, Layout, Fonts} from 'src/theme';
const {
  mediumBPadding,
  mediumVMargin,
  smallBMargin,
  regularHPadding,
  small2xHPadding,
  smallLMargin,
} = Gutters;

const {backImage, resource, dataWrapper} = styles;

import {CommunityCard} from '../../components';

const {row, fill, center, alignItemsCenter, justifyContentBetween} = Layout;

const {titleSmall, textMedium} = Fonts;

const Community = props => {
  const {data, requesting} = props;

  useEffect(() => {
    props.getCommunity();
  }, []);

  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Header
          left={<MenuIcon action={() => props.navigation.openDrawer()} />}
          right={<Avatar size="regular" />}
        />
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
              <Image style={[smallLMargin]} source={Images.polygon2} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[fill, small2xHPadding]}>
          <Content contentContainerStyle={[mediumBPadding]}>
            <DataAvailability
              requesting={requesting}
              hasData={data && data.length > 0}
              style={dataWrapper}>
              {data &&
                data.map((card, i) => <CommunityCard key={i} card={card} />)}
            </DataAvailability>
          </Content>
        </View>
      </ImageBackground>
    </>
  );
};

const mapStateToProps = state => ({
  data: state.community.data,
  requesting: state.community.requesting,
});

const mapDispatchToProps = dispatch => ({
  getCommunity: () => dispatch(getCommunity()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Community);
