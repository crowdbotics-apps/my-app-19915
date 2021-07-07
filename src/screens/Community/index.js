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
  regularHPadding,
  small2xHPadding,
  smallLMargin,
} = Gutters;

const {backImage, resource, dataWrapper} = styles;

import {CommunityCard} from '../../components';

const {row, fill, center, alignItemsCenter, justifyContentBetween} = Layout;

const {titleSmall, textMedium} = Fonts;

const Community = (props) => {
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
  console.log('selectedResource', selectedResource);
  return (
    <>
      <ImageBackground source={Images.loginbg} style={fill}>
        <Header
          left={<MenuIcon action={() => props.navigation.openDrawer()} />}
          right={<Avatar size="regular" />}
        />
        <View style={[row, alignItemsCenter, smallBMargin]}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
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
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedResources: (item) => dispatch(getSelectedResources(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Community);
