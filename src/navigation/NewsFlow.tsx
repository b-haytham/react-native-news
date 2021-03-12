import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import BusinessNews from '../screens/BusinessNews'
import EntertainmentNews from '../screens/EntertainmentNews'
import GeneralNews from '../screens/GeneralNews'
import PoliticsNews from '../screens/PoliticsNews'
import ScienceNews from '../screens/ScienceNews'
import SinglePost from '../screens/SinglePost'
import TechNews from '../screens/TechNews'
import { StackNavigationParamList } from '../types/NavigationParamLists'

const Stack = createStackNavigator<StackNavigationParamList>()

const NewsFlow = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen  name='General' component={GeneralNews} />
            <Stack.Screen  name='Politics' component={PoliticsNews} />
            <Stack.Screen  name='Business' component={BusinessNews} />
            <Stack.Screen  name='Tech' component={TechNews} />
            <Stack.Screen  name='Science' component={ScienceNews} />
            <Stack.Screen  name='Entertainment' component={EntertainmentNews} />
            <Stack.Screen  name='SinglePost' component={SinglePost} />
        </Stack.Navigator>
    )
}

export default NewsFlow