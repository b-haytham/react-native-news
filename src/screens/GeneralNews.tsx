import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopTabBar from '../components/TopTabBar';
import {
  GeneralNewsScreenNavigationProps,
  GeneralNewsScreenRouteProps,
} from '../types/Screens';

interface GeneralNewsProps {
  navigation: GeneralNewsScreenNavigationProps;
  route: GeneralNewsScreenRouteProps;
}

const GeneralNews: React.FC<GeneralNewsProps> = ({}) => {
  return (
    <View style={styles.container}>
      <TopTabBar />
      <Text>GeneralNews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default GeneralNews;
