import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Layout from '../components/Layout';
import {
  SearchScreenNavigationProps,
  SearchScreenRouteProps,
} from '../types/Screens';

interface SearchScreenProps {
  navigation: SearchScreenNavigationProps;
  route: SearchScreenRouteProps;
}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  return <Layout colorLevel="1" style={styles.container}></Layout>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
