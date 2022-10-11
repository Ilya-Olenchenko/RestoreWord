import React from 'react'
import { Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from '../styles/main'

export default function Main() {
    return (
        <SafeAreaView style={styles.conteiner}>
            <View style={styles.box}>
                <TouchableOpacity style={styles.textbutton}>
                    <Text style={styles.textmain}>
                        Старт
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.textbutton}>
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
