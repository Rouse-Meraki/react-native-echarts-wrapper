
import {  View, StyleSheet, Dimensions } from 'react-native';
import { Echarts } from 'react-native-echarts-wrapper';

const { height:deviceHeigh,width:deviceWitdh } = Dimensions.get("window")

export default function BaseLineChart() {

    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
            }
        ]
    };


  return (
      <View style={styles.container}>
        <View style={{height:deviceHeigh/2,width:deviceWitdh}}>
            <Echarts height={deviceHeigh/2} width={deviceWitdh} option={option} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
