import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TopTabBar from '../components/TopTabBar'
import { BusinessNewsScreenNavigationProps, BusinessNewsScreenRouteProps } from '../types/Screens'

interface BusinessNewsProps {
    navigation: BusinessNewsScreenNavigationProps
    route: BusinessNewsScreenRouteProps
}

const BusinessNews: React.FC<BusinessNewsProps> = () => {
    return (
        <View style={styles.container}>
            <TopTabBar />
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
