import { useState } from 'react';
import {  FlatList, Pressable, Text, View, StyleSheet } from 'react-native';


import BaseLineChart from './examples/BasicLineChart';

export default function App() {

  const [Component,setComponent] = useState(null);

  const renderExamples = (examples:any) => {
    
    return (
       <View style={styles.container}>
        { Component && (
          <Component />
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
        onPress={() => setComponent(item.Component)}
      >
        <Text>
          {item.title}
        </Text>
      </Pressable>
    );
  }

  // return renderExample([[

  // ]]);

  return renderExamples([[BaseLineChart,'Basic Line Chart']]);
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 32
  },
});
