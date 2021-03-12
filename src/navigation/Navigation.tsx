
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, StyleSheet, View } from 'react-native'
import MainFlow from './MainFlow'


const Navigation = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor='#000' animated />
            <MainFlow />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})

export default Navigation
