import { Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from '../styles/settings'
import { useNavigation } from '@react-navigation/core'

export default function Settings() {
    const navigation = useNavigation()

    const save = async (level, time) => {
        try {
            await AsyncStorage.setItem('key_level', level);
            await AsyncStorage.setItem('key_time', time);
            navigation.navigate('Main')
        } catch (err) {
            alert(err);
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.box2}>
                <TouchableOpacity style={styles.button} onPress={() => save('0', '120')}>
                    <Text style={styles.word}>Легко</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => save('1', '60')}>
                    <Text style={styles.word}>Важко</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.header}>
                <Text style={styles.wordSettings}>Налаштування</Text>
                <Text style={styles.word1}>Складність</Text>
            </View>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </SafeAreaView>
    );
}
