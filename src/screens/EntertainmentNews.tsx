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
  EntertainmentNewsScreenNavigationProps,
  EntertainmentNewsScreenRouteProps,
} from '../types/Screens';

interface EntertainmentNewsProps {
  navigation: EntertainmentNewsScreenNavigationProps;
  route: EntertainmentNewsScreenRouteProps;
}

const EntertainmentNews: React.FC<EntertainmentNewsProps> = ({route}) => {
  const isFocused = useIsFocused();
  const entertainmentNews = useAppSelector(
    (state) => state.newsSclice.data,
  ).filter((news) => news.topic === 'entertainment');
  const scrollTranslateY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollTranslateY.value = event.contentOffset.y;
  });
  return (
    <Layout colorLevel="1" style={styles.container}>
      <TopTabBar activeRouteName={route.name} />
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={{flex: 1, paddingHorizontal: 15}}>
        <Header scrollTranslateY={scrollTranslateY} text="Entertainment News" isFocused={isFocused} />
        <NewsList articles={entertainmentNews} />
      </Animated.ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EntertainmentNews;
