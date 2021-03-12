import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FavouriteScreen from "../screens/FavouriteScreen"
import SearchScreen from "../screens/SearchScreen"
import SettingsScreen from "../screens/SettingsScreen"
import { BottomTabNavigationParamList } from "../types/NavigationParamLists"
import NewsFlow from "./NewsFlow"

const Tab = createBottomTabNavigator<BottomTabNavigationParamList>()

const MainFlow = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={NewsFlow} />
            <Tab.Screen name='Search' component={SearchScreen} />
            <Tab.Screen name='Favourite'  component={FavouriteScreen} />
            <Tab.Screen name='Setting' component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default MainFlow