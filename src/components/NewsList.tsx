import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../redux/store';
import {ArticaleType} from '../types/News';
import NewsCard from './NewsCard';

interface NewsListProps {
  articles: ArticaleType[];
  isFavouriteScreen?: boolean;
}

const NewsList: React.FC<NewsListProps> = ({articles, isFavouriteScreen}) => {
  const favouritePosts = useAppSelector(
    (state) => state.favouriteSlice.favouriteNews,
  );
  return (
    <View>
      {articles.length > 0 &&
        articles.map((ar) => {
          const isInFavourite = !!favouritePosts.find(
            (fnews) => fnews._id === ar._id,
          );
          return (
            <NewsCard
              isFavouriteScreen={isFavouriteScreen}
              isInFavourite={isInFavourite}
              key={ar._id}
              article={ar}
            />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default NewsList;
