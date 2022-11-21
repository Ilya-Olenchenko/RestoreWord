import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { styles } from '../styles/game'

export default function Final({ number }) {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.modalView}>
                <View>
                    <Text style={styles.modalText}>Кінець - {number}</Text>
                </View>

            </View>

            <View style={styles.backView}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.replace('Main')}>
                    <Text style={styles.backText}>В меню</Text>
                </TouchableOpacity>
            </View>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </SafeAreaView>
    );
}