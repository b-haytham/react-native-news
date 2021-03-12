import { useIsFocused } from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Layout from '../components/Layout';
import TopTabBar from '../components/TopTabBar';
import {
  GeneralNewsScreenNavigationProps,
  GeneralNewsScreenRouteProps,
} from '../types/Screens';

interface GeneralNewsProps {
  navigation: GeneralNewsScreenNavigationProps;
  route: GeneralNewsScreenRouteProps;
}

const GeneralNews: React.FC<GeneralNewsProps> = ({route}) => {
  const isFocused = useIsFocused()
  return (
    <Layout colorLevel='1' style={styles.container}>
      <TopTabBar activeRouteName={route.name} />
      <ScrollView>
        <Header isFocused={isFocused} text='General News' />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default GeneralNews;
