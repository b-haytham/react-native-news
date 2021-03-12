import React, {useEffect} from 'react';
import {StyleSheet, Text, ViewProps} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface HeaderProps extends ViewProps {
  text: string;
  isFocused: boolean;
}

const Header: React.FC<HeaderProps> = ({text, isFocused}) => {
  const translateX = useSharedValue(-100);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value),
      transform: [
        {translateX: withTiming(translateX.value)},
        {scale: withTiming(scale.value)},
      ],
    };
  });

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
      <Text style={styles.text}> {text} </Text>
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
