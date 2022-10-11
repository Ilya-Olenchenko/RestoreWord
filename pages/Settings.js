import React from 'react'
import { Text, View, StatusBar, SafeAreaView } from 'react-native'
import { styles } from '../styles/settings'

export default function Settings() {
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
