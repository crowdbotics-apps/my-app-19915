import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import { Colors } from 'src/theme'

const Progress = ({ }) => {

  return (
    <ProgressCircle
      style={{ height: 264 }}
      progress={0.6}
      progressColor={Colors.primary}
      strokeWidth={5}
      cornerRadius={0}
      startAngle={0}
      endAngle={50}
    />

  )
}

export default Progress
