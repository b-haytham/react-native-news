import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Layout from '../components/Layout';
import NewsList from '../components/NewsList';
import TopTabBar from '../components/TopTabBar';
import { useAppSelector } from '../redux/store';
import {
  PoliticsNewsScreenNavigationProps,
  PoliticsNewsScreenRouteProps,
} from '../types/Screens';

interface PoliticsNewsProps {
  navigation: PoliticsNewsScreenNavigationProps;
  route: PoliticsNewsScreenRouteProps;
}

const PoliticsNews: React.FC<PoliticsNewsProps> = ({route}) => {
  const isFocused = useIsFocused();
  const politicsNews = useAppSelector(state => state.newsSclice.data).filter(news => news.topic === 'politics')
  return (
    <Layout colorLevel='1' style={styles.container}>
      <TopTabBar activeRouteName={route.name} />
      <ScrollView style={{flex: 1, paddingHorizontal: 15}}>
        <Header text="Politics News" isFocused={isFocused} />
        <NewsList  articles={politicsNews} />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PoliticsNews;
