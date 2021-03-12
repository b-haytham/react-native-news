import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TopTabBar from '../components/TopTabBar'
import { BusinessNewsScreenNavigationProps, BusinessNewsScreenRouteProps } from '../types/Screens'

interface BusinessNewsProps {
    navigation: BusinessNewsScreenNavigationProps
    route: BusinessNewsScreenRouteProps
}

const BusinessNews: React.FC<BusinessNewsProps> = ({route}) => {
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

export default BusinessNews
