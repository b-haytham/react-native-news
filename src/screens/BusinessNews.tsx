import { useIsFocused } from '@react-navigation/core'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Layout from '../components/Layout'
import NewsList from '../components/NewsList'
import TopTabBar from '../components/TopTabBar'
import { useAppSelector } from '../redux/store'
import { BusinessNewsScreenNavigationProps, BusinessNewsScreenRouteProps } from '../types/Screens'

interface BusinessNewsProps {
    navigation: BusinessNewsScreenNavigationProps
    route: BusinessNewsScreenRouteProps
}

const BusinessNews: React.FC<BusinessNewsProps> = ({route}) => {
    const isFocused = useIsFocused()
    const businessNews = useAppSelector(state => state.newsSclice.data).filter(news=> news.topic === 'business')
    return (
        <Layout colorLevel='1' style={styles.container}>
            <TopTabBar activeRouteName={route.name} />
            <ScrollView style={{flex: 1, paddingHorizontal: 15}}>
                <Header text='Business News' isFocused={isFocused} />
                <NewsList articles={businessNews} />
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
