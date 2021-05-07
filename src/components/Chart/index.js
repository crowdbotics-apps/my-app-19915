import React from 'react'
import { AreaChart, Path } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Colors } from 'src/theme'

const Chart = () => {
  const data = [50, 10, 40, 80, 40, 24, 85, 60, 35, 53, 53, 24, 50, 20, 80]

  const Line = ({ line }) => (
    <Path
      key={'line '}
      d={line}
      stroke={Colors.loblolly}
      fill={'none'}
    />
  )

  return (
    <AreaChart
      style={{ height: 60 }}
      data={data}
      svg={{ fill: Colors.blacksqueeze }}
      curve={shape.curveNatural}
      gridMax={100}
      gridMin={-50}
    >
      <Line />
    </AreaChart>
  )
}



export default Chart