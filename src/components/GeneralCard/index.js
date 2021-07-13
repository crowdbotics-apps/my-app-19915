import React from 'react';
import {View} from 'react-native';
import {Text} from 'src/components';

import * as Progress from 'react-native-progress';

const GeneralCard = ({
  color,
  text,
  textColor,
  subText,
  progress,
  textStyle,
  subTextStyle,
  style,
}) => {
  return (
    <>
      <View style={style}>
        <Text style={[textStyle, textColor]} text={text} />
        <Text style={[subTextStyle, textColor]} text={subText} />

        <Progress.Bar
          color={color}
          progress={progress}
          height={3}
          width={130}
        />
      </View>
    </>
  );
};

export default GeneralCard;
