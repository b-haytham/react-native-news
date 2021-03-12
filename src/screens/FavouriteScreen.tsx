import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Layout from '../components/Layout';
import {
  FavouriteScreenNavigationProps,
  FavouriteScreenRouteProps,
} from '../types/Screens';

interface FavouriteScreenProps {
  navigation: FavouriteScreenNavigationProps;
  route: FavouriteScreenRouteProps;
}

const FavouriteScreen: React.FC<FavouriteScreenProps> = () => {
  const isFocused = useIsFocused();
  return (
    <Layout colorLevel="1" style={styles.container}>
      <ScrollView>
        <Header text="Favourite News" isFocused={isFocused} />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavouriteScreen;
