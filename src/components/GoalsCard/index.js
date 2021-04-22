import React from 'react';
import {View, Image} from 'react-native';
import {
  Text
} from 'src/components';

const GoalsCard = ({text1,text2,text3,text4,text1Style,text2Style,text3Style,text4Style,text1Color,text2Color,text3Color,text4Color,containerStyle}) =>{
    return(
    <View style={containerStyle}>
        <Text color={text1Color} text={text1} style={text1Style}/>
        <Text color={text2Color} text={text2} style={text2Style}/>
        <Text color={text3Color} text={text3} style={text3Style}/>
        <Text color={text4Color} text={text4} style={text4Style}/>
    </View>
)}

export default GoalsCard;