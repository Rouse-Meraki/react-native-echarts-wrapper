import { useState } from 'react';
import {  FlatList, Pressable, Text, View, StyleSheet, Dimensions } from 'react-native';
import { Echarts } from 'react-native-echarts-wrapper';

// const { height:deviceHeigh,width:deviceWitdh } = Dimensions.get("window")

import BaseLineChart from './examples/Line/BasicLineChart';
import SmoothedLineChart from './examples/Line/SmoothedLineChart';
import BasicAreaChart from './examples/Line/BasicAreaChart';
import StackedLineChart from './examples/Line/StackedLineChart';
import StackedAreaChart from './examples/Line/StackedAreaChart';
import GradientStackedAreaChart from './examples/Line/GradientStackedAreaChart';
import BumpChart from './examples/Line/BumpChart';
import TemperatureChangeInTheComingWeek from './examples/Line/TemperatureChangeInTheComingWeek';
import AreaPieces from './examples/Line/AreaPieces';
import LineGradient from './examples/Line/LineGradient';
import DistributionOfElectricity from './examples/Line/DistributionOfElectricity';
import LargeScaleAreaChart from './examples/Line/LargeScaleAreaChart';
import RainfallvsEvaporation from './examples/Line/RainfallvsEvaporation';
import MultipleXAxes from './examples/Line/MultipleXAxes';
import Rainfall from './examples/Line/Rainfall';
import AreaChartwithTimeAxis from './examples/Line/AreaChartwithTimeAxis';
import FunctionPlot from './examples/Line/FunctionPlot';
import LineWithMarklines from './examples/Line/LinewithMarklines';
import LineStyleAndItemStyle from './examples/Line/LineStyleAndItemStyle';
import LogAxis from './examples/Line/LogAxis';
import StepLine from './examples/Line/StepLine';
import LineEasingVisualizing from './examples/Line/LineEasingVisualizing';
import CustomGraphicComponent from './examples/Line/CustomGraphicComponent';
import TwoValueAxesInPolar from './examples/Line/TwoValueAxesInPolar';

export default function App() {

  const [Component,setComponent] = useState(null);
  const renderExamples = (examples:any) => {
    
    return (
       <View style={styles.container}>
        { Component && (
          <Component/>
        )
        }

        <FlatList data={examples} 
          renderItem={(item) => <RenderExample Component={item.item[0]} title={item.item[1]}/>}
        />

       </View>
    );

  }
  
  const RenderExample = (item : {Component, title:string}) => {
    return (
      <Pressable
        onPress={() => setComponent(() => item.Component)}
      >
        <Text>
          {item.title}
        </Text>
      </Pressable>
    );
  }


  // const option = {
  //       xAxis: {
  //           type: 'category',
  //           data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //       },
  //       yAxis: {
  //           type: 'value'
  //       },
  //       series: [
  //           {
  //           data: [150, 230, 224, 218, 135, 147, 260],
  //           type: 'line'
  //           }
  //       ]
  //   };


  // return(
  //   <View style={styles.container}>
  //         <View style={{height:deviceHeigh/2,width:deviceWitdh}}>
  //             <Echarts height={deviceHeigh/2} width={deviceWitdh} option={option} />
  //         </View>
  //       </View>
  // );

  // return renderExample([[

  // ]]);

  return renderExamples([
    [BaseLineChart,'Basic Line Chart'],
    [SmoothedLineChart,'Smoothed Line Chart'],
    [BasicAreaChart,'Basic Area Chart'],
    [StackedLineChart,'Stacked Line Chart'],
    [StackedAreaChart,'Stacked Area Chart'],
    [GradientStackedAreaChart,'Gradient Stacked Area Chart'],
    [BumpChart,'Bump Chart'],
    [TemperatureChangeInTheComingWeek,'Temperature Change In The Coming Week'],
    [AreaPieces,'Area Pieces'],
    [LineGradient,'Line Gradient'],
    [DistributionOfElectricity,'Distribution Of Electricity'],
    [LargeScaleAreaChart,'Large Scale Area Chart'],
    [RainfallvsEvaporation,'Rainfall vs Evaporation'],
    [MultipleXAxes,'Multiple X Axes'],
    [Rainfall,'Rainfall and Flow Relationship'],
    [AreaChartwithTimeAxis,'Area Chart with Time Axis'],
    [FunctionPlot,'Function Plot'],
    [LineWithMarklines,'Line with Marklines'],
    [LineStyleAndItemStyle,'Line Style and Item Style'],
    [LogAxis,'Log Axis'],
    [StepLine,'Step Line'],
    [LineEasingVisualizing,'Line Easing Visualizing'],
    [CustomGraphicComponent,'Custom Graphic Component'],
    [TwoValueAxesInPolar,'Two Value Axes In Polar']
  ]);
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 200
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
