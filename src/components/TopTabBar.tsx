import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {StackNavigationParamList} from '../types/NavigationParamLists';
import BusinessIcon from './icons/BusinessIcon';
import GeneralIcon from './icons/GeneralIcon';
import PartyIcon from './icons/PartyIcon';
import PoliticsIcon from './icons/PoliticsIcon';
import ScienceIcon from './icons/ScienceIcon';
import TechnologyIcon from './icons/TechnologyIcon';

import TouchableScale from 'react-native-touchable-scale';

interface TopTabBarProps {}

const {width} = Dimensions.get('screen');

const TopTabBar: React.FC<TopTabBarProps> = ({}) => {
  const navigation = useNavigation();
  const route = useRoute()
  return (
    <View style={styles.container}>
      <TouchableScale activeScale={0.7} onPress={()=> navigation.navigate('General')}>
        <GeneralIcon
          style={styles.generalIcon}
          width={30}
          height={30}
          fill="#fff"
        />
      </TouchableScale>
      <TouchableScale activeScale={0.7} onPress={()=> navigation.navigate('Politics')}>
        <PoliticsIcon
          style={styles.politicsIcon}
          width={30}
          height={30}
          fill="#fff"
        />
      </TouchableScale>
      <TouchableScale activeScale={0.7} onPress={()=> navigation.navigate('Business')}>
        <BusinessIcon
          style={styles.businessIcon}
          width={30}
          height={30}
          fill="#fff"
        />
      </TouchableScale>
      <TouchableScale activeScale={0.7} onPress={()=> navigation.navigate('Tech')}>
        <TechnologyIcon
          style={styles.techIcon}
          width={30}
          height={30}
          fill="#fff"
        />
      </TouchableScale>
      <TouchableScale activeScale={0.7} onPress={()=> navigation.navigate('Science')}>
        <ScienceIcon
          style={styles.scienceIcon}
          width={30}
          height={30}
          fill="#fff"
        />
      </TouchableScale>
      <TouchableScale activeScale={0.7} onPress={()=> navigation.navigate('Entertainment')}>
        <PartyIcon
          style={styles.partyIcon}
          width={30}
          height={30}
          fill="#fff"
        />
      </TouchableScale>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#000',
    flexDirection: 'row',
    width,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },
  generalIcon: {},
  politicsIcon: {},
  businessIcon: {},
  techIcon: {},
  scienceIcon: {},
  partyIcon: {},
});

export default TopTabBar;
