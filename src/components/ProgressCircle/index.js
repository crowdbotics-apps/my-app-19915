import React from 'react'
import * as Progress from 'react-native-progress';
import { Colors } from 'src/theme'

const ProgressCircle = ({
  progress,
  showsText,
  size,
  formatText,
  color,
  unfilledColor
}) => {

  return (
    <Progress.Circle
      size={size}
      thickness={5}
      color={color}
      borderWidth={0}
      progress={progress}
      showsText={showsText}
      formatText={formatText}
      unfilledColor={unfilledColor}
    />
  )
}

export default ProgressCircle
