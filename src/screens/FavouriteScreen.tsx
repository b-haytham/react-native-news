import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Layout from '../components/Layout';
import NewsList from '../components/NewsList';
import { useAppSelector } from '../redux/store';
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
  const favouriteNews = useAppSelector(state => state.favouriteSlice.favouriteNews)
  return (
    <Layout colorLevel="1" style={styles.container}>
      <ScrollView style={{paddingHorizontal: 15}}>
        <Header text="Favourite News" isFocused={isFocused} />
        <NewsList isFavouriteScreen articles={favouriteNews} />
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
