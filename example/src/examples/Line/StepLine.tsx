
import {  View, StyleSheet, Dimensions } from 'react-native';
import { Echarts } from 'react-native-echarts-wrapper';

const { height:deviceHeigh,width:deviceWitdh } = Dimensions.get("window")

export default function StepLine() {

  const option = {
  title: {
    text: 'Step Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Step Start', 'Step Middle', 'Step End']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Step Start',
      type: 'line',
      step: 'start',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Step Middle',
      type: 'line',
      step: 'middle',
      data: [220, 282, 201, 234, 290, 430, 410]
    },
    {
      name: 'Step End',
      type: 'line',
      step: 'end',
      data: [450, 432, 401, 454, 590, 530, 510]
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
