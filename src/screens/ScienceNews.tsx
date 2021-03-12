import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TopTabBar from '../components/TopTabBar'
import { ScienceNewsScreenNavigationProps, ScienceNewsScreenRouteProps } from '../types/Screens'

interface ScienceNewsProps {
    navigtion: ScienceNewsScreenNavigationProps
    route: ScienceNewsScreenRouteProps
}

const ScienceNews: React.FC<ScienceNewsProps> = ({route}) => {
    return (
        <View style={styles.container}>
            <TopTabBar activeRouteName={route.name} />
            <Text>ScienceNews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ScienceNews
