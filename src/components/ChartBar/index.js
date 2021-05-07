import React from 'react'
import { Colors } from 'src/theme'
import { BarChart } from 'react-native-svg-charts'

const ChartBar = ({ bar }) => {

  const data1 = [30, 16, 30, 40, 45]
    .map((value) => ({ value, svg: { fill: Colors.loblolly } }))
  const data2 = [64, 50, 45, 54, 24, 30, 20, 45, 35, 53, 63, 54, 34, 50, 30, 45, 35, 53, 63]
    .map((value) => ({ value }))

  const barData = data1.concat(data2)

  const data3 = [24, 30, 20, 45, 35, 53, 63, 54, 64, 50, 45, 54, 24, 30, 20, 45, 35, 53, 63, 54, 34, 50, 30, 45]
    .map((value) => ({ value, svg: { fill: Colors.loblolly } }))
  const data4 = []
    .map((value) => ({ value }))

  const barChart = data3.concat(data4)

  return (
    <BarChart
      radiusX={100}
      radiusY={100}
      data={bar ? barChart : barData}
      spacingInner={0.5}
      style={{ height: 100 }}
      svg={{ fill: Colors.zumthor }}
      yAccessor={({ item }) => item.value}
      contentInset={{ top: 30, bottom: 30 }}
    />
  )

}
export default ChartBar