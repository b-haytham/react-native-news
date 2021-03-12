import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavouriteScreen from '../screens/FavouriteScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {BottomTabNavigationParamList} from '../types/NavigationParamLists';
import NewsFlow from './NewsFlow';

import HomeIcon from '../components/icons/HomeIcon';
import SearchIcon from '../components/icons/SearchIcon';
import FavouriteIcon from '../components/icons/FavouriteIcon';
import SettingIcon from '../components/icons/SettingIcons';
import { useAppSelector } from '../redux/store';

const Tab = createBottomTabNavigator<BottomTabNavigationParamList>();



const MainFlow = () => {
  const favouritePosts = useAppSelector(state => state.favouriteSlice.favouriteNews)
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {height: 50, backgroundColor: '#000'},
        tabStyle: {height: 50},
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={NewsFlow}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <HomeIcon height={30} width={30} fill={focused ? "#fff" : '#45494d'} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <SearchIcon height={30} width={30} fill={focused ? "#fff" : '#45494d'} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FavouriteIcon height={30} width={30} fill={focused ? "#fff" : '#45494d'} />
          ),
          tabBarBadge: favouritePosts.length > 0 ? favouritePosts.length : undefined,
          tabBarBadgeStyle: {backgroundColor: '#fff', color: '#000'}
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <SettingIcon height={30} width={30} fill={focused ? "#fff" : '#45494d'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainFlow;
