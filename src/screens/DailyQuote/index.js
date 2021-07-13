import React, {useEffect} from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {connect} from 'react-redux';

// components
import {Text, DataAvailability} from 'src/components';

//styles
import styles from './styles';
import {Layout, Images, Gutters} from 'src/theme';

//actions
import {getQuote} from './redux/actions';

const DailyQuote = (props) => {
  const {data, requesting} = props;
  useEffect(() => {
    props.getQuote();
  }, []);

  const {rotate180Inverse, fill, center, alignItemsEnd} = Layout;
  const {largeXTMargin} = Gutters;
  const {
    quoteBox,
    topDoubleQuotesWrapper,
    topDoubleQuotes,
    bottomDoubleQuotesWrapper,
    centerTextWrapper,
    centerText,
    dataWrapper,
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
      </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(DailyQuote);
