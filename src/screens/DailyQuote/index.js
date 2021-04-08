import React from 'react';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';

// components
import {Text} from 'src/components';
import {Layout, Images, Gutters, Fonts} from 'src/theme';

//styles

import styles from './styles';

const DailyQuote = props => {
  const {rotate180Inverse, fill, center, alignItemsEnd} = Layout;

  const {largeXTMargin} = Gutters;

  const {
    quoteBox,
    topDoubleQuotesWrapper,
    topDoubleQuotes,
    bottomDoubleQuotesWrapper,
    centerTextWrapper,
    centerText,
    bottomDoubleQuotes,
  } = styles;

  return (
    <>
      <ImageBackground source={Images.loginbg} style={[fill]}>
        <View style={[center, largeXTMargin]}>
          <Image source={Images.logos} />
        </View>
        <View style={quoteBox}>
          <View style={topDoubleQuotesWrapper}>
            <Text style={topDoubleQuotes} bold color="river" text="“" />
          </View>
          <View style={centerTextWrapper}>
            <Text
              color="river"
              style={centerText}
              text="A great pleasure in life is doing what people say you cannot do"
            />
          </View>
          <View style={[alignItemsEnd, bottomDoubleQuotesWrapper]}>
            <Text
              style={[rotate180Inverse, bottomDoubleQuotes]}
              bold
              color="river"
              text="“"
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default DailyQuote;
