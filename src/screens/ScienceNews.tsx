import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
  ScienceNewsScreenNavigationProps,
  ScienceNewsScreenRouteProps,
} from '../types/Screens';

interface ScienceNewsProps {
  navigtion: ScienceNewsScreenNavigationProps;
  route: ScienceNewsScreenRouteProps;
}

const ScienceNews: React.FC<ScienceNewsProps> = ({route}) => {
  const isFocused = useIsFocused();
  const scienceNews = useAppSelector((state) => state.newsSclice.data).filter(
    (news) => news.topic === 'science',
  );
  const scrollTranslateY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollTranslateY.value = event.contentOffset.y;
  });
  return (
    <Layout colorLevel="1" style={styles.container}>
      <TopTabBar scrollTranslateY={scrollTranslateY} activeRouteName={route.name} />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        style={{flex: 1, paddingHorizontal: 15}}>
        <Header scrollTranslateY={scrollTranslateY} text="Science News" isFocused={isFocused} />
        <NewsList articles={scienceNews} />
      </Animated.ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScienceNews;
