import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TopTabBar from '../components/TopTabBar'
import { EntertainmentNewsScreenNavigationProps, EntertainmentNewsScreenRouteProps } from '../types/Screens'

interface EntertainmentNewsProps {
    navigation: EntertainmentNewsScreenNavigationProps
    route: EntertainmentNewsScreenRouteProps
}

const EntertainmentNews: React.FC<EntertainmentNewsProps> = () => {
    return (
        <View style={styles.container}>
            <TopTabBar />
            <Text>EntertainmentNews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default EntertainmentNews
