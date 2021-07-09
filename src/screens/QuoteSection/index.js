import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// components
import {Text, DataAvailability, ProgressCircle} from 'src/components';

//styles
import styles from './styles';
import {Layout, Images, Gutters, Fonts, Colors} from 'src/theme';

//actions
import {getQuote} from './redux/actions';
import {Content} from 'native-base';

const QuoteSection = (props) => {
  const {data, requesting} = props;
  useEffect(() => {
    props.getQuote();
  }, []);

  const {
    fill,
    row,
    center,
    border,
    positionA,
    alignItemsEnd,
    alignItemsCenter,
    rotate180Inverse,
    justifyContentCenter,
  } = Layout;
  const {
    largeXTMargin,
    largeHMargin,
    smallBMargin,
    mediumTMargin,
    mediumVMargin,
    smallLMargin,
    mediumHMargin,
  } = Gutters;
  const {textLarge, textMedium, titleRegular} = Fonts;
  const {
    quoteBox,
    topDoubleQuotesWrapper,
    topDoubleQuotes,
    bottomDoubleQuotesWrapper,
    centerTextWrapper,
    midWrapper,
    progressWrapper,
    backImage,
    centerText,
    textWrapper,
    dataWrapper,
    buttonWrapper,
    bottomDoubleQuotes,
  } = styles;
  console.log('quote', data);
  return (
    <>
      <View style={[row, alignItemsCenter, smallBMargin, mediumTMargin]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image source={Images.camarrowback} style={backImage} />
        </TouchableOpacity>
      </View>
      <Content contentContainerStyle={mediumHMargin}>
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
                color={Colors.golden}
                unfilledColor={Colors.lightgolden}
              />
              <Image style={[positionA]} source={Images.progressimagegolden} />
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
        <View style={[center, textWrapper]}>
          <Text
            style={[titleRegular, {textAlign: 'center'}]}
            text={'Your daily dose of \ninspiration'}
          />
        </View>
        <View style={quoteBox}>
          <View style={topDoubleQuotesWrapper}>
            <Text style={topDoubleQuotes} bold color="river" text="“" />
          </View>
          <View style={centerTextWrapper}>
            <DataAvailability
              requesting={requesting}
              hasData={Boolean(data)}
              style={dataWrapper}>
              <Text
                color="river"
                style={centerText}
                text={data && data[0].quote}
              />
            </DataAvailability>
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
        <View>
          <TouchableOpacity>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#56D3FB', '#53F4EB']}
              style={[
                fill,
                row,
                center,
                largeHMargin,
                buttonWrapper,
                largeXTMargin,
              ]}>
              <Text style={textLarge} text="Use this quote" color="riverbed" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Content>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.quote.data,
  requesting: state.quote.requesting,
});

const mapDispatchToProps = (dispatch) => ({
  getQuote: () => dispatch(getQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteSection);
