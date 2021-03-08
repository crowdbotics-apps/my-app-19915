import React from 'react'
import { Colors } from 'src/theme'
import { BarChart } from 'react-native-svg-charts'

const ChartBar = () => {

  const data1 = [30, 16, 30, 40, 45]
    .map((value) => ({ value, svg: { fill: Colors.primary } }))
  const data2 = [64, 50, 45, 54, 24, 30, 20, 45, 35, 53, 63, 54, 34, 50, 30, 45, 35, 53, 63]
    .map((value) => ({ value }))
  const barData = data1.concat(data2)

  return (
    <BarChart
      style={{ height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      data={barData}
      yAccessor={({ item }) => item.value}
      svg={{
        fill: Colors.zumthor,
      }}
      radiusX={100}
      radiusY={100}
      contentInset={{ top: 30, bottom: 30 }}
      spacingInner={0.5}
    />
  )

}
export default ChartBar