
import {  View, StyleSheet, Dimensions } from 'react-native';
import { Echarts } from 'react-native-echarts-wrapper';

const { height:deviceHeigh,width:deviceWitdh } = Dimensions.get("window")

export default function SmoothedLineChart() {

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
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
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
