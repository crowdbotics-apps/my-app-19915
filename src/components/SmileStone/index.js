import React from 'react';
import { Icon, View } from 'native-base';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

// components
import { Text } from 'src/components';
import { Layout, Gutters, Global, Colors, Images } from 'src/theme';

const SmileStone = ({containerStyle,imageSource,textStyle, text,style,subText,subTextStyle}) =>{
    return (
    <View style={containerStyle} >
       <Image style={style} source={imageSource}/>
       <Text color='riverbed' style={textStyle} text={text } />
      <Text color='riverbed' style={subTextStyle}  text={subText}/>
    </View>
)}
export default SmileStone;