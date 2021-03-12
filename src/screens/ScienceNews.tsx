import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Layout from '../components/Layout';
import TopTabBar from '../components/TopTabBar';
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
  return (
    <Layout colorLevel="1" style={styles.container}>
      <TopTabBar activeRouteName={route.name} />
      <ScrollView>
        <Header text="Science News" isFocused={isFocused} />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScienceNews;
