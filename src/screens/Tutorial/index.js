import React, {useState} from 'react';
import {Content} from 'native-base';
import {View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// components
import {Text, ProgressCircle} from 'src/components';
import {Layout, Images, Gutters, Fonts, Colors} from 'src/theme';

// styles
import styles from './styles';

const Goals = () => {
  const [active, setActive] = useState(6);
  const {
    row,
    fill,
    center,
    justifyContentEvenly,
    border,
    wrap,
    positionA,
    alignItemsCenter,
  } = Layout;

  const {textCenter, titleRegular, titleSmall} = Fonts;

  const {
    smallHPadding,
    mediumTMargin,
    smallBMargin,
    mediumVMargin,
    mediumHMargin,
    mediumBPadding,
    smallTMargin,
    mediumBMargin,
    regularVPadding,
    largXBMargin,
    mediumLMargin,
    mediumHPadding,
    mediumXTMargin,
    largeXTMargin,
    largeXHMargin,
    smallVMargin,
  } = Gutters;
  const {
    progressBarWrapper,
    buttonWrapper,
    buttonTMargin,
    textWrapper,
    text2Wrapper,
    bottomText,
  } = styles;

  return (
    <>
      <ImageBackground source={Images.screenbg} style={fill}>
        <Content contentContainerStyle={mediumBPadding}>
          <View style={[fill, center, progressBarWrapper]}>
            <View style={[center]}>
              <ProgressCircle
                size={264}
                progress={0.6}
                showsText={false}
                color={Colors.secondary}
                unfilledColor={Colors.viking}
              />
              <View style={[center, positionA]}>
                <Text color="river" bold text="62%" style={textWrapper} />
                <Text color="river" text="smile stones" style={text2Wrapper} />
                <Text
                  style={text2Wrapper}
                  color="river"
                  text="completed today"
                />
                <Image source={Images.progresicon} />
              </View>
            </View>
            <View style={[mediumLMargin, mediumTMargin]}>
              <Text
                bold
                color="secondary"
                style={[smallVMargin, titleRegular]}
                text="Lorem ipsum dolor"
              />
              <Text
                color="secondary"
                style={[mediumTMargin, titleSmall, bottomText]}
                text={
                  'Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit. Fusce consectetur ipsum lacus. Vivamus lacinia laoreet augue, a commodo \nlibero scelerisque non'
                }
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigate('Step2')}
            style={[buttonTMargin, mediumHPadding]}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#56D3FB', '#53F4EB']}
              style={[
                fill,
                row,
                center,
                buttonWrapper,
                largeXTMargin,
                largXBMargin,
              ]}>
              <Text style={titleSmall} text="Next" color="river" />
            </LinearGradient>
          </TouchableOpacity>
        </Content>
      </ImageBackground>
    </>
  );
};

export default Goals;
