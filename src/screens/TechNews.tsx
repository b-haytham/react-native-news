import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TopTabBar from '../components/TopTabBar'
import { TechNewsScreenNavigationProps, TechNewsScreenRouteProps } from '../types/Screens'

interface TechNewsProps {
    navigation: TechNewsScreenNavigationProps
    route: TechNewsScreenRouteProps
}

const TechNews: React.FC<TechNewsProps> = () => {
    return (
        <View style={styles.container}>
            <TopTabBar />
            <Text>TechNews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default TechNews
