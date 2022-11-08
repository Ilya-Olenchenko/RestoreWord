import { Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from '../styles/settings'

export default function Settings() {
    //const [level, setLevel] = useState('');

    const save = async (item) => {
        try {
            //remove()
            //setLevel(item)
            await AsyncStorage.setItem('key_level', item);
        } catch (err) {
            alert(err);
        }
    }

    // const remove = async () => {
    //     try {
    //         await AsyncStorage.setLevel('key_level', level);
    //     } catch (err) {
    //         alert(err)
    //     } finally {
    //         setLevel();
    //     }
    // }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.word1}>
                    Складність
                </Text>
            </View>

            <View style={styles.box2}>
                <TouchableOpacity style={styles.button} onPress={() => save('0')}>
                    <Text style={styles.word}>Легко</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => save('2')}>
                    <Text style={styles.word}>Нормально</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => save('3')}>
                    <Text style={styles.word}>Важко</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.header}>
                <Text style={styles.wordSettings}>Налаштування</Text>
            </View>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </SafeAreaView>
    );
}
