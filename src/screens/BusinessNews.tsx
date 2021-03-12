import { useIsFocused } from '@react-navigation/core'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Layout from '../components/Layout'
import TopTabBar from '../components/TopTabBar'
import { BusinessNewsScreenNavigationProps, BusinessNewsScreenRouteProps } from '../types/Screens'

interface BusinessNewsProps {
    navigation: BusinessNewsScreenNavigationProps
    route: BusinessNewsScreenRouteProps
}

const BusinessNews: React.FC<BusinessNewsProps> = ({route}) => {
    const isFocused = useIsFocused()
    return (
        <Layout colorLevel='1' style={styles.container}>
            <TopTabBar activeRouteName={route.name} />
            <ScrollView>
                <Header text='Business News' isFocused={isFocused} />
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default BusinessNews
