import React, { useEffect } from 'react';
import {
  BackHandler,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Layout from '../components/Layout';
import {
  SingleNewsPostScreenNavigationProps,
  SingleNewsPostScreenRouteProps,
} from '../types/Screens';

import * as Animatable from 'react-native-animatable';
import CancelIcon from '../components/icons/CancelIcon';
import TouchableScale from 'react-native-touchable-scale';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/core';

interface SinglePostProps {
  navigation: SingleNewsPostScreenNavigationProps;
  route: SingleNewsPostScreenRouteProps;
}



const SinglePost: React.FC<SinglePostProps> = ({route, navigation}) => {
  const article = route.params.article;
  const isFocused = useIsFocused()
  const {width: W, height: H} = useWindowDimensions()

  const width = useSharedValue(W)
  const height = useSharedValue(H)
  const translateY = useSharedValue(H)
  const borderRadius = useSharedValue(50)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      flex: 1,
      overflow: 'hidden',
      width: withTiming(width.value),
      height: withTiming(height.value),
      borderRadius: withTiming(borderRadius.value),
      transform: [{translateY: withTiming(translateY.value) }] 
    }
  })

  useEffect(()=> {
    if(isFocused) {
      translateY.value = 0
      borderRadius.value = 0
    }else{
      translateY.value = H  
      borderRadius.value = 50    
    }
  }, [isFocused])

  useEffect(() => {
    const backHandler =  BackHandler.addEventListener('hardwareBackPress', handleGoBack)
    return () => backHandler.remove()
  },[])

  const handleGoBack = () => {
    translateY.value = H  
    borderRadius.value = 50
    navigation.goBack()
    return true
  }

  return (
    <Animated.View style={animatedStyles}>
    <Layout colorLevel="1" style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={{paddingTop: article.media ? 0 : 50}}>
          <TouchableScale
            style={styles.cancelIcon}
            activeScale={0.7}
            onPress={handleGoBack}>
            <CancelIcon width={30} height={30} fill="#fff" />
          </TouchableScale>
          {article.media && (
            <Image
              source={{uri: article.media}}
              style={{width: W, height: 200}}
              resizeMode="cover"
            />
          )}
        </View>
        <View style={styles.contentContainer}>
          <Animatable.Text
            useNativeDriver
            animation="fadeInDown"
            style={styles.title}>
            {article.title}
          </Animatable.Text>
          <Layout colorLevel="4" style={styles.sectionContainer}>
            <Animatable.Text
              useNativeDriver
              animation="fadeInLeft"
              style={styles.infoText}>
              {`Source -> ${article.clean_url}`}
            </Animatable.Text>
            <Animatable.Text
              useNativeDriver
              animation="fadeInRight"
              delay={10}
              style={styles.infoText}>
              {`Author -> ${article.author || 'unknown'}`}
            </Animatable.Text>
            <Animatable.Text
              useNativeDriver
              delay={20}
              animation="fadeInLeft"
              style={styles.infoText}>
              {`Country -> ${article.country}`}
            </Animatable.Text>
          </Layout>
          <Layout colorLevel="4" style={styles.sectionContainer}>
            <Animatable.Text
              delay={30}
              useNativeDriver
              animation="fadeInUp"
              style={styles.summary}>
              {article.summary}
            </Animatable.Text>
          </Layout>
        </View>
      </ScrollView>
    </Layout>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 15,
    marginVertical: 10,
    overflow: 'hidden',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionContainer: {
    padding: 10,
    borderRadius: 15,
    marginVertical: 10,
    overflow: 'hidden',
  },
  infoText: {
    color: 'grey',
    fontStyle: 'italic',
  },
  summary: {
    color: '#fff',
  },
  cancelIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 56156131,
  },
});

export default SinglePost;
