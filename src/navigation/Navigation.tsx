
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import MainFlow from './MainFlow'


const Navigation = () => {
    return (
        <NavigationContainer>
            <MainFlow />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})

export default Navigation
