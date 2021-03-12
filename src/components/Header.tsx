import React, {useEffect} from 'react';
import {StyleSheet, Text, ViewProps} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface HeaderProps extends ViewProps {
  text: string;
  isFocused: boolean;
  scrollTranslateY: Animated.SharedValue<number>
}

const Header: React.FC<HeaderProps> = ({text, isFocused, scrollTranslateY}) => {
  const translateX = useSharedValue(-100);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  const textScale = useDerivedValue(()=> {
    return interpolate(scrollTranslateY.value, [0,50], [1, 0.3], Extrapolate.CLAMP)
  })

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value),
      transform: [
        {translateX: withTiming(translateX.value)},
        {scale: withTiming(scale.value)},
      ],
    };
  });

  const animatedTextStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale: textScale.value}, {translateY: -scrollTranslateY.value * 2}]
    }
  })

  useEffect(() => {
    if (isFocused) {
      translateX.value = 0;
      opacity.value = 1;
      scale.value = 1;
    } else {
      translateX.value = -100;
      opacity.value = 0;
      scale.value = 0.5;
    }
  }, [isFocused]);

  return (
    <Animated.View style={[styles.headerContainer, animatedStyles]}>
      <Animated.Text style={[styles.text, animatedTextStyles]}> {text} </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 15,
  },
  text: {
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default Header;
