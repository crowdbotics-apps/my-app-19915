import React from 'react'
import * as Progress from 'react-native-progress';
import { Colors } from 'src/theme'

const ProgressCircle = ({ progress, size, formatText }) => {

  return (
    <Progress.Circle
      showsText
      size={size}
      thickness={5}
      progress={progress}
      borderWidth={0}
      indeterminate={false}
      formatText={formatText}
      color={Colors.secondary}
      unfilledColor={Colors.viking}
    />
  )
}

export default ProgressCircle
