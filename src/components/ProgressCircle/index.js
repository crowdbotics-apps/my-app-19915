import React from 'react';
import * as Progress from 'react-native-progress';

const ProgressCircle = ({
  progress,
  showsText,
  size,
  formatText,
  color,
  style,
  thickness,
  unfilledColor,
}) => {
  return (
    <Progress.Circle
      size={size}
      thickness={thickness}
      color={color}
      borderWidth={0}
      progress={progress}
      showsText={showsText}
      formatText={formatText}
      unfilledColor={unfilledColor}
      style={style}
    />
  );
};

export default ProgressCircle;
