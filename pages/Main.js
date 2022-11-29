import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'
import { styles } from '../styles/main'


export default function Main() {
    const navigation = useNavigation()

    const load = async () => {
        try {
            let level = await AsyncStorage.getItem('key_level')
            if (level !== null) {
                //setLevel(parseInt(level, 10));
            }
        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        load()
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
                <Image source={require("../assets/icon.png")} style={{ height: 150, width: 150 }} />
                <View style={styles.box}>
                    <TouchableOpacity style={styles.textbutton}
                        onPress={() => navigation.replace('Game')}>
                        <Text style={styles.textmain}>
                            Грати
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.textbutton}
                        onPress={() => navigation.replace('Settings')}>
                        <Text style={styles.textmain}>
                            Налаштування
                        </Text>
                    </TouchableOpacity>
                </View>
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
