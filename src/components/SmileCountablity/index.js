import React from 'react';
import { Icon, View } from 'native-base';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';


// components
import { Text, ProgressCircle, Chart, ChartBar } from 'src/components';
import { Layout, Gutters, Global, Colors, Images } from 'src/theme';

const SmileCountablity = ({
  text,
  description,
  iconDescription,
  subText,
  weeks,
  cameraText,
  marginTop,
  loadingWeek,
  lineChart,
  barChart,
  dateText,
  date,
  barChartData,
  moneyIcon,
  cameraIcon,
  coloredText,
  coloredDesc,
  iconText,
  iconTextSecond,
  iconDescriptionSecond
}) => {
  const { border, transparentBg, tertiaryBg, secondaryBg } = Global;
  const {
    mediumHMargin,
    tinyVMargin,
    small2xHPadding,
    small2xVPadding,
    tinyVPadding,
    smallVPadding,
    smallHPadding,
    smallTPadding,
    mediumXTMargin,
  } = Gutters;
  const { firstText, secondText, mainWrapper, iconTextWrapper } = styles;
  const { row, center, alignItemsCenter, justifyContentBetween } = Layout;

  const weeksData = [
    {
      progress: 1,
      week: 'M',
      color: Colors.primary,
      unfilledColor: Colors.viking,
    },
    {
      progress: 0.85,
      week: 'T',
      color: Colors.primary,
      unfilledColor: Colors.viking,
    },
    {
      progress: 0.75,
      week: 'W',
      color: Colors.primary,
      unfilledColor: Colors.viking,
    },
    {
      progress: 0.5,
      week: 'T',
      color: Colors.primary,
      unfilledColor: Colors.viking,
    },
    {
      progress: 0.85,
      week: 'F',
      color: Colors.primary,
      unfilledColor: Colors.viking,
    },
    {
      progress: 1,
      week: 'S',
      color: Colors.primary,
      unfilledColor: Colors.viking,
    },
    {
      progress: 0.35,
      week: 'S',
      color: Colors.carrotorange,
      unfilledColor: Colors.offyellow,
    },
  ]

  return (
    <View style={[
      secondaryBg,
      mediumHMargin,
      tinyVMargin,
      marginTop && mediumXTMargin,
      small2xHPadding,
      small2xVPadding,
      mainWrapper]}>
      <View style={[row, alignItemsCenter, justifyContentBetween]}>
        <Text text={text} color='riverbed' style={firstText} />
        <Text text={subText} color='golden' style={secondText} bold />
      </View>
      <View style={[row, alignItemsCenter, tinyVPadding]}>
        <Text text={description} color='riverbed' medium />
        {coloredText && <Text text={coloredDesc} color='octonary' medium bold />}
      </View>
      {loadingWeek &&
        <View style={[alignItemsCenter, row, tinyVPadding, justifyContentBetween]}>
          {weeksData.map((item, i) => (
            <View key={i} style={alignItemsCenter}>
              <ProgressCircle
                size={25}
                showsText={false}
                progress={item.progress}
                color={item.color}
                unfilledColor={item.unfilledColor}
              />
              <Text text={item.week} color='senary' style={smallVPadding} medium bold />
            </View>
          ))}
        </View>
      }
      {lineChart && <Chart />}
      {barChart && <ChartBar />}
      {barChartData && <ChartBar bar />}
      {dateText && <Text text={date} color='golden' style={[secondText, small2xVPadding]} bold />}
      {cameraText && (
        <View style={[row, alignItemsCenter, smallTPadding]}>
          {cameraIcon && <Image source={Images.camera} />}
          {moneyIcon && <Image source={Images.money} />}
          {iconDescription && <Text text={iconText} color='septenary' style={smallHPadding} medium bold />}
          {iconDescriptionSecond && <Text text={iconTextSecond} color='septenary' style={smallHPadding} medium bold />}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    borderRadius: 10,
  },
  firstText: {
    fontSize: 20,
    lineHeight: 20
  },
  secondText: {
    fontSize: 30,
    lineHeight: 30
  },
  icon: {
    color: Colors.cinnamon
  },
  iconButtonWrapper: {
    width: 50,
    height: 50,
    borderRadius: 30,
  }
});

export default SmileCountablity
