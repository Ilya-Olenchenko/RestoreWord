import React from 'react'
import { Text, View, StatusBar, SafeAreaView } from 'react-native'
import { styles } from '../styles/game'

export default function Game() {
    return (
        <SafeAreaView>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </SafeAreaView>
    );
}
