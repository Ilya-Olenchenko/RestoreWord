import React from 'react'
import { Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { styles } from '../styles/main'

export default function Main() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <TouchableOpacity style={styles.textbutton} onPress={() => navigation.replace('Game')}>
                    <Text style={styles.textmain}>
                        Старт
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.textbutton} onPress={() => navigation.navigate('Settings')}>
                    <Text style={styles.textmain}>
                        Налаштування
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.developer}>
                Розробник Оленченко Ілля (2022)
            </Text>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </SafeAreaView>
    );
}
