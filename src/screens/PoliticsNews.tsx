import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TopTabBar from '../components/TopTabBar'
import { PoliticsNewsScreenNavigationProps, PoliticsNewsScreenRouteProps } from '../types/Screens'

interface PoliticsNewsProps {
    navigation: PoliticsNewsScreenNavigationProps
    route: PoliticsNewsScreenRouteProps
}

const PoliticsNews: React.FC<PoliticsNewsProps> = ({route}) => {
    return (
        <View style={styles.container}>
            <TopTabBar activeRouteName={route.name} />
            <Text>PoliticsNews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PoliticsNews
