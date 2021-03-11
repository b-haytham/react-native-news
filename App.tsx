
import React from 'react';
import {Button, Pressable, StyleSheet, Text} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const translateY = useSharedValue(0)

  const styles = useAnimatedStyle(()=> ({
    transform: [{translateX: withSpring(translateY.value) }]
  }))

  return (
    <>
      <Animated.View style={[styles]}><Text> Hello</Text></Animated.View>
      <Pressable onPress={()=>translateY.value += 100}>
        <Text>press</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
