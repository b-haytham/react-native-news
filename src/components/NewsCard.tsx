import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {StyleSheet, View, Image, Dimensions, Text} from 'react-native';

import {Card} from 'react-native-paper';
import TouchableScale from 'react-native-touchable-scale';
import {CARD_HEIGHT, CARD_IMAGE_HEIGHT} from '../constants';
import {
  addToFavourite,
  removeFromFavourite,
} from '../redux/favourite/favouriteSlice';
import {useAppDispatch} from '../redux/store';

import {ArticaleType} from '../types/News';
import DeleteIcon from './icons/DeleteIcon';
import LikeIcon from './icons/LikeIcon';
import RightArrowIcon from './icons/RightArrowIcon';

interface NewsCardProps {
  article: ArticaleType;
  isInFavourite: boolean;
  isFavouriteScreen?: boolean
}

const {width} = Dimensions.get('screen');

const NewsCard: React.FC<NewsCardProps> = ({article, isInFavourite, isFavouriteScreen}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation()
  return (
    <Card style={[styles.container, {height: article.media ? 300 : undefined}]}>
      {article.media && (
        <Image
          source={{uri: article.media as string}}
          style={{width: width, height: CARD_IMAGE_HEIGHT}}
          resizeMode="cover"
        />
      )}
      <Card.Content>
        <Text style={styles.title}>{article.title}</Text>
        <View style={styles.infoContainer}>
          <View>
            <Text
              style={styles.infoText}>{`Source -> ${article.clean_url}`}</Text>
            <Text style={styles.infoText}>{`Author -> ${
              article.author || 'unknown'
            }`}</Text>
            <Text
              style={styles.infoText}>{`Country -> ${article.country}`}</Text>
          </View>
          <View style={styles.iconsContainer}>
            {!isInFavourite && (
              <TouchableScale
                activeScale={0.7}
                onPress={() => dispatch(addToFavourite(article))}>
                <LikeIcon width={30} height={30} fill="#fff" />
              </TouchableScale>
            )}
            <TouchableScale activeScale={0.7} onPress={()=> navigation.navigate('SinglePost', {article})}>
              <RightArrowIcon
                width={30}
                height={30}
                fill="#fff"
                style={{marginLeft: 10}}
              />
            </TouchableScale>
            {isFavouriteScreen && (
              <TouchableScale
                activeScale={0.7}
                onPress={() => dispatch(removeFromFavourite(article._id))}>
                <DeleteIcon
                  width={30}
                  height={30}
                  fill="#fff"
                  style={{marginLeft: 10}}
                />
              </TouchableScale>
            )}
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    height: CARD_HEIGHT,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {
    color: 'grey',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
});

export default NewsCard;
