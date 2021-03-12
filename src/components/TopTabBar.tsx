import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import BusinessIcon from './icons/BusinessIcon';
import GeneralIcon from './icons/GeneralIcon';
import PartyIcon from './icons/PartyIcon';
import PoliticsIcon from './icons/PoliticsIcon';
import ScienceIcon from './icons/ScienceIcon';
import TechnologyIcon from './icons/TechnologyIcon';

import TouchableScale from 'react-native-touchable-scale';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useDerivedValue, withDelay, withTiming } from 'react-native-reanimated';

interface TopTabBarProps {
  activeRouteName:
    | 'General'
    | 'Politics'
    | 'Business'
    | 'Tech'
    | 'Science'
    | 'Entertainment';
  scrollTranslateY: Animated.SharedValue<number>;
}

const {width} = Dimensions.get('screen');

const TopTabBar: React.FC<TopTabBarProps> = ({activeRouteName, scrollTranslateY}) => {
  const {width: W} = useWindowDimensions()
  
  const navigation = useNavigation();

  const activeScale = useDerivedValue(()=> {
    return interpolate(scrollTranslateY.value, [0,50], [1, 1.5], Extrapolate.CLAMP)
  })

  const inactiveTranslateY = useDerivedValue(()=> {
    return interpolate(scrollTranslateY.value, [0, 100], [0, -100], Extrapolate.CLAMP)
  })

  const activeStyles = useAnimatedStyle(()=> {
    return {
      transform: [{scale: activeScale.value}]
    }
  })

  const inactiveGeneralStyles = useAnimatedStyle(()=> {
    return {
      transform: [{translateY: inactiveTranslateY.value}]
    }
  })
  const inactivePoliticsStyles = useAnimatedStyle(()=> {
    return {
      transform: [{translateY: inactiveTranslateY.value}]
    }
  })
  const inactiveBusinessStyles = useAnimatedStyle(()=> {
    return {
      transform: [{translateY: inactiveTranslateY.value}]
    }
  })
  const inactiveTechStyles = useAnimatedStyle(()=> {
    return {
      transform: [{translateY: inactiveTranslateY.value}]
    }
  })
  const inactiveScienceStyles = useAnimatedStyle(()=> {
    return {
      transform: [{translateY: inactiveTranslateY.value}]
    }
  })
  const inactiveEntertainmentStyles = useAnimatedStyle(()=> {
    return {
      transform: [{translateY: inactiveTranslateY.value}]
    }
  })

  return (
    <View style={[styles.container, {width: W}]}>
      <Animated.View style={[activeRouteName === 'General' ? activeStyles : inactiveGeneralStyles]}>
        <TouchableScale
          activeScale={0.7}
          onPress={() => navigation.navigate('General')}>
          <GeneralIcon
            style={styles.generalIcon}
            width={30}
            height={30}
            fill={activeRouteName === 'General' ? '#fff' : '#45494d'}
          />
        </TouchableScale>
      </Animated.View>
      <Animated.View style={activeRouteName === 'Politics' ? activeStyles : inactivePoliticsStyles}>
        <TouchableScale
          activeScale={0.7}
          onPress={() => navigation.navigate('Politics')}>
          <PoliticsIcon
            style={styles.politicsIcon}
            width={30}
            height={30}
            fill={activeRouteName === 'Politics' ? '#fff' : '#45494d'}
          />
        </TouchableScale>
      </Animated.View>
      <Animated.View style={activeRouteName === 'Business' ? activeStyles : inactiveBusinessStyles}>
        <TouchableScale
          activeScale={0.7}
          onPress={() => navigation.navigate('Business')}>
          <BusinessIcon
            style={styles.businessIcon}
            width={30}
            height={30}
            fill={activeRouteName === 'Business' ? '#fff' : '#45494d'}
          />
        </TouchableScale>
      </Animated.View>
      <Animated.View style={activeRouteName === 'Tech' ? activeStyles : inactiveTechStyles}>
        <TouchableScale
          activeScale={0.7}
          onPress={() => navigation.navigate('Tech')}>
          <TechnologyIcon
            style={styles.techIcon}
            width={30}
            height={30}
            fill={activeRouteName === 'Tech' ? '#fff' : '#45494d'}
          />
        </TouchableScale>
      </Animated.View>
      <Animated.View style={activeRouteName === 'Science' ? activeStyles : inactiveScienceStyles}>
        <TouchableScale
          activeScale={0.7}
          onPress={() => navigation.navigate('Science')}>
          <ScienceIcon
            style={styles.scienceIcon}
            width={30}
            height={30}
            fill={activeRouteName === 'Science' ? '#fff' : '#45494d'}
          />
        </TouchableScale>
      </Animated.View>
      <Animated.View style={activeRouteName === 'Entertainment' ? activeStyles : inactiveEntertainmentStyles}>
        <TouchableScale
          activeScale={0.7}
          onPress={() => navigation.navigate('Entertainment')}>
          <PartyIcon
            style={styles.partyIcon}
            width={30}
            height={30}
            fill={activeRouteName === 'Entertainment' ? '#fff' : '#45494d'}
          />
        </TouchableScale>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#000',
    flexDirection: 'row',
    
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
  },
  generalIcon: {},
  politicsIcon: {},
  businessIcon: {},
  techIcon: {},
  scienceIcon: {},
  partyIcon: {},
});

export default TopTabBar;
