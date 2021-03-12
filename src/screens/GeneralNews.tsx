import {useIsFocused} from '@react-navigation/core';
import React, {useRef} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Header from '../components/Header';
import Layout from '../components/Layout';
import NewsList from '../components/NewsList';
import TopTabBar from '../components/TopTabBar';
import {useAppSelector} from '../redux/store';

import {
  GeneralNewsScreenNavigationProps,
  GeneralNewsScreenRouteProps,
} from '../types/Screens';

interface GeneralNewsProps {
  navigation: GeneralNewsScreenNavigationProps;
  route: GeneralNewsScreenRouteProps;
}
const GeneralNews: React.FC<GeneralNewsProps> = ({route}) => {
  const isFocused = useIsFocused();
  const generalNews = useAppSelector((state) => state.newsSclice.data).filter(
    (news) => news.topic === 'news',
  );

  const scrollTranslateY = useSharedValue(0);



  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollTranslateY.value = event.contentOffset.y;
  });

  return (
    <Layout colorLevel="1" style={styles.container}>
      <TopTabBar

        scrollTranslateY={scrollTranslateY}
        activeRouteName={route.name}
      />
      <Animated.ScrollView

        scrollEventThrottle={16}
        onScroll={scrollHandler}
        style={{flex: 1, paddingHorizontal: 15}}>
        <Header
          scrollTranslateY={scrollTranslateY}
          isFocused={isFocused}
          text="General News"
        />
        <NewsList articles={generalNews} />
      </Animated.ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GeneralNews;
