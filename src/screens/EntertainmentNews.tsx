import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Layout from '../components/Layout';
import NewsList from '../components/NewsList';
import TopTabBar from '../components/TopTabBar';
import { useAppSelector } from '../redux/store';
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
  const entertainmentNews = useAppSelector(state => state.newsSclice.data).filter(news=> news.topic === 'entertainment')
  return (
    <Layout colorLevel="1" style={styles.container}>
      <TopTabBar activeRouteName={route.name} />
      <ScrollView style={{flex: 1, paddingHorizontal: 15}}>
        <Header text="Entertainment News" isFocused={isFocused} />
        <NewsList articles={entertainmentNews} />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EntertainmentNews;
