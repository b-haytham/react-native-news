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
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen  name='General' component={GeneralNews} options={{animationEnabled: false}} />
            <Stack.Screen  name='Politics' component={PoliticsNews} options={{animationEnabled: false}} />
            <Stack.Screen  name='Business' component={BusinessNews} options={{animationEnabled: false}}  />
            <Stack.Screen  name='Tech' component={TechNews} options={{animationEnabled: false}} />
            <Stack.Screen  name='Science' component={ScienceNews} options={{animationEnabled: false}} />
            <Stack.Screen  name='Entertainment' component={EntertainmentNews} options={{animationEnabled: false}} />
            <Stack.Screen  name='SinglePost' component={SinglePost} />
        </Stack.Navigator>
    )
}

export default NewsFlow