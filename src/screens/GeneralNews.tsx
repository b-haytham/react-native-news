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

const GeneralNews: React.FC<GeneralNewsProps> = ({route}) => {
  return (
    <View style={styles.container}>
      <TopTabBar activeRouteName={route.name} />
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
