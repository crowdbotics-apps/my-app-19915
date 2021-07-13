import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'src/components';
import {Images} from 'src/theme';
import style from './style';
const {CompletedStyle, unCompletedStyle} = style;

const GoalsCard = ({
  title,
  count,
  isCompleted,
  description,
  descriptionColor,
  descriptionStyle,
  otherText,
  otherTextColor,
}) => {
  return (
    <>
      {isCompleted ? (
        <Image
          source={Images.checked}
          style={{position: 'absolute', top: 70, left: 50, zIndex: 1}}
        />
      ) : null}
      <View style={[isCompleted ? CompletedStyle : unCompletedStyle]}>
        <Text
          color={isCompleted ? '#54704E' : 'riverbed'}
          text={title}
          style={{fontSize: 20, lineHeight: 24}}
        />
        <View
          style={{
            height: 45,
            width: 134,
            borderWidth: 1,
            borderRadius: 15,
            marginVertical: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            color={isCompleted ? '#54704E' : 'golden'}
            text={count}
            bold
            style={{fontSize: 30, lineHeight: 36}}
          />
        </View>
        <Text
          color={descriptionColor}
          text={description}
          style={[
            {fontSize: 20, lineHeight: 24, color: '#495A66'},
            descriptionStyle,
          ]}
        />
        <Text
          color={isCompleted ? '#54704E' : 'riverbed'}
          text={otherText}
          style={[{fontSize: 20, lineHeight: 24}]}
        />
      </View>
    </>
  );
};

export default GoalsCard;
